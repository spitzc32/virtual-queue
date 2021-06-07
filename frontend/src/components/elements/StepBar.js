
const StepBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler percentage={props.percentage} />
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

export default StepBar;
