import React from 'react'
import { Route } from 'react-router-dom'
import SignUp from '../components/form/signUp/SignUp'
import HomePage from '../components/HomePage/HomePage'
import Header from './../components/header/Header'
export default function Application() {
    return (
        <>
            <Header />
            <div className="container">
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/sign_up">
                    <SignUp />
                </Route>
            </div>
        </>
    )
}
