import React from 'react'
import ReactDom from 'react-dom'
import { SignInTest } from './../components/form/signIn/SignIn'

describe('User forms', () => {
    it('Should sign in', () => {
        const div = document.createElement('div')
        ReactDom.render(<SignInTest />, div)
    })
})
