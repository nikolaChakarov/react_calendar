import styled from 'styled-components';

import Slider from '../../components/slider/Slider';

const Home = () => {

    return <HomeContainer>
        <Slider />
    </HomeContainer>
};

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1024px;
    margin: 0 auto;
`;

export default Home;