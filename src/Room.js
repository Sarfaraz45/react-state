import React, {useState} from 'react';
import './Room.css'



function Room() {
    let [isLit, setLit] = useState(false);
    let [temp, setTemp] = useState(72);
    
    function updateButton() {
        console.log("Button Clicked");
        setLit(true);
        

    }
    
    // function updateAge() {
        
    //     setAge(++age);

    // }

    const increaseTemp = ()=>{
      setTemp(++temp)
    }
  return (
    <div className={`room ${isLit? "Lit":"dark"}`} id="cen">
    Hello World! From my Room: Lit = {isLit ? "Lit" : "dark"}
    <br />
    Room Temperature = {temp}
    <br />
    <button className="button" onClick = {updateButton}> ON</button>
    <button className="button" onClick = {function(){
      setLit(false)
    }}> OFF</button>
    <br />
    <button className="button" onClick = {increaseTemp}> Increase Temperature</button>
    <button className="button" onClick = {()=>setTemp(--temp)}> Decrease Temperature</button>
    </div>
  );
}

export default Room;
