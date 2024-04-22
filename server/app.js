
const express = require("express");
const morgan = require('morgan')
const cors = require("cors");
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { GraphQLError } = require('graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 3008;
const app = express();

const logger = morgan('combined', {
  stream: {
    write: (message) => console.log(`\x1b[34m${message}\x1b[0m`)
  }
});
app.use(logger);

app.use(cors());
app.use("", express.static("./public"));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
    onlyPostMethod: true,
  })
);

app.use((err, req, res, next) => {
  if (err instanceof GraphQLError) {
    return res.status(err.statusCode || 500).json({ errorslin: [err] });
  }
  res.status(400).send("Unknow Error", err);
});


app.listen(port, "127.0.0.1", () => {
  console.log("api server running at http://127.0.0.1:3008");
});
