[![CircleCI](https://circleci.com/gh/indira-active/smooch-jwt.svg?style=svg&circle-token=9ffe33b2fb5be376d47bcd0bd914a84e11c3ef3d)](https://circleci.com/gh/indira-active/smooch-jwt)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b255419a3acc43f1aafb5f0bf2c8a94f)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=indira-active/smooch-jwt&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/indira-active/smooch-jwt/branch/master/graph/badge.svg?token=08UPViGYsf)](https://codecov.io/gh/indira-active/smooch-jwt)
[![Known Vulnerabilities](https://snyk.io/test/github/indira-active/smooch-jwt/badge.svg)](https://snyk.io/test/github/indira-active/smooch-jwt)

# smooch-jwt
Is a node.js service that provides JWT authentication for live chat support on indiraactive.com via the Smooch.io platform.

# Environment
Dependencies:  

    npm
    docker
    docker-compose  

| Variable                | Description |
|-------------------------|-------------|
| **KEY_ID** `required to run` | Smooch.io App credentials go/smooch-secrets |
| **SECRET** `required to run` | Smooch.io App credentials go/smooch-secrets |
| **CODECOV_TOKEN** `required to build docker image local` | Token to submit coverage results after tests pass go/jwt-codecov-token |

    # Create an copy .env file
    cp .env.example .env

    # Edit file to add applicable variables
    # Then Set enviorment variables locally
    source ./.env


# Development
    # Install dependencies & devDependencies
    npm install

    # Start server
    npm start

    # Run tests
    npm test

    # Check test coverage
    npm run coverage
    
    # Check vulnerabilities
    npm run scan


# Production
## Build & test local
    docker-compose build
    # Note subsequent builds will be cached, add --no-cache to rebuild from sctatch.


## Run local
    docker-compose up 
    # Use -d to detach and run in background
    # Note subsequent runs will re-use the image, add --build to rebuild image. 
    
