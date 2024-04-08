import "../styles/table.scss";
import { Data } from "../assets/MOCK_DATA";
import { ColumnDef } from "@tanstack/react-table";
import "../styles/dashboard.scss";
import { Link } from "react-router-dom";
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
function Table() {
  return (
    <div style={{
      width : "100%",
      height : "100vh,",
      display : "flex",
      justifyContent : "center",
      alignItems : "center"

    }}>
   <Link to={"/admin/dashboard"}><button>Go TO Dashboard</button></Link>
    </div>
  )
}

export default Table
