import Data from "./Data"
import { useContext } from "react"
import { counterContext } from "../context/context"

const Button = () => {

    const val = useContext(counterContext)
  return (
    <div>
        <button
           onClick={() => val.setCount((count) => count + 1)}
        ><Data/></button>
    </div>
  )
}

export default Button