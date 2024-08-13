

const Wrapper = ({children}) => {
  return (
    <div className="bg-amber-600 flex justify-center items-center flex-col  border-black border-2 my-12 w-3/4 m-auto p-4 min-h-96 ">
      {children}
    </div>
  )
}

export default Wrapper