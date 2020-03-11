# Bucket List API

## Set Up
To run locally: `npm run server`

## Dependencies

- [express-api-template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template/)
<!-- - [dotenv](https://github.com/motdotla/dotenv)
- [aws-sdk](https://www.npmjs.com/package/aws-sdk)
- [uuid](https://www.npmjs.com/package/uuid)
- [mime-type](https://www.npmjs.com/package/mime-types)
- [multer](https://github.com/expressjs/multer) -->

## Set Up

- `npm install` dependencies
- `npm run server` start express server

<!-- ### `.env` Setup

```
AWS_ACCESS_KEY_ID=???
AWS_SECRET_ACCESS_KEY=???
``` -->

## ERD

User -|-< listItems

| listItems   |             |
| ----------- | ----------- |
| id          | primary key |
| title       | string      |
| description | string      |
| owner       | foreign key |
| completed   | boolean     |

## Planning
