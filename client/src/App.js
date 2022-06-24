import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './components/navigation/Navigation';
import Calendar from './pages/Calendar';

const App = () => {
    return <AppContainer>
        <Navigation />

        <Routes>
            <Route path={'/calendar'} element={<Calendar />} />
        </Routes>
    </AppContainer>
};

const AppContainer = styled.div`
    position: relative
`;

export default App;