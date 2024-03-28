import AdminSideBar from "../../components/AdminSideBar"
import WidgetContainer from "../../components/WidgetContainer"
import "../../styles/dashboard.scss"
import Admin_header from "./Admin_header"
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
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "1rem",
            margin: "0.5rem 0"
          }}>
              <div className="double-bar-graph-container">
        <h2 >Revenu & Transaction</h2>
        <BarChart dataset_1={[1,49,50, 70]} dataset_2={[2,4,67,78]} bgColor_1=" hsl(266, 33%, 41%)" bgColor_2=" hsl(266, 50%, 70%)" lable_1="product" lable_2="value" labels={label}horizontal={false} />
    </div>
            <CategoryBarContainer />
          </div>
          <div style={{
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
              }} offset={[]} legends={true} cutout={90} labels={["Boy", "Girls"]} doughnutData={[20, 19]} color={[" hsl(266, 33%, 41%)", "hsl(266, 50%, 70%)"]} />
              <BiMaleFemale />
            </div>
            <div className="transaction-table">
                <GetTable columns={column} data={data}/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
