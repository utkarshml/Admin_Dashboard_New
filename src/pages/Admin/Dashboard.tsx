import AdminSideBar from "../../components/AdminSideBar"
import WidgetContainer from "../../components/WidgetContainer"
import "../../styles/dashboard.scss"
import Admin_header from "../../components/Admin_header"
import CategoryBarContainer from "./CategoryBarContainer"
import { BarChart, DoughnutGraph } from "../../components/chart"
import { BiMaleFemale } from "react-icons/bi";
import { ColumnDef } from "@tanstack/react-table"
import GetTable from "../../components/Table"
import { Data, data } from "../../assets/MOCK_DATA"
import { useState } from "react"

export const column : ColumnDef<Data>[] = [
  {
  header : "ID",
  accessorKey : "id"
},
{
  header : "First Name",
  accessorKey : "first_name"
},
{
  header : "Last Name",
  accessorKey : "last_name"
},
{
  header : "Email",
  accessorKey : "email"
},
{
  header : "Address",
  accessorKey : "address"
}
]

const label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const Dashboard = () => {
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
          <WidgetContainer />
          <div className="dasboard-container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
             gap: "1rem",
            margin: "0.5rem 0"
          }}>
              <div className="double-bar-graph-container">
        <h2 >Products & Sales</h2>
        <BarChart dataset_1={[50,49,100, 78 ,20 , 40 , 60]} dataset_2={[25,4,100,60, 15 , 40 ,50]} bgColor_1=" hsl(266, 33%, 41%)" bgColor_2=" hsl(266, 50%, 70%)" lable_1="Product" lable_2="Sales" labels={label}horizontal={false} />
    </div>
            <CategoryBarContainer />
          </div>
          <div className="dasboard-container"  style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            margin: "1rem 0"
          }}>
            <div className="genderChart">
              <h2>Gender Ratio</h2>
              <DoughnutGraph style={{
                innerWidth: 100
              }} offset={[]} legends={true} cutout={90} labels={["Boy", "Girls"]} doughnutData={[28, 10]} color={[" hsl(266, 33%, 41%)", "hsl(266, 50%, 70%)"]} />
              <BiMaleFemale />
            </div>

            <div className="transaction-table">
                <GetTable pageSize={4} columns={column} data={data}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
