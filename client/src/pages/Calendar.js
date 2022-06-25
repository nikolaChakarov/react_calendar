import { useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';



import CalendarController from '../components/calendarController/CalendarController';
import CalendarBody from '../components/calendarBody/CalendarBody';

const Calendar = () => {

    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return <CalendarContainer>
        <CalendarController setMonthIndex={setMonthIndex} />
        <CalendarBody monthIndex={monthIndex} />
    </CalendarContainer>

};

const CalendarContainer = styled.div``;

export default Calendar;