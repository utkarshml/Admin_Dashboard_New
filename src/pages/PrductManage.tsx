
import { Link } from "react-router-dom"
import AdminSideBar from "../components/AdminSideBar"
import { OrderItem, OrderItemType } from "../types/OrderItemTypes"
import Admin_header from "../components/Admin_header"
import { useState } from "react"
import styles from "../styles/transaction.module.scss"
import { FaArrowLeft } from "react-icons/fa"



const sampleOrder : OrderItemType[] = [{
  name : "Iphone 18",
  price : 3300000,
  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978",
   qty : 3 ,
  _id : "efjekwfjwlej",
  subtotal : 33000000 * 3 
}, 
{
  name : "Iphone 18",
  price : 3300000,
  image : "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT223?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1693248280978",
   qty : 3 ,
  _id : "efjekwfjjlkj;lwlej",
  subtotal : 33000000 * 3 
}
]


const PrductManage  = () => {
  // const [order , setOrder]= useState<OrderItemType[]>(sampleOrder);
  const[toggle , setToggle] = useState<boolean>(false);
  const [orderInfo , setOrderInfo] = useState<OrderItem>({
    name: "John Doe",
    address: "123 Main Street",
    city: "Anytown",
    state: "Anystate",
    country: "Somecountry",
    pinCode: 12345,
    status: "processing",
    subtotal: 100,
    shippingCharge: 10,
    discount: 5,
    total: 105,
    tax : 9,
    orders: [],
    _id: "efjekwfjwlej"
})
const statusHandler = () =>{
  setOrderInfo((prev)=>(
   { ...prev , status : prev.status === "processing" ? "shipped" : "delivered" }
  ))
}
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
          <button onClick={()=>window.history.back()} className={styles.backBtn}>
          <FaArrowLeft/>  Home
          </button>
          <div className={styles.productList} style={{ padding: "2rem 1.5rem" }}>
     
           <section className={styles.ManageSection}>
            <h2 className={styles.heading}>Product Info</h2>
            {sampleOrder?.map(i=>(
              <ProductItem key={i._id} name={i.name} image={i.image} price={i.price} qty={i.qty} subtotal={i.subtotal} _id={i._id}/>
            ))}
           </section>
           <article>
            <h4>User Info</h4>
            <span>Name : {orderInfo.name}</span> 
            <span>Address : {orderInfo.address} , {orderInfo.city} , {orderInfo.state} , {orderInfo.country} , {orderInfo.pinCode}</span>
           <h4>Order Info</h4>
              <span>Subtotal : {orderInfo.subtotal}</span>
              <span>Shipping Charge  : {orderInfo.shippingCharge}</span>
              <span>Tax : {orderInfo.tax}</span>
              <span>Subtotal : {orderInfo.tax}</span>
              <span>Total : {orderInfo.subtotal + orderInfo.tax + orderInfo.shippingCharge}</span>
              <h4>Status Info</h4>
              <span>
              Status :
              <span style={{
                color : orderInfo.status === "processing" ? "purple" : orderInfo.status === "delivered" ? "yellow" : "green"
              }}> {orderInfo.status}</span></span>
              <button onClick={statusHandler}>{orderInfo.status}</button>
           </article>
          </div>
        </main>
      </div>
    </>

  )
}

const ProductItem = ({name , image , price , qty , subtotal , _id} : OrderItemType) =>(
  <div className={styles.productItemCard}>
    <img className={styles.ProductImage} src={image} alt={name}/>
    <Link className={styles.productLink} to={`/prodcut/${_id}`}>{name}</Link>
    <span>{price} X {qty} = {subtotal}</span>
  </div>
)
export default PrductManage ;
