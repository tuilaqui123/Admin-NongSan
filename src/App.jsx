import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import PageLayout from "./context/PageLayout"
import { useState } from "react"
import Dashboard from "./pages/Dashboard/Dashboard"
import TestBase from "./pages/Dashboard/ok"
import TestBase2 from "./pages/Dashboard/ok2"
import Farm from "./pages/Farm/Farm"
import AddFarm from "./pages/Farm/AddFarm"
import ListFarm from "./pages/Farm/ListFarm"
import Voucher from "./pages/Voucher/Voucher"
import ListVoucher from "./pages/Voucher/ListVoucher"
import { AppProvider } from "./context/AppContext"
import AddVoucher from "./pages/Voucher/AddVoucher"
import VoucherDetail from "./pages/Voucher/VoucherDetail"
import FarmDetail from "./pages/Farm/FarmDetail"
import Storage from "./pages/Storage/Storage"
import StorageList from "./pages/Storage/StorageList"
import AddItem from "./pages/Storage/AddItem"
import ItemDetail from "./pages/Storage/ItemDetail"
import Customer from "./pages/Customer/Customer"
import CustomerList from "./pages/Customer/CustomerList"
import CustomerDetail from "./pages/Customer/CustomerDetail"
import Order from "./pages/Order/Order"
import OrderList from "./pages/Order/OrderList"
import OrderDetail from "./pages/Order/OrderDetail"

function App() {

  const [navSlide, setNavSlide] = useState(true)

  return (
    <AppProvider>
      <BrowserRouter>
        <Navbar
          navSlide={navSlide}
        />
        <PageLayout
          navSlide={navSlide}
          onclick={() => setNavSlide(!navSlide)}
        >
          <Routes>
            <Route path="/thong-ke" element={<Dashboard />}>
              <Route path="ok1" element={<TestBase />} />
              <Route path="ok2" element={<TestBase2 />} />
            </Route>
            <Route path="/don-hang" element={<Order />}>
              <Route index element={<OrderList />} />
              <Route path="chi-tiet/:orderID" element={<OrderDetail />} />
            </Route>
            <Route path="/khach-hang" element={<Customer />} >
              <Route index element={<CustomerList />} />
              <Route path="chi-tiet/:customerID" element={<CustomerDetail />} />
            </Route>
            <Route path="/kho" element={<Storage />}>
              <Route index element={<StorageList />} />
              <Route path="them-san-pham" element={<AddItem />} />
              <Route path="chinh-sua/:itemID" element={<ItemDetail />} />
            </Route>
            <Route path="/trang-trai" element={<Farm />}>
              <Route index element={<ListFarm />} />
              <Route path="them-trang-trai" element={<AddFarm />} />
              <Route path="chinh-sua/:farmID" element={<FarmDetail />} />
            </Route>
            <Route path="/ma-giam-gia" element={<Voucher />} >
              <Route index element={<ListVoucher />} />
              <Route path="them-ma-giam-gia" element={<AddVoucher />} />
              <Route path="chinh-sua/:voucherID" element={<VoucherDetail />} />
            </Route>
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
