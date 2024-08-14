import { Route, Routes, BrowserRouter } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from './pages/Homepage'
import Pricing from './pages/Pricing'
import Login from "./pages/Login"
import AppLayout from "./pages/Applayout"
import PageNotFound from "./pages/PageNotFound"
import CityList from "./components/CityList"
import CountryList from "./components/CountryList"
import { useEffect, useState } from "react"

const BASE_URL = 'http://localhost:3000'
const App = () => {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                setCities(data)
            }
            catch {
                console.log('error while loading data')
            }
            finally {
                setIsLoading(false)
            }
        } 
        fetchCities()
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/pricing" element={<Pricing />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/app" element={<AppLayout />}>
                    <Route index element={<CityList cities={cities} isLoading={isLoading} />}/>
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>
                    <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />}/>
                    <Route path="form" element={<p>Form</p>}/>
                </Route>
                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App