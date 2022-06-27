import { useRef, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { InsertEmoticon } from '@mui/icons-material';

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

        <div className="have-account">
            <h2>Please, register here or...</h2>
            <div className="have-account-inner">
                <span>Have an account? Okie Dokie</span>
                <InsertEmoticon className='smile-icon' />
                <Link to={'/login'}>Login here</Link>
            </div>
        </div>

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
                    placeholder='confirm password'
                    ref={password2El}
                />
            </label>

            <button className="reg-bttn">Regiser</button>
        </form>
    </RegisterContainer>
};

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    color: var(--primary-color);

    .have-account {
        margin: 30px 0;

        .smile-icon {
            color: var(--secondary-color);
        }

        .have-account-inner {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        h2 {
            margin-bottom: 15px;
        }

        a {
            color: var(--main-color);
            margin-right: 10px;
            font-weight: 700;
        }
    }

    .reg-form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 20px;
        border-radius: 5px;
        box-shadow: var(--main-shadow);
        gap: 10px;

        label {
            display: flex;
            flex-direction: column;
        }

        span {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        input {
            padding: 5px;
            border: 1px solid var(--secondary-color);
            border-radius: 5px; 
        }

        .reg-bttn {
            padding: 10px;
            border: none;
            background: var(--main-color);
            color: #fff;
            border-radius: 5px; 
        }
    }
`;

export default Register;