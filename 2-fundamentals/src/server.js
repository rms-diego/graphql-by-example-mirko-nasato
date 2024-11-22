import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./graphql/typedefs.js";
import { resolvers } from "./graphql/resolvers.js";

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, { port: 3000 });
  console.log(`Server is running at ${url}`);
}

main();
