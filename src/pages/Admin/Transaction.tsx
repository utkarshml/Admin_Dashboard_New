import { ColumnDef } from "@tanstack/react-table"
import AdminSideBar from "../../components/AdminSideBar"
import Admin_header from "../../components/Admin_header"
import GetTable from "../../components/Table"
import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "../../styles/transaction.module.scss"

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
        color: cell.row.getValue("status") === "Deliverd" ? "green" : cell.row.getValue("status") === "Processing" ? "red" : "orange"
      }}>{cell.row.getValue("status")}</span>
    }
  },
  {
    header: "Action",
    accessorKey: "action",
    cell: () => {
      return <button  className={styles.managebtn} ><Link to={"/admin/transaction/manage"}>Manage</Link></button>
    }
  }
]
const TranDum: TransactionColType[] = [
  {
    user: 'Utkarsh',
    amount: 500,
    discount: 50,
    quantity: 2,
    status: 'Deliverd',
  },
  {
    user: 'Avneet',
    amount: 300,
    discount: 30,
    quantity: 1,
    status: 'Shipped',
  },
  {
    user: 'User3',
    amount: 700,
    discount: 70,
    quantity: 3,
    status: 'Processing',
  },
];


const Transaction = () => {
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
          <div style={{ padding: "2rem 1.5rem"  , overflowX : "auto"}}>
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
