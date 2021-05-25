import React from 'react'
import { mount, shallow } from 'enzyme'
import SignIn, { SignInTest } from './../components/form/signIn/SignIn'
import enzymeConfig from './enzymeConfig'

describe('User forms', () => {
    it('Should sign in', () => {
        const component = mount(<SignInTest />)
        const email = component.find('[data-testid="email"]')
        
        email.instance().value = 'hi@hotmail.com'
        email.simulate('change')
        expect(
            component.find('[data-testid="email"]').get(0).props.value
        ).toEqual('hi@hotmail.com')
    })
})
