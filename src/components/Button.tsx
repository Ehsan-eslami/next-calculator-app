interface buttonProps {
  value: number 
  name: string
}

const Button: React.FC<buttonProps> = ({name, value}) => {
  return(
    // TODO: add function to this component
    <div className={name === "RESET" ? "button col-span-2" : name === "=" ? "button col-span-2" : "button" }>
      <span>
        {name ? name : value}
      </span>
    </div>
  )
}
export default Button
