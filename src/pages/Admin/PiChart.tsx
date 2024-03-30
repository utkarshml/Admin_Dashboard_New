import AdminSideBar from "../../components/AdminSideBar"
import { BarChart } from "../../components/chart";
import "../../styles/doubleBarGraph.scss";
import Admin_header from "../../components/Admin_header"

import { useState } from "react"



const label = ['January', 'February', 'March', 'April', 'May', 'June'];

const PiChart = () => {
  const[toggle , setToggle] = useState<boolean>(false);
  const Handler = () =>{
     setToggle(!toggle);
  }
  const onclose = () => {
      setToggle(false);
  }
   return (
    <>
      <div className="container">
        <AdminSideBar onClose={onclose} reacted={toggle} />
        <main>
          <Admin_header onClick={Handler} />
          <section id="bar-section">
            <h2 style={{textAlign:"center" , margin:"2rem" , textTransform : "uppercase"}}>Sales by product or Revenue</h2>
            <div className="bar-div">
            <BarChart  horizontal={false} dataset_1={[24 , 44, 33, 34, 322, 446,0]} dataset_2={[24 , 44, 33, 544, 322, 446,0]} lable_1={"Sales"} labels={label} lable_2={"Revenu"} bgColor_1={"hsl(266, 33%, 41%)"} bgColor_2=" hsl(266, 50%, 70%)"/>
            </div>
            <h2 style={{textAlign:"center" , margin:"2rem" , textTransform : "uppercase"}}>Sales by product or Revenue</h2>
            <div className="bar-div">
            <BarChart  horizontal={true} dataset_1={[24 , 44, 33, 34, 322, 446,0]} dataset_2={[24 , 44, 33, 544, 322, 446,0]} lable_1={"Sales"} labels={label} lable_2={"Revenu"} bgColor_1={"hsl(266, 33%, 41%)"} bgColor_2=" hsl(266, 50%, 70%)"/>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PiChart;
