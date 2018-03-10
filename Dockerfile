# ---- Dependencies ----
FROM node:carbon as dependencies

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
FROM dependencies AS test
COPY . .
RUN npm test


# ---- Release ----
FROM test AS release

# Pull only prod dependencies
COPY --from=depedencies /usr/src/app/prod_node_modules ./node_modules

# Start app
EXPOSE 8080
CMD [ "npm", "start" ]
