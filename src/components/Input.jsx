

const Input = ({label, amIError, ...props}) => {
  

  let labelClasses = "block text-xl  "
  let inputClasses = " border-2 border-black text-center  h-10 "



  let error = false

  if(amIError){
  if(amIError.includes(label.toLowerCase())){
    error = true
  }

  if(error){
    labelClasses += " text-red-700 "
    inputClasses += " border-2 border-red-700 bg-red-200 "
  }
  }
  return (
    <div className="mt-4 mb-2" >
      <label htmlFor={label} className={labelClasses}>{label}</label>
      <input {...props} placeholder={"Enter "+label} className={inputClasses} />
    </div>
  )
}

export default Input