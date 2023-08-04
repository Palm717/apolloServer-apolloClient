import { gql } from "@apollo/client";

const GET_HELLO = gql`
  query getHello {
    hello
  }
`;

export default GET_HELLO;
