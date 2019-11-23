const Todo = require("./models/Todo");

const resolvers = {
  Query: {
    hello: async () => await "bye",
    todos: async () => await Todo.find()
  },
  Mutation: {
    createTodo: async (_, { title }) => {
      const todo = new Todo({ title });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { _id, input }) => {
      return await Todo.findByIdAndUpdate(_id, input, { new: true });
    },
    deleteTodo: async (_, { _id }) => {
      return await Todo.findByIdAndRemove(_id);
    }
  }
};

module.exports = resolvers;
