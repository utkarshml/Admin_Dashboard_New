import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader";
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
// Admin Dashboard 
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const Customer = lazy(() => import("./pages/Admin/Customer"));
const Inventory = lazy(() => import("./pages/Admin/Inventory"));
const Transaction = lazy(() => import("./pages/Admin/Transaction"))
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
        </Routes>
       </Suspense>
    </Router>
  )
}

export default App;
