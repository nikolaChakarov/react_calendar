import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/navigation/Navigation';
import Calendar from './pages/Calendar';

import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

const App = () => {
    return <AppContainer>
        <Navigation />

        <Routes>
            <Route path={'/calendar'} element={<Calendar />} />
            <Route path={'/register'} element={<Register />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/logout'} element={<Logout />} />
        </Routes>
    </AppContainer>
};

const AppContainer = styled.div`
    position: relative
`;

export default App;