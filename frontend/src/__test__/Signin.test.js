import React from 'react'
import { mount, shallow } from 'enzyme'
import SignIn, { SignInTest } from './../components/form/signIn/SignIn'
import enzymeConfig from './enzymeConfig'

describe('User forms', () => {
    it('Should valid email', () => {
        const component = mount(<SignInTest />)
        const email = component.find('[data-testId="email"]')

        email.instance().value = 'hi@hotmail.com'
        email.simulate('change')

        expect(
            component.find('[data-testId="email"]').get(0).props.value
        ).toEqual('hi@hotmail.com')
    })
    it('Should valid password', () => {
        const component = mount(<SignInTest />)
        const password = component.find('[data-testId="password"]')

        password.instance().value = 'hi@hotmail.com'
        password.simulate('change')

        expect(
            component.find('[data-testId="password"]').get(0).props.value
        ).toEqual('hi@hotmail.com')
    })
})
