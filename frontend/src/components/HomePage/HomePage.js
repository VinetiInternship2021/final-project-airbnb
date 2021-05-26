import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import Nearby from './nearby/Nearby'
export default function HomePage() {
    return (
        <div>
            <div className="home">
                <div className="container homePageImg">
                    <div>
                        <h1 className="homeWelcome h1">
                            The <br />
                            Greatest
                            <br /> Outdoors
                        </h1>
                        <span>Wishlists curated by Airbnbnbnb</span>
                        <br />
                        <br />
                        <Link
                            className="btn btn-success getStart"
                            to="/sign_up"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
            <Nearby />
        </div>
    )
}
