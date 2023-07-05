const Chalange = () => {

  const num1 = 10;
  const num2 = 20;

    return (
        <div className="chalange">
            <h1>valores: {num1} + {num2} = {num1+num2}</h1>
            <button onClick={()=> console.log(num1 + num2) } >clique aqui! </button>
        </div>
    )
}

export default Chalange;