import React from 'react'
import { Route } from 'react-router-dom'

import SignIn from '../form/signIn/SignIn'
import SignUp from '../form/signUp/SignUp'
import HomePage from '../HomePage/HomePage'
import Header from '../header/Header'
import NewListing from './../hostPage/NewListing'
import Cards from './../card/Card'
import Find from './../find/Find'
import AdminForm from '../form/adminForm/AdminForm'
import UsersList from '../usersList/UsersList'
import MyApartments from '../myapartments/MyApartments'
import OrderList from '../OrderList/OrderList'

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
                <Route exact path="/add_new">
                    <NewListing />
                </Route>
                <Route exact path="/results">
                    <Find />
                </Route>
                <Route exact path="/my_apartments">
                    <MyApartments />
                </Route>
                <Route exact path="/admin">
                    <AdminForm />
                </Route>
                <Route exact path="/users">
                    <UsersList />
                </Route>
                <Route exact path="/order_list">
                    <OrderList />
                </Route>
            </div>
        </>
    )
}
