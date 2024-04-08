import AdminSideBar from "../../components/AdminSideBar"
import { BarChart, LineChart, PiChart, PolerChart } from "../../components/chart";
import "../../styles/doubleBarGraph.scss";
import Admin_header from "../../components/Admin_header"

import { useState } from "react"


const label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const Chartpage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const Handler = () => {
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
            <div className="bar-div">
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Sales by product or Revenue</h4>
              <BarChart apr={false} horizontal={false} dataset_1={[24, 44, 33, 34, 322, 446, 0]} dataset_2={[24, 44, 33, 544, 322, 446, 0]} lable_1={"Sales"} labels={label} lable_2={"Revenu"} bgColor_1={"hsl(266, 33%, 41%)"} bgColor_2=" hsl(266, 50%, 70%)" />
            </div>
            <div className="pi-div">
              <div>
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Sales by product or Revenue</h4>
              <PiChart labels={["Retension", "Engage"]} datasets={[{
                label: "Retension",
                data: [20, 34],
                backgroundColor: ["hsl(266, 33%, 41%)", "hsl(266, 50%, 70%)"],
                borderWidth: 1
              }]} />
              </div>
              <div>
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Sales by product or Revenue</h4>
              <PolerChart labels={["Retension", "Engage"]} datasets={[{
                label: "Retension",
                data: [20, 34],
                backgroundColor: ["hsl(266, 33%, 41%)", "hsl(266, 50%, 70%)"],
                borderWidth: 1
              }]} />
              </div>
            </div>
            
            <div className="line-div">
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Sales by product or Revenue</h4>

              <LineChart horizontal={true} dataset_1={[24, 44, 33, 34, 322, 446, 0]} dataset_2={[24, 44, 33, 544, 322, 446, 0]} lable_1={"Sales"} labels={label} lable_2={"Revenu"} bgColor_1={"hsl(266, 33%, 41%)"} bgColor_2=" hsl(266, 50%, 70%)" />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Chartpage;
