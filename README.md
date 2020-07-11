# Weather app

![Build & Deploy](https://github.com/mohitsakhuja/weather-app/workflows/Build%20&%20Deploy/badge.svg)

A simple responsive weather app for displaying weather data for various locations
in the form of cards. The design of the app tries to be as minimalistic as possible,
keeping out the clutter from the main view. Cards can be expanded so as to show
the hourly and daily weather data.

## Demo

![Demo](https://user-images.githubusercontent.com/30660843/48339321-f6313f80-e68d-11e8-8b7a-13416da7525d.gif)

## Getting Started (Development)

These instructions will get you a copy of the project up and running on your
local machine for development.

### Prerequisites

You will need the following, before running the project:

- [Node](https://nodejs.org/en/) v10.10.0
- [Yarn](https://yarnpkg.com/en/) v1.12.1
- [Dark Sky API key](https://darksky.net/dev)
- [Here Maps API key and App code](https://developer.here.com/)

The version numbers for `Node` and `Yarn` are important as they ensure that the
changes due to node/yarn updates do not break the app. You can use [NVM](https://github.com/creationix/nvm)
to install multiple versions of Node.

### Installing

Once you have installed and obtained all the prerequisites, now it's time to set
up your local development environment.

First, clone the project.

```bash
$ git clone https://github.com/mohitsakhuja/weather-app.git
Cloning into 'weather-app'...
```

Now, go into the `server` directory and create a file named `.env.development.local`
with the following content:

```
HERE_MAPS_API_ID="YOUR HERE MAPS API ID"
HERE_MAPS_APP_CODE="YOUR HERE MAPS APP CODE"
DARKSKY_API_KEY="YOUR DARK SKY API KEY"
```

Do not forget to substitute the appropriate values into that file.

Once done, come back into the root directory for the project and run:

```bash
$ yarn install
...
```

This will install all of the dependencies for the project, and might take a while.
After it is complete, run the project by executing the following in the project
root:

```bash
$ yarn start:dev
yarn run v1.12.1
...
```

This will start the development server. You can open the app in your browser by
visiting `http://localhost:3000`. And the API server will be running on port `3001`
if no other port was specified in the environment.

## Building for Production (using Docker)

The app has been deployed to production using Docker. In order to deploy a
production build, here's what you'll need to do:

- Clone this repository.
- Repeat the same steps as above for creating an environment file, with the
  difference that this time you'll need to create a `.env.production.local`
  file instead of a `.env.development.local` file, in the `server` directory.
- Have [Docker](https://www.docker.com/) installed and running on your system.
- Run the following command from the root of this repository to build the docker
  image.

  ```bash
  $ docker build -t <docker_image_name> .
  Sending build context to Docker daemon   6.92MB
  Step 1/12 : FROM node:10.10.0
  ...
  ```

  This will take a while.

- Once that completes, run the image as container by running:

  ```bash
    $ docker run -d -p 3001:3001 <image_name_you_gave>
    ...
  ```

  This too will take a while. You can check the progress by doing:

  ```bash
  $ docker container ls     # Get the name (or id) of the container.
  $ docker logs <name or id of the container>
    ...
    'Weather App' server listening on port: 3001
  ```

  Once you see that last line `'Weather App' server listening on port: 3001`, then
  you can visit `http://localhost:3001` in your browser to view the production build.

## Built With

- [React](https://reactjs.org/) - Client side rendering
- [Redux](https://redux.js.org/) - Client side state management library
- [Express](https://expressjs.com/) - Handling requests

## Contributing

For contributing guidelines, go through [CONTRIBUTING](.github/CONTRIBUTING.md).

## Authors

Full list of contributors and maintainers is available [here](.github/CONTRIBUTORS.md).

## License

This project is licensed under GPL v3 - See the [LICENSE](LICENSE) file for
details.

## Acknowledgements

- Thanks to Dark Sky for providing [Skycons](https://github.com/darkskyapp/skycons),
  over which we created a wrapper to make it work with React.
- Thanks to [Freepik](https://www.flaticon.com/) for providing static icons.
