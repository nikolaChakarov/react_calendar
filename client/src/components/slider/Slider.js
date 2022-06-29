import styled from 'styled-components';

import { sliderImages } from '../../utils/siteDetails';

import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';


const Slider = ({ imagesArr }) => {

    return <SliderContainer>

        <div className="slider-wrapper">
            <img src={sliderImages[0]} alt="" />
        </div>

    </SliderContainer>

};

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    .slider-wrapper {
        flex: 1;
        display: flex;
        max-height: 500px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default Slider;