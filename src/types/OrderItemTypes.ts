export type OrderItemType = {
    name : string ,
    image : string ,
    qty : number ,
    price : number ,
    subtotal : number,
    _id : string 
}

export type OrderItem = {
    name : string ,
    address : string ,
    city : string ,
    state : string ,
    country : string , 
    pinCode : number ,
    status : "processing" | "shipped" | "delivered" ;
    subtotal : number,
    shippingCharge : number,
    discount : number,
    tax : number
    total: number,
    orders: OrderItemType[]
    _id : string
}