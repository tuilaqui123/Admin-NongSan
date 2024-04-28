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

function App() {

  const [navSlide, setNavSlide] = useState(true)

  return (
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
          <Route path="/trang-trai" element={<Farm />}>
            <Route index element={<ListFarm />} />
            <Route path="them-trang-trai" element={<AddFarm />} />
          </Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App
