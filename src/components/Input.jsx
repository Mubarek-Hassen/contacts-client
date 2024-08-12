

const Input = ({label, error, ...props}) => {
  

  let labelClasses = "block text-xl text-left "
  let inputClasses = " border-2 border-black "



  if(error){
    labelClasses += " text-red-500 "
    inputClasses += " border-2 border-red-700 bg-red-200 "
  }

  return (
    <div className="mt-4 mb-2" >
      <label htmlFor={label} className={labelClasses}>{label}</label>
      <input {...props} className={inputClasses} />
    </div>
  )
}

export default Input