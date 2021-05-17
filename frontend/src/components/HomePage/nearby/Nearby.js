import React from 'react'
import NearbyName from './NearbyName'
import { exploreNearby } from './data'
export default function Nearby() {
    return (
        <div className="container">
            <h1>Explore nearby</h1>
            <div className="exploreNearby">
                {exploreNearby.map(({ img, duration, location }) => (
                    <NearbyName
                        img={img}
                        duration={duration}
                        location={location}
                        key={location}
                    />
                ))}
            </div>
        </div>
    )
}
