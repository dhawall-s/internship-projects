
import { useState } from "react";


function Secondcomp(){
    const [name , setName]=useState("spiderman")
     
function changeherofun(){
    console.log("CheckTest");
    setName("shakti man");
}    
    return(
        <>
        <h1>hi how are you</h1>
        
        my name is {name}

        <button onClick={changeherofun}>change hero</button>
        </>
    );
}
export default Secondcomp;

