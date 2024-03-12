import "../styles/table.scss";
import { Data, data } from "../assets/MOCK_DATA";
import { ColumnDef } from "@tanstack/react-table";
import "../styles/dashboard.scss";
import GetTable from "../components/Table";
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
     <GetTable columns={column} data={data} />
  )
}

export default Table
