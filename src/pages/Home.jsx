import { Link } from "react-router-dom"
import {  getAuthToken  } from "../util/auth"


function Home() {
  const token = getAuthToken()

  return (
    <section className=" max-w-fit flex justify-center flex-col m-auto my-20">
      <h1 className="text-4xl my-8 tracking-widest font-semibold italic font-serif">Welcome to i-Contact.</h1>
      <h2 className="text-3xl my-8 tracking-wide font-semibold italic font-serif ">Keep your contacts with you on the go.</h2>
      <Link className="w-fit text-center my-8 border-black border-2 p-2 m-auto text-slate-200 hover:text-slate-900 bg-slate-800 hover:bg-slate-100 rounded" method="get" to={token ? "/contacts":"/auth?mode=login"}>Get Started!</Link>
    </section>
  )
}
export default Home