import {useState} from "react"
import {CalcValues, LastTwoCalcValues} from "../CalcValue"
import "./calculator.css"

const Claculator = () => {
    const [calc, setCalc] = useState("")
    const [answer, setAnswer] = useState("")
    const [power, setPower] = useState("ON")
    const [disable, setDisable] = useState(false)


    const handleClick = (e:any) => {
        setCalc(calc.concat(e.target.value))
    }

    const evaluateCalc = () => {
        Math.round(Number(setAnswer(eval(calc))))
    }

    const controlPower = () => {
       if(power === "ON") {
        setPower("OFF")
        setDisable(true) 
        setCalc("")
        setAnswer("")
       } else {
        setPower("ON")
        setDisable(false) 
       }
    }

    const clearValue = () => {
        setCalc("")
        setAnswer("")
    }

  return (
    <>
        <h1>Calculator</h1>

        <div className="calculator">
            <div className="screen">
                <li>{calc}</li>
                <li>{answer}</li>
            </div>
            <div className="calc-btn">
                <input 
                 type="button"
                 className="power" 
                 value={power} 
                 onClick={controlPower}
                />

                <input
                 type="button"
                 className="ac" 
                 value="AC" 
                 onClick={clearValue}
                 disabled={disable}
                />
                {
                    CalcValues && CalcValues.map((val) => (
                        <input 
                        type="button"
                        value={val.value} 
                        key={val.id} 
                        onClick={handleClick}
                        disabled={disable}
                        />
                    ))
                }
            </div>
            <div className="last-three-btns">
            {
                LastTwoCalcValues && LastTwoCalcValues.map((val) => (
                    <input 
                        type="button"
                        value={val.value} 
                        key={val.id} 
                        onClick={handleClick}
                        disabled={disable}
                    />
                ))
            }
                <input 
                 type="button"
                 value="="
                 className="equal-btn" 
                 onClick={evaluateCalc}
                 disabled={disable}
                />
            </div>
        </div>
    </>
  )
}

export default Claculator