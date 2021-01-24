# Simple Api Mock
This repo is for front-end development, after you make api docs with backend, you need to mock api on development before going to production.

## How It Works ?
This application run above json-server (https://www.npmjs.com/package/json-server) all of configuration is still same with it.

### Database and Scheme
To make fake json for db, I use site json-generator (https://www.json-generator.com/) to make random json. The scheme on scheme.json and the db on root.json.

Step to create fake db :
1. Build your own scheme
2. Generate random json with your scheme on json-generator (https://www.json-generator.com/)
3. Copy all result to **root.json**

## How About Authorization ?
Because json-server running on express, you can easily add middleware. For authorization you don't need JWT, for example I create middleware to check if request header has Authorization header or not. You can learn more about middleware in https://expressjs.com/en/guide/using-middleware.html