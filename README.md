[![CircleCI](https://circleci.com/gh/indira-active/smooch-jwt.svg?style=svg&circle-token=9ffe33b2fb5be376d47bcd0bd914a84e11c3ef3d)](https://circleci.com/gh/indira-active/smooch-jwt)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b255419a3acc43f1aafb5f0bf2c8a94f)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=indira-active/smooch-jwt&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/indira-active/smooch-jwt/branch/master/graph/badge.svg?token=08UPViGYsf)](https://codecov.io/gh/indira-active/smooch-jwt)

# smooch-jwt
Is a node.js service that provides JWT authentication for live chat support on indiraactive.com via the Smooch.io platform.

# Environment
Dependencies:
	npm
	docker
	docker-compose

Create a .env file with the following variables set:  

    KEY_ID1  
    SECRET1
    CODECOV_TOKEN  # Only required if building Dockerfile locally


# Development
    # Install dependencies & devDependencies
    npm install
    # Start server
    npm start
    # Run tests
    npm test
    # Check test coverage
    npm run coverage


# Production
## Build & test local
    docker-compose build
    # Note subsequent builds will be cached, add --no-cache to rebuild from sctatch.


## Run local
    docker-compose up 
    # Use -d to detach and run in background
    # Note subsequent runs will re-use the image, add --build to rebuild image. 
    
