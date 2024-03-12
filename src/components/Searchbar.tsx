import { IoSearchSharp } from 'react-icons/io5'
import "../styles/searchCom.scss"



export default function Searchbar() {
  return (
    <div className="search-bar-div">
    <input type="text" placeholder="Search for Data "/> 
    <div className="search-button">
     <IoSearchSharp/>
    </div>
 </div>
  )
}
