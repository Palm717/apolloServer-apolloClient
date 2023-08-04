const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { root, schema } = require("./schema/schema");
const PORT = 5000;
const cors = require("cors");

const app = express();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Running graph on server at http://localhost:${PORT}`);
});
