// Import necessary hooks from Apollo Client for interacting with GraphQL
import { useMutation, useQuery } from "@apollo/client";
// Import useState from React for managing local component state
import { useState } from "react";
// Import the SET_HELLO mutation
import SET_HELLO from "../mutations/helloMutation";
// Import the GET_HELLO query
import GET_HELLO from "../queries/helloQuery";

// Define MessageMutation component
export default function MessageMutation() {
  // Define localMessage state to control the visibility of data
  const [localMessage, setLocalMessage] = useState("");

  // useMutation returns a tuple where the first element is a mutate function
  // that you can call at any time to execute the mutation,
  // and the second element is a result object that contains loading and error state,
  // as well as the return value from the mutation.
  const [setHello, { data: setHelloData }] = useMutation(SET_HELLO);

  // useQuery is a hook that fetches data in the background when the component renders
  const { data: getHelloData } = useQuery(GET_HELLO);

  // Define handleClick function which is called when "Send message" button is clicked
  const handleClick = () => {
    const message = "hello from the front end ";
    // Set local message to the sent message
    setLocalMessage(message);
    // Invoke setHello mutation with the required message variable
    setHello({ variables: { message: message } });
  };

  // Define handleRemove function which is called when "Remove message" button is clicked
  const handleRemove = () => {
    // Set local message to empty string, "removing" the message
    setLocalMessage("");
  };

  const styles = {
    listStyleType: "none",
  };
  // Component return statement
  return (
    <>
      {/* Send message button which calls handleClick function when clicked */}
      <button onClick={handleClick}>Send message</button>
      {/* Remove message button which calls handleRemove function when clicked */}
      <button onClick={handleRemove}>Remove message</button>
      {/* If localMessage is not empty and setHelloData is truthy, display mutation result */}
      {localMessage && setHelloData && (
        <ul style={styles}>
          <li>{setHelloData.setHello}</li>
        </ul>
      )}
      {/* If localMessage is not empty and getHelloData is truthy, display query result */}
      {localMessage && getHelloData && (
        <ul style={styles}>
          <li>{getHelloData.hello}</li>
        </ul>
      )}
    </>
  );
}
