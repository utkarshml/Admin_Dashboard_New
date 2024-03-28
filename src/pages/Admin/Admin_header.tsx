import { CgProfile } from "react-icons/cg";
import '../../styles/admin_header.scss'
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
interface IHamburgerMenu {
  onClick: () => void;
}
function Admin_header({onClick} : IHamburgerMenu ) {

  return (
    <div className="admin-header">
    <div onClick={onClick} className="handburger">
    <GiHamburgerMenu/>
    </div>
  <button>
  <IoNotifications/>
  </button>
  <button>
  <CgProfile/>
  </button>
       
    
    </div>
  )
}

export default Admin_header
