

const Button = ({text}) => {

  return (
    <button className="bg-black p-4 text-white" style={{letterSpacing: '2px', fontFamily: "sans-serif"}}>
        {text}
    </button>
  )
}

export default Button
