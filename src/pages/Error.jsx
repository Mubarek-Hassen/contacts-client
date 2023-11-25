import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  console.log(error);
  let message = error.message
  console.log(message);
  let status = error.status
  console.log(status);
  return (
    <div>
      <h1>OOPS!</h1>
      <h2>error status: {status}</h2>
      <h2>{message}</h2>
    </div>
  )
}

export default Error