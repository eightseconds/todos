const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
require("dotenv/config");

const startServer = async () => {
  const PORT = process.env.PORT || 5000;

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  await mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("connected to mongoDB"))
    .catch(err => console.log(err));

  app.listen(PORT, () =>
    console.log(
      `App is running on https://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

startServer();