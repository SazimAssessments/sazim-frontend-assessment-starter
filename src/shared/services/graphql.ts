import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql", // Replace with your GraphQL endpoint, Better to use .env
  cache: new InMemoryCache(),
});

export const EXAMPLE_QUERY = gql`
  query ExampleQuery {
    example {
      id
      name
    }
  }
`;
