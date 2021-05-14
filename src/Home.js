import React, { useEffect } from 'react'
import "./Home.css";
import Product from './Product';
import { useStateValue } from './StateProvider';
import { sampleItems as amazonItems } from './sample-items';

function Home() {
    const [{ items },  dispatch] = useStateValue();

    useEffect( () => {
        //once you can interact with amazon api, do something like this. 
        //const amazonItems = axios.get('/amazon-api/items').then( res => res.data );

        dispatch({
            type: "SET_ITEMS",
            items: amazonItems,
        })
    }, []);

    const featuredItems = items.filter( item => item.featured)
    const nonFeaturedItems = items.filter( item => !item.featured);

    return (
        <div className='home'>
            <div className='home__container'>
                {/* add image below when able */}
                <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NmY1NTA5NmIt/NmY1NTA5NmIt-YTNlOTVmNmQt-w3000._CB670181815_.jpg'/>

                <div className='home__row'>
                    {featuredItems.map( item => <Product key={item.id} {...item} />)}
                </div>

                <div className='home__row'>
                    {nonFeaturedItems.map( item => <Product key={item.id} {...item} />)}
                </div>

                <div className='home__row'>

                </div>
            </div>
        </div>
    )
}

export default Home
