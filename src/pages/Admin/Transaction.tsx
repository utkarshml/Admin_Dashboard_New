import { ColumnDef } from "@tanstack/react-table"
import AdminSideBar from "../../components/AdminSideBar"
import Admin_header from "./Admin_header"
import { ActionBtn } from "./Inventory"
import GetTable from "../../components/Table"

interface TransactionColType {
  user: string,
  amount: number,
  discount: number,
  quantity: number,
  status: string,
}
const TransactionCol: ColumnDef<TransactionColType>[] = [
  {
    header: "User",
    accessorKey: "user",
  }
  ,
  {
    header: "Amount",
    accessorKey: "amount"
  }
  ,
  {
    header: "Discount",
    accessorKey: "discount"
  },
  {
    header: "Qty",
    accessorKey: "quantity",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ cell }) => {
      return <span style={{
        color: cell.row.getValue("status") === "Completed" ? "green" : cell.row.getValue("status") === "Failed" ? "red" : "orange"
      }}>{cell.row.getValue("status")}</span>
    }
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => {
      return <ActionBtn text="manage" />
    }
  }
]
const TranDum: TransactionColType[] = [
  {
    user: 'User1',
    amount: 500,
    discount: 50,
    quantity: 2,
    status: 'Completed',
  },
  {
    user: 'User2',
    amount: 300,
    discount: 30,
    quantity: 1,
    status: 'Pending',
  },
  {
    user: 'User3',
    amount: 700,
    discount: 70,
    quantity: 3,
    status: 'Failed',
  },
];


const Transaction = () => {
  return (
    <>
      <div className="container">
        <AdminSideBar />
        <main>
          <Admin_header />
          <div style={{ padding: "2rem 1.5rem" }}>
            <h2 style={
              {
                marginBottom: "1rem",
                textTransform: "uppercase"
              }
            }>Transaction</h2>
            <GetTable columns={TransactionCol} data={TranDum} isPagination={true} /></div>
        </main>
      </div>
    </>

  )
}

export default Transaction
