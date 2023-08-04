const { buildSchema } = require("graphql");

const schema = buildSchema(`
type Query {
    hello: String
}

type Mutation {
  setHello(message: String): String
}
`);

const root = {
  hello: () => {
    return "Hello from the back end ";
  },

  setHello: ({ message }) => {
    return message;
  },
};

module.exports = { root, schema };
