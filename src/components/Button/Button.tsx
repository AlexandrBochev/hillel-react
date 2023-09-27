interface IButton {
  children: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ children, onClick }: IButton) => {
  const btnStyles = `py-2 mb-3 w-40 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 text-white font-semibold rounded`

  return (
    <button onClick={ onClick } className={ btnStyles }>
      { children }
    </button>
  )
}

export { Button }