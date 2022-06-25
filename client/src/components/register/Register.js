import { useRef, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const { registerUser, user, error, dispatch } = useContext(GlobalContext);

    const usernameEl = useRef();
    const emailEl = useRef();
    const passwordEl = useRef();
    const password2El = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const username = usernameEl.current.value;
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        const password2 = password2El.current.value;

        registerUser({ username, email, password })
    }

    useEffect(() => {
        if (user) {
            dispatch({
                type: 'CLEAR_ERROR'
            });

            navigate('/login');
        }

    }, [error, user])

    console.log(user, '...reg');


    return <RegisterContainer>
        {error && <div className="error-el">{error}</div>}

        <form className="reg-form" onSubmit={onFormSubmit}>
            <label>
                <span>username</span>
                <input
                    type="text"
                    name='username'
                    placeholder='username'
                    ref={usernameEl}
                />
            </label>

            <label>
                <span>email</span>
                <input
                    type="text"
                    name='email'
                    placeholder='email'
                    ref={emailEl}
                />
            </label>

            <label>
                <span>password</span>
                <input
                    type="text"
                    name='password'
                    placeholder='password'
                    ref={passwordEl}
                />
            </label>

            <label>
                <span>confirm password</span>
                <input
                    type="text"
                    name='password2'
                    placeholder='password2'
                    ref={password2El}
                />
            </label>

            <button className="reg-bttn">Regiser</button>
        </form>
    </RegisterContainer>
};

const RegisterContainer = styled.div``;

export default Register;