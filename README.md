# Prerequisites
- Docker
- Node.js

# Setup
- Install dependecies `npm install`
- Start database `sh src/scripts/start-db.sh`
- .env file is added in source control for easy demo purpose

# Using the app
- Run app `npm run start`

## Create a new Deck
- POST localhost:3000
- body
```
{
    "type": "FULL" | "SHORT",
    "shuffled": boolean
}
```
## Open a Deck
- GET localhost:3000/:deckId
## Draw a Card
- PUT localhost:3000/:deckId
- body
```
{
    "action": "DRAW",
    "count": number
}
```

# Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```