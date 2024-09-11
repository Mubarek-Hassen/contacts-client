
import { useRouteError } from "react-router-dom"
import Header from "../components/Header";

function Error() {
  const error = useRouteError()
  console.log(error);
  let status = error.status
  console.log(status);
  let message = error.data.message
  console.log(message);
  

  return (
    <div>
      <Header />
      <h1>OOPS!</h1>
      <h2>error status: {status && status}</h2>
      <h2>error message: {message && message}</h2>
    </div>
  )
}

export default Error