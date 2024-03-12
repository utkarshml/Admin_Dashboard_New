import { CgProfile } from "react-icons/cg";
import '../../styles/admin_header.scss'
import { IoNotifications } from "react-icons/io5";
import Searchbar from "../../components/Searchbar";
function Admin_header() {
  return (
    <div className="admin-header">
       <Searchbar/>
       <IoNotifications/>
       <CgProfile/>
    </div>
  )
}

export default Admin_header
