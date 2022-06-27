import { useRef, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InsertEmoticon } from '@mui/icons-material';



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

        <div className="no-have-account">
            <h2>Please, login here or...</h2>
            <div className="no-have-account-inner">
                <span>No have an account? Okie Dokie</span>
                <InsertEmoticon className='smile-icon' />
                <Link to={'/register'}>Register here</Link>
            </div>
        </div>

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

const LoginContainer = styled.div`
  display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    color: var(--primary-color);

    .no-have-account {
        margin: 30px 0;

        .smile-icon {
            color: var(--secondary-color);
        }

        .no-have-account-inner {
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


    .log-form {
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
            font-weight: 300;
            margin-bottom: 5px;
        }

        input {
            padding: 5px;
            border: 1px solid var(--secondary-color);
            border-radius: 5px; 
        }

        .log-bttn {
            padding: 10px;
            border: none;
            background: var(--main-color);
            color: #fff;
            border-radius: 5px; 
        }
    }
`;

export default Login;