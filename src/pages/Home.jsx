import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Welcome to i-Contact</h1>
      <h2>Keep your contacts with you on the go.</h2>
      <Link to="/auth?mode=login">Get Started!</Link>
    </div>
  )
}

export default Home