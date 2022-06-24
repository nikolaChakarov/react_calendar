import { Link } from "react-router-dom";
import styled from "styled-components";
import { menu } from '../../utils/siteDetails';

const Navigation = () => {

    return <NavigationContainer>
        <ul className="menu-links">
            {menu.map((el, i) => (
                <li className="menu-link" key={i}>
                    <Link to={el}>{el}</Link>
                </li>
            ))}
        </ul>
    </NavigationContainer>
};

const NavigationContainer = styled.div``;

export default Navigation;