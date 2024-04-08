import styled from "styled-components"
import Widgets from "./Widget"


const Widget = styled.div`
padding : 1rem;
display: flex;
flex-direction: row;
flex-wrap : wrap;
justify-content : space-around;
align-items : center;
margin : 0.5rem;
height : auto;
`
function WidgetContainer() {
  return (
    <Widget>
      <Widgets title="Revenue" percentage={40} num={"5000$"} trand={-30} color="hsl(266, 33%, 41%)"/>
      <Widgets title="User" percentage={20} num={"140"} trand={-20} color="hsl(266, 33%, 41%)"/>
      <Widgets title="Orders" percentage={80} num={"150"} trand={10} color="hsl(266, 33%, 41%)"/>
    </Widget>
  )
}

export default WidgetContainer
