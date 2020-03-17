# Bucket List API: An API supporting the Bucket List web app

The Bucket List API stores the user authentication and bucket list content data
for users of the Bucket List web app.


## Important Links

- [Bucket List Client Repo](https://github.com/T-hatSquad/bucket-list-client)
- [Deployed API](https://gentle-ocean-46464.herokuapp.com/)
- [Deployed Client](https://t-hatsquad.github.io/bucket-list-client/)


## Set Up

- [GA Express-API-template](https://git.generalassemb.ly/ga-wdi-boston/express-api-template/)
- Install dependencies: `npm install`
- Start Express server: `npm run server`


## Technologies

- MongoDB
- Mongoose
- Express
- Passport
- Node.js


## ERD

User -|--< listItems

| listItems   |             |
| ----------- | ----------- |
| id          | primary key |
| title       | string      |
| description | string      |
| owner       | foreign key |
| completed   | boolean     |
| latitude    | number      |
| longitude   | number      |


## Planning and Development Story

Planning for the Bucket List API began with the ERD. After setting up our Express
API template, we began using kanban on GitHub to lay out the steps for developing
our app. Frequently using the Teletype feature of Atom, we employed mob
programming for most of our back-end development process: setting up our
our schema, model, and CRUD routes and actions. We tested our routes with Postman
before and after deploying to Heroku.

After we were satisfied that we had met our requirements for the minimum viable
product on day two of development, we added longitude and latitude resources to
support our map feature, which displays a map with pins for location-based
bucket list items.


## Unsolved Problems and Future Goals

- There are currently no substantial problems on the back-end, however we would
  certainly like to expand the map feature, which might entail setting up
  additional resources for holding different types of location data.
- Another feature we would like to add to the app is the ability to upload a
  picture upon completing a bucket list item. This would require an additional
  resource for the image URL and we would probably use AWS S3 to host the images.


### Authors

Bucket List API was developed by Raden Abdul Rahman, Avery Burne, Martin Langer,
and Jonathan McCoy.
