import { useMutation } from "@apollo/client";
import SET_HELLO from "../mutations/helloMutation";

export default function MessageMutation() {
  const [setHello, { data }] = useMutation(SET_HELLO);

  const handleClick = () => {
    setHello({ variables: { message: "" } });
  };

  return (
    <>
      <button onClick={handleClick}>Send message</button>
      {data && (
        <ul>
          <li>{data.setHello}</li>
        </ul>
      )}
    </>
  );
}
