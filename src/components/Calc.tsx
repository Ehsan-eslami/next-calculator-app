import { useState } from "react"
import Display from "./Display"

export const buttons = [
  "7", "8", "9", "DEL",
  "4", "5", "6", "+", 
  "1", "2", "3", "-", 
  ".", "0", "/", "X", 
  "RESET", "=" 
]

export default function Calc() {
  const [display, setDisplay] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (button: string) => {
    switch (button) {
      case "DEL" :
        setDisplay(display.slice(0, -1))
        break;

      case "RESET" :
        setDisplay("")
        setResult('')
        break;

      case "=" :
        try{
          const evaluated = eval(display.replace("X", "*"))
          setResult(String(evaluated))
          setDisplay(String(evaluated))
        } catch (err) {
          setResult("Error")
        }
        break
      
      default:
        if(result.length > 0) {
          if(['+', '-', '/', 'X'].includes(button)){
            setDisplay(result + button)
          } else {
            setDisplay(button)
          }
          setResult("")
        } else {
          setDisplay(display + button)
        }
        break
    }
  }

  return (
    <>
      <Display result={result} display={display} />
        <div className="button-part">
          { buttons.map(button => (
            <button
            key={button}  
            onClick={() => handleClick(button)}
            className={
              button === "RESET" ? "reset-button"
              : button === "DEL" ? "del-button" 
              : button === "=" ? "equal-button" 
              : "button" }
              >
              {button}
            </button>  
          )
        )}
      </div>
    </>
  )
}
