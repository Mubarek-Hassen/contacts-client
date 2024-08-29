

const Button = ({children, ...props}) => {

  const btnStyleClasses = "rounded m-4 p-2 font-semibold text-slate-200 bg-slate-800 hover:text-rose-600 hover:italic hover:bg-white "

  return (
    <button  {...props} className={btnStyleClasses}>{children}</button>
  )
}

export default Button