import React from 'react'
import './homepage.css'
import Nearby from './nearby/Nearby'
export default function HaomePage() {
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
                        <span>Wishlists curated by Airbnb</span>
                        <br />

                        <br />
                        <a className="btn btn-success getStart" href="/sign_up">
                            Get Start
                        </a>
                    </div>
                </div>
            </div>
            <Nearby />
            
        </div>
    )
}
