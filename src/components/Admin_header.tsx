import { CgProfile } from "react-icons/cg";
import styles from '../styles/admin_header.module.scss'
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
interface IHamburgerMenu {
  onClick: () => void;
}
function Admin_header({onClick} : IHamburgerMenu ) {

  return (
    <div className={styles["admin-header"]}>
    <div onClick={onClick} className="handburger primary">
    <GiHamburgerMenu/>
    </div>
  <button className={styles["notification-btn"]}>
  <IoNotifications/>
  </button>
  <button className={styles["notification-btn"]}>
  <CgProfile/>
  </button>
       
    
    </div>
  )
}

export default Admin_header
