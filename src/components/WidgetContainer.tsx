import Widgets from "./Widget"



function WidgetContainer() {
  return (
    <div style={{
        padding : "1rem",
        display: "flex",
        flexWrap : "wrap",
        justifyContent : "space-around",
        alignItems : "center",
        margin : "0.5rem",
        height : "200px"
    }}>
      <Widgets title="Revenue" percentage={40} num={5000} trand={-30} color="hsl(266, 33%, 41%)"/>
      <Widgets title="User" percentage={20} num={5000} trand={-30} color="hsl(266, 33%, 41%)"/>
      <Widgets title="Orders" percentage={80} num={5000} trand={10} color="hsl(266, 33%, 41%)"/>
               </div>
  )
}

export default WidgetContainer
