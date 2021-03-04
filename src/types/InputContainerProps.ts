type InputContainerProps = {
  choice: string,
  handleKeyDown: React.KeyboardEventHandler<HTMLDivElement>,
  handleChoiceChange: React.ChangeEventHandler<HTMLInputElement>,
  randomizeChoice: React.MouseEventHandler<HTMLButtonElement>
}

export default InputContainerProps;