import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalProvider";

const Logout = () => {
    const navigate = useNavigate();

    const { dispatch, user } = useContext(GlobalContext);

    useEffect(() => {

        localStorage.removeItem('user');
        dispatch({
            type: 'LOGOUT'
        });

        if (!user) {
            navigate('/login');
        }

    }, [user])


    return null;
}

export default Logout;