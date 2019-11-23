const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String!
    todos: [Todo!]!
  }

  type Todo {
    id: ID!
    title: String!
  }

  input TodoInput {
    title: String!
  }

  type Mutation {
    createTodo(title: String!): Todo!
    updateTodo(_id: ID!, input: TodoInput): Todo!
    deleteTodo(_id: ID!): Todo!
  }
`;

module.exports = typeDefs;
