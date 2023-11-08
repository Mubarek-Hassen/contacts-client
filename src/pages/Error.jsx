import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  
  return (
    <div></div>
  )
}

export default Error