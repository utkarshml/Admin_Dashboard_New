import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";
import PrductManage from "./pages/PrductManage";
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
// Admin Dashboard 
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Customer = lazy(() => import("./pages/Admin/Customer"));
const Inventory = lazy(() => import("./pages/Admin/Inventory"));
const Transaction = lazy(() => import("./pages/Admin/Transaction"))
const Chartpage = lazy(() => import("./pages/Admin/Chartpage"))
const UserManage = lazy(() => import("./pages/UserManage"))
const AddProduct = lazy(() => import("./../src/pages/AddProduct"))
const ManageProduct = lazy(() => import("./pages/Admin/ManageProduct"))
const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Search" element={<Search />} />
         
          {/* Admin  */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customer />} />
          <Route path="/admin/inventory" element={<Inventory />} />
          <Route path="/admin/transaction" element={<Transaction />} />
          <Route path="/admin/loader" element={<Loader />} />
          <Route path="/admin/transaction/manage" element={<PrductManage/>}/>
          <Route path="/admin/chart" element={<Chartpage/>}/>
          <Route path="/admin/customer/user" element={<UserManage/>}/>
          <Route path="/admin/inventory/add" element={<AddProduct/>}/>
          <Route path="/admin/inventory/manage" element={<ManageProduct/>}/>
        </Routes>

       </Suspense>
    </Router>
  )
}

export default App;
