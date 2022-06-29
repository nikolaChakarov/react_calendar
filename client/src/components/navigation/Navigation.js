import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { menu } from '../../utils/siteDetails';

import useWidth from "../../hooks/useWidth";

import { Menu } from '@mui/icons-material';


const Navigation = () => {
    const { user } = useContext(GlobalContext);
    const width = useWidth();

    return width > 576 ? <NavDesktop user={user} /> : <NavMobile user={user} />;

};

const NavDesktop = ({ user }) => {
    return <NavigationContainerDesktop>
        <div className="nav-desktop-inner">
            <div className="logo">
                <Link to={'/home'}>HEP Studio</Link>
            </div>
            <ul className="menu-links">
                {user ? menu.map((el, i) => {
                    return el.logged && <li key={i}>
                        <Link to={`/${el.link}`}>{el.link}</Link>
                    </li>
                }) : menu.map((el, i) => {
                    return !el.logged && <li key={i}>
                        <Link to={`/${el.link}`}>{el.link}</Link>
                    </li>
                })}
            </ul>
        </div>
    </NavigationContainerDesktop>
}


const NavMobile = ({ user }) => {

    const [showMenu, setShowMenu] = useState(false);

    return <NavContainerMobile>
        <div className="mobile-nav-top">
            <div className="logo">
                <Link to='/home'>HEP Studio</Link>
            </div>
            <Menu
                className="menu-icon"
                onClick={() => setShowMenu(!showMenu)}
            />
        </div>
        {
            showMenu && <ul className="mobile-menu-links">
                {user ? menu.map((el, i) => {
                    return el.logged && <li className="mobile-menu-link"
                        key={i}
                        onClick={() => setShowMenu(false)}

                    >
                        <Link to={`/${el.link}`}>{el.link}</Link>
                    </li>
                }) : menu.map((el, i) => {
                    return !el.logged && <li className="mobile-menu-link"
                        key={i}
                        onClick={() => setShowMenu(false)}
                    >
                        <Link to={`/${el.link}`}>{el.link}</Link>
                    </li>
                })}
            </ul>
        }
    </NavContainerMobile>
}

const NavigationContainerDesktop = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background: var(--main-color);

    .nav-desktop-inner {
        display: flex;
        flex: 1;
        max-width: 1024px;
    }

    a {
        color: #fff;
        text-transform: capitalize;
        font-weight: 400;
        font-size: 14px;
    }

    .logo {
        flex: 1;
        font-weight: bold;
        color: #fff;

        a {
            font-weight: 700;
        }
    }

    .menu-links {
        display: flex;
        gap: 10px;
    }
`;

const NavContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--main-color);
    color: #fff;
    position: relative;

    .logo a {
        color: #fff;
        font-weight: 500;
    }
    
    .mobile-nav-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: 1px groove #fff;
    }
    
    .mobile-menu-links {
        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        box-shadow: var(--main-shadow);
        position: absolute;
        top: 55px;
        left: 0;
        right: 0;
        
        .mobile-menu-link {
            display: flex;
        }
        
        a {
            flex: 1;
            border-bottom: 1px solid var(--main-color);
            padding: 15px;
            color: #fff;
            text-align: center;
            font-variant: small-caps;
        }
    }
`

export default Navigation;