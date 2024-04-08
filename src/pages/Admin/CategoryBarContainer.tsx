import styled from "styled-components"
import "../../styles/categoryBarCotainer.scss"
import { useEffect, useState } from "react"
const CBC = styled.div`
 display  : flex;
 width : 30%;
 min-height : 400px;
 box-shadow: 0 0 14px 1px hsl(266deg 33% 41% / 15%);
 justify-content : center ;
 border-radius : 10px;
 align-items : center;
 flex-direction : column ;
`
function CategoryBarContainer() {

  return (
    <CBC className="category-container">
      <h2 style={{textTransform : "uppercase"}}>Inventory</h2>
       <CategoryItem title="Leptop"  percentage={40}/>
       <CategoryItem title="Mobile" percentage={80} />
       <CategoryItem title="Cloths" percentage={90} />
       <CategoryItem title="Mens" percentage={50} />
    </CBC>
  )
}
interface CategoryInventoryProp {
  title : string,
  percentage : number
}
const CategoryItem  = ({title , percentage}:CategoryInventoryProp) =>{
  const [progress , setProgress] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      // Update progress every 100 milliseconds
      if (progress < percentage) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, [progress, percentage]);

    return (
      <div className="category-bar">
      <span>
        {title}
      </span>
      <div className="bar">
        <div style={{
          width :`${progress}%`
        }} className="bar-width"></div>
      </div>
      </div>
    )
}
export default CategoryBarContainer
