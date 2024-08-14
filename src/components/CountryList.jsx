import styles from "./CountryList.module.css"
import Spinner from './Spinner'
import CountryItem from "./CountryItem"
import Message from './Message'

const CountryList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />
    if (!cities.length) return <Message message='add your first city by clicking on map' />
    console.log(cities)
    const countries = cities.reduce((arr, city) => {
        if (!arr.map((el) => el.country).includes(city.country)) 
            return [...arr, { country: city.country, emoji: city.emoji }]
        else 
            return arr
    }
        , [])
    //console.log(countries)
    return (
        <div className={styles.countryList}>
            {countries.map(country => <CountryItem country={country} key={country.id} />)}
        </div>
    )
}
export default CountryList