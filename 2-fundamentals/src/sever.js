const typeDefs = `#graphql
  type Query {
    greeting: String
  }

  type foo {
    bar: String
  }
`;

const resolvers = {
  Query: {
    greeting: () => "Hello World!",
  },
  foo: {
    bar: () => "bar",
  },
};
