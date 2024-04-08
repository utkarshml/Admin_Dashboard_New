
import AdminSideBar from "../../components/AdminSideBar";
import Admin_header from "../../components/Admin_header";
import { ChangeEvent, useState } from "react";
import styles from "../../styles/addproduct.module.scss";
import { FaArrowLeft } from "react-icons/fa";





function ManageProduct() {
  const[name , setName] = useState<string>("Pumma Shose");
  const[stock , setStock] = useState<number>(3);
  const [category , setCategory] = useState<string>("shose");
  const [price , setPrice] = useState<number>(0);
  const [image , setImage] = useState<string>("https://rukminim2.flixcart.com/image/850/1000/kziqvm80/shoe/8/a/6/7-384642-7-puma-white-peacoat-harbor-mist-original-imagbg9hezwckgfy.jpeg?q=90&crop=false");
 const [toggle ,setToggle] = useState<boolean>(false);
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
          <Admin_header onClick={Handler}  />
          <button onClick={()=>window.history.back()} className={styles.backBtn}>
          <FaArrowLeft/>  Home
          </button>
          <div style={{
            padding: "2rem 1.5rem",
            overflowX : "auto"
          }}>
            <h2 style={
              {
                marginBottom: "1rem",
                textTransform: "uppercase"
              }
            }>Manage Product</h2>
          </div>
          <div className={styles.addProductDiv}>
      <div  className={styles.productImage}>
        <div className={styles["addition-info"]}>
          <div>Product : {name}</div>
          <div style={{color : stock > 3 ? "green" : stock == 0 || Number.isNaN(stock) ? "red" : "orange"}}> Stock : {Number.isNaN(stock) ? 0 : stock} </div>
        </div>
        <img src={image} alt={name} />
      </div>
      <div style={{
        padding: "2rem 1.5rem",
      }}>

      <form className={styles["add-product-form"]} >
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
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Mobile">Mobile</option>
          <option value="Computer">Computer</option>
          <option value="Cloth">Cloth</option>
        </select>
      </div>
    
      <div>
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          min={0}
          value={stock}
          onChange={(e) => setStock(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          min={0}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          id="photo"
          value={""}
          onChange={imageHandler}
        />
      </div>
      <button type="submit">Update Product</button>
      <span>Price : {Number.isNaN(price)  ? 0 : price}</span>
      </form>
      </div>
      </div>

        </main>
      </div>
    
    </>

  )
}

export default ManageProduct;

