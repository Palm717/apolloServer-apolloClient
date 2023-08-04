import { gql } from "@apollo/client";

const SET_HELLO = gql`
  mutation SetHello($message: String!) {
    setHello(message: $message)
  }
`;

export default SET_HELLO;
