# Dockerfile for production.
FROM node:10.10.0-alpine

ENV YARN_VERSION 1.12.1

# Download and install curl.
RUN apk --no-cache add curl

# Download and install Yarn.
RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
    && tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
    && ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
    && rm yarn-v$YARN_VERSION.tar.gz

# Create app directory.
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files for all workspaces.
RUN mkdir client server
COPY package.json yarn.lock ./
COPY client/package.json ./client/
COPY server/package.json ./server/

# Install app dependencies.
RUN yarn install --prod && yarn cache clean

# Bundle app source with the container, and generate a production build.
COPY . .
RUN yarn build

CMD [ "yarn", "start" ]
