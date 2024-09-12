import { useContext } from "react"
import { counterContext } from "../context/context"


const Data = () => {
    const value = useContext(counterContext);
  return (
    <div>{value.count}</div>
  )
}

export default Data