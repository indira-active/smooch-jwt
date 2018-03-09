[![Build Status](https://travis-ci.com/indira-active/smooch-jwt.svg?token=s8nDqBPzyxfbb3fVZTFy&branch=master)](https://travis-ci.com/indira-active/smooch-jwt)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b255419a3acc43f1aafb5f0bf2c8a94f)](https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=indira-active/smooch-jwt&amp;utm_campaign=Badge_Grade)

# smooch-jwt
Is a node.js service that provides JWT authentication for live chat support on indiraactive.com via the Smooch.io platform.

# Environment
Create a .env file with the following variables set:  

    KEY_ID1  
    SECRET1

# Build local
    docker-compose build
     # Note this will be cached. Re-run build or add --build to compose up commands to rebuild.

# Test local
    docker-compose -f docker-compose-test.yml up
    # Use -d to detach and run in background

# Run local
    docker-compose up 
    # Use -d to detach and run in background
