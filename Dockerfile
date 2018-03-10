# ---- Base ----
FROM node:carbon as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install & set aside production dependencies
RUN npm install --only=production
RUN cp -R node_modules prod_node_modules

# Install devDependencies
RUN npm install


# ---- Test ----
FROM base AS test
COPY . .
RUN npm test
RUN npm run coverage


# ---- Release ----
FROM base AS release

# Pull only prod dependencies
COPY --from=base /usr/src/app/prod_node_modules ./node_modules
# Pull source
COPY server.js .
COPY jwt/* ./jwt/

# Start app
EXPOSE 8080
CMD [ "npm", "start" ]
