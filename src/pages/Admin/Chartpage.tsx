import AdminSideBar from "../../components/AdminSideBar"
import { BarChart, LineChart, PiChart, PolerChart } from "../../components/chart";
import "../../styles/doubleBarGraph.scss";
import Admin_header from "../../components/Admin_header"

import { useState } from "react"


const label = ['Mobile', 'Computer', 'Leptop', 'Cloth', 'Hardware', 'Accessories'];
const sampleDataForPolor = [{
  label: "Retension",
  data: [10000,2000, 12000],
  backgroundColor: ["hsl(266, 33%, 41%)", "hsl(266, 50%, 70%)","hsl(26, 50%, 70%"],
  borderWidth: 1
}]
const sampleDataForPi = [{
  label: "Retension",
  data: [24, 44, 33, 34, 322, 446],
  backgroundColor: [
    "hsl(266, 33%, 41%)", "hsl(266, 33%, 41%)", 
    "hsl(200, 33%, 41%",
    "hsl(150,  33%, 41%)",
    "hsl(20, 33%, 41%)",
    "hsl(133, 33%, 41%)"
  ],
  borderWidth: 1
},
]
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
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Sales Cateorgy Wish</h4>
              <BarChart apr={false} horizontal={false} dataset_1={[24, 44, 33, 34, 322, 446]} dataset_2={[24, 44, 33, 544, 322,400]} lable_1={"Categories"} labels={label} lable_2={"Sales"} bgColor_1={"hsl(266, 33%, 41%)"} bgColor_2=" hsl(266, 50%, 70%)" />
            </div>
            <div className="pi-div">
              <div>
                <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Categories Roles</h4>
                <PiChart labels={label} datasets={sampleDataForPi} />
              </div>
              <div>
                <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Cost & Profit</h4>
                <PolerChart labels={["Cost" , "Profit", "Revenu"]} datasets={sampleDataForPolor} />
              </div>
            </div>

            <div className="line-div">
              <h4 style={{ textAlign: "center", margin: "2rem", textTransform: "uppercase" }}>Growth of Bussiness</h4>

              <LineChart horizontal={true} dataset_1={[120000, 440000, 33000, 340000, 32324, 44630]} dataset_2={[124000, 441000, 33100, 345000, 32324, 449930]} lable_1={"Cost"} labels={label} lable_2={"Revenu"} bgColor_1={"red"} bgColor_2="purple" />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Chartpage;
