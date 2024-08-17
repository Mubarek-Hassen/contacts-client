

const Button = ({children, ...props}) => {

  const btnStyleClasses = "rounded mx-4 p-2 font-semibold text-emerald-400 bg-slate-900 hover:text-rose-600 hover:italic hover:bg-white "

  return (
    <button  {...props} className={btnStyleClasses}>{children}</button>
  )
}

export default Button