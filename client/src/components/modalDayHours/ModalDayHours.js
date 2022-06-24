import { useContext, useRef } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';
import { Close } from '@mui/icons-material';


const ModalDayHours = ({ setShowDayModal, clickedDay }) => {
    const { getMonthEvents, addEvent, events } = useContext(GlobalContext);

    const inputEl = useRef();

    const handleClick = (e) => {
        e.preventDefault();

        const eventType = inputEl.current.value;
        const period = clickedDay.format('DD/MM/YYYY');

        addEvent(eventType, period);
    };

    console.log(events);


    return <ModalDayHoursContainer>
        <div className="m-day-hours-wrapper">
            <Close onClick={() => setShowDayModal(false)} />
            <input type="text" ref={inputEl} />

            <button onClick={handleClick}>Add</button>
        </div>
    </ModalDayHoursContainer>
};

const ModalDayHoursContainer = styled.div`

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);

    .m-day-hours-wrapper {
        width: 75%;
        padding: 20px;
        background: #fff;
    }
`;

export default ModalDayHours;