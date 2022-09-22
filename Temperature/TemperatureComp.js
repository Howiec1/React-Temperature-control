import React, {Component, useState} from "react"
import "./Temperature.css"

const TemperatureComp=() => {
    const [value,setValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold")

    const IncrementUp= ()=> {
        const newTemperature = value+1 
        setValue(newTemperature);

        if (newTemperature > 35 ) {
            setValue(35)
        }
        if(newTemperature >= 15){
            setTemperatureColor("hot")
        }
    };
    const IncrementDown= ()=> {
        const newTemperature = value-1 
        setValue(newTemperature);
        if (newTemperature <0 ) {
            setValue(0)
        }
        if(newTemperature < 15){
            setTemperatureColor("cold")
        }
    };

    return (
        <div className="app-container">
            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`}>{value}°C</div> 
            </div>
            <div className="button-container">
                <button onClick={() => IncrementUp()}>+</button>
                <button onClick={() => IncrementDown()}>-</button>
                </div>
		</div>
	);
};

export default TemperatureComp