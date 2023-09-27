import { useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"

const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  
  const handleClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    !inputValue ? setCount(count) : setCount(count + parseInt(inputValue))
    setInputValue('')
  }

  const handleClickReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    window.confirm("Do you want to reset the counter?") && setCount(0)
  }

  return (
    <div className="flex flex-col border p-8 rounded bg-slate-50">
      <p className="mb-4 text-xl font-semibold">Count: { count }</p>
      <form className="flex flex-col">
        <Input value={ inputValue } onChange={ handleChange } />
        <Button onClick={ handleClickAdd }>Add</Button>
        <Button onClick={ handleClickReset }>Reset</Button>
      </form>
    </div>
  )
}

export { Counter }