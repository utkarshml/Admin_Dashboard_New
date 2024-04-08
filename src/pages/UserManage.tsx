
import { ChangeEvent, useState } from "react";
import AdminSideBar from "../components/AdminSideBar";
import Admin_header from "../components/Admin_header";
import styles from "../styles/userManage.module.scss"
import { FaArrowLeft } from "react-icons/fa";

import sampleImage from "../image/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";


function UserManage() {
  const[toggle , setToggle] = useState<boolean>(false);
  const[name , setName] = useState<string>("Utkarsh");
  const[role , setRole] = useState<string>("Admin");
  const [gender , setGender] = useState<string>("Male");
  const [email , setEmail] = useState<string>("utkarshjais8957@gmail.com");
  const [image , setImage] = useState<string>(sampleImage);
  const Handler = () =>{
     setToggle(!toggle);
  }
  const onclose = () => {
      setToggle(false);
  }
  const imageHandler = (e : ChangeEvent<HTMLInputElement>) =>{
   e.preventDefault();
   const file : File | undefined = e.target.files?.[0];

   const reader : FileReader = new FileReader();
   if(file){
     reader.readAsDataURL(file);
     reader.onloadend = () =>{
        if(typeof reader.result === "string") setImage(reader.result)
     }
   }
  }
  return (
    <>
    <div className="container">
       <AdminSideBar onClose={onclose} reacted={toggle} />
      <main>
      <Admin_header onClick={Handler} />
      <button onClick={()=>window.history.back()} className={styles.backBtn}>
          <FaArrowLeft/>  Home
          </button>
      <h2 className={styles["user-manage-heading"]}>Manage User</h2>
      <div className={styles.userManageDiv}>
      <div  className={styles.userProfile}>
        <img src={image} alt={name} />
      </div>
      <div style={{
        padding: "2rem 1.5rem",
      }}>

      <form className={styles["manage-customer-form"]} >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="role">Role :</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="male">Admin</option>
          <option value="female">User</option>
        </select>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="profile">Profile:</label>
        <input
          type="file"
          id="profile"
          value={""}
          onChange={imageHandler}
        />
      </div>
      <button type="submit">Update Profile</button>
      </form>
      </div>
      </div>
      </main>
    </div>
    
    </>
  )
}

export default UserManage;

