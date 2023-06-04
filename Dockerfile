FROM node:16-alpine

WORKDIR /usr/app

# first copy just the package json
COPY package.json ./

# install dependencies
RUN yarn

# copy the entire project
COPY . .

# build
RUN yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
