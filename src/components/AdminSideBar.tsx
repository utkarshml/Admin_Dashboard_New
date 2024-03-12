import { IconType } from "react-icons"
import { Link, Location, useLocation } from "react-router-dom"
import { LuLayoutDashboard } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { MdInventory2 } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
function AdminSideBar() {
    const location = useLocation()
  return (
    <aside>
        <h2 className="admin-logo primary">Logo. </h2>
        <h5 className="dashboard-heading heading ">Dashboard</h5>
        <ul className="admin-sidebar-ul">
            <Li text="Dashbord" url="/admin/dashboard" location={location} Icon={LuLayoutDashboard}/>
            <Li text="Customer" url="/admin/customer" location={location} Icon={RiCustomerService2Line}/>
            <Li text="Inventory" url="/admin/inventory" location={location} Icon={MdInventory2}/>
            <Li text="Transaction" url="/admin/transaction" location={location} Icon={GrTransaction}/>
        </ul>
        <h5 className="chart-heading  heading">Chart</h5>
        <ul className="admin-sidebar-ul">
            <Li text="charts" url="/admin/chart" location={location} Icon={FaChartArea}/>
            <Li text="Inventory" url="/admin/inventory" location={location} Icon={MdInventory2}/>
            <Li text="Transaction" url="/admin/transaction" location={location} Icon={GrTransaction}/>
        </ul>
    </aside>
  )
}

interface LiProps {
    url : string,
    text : string,
    location  : Location,
    Icon : IconType
}

const Li = ({url , text , location , Icon} : LiProps) =>{
    return (           
         <li className={`admin-sidebar-li  ${url ==  location.pathname ? "ternary-bg primary" : ""}`} ><Link className="admin-sidebar-a"  to={url}>
            <Icon/>
            {text}</Link></li>
          )
}
export default AdminSideBar
