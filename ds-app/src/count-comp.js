
import { useState } from "react";

function Countcomp()
{
    const [count, setCount] = useState(0);
//    const[heading,setHeading]=useState("use it");
    // const increment = () => {
    //   setCount(count + 1);
    // };
    // const decrement = () => {
    //     setCount(count - 1);
    // };
    function increment (){
       if(count<10){
        setCount(count+1);    
    }
    else{
        setCount("u have reached 😂");
    }
    }
    function decrement(){
        if(count>0)
        {
          setCount(count-1);
          
        }
        else{
            setCount("no limit");
            setCount(count===0);  
            
        }
    }
    return(
        <>
        <h1>this is component</h1>
        
     <p>Counter: {count}</p>
        <button onClick={increment} className="subbtn">increase</button>
        <button  onClick={decrement}  className="btn" >decrease</button>
    
    </>
    );
    }
export default Countcomp;
