import { useRef, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { loginUser, user, error, dispatch } = useContext(GlobalContext);

    const emailEl = useRef();
    const passwordEl = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const email = emailEl.current.value;
        const password = passwordEl.current.value;

        loginUser({ email, password })
    }

    useEffect(() => {
        if (user) {
            dispatch({
                type: 'CLEAR_ERROR'
            });

            navigate('/calendar');
        }

    }, [user, error])

    return <LoginContainer>
        {error && <div className="error-el">{error}</div>}

        <form className="log-form" onSubmit={onFormSubmit}>

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

            <button className="log-bttn">Login</button>
        </form>
    </LoginContainer>
};

const LoginContainer = styled.div``;

export default Login;