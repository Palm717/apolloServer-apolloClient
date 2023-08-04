import { useMutation, useQuery } from "@apollo/client";
import SET_HELLO from "../mutations/helloMutation";
import GET_HELLO from "../queries/helloQuery";

export default function MessageMutation() {
  const [setHello, { data: setHelloData }] = useMutation(SET_HELLO);
  const { data: getHelloData } = useQuery(GET_HELLO);

  const handleClick = () => {
    setHello({ variables: { message: "hello from the front end " } });
  };

  return (
    <>
      <button onClick={handleClick}>Send message</button>
      {setHelloData && (
        <ul>
          <li>{setHelloData.setHello}</li>
        </ul>
      )}
      {getHelloData && (
        <ul>
          <li>{getHelloData.hello}</li>
        </ul>
      )}
    </>
  );
}
