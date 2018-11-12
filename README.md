# Weather app

A simple responsive weather app for displaying weather data for various locations
in the form of cards. The design of the app tries to be as minimalistic as possible,
keeping out the clutter from the main view. Cards can be expanded so as to show
the hourly and daily weather data.

## Demo

![Demo](https://user-images.githubusercontent.com/30660843/48339321-f6313f80-e68d-11e8-8b7a-13416da7525d.gif)

## Getting Started

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
