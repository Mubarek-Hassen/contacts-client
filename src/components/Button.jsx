

const Button = ({children, ...props}) => {

  const btnStyleClasses = "rounded mx-8 my-2 p-2 font-semibold text-emerald-600 bg-slate-900 hover:text-rose-600 hover:italic hover:bg-white"

  return (
    <button {...props} className={btnStyleClasses}>{children}</button>
  )
}

export default Button