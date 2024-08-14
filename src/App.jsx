import { Route, Routes, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Login from "./pages/Login"
import AppLayout from "./pages/Applayout"
import PageNotFound from "./pages/PageNotFound"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/app" element={<AppLayout />}>
                    <Route index element={<p>List of cities</p>}/>
                    <Route path="cities" element={<p>list of cities</p>}/>
                    <Route path="countries" element={<p>list of countries</p>}/>
                    <Route path="form" element={<p>Form</p>}/>
                </Route>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App