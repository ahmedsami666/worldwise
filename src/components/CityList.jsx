import styles from "./CityList.module.css"
import Spinner from './Spinner'
import CityItem from "./CityItem"
import Message from './Message'

const CityList = ({ cities, isLoading }) => {
    if (isLoading) return <Spinner />
    if (!cities.length) return <Message message='add your first city by clicking on map'/>
    return (
        <div className={styles.cityList}>
            {cities.map(city => <CityItem city={city} key={city.id}/>)}
        </div>
    )
}
export default CityList