import { useState } from "react";

const useToggle =()=>{
    const [toggle , setToggle ]= useState<boolean>(false);
    setToggle(!toggle);
   return {value : toggle};
}
export default useToggle;