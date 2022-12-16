import React , { useState } from "react";

function App() {

   const [result, setResult] = useState('567') ; 

   const handleClick = (e)=>{
       setResult(result.concat(e.target.name)) ; 
   }

   const clear = ()=>{
    setResult('') ; 
   }

  const calculate = ()=>{
    try {
      var trimmed = result.replace(/\b0+/g, "");
      setResult(eval(trimmed).toString()) ; 
    } catch (error) {
      setResult("Error") ; 
      console.log("Error");
    }
   
  }
   
  const backspace = ()=>{
    const res =  result.slice(0 , -1) ; 
    setResult(res) ; 
  }

  const addPositiveNegative = ()=>{
    if(result.charAt(0) === '-'){
     let res = result.substring(1) ; 
     setResult(res) ; 
    }else{
      let char = '-' ; 
      setResult(char.concat(result)) ; 
    }
  }


  return (
    <div className="App">
        <div className="container">
             <form>
                <input type="text" value={result} />
             </form>
              <div className="key">
                       <button className="highlight" onClick={backspace}>C</button>
                       <button className="highlight" name="" onClick={addPositiveNegative}>+/-</button>
                       <button className="highlight" name="%" onClick={handleClick}>%</button>
                       <button className="highlight" name="/" onClick={handleClick}>/</button>
                       <button name="7" onClick={handleClick}>7</button>
                       <button name="8" onClick={handleClick}>8</button>
                       <button name="9" onClick={handleClick}>9</button>
                       <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                       <button name="4" onClick={handleClick}>4</button>
                       <button name="5" onClick={handleClick}>5</button>
                       <button name="6" onClick={handleClick}>6</button>
                       <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                       <button name="1" onClick={handleClick}>1</button>
                       <button name="2" onClick={handleClick}> 2</button>
                       <button name="3" onClick={handleClick}>3</button>
                       <button className="highlight" name="+" onClick={handleClick}>+</button>
                       <button name="" onClick={clear}>clr</button>
                       <button name="0" onClick={handleClick}>0</button>
                       <button name="." onClick={handleClick}>.</button>
                       <button className="highlight" onClick={calculate}>=</button>
              </div>
        </div>
    </div>
  );
}

export default App;
