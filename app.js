const express = require("express");
require("dotenv").config();

//tells express how to forward requests onto graphql
const graphqqlHTTP = require("express-graphql");
const schema = require("./schema/schema");

/// SET UP A DATABASE
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("CONNECTED TO DB");
});

//
//

const app = express();

//show schema telling how to deal with querues
app.use(
  "/graphql",
  graphqqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listenong on 4000");
});
