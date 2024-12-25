const typeDefs = `#graphql
  ${require("fs").readFileSync("src/graphql/schema.graphql", "utf8")}
`;

export default typeDefs;
