interface IInput {
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, onChange }: IInput) => {
  return (
    <input
      type="number"
      value={ value }
      onChange={ onChange }
      className="p-2 mb-3 border rounded w-40"
      placeholder="Enter a number"
    />
  )
}

export { Input }