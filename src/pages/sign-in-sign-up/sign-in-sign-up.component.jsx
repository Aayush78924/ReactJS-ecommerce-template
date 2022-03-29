import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import styled from 'styled-components'

import './sign-in-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <Container >
        <SignIn />
        <SignUp />
    </Container>
)

const Container=styled.div`
display:flex;
flex-wrap: wrap;
justify-content:space-between;
padding:50px;
flex-wrap: wrap;

@media (max-width: 500px)
{
    justify-content:center;
    padding:10px;
}

`

export default SignInAndSignUp;
