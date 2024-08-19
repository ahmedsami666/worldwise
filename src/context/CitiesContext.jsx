import { useContext, useState, useEffect, createContext } from "react";

const CitiesContext = createContext()
const BASE_URL = 'http://localhost:3000'

const CitiesProvider = ({ children }) => {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})

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

    async function getCity(id) {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json()
            setCurrentCity(data)
        }
        catch {
            console.log('error while loading data')
        }
        finally {
            setIsLoading(false)
        }
    }
    async function createCity(newCity) {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            setCities((cities) => [...cities, data])
        }
        catch {
            console.log('error while loading data')
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <CitiesContext.Provider value={{
            cities,
            isLoading,
            currentCity,
            getCity,
            createCity
        }}>
            {children}
        </CitiesContext.Provider>
    )
}
const useCities = () => {
    const context = useContext(CitiesContext)
    if (context === undefined) throw new Error("CitiesContext was used outside CitiesProvider")
    return context
}
export { CitiesProvider, useCities }