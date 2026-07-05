import React,{useState} from 'react';
function ColorPicker(){
    const [color,setColor]=useState("pink")
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
    <div className='color-picker-section' style={{ border: `50px solid ${color}` }}>
        <h1 className='color-picker-title' style={{color:color}}>color picker</h1>
        <div className='color-box'>
            <p>selected color:{color}</p>
        </div>
        <label>select a color</label>
        <input type="color" value={color} onChange={handleColorChange}></input>
    </div>
    )
}
export default ColorPicker