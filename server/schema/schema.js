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
    return "Hello World";
  },

  setHello: ({ message }) => {
    return "Hello from the backend";
  },
};

module.exports = { root, schema };
