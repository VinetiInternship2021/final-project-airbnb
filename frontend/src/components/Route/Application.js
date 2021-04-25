import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from '../form/signIn/SignIn'
import SignUp from '../form/signUp/SignUp'
import HomePage from '../HomePage/HomePage'
import Header from '../header/Header'
export default function Application() {
    return (
        <>
            <Header />

            <Route exact path="/">
                <HomePage />
            </Route>
            <div className="container">
                <Route exact path="/sign_up">
                    <SignUp />
                </Route>
                <Route exact path="/sign_in">
                    <SignIn />
                </Route>
            </div>
        </>
    )
}
