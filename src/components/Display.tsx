interface displayProps {
  result: string
  display: string
}

const Display: React.FC<displayProps> = ({result, display}) => {
  return(
    <div className="display">
      <h1>
        {result ? result : display || 0}
      </h1>
    </div>
  )
}
export default Display
