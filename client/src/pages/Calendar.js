import { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import CalendarController from "../components/calendarController/CalendarController";
import CalendarBody from "../components/calendarBody/CalendarBody";

const Calendar = () => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return (
        <CalendarContainer className="calendar-container">
            <CalendarController
                setMonthIndex={setMonthIndex}
                monthIndex={monthIndex}
            />
            <CalendarBody monthIndex={monthIndex} />

            {/* <ul>
                <div className="c-inner">
                    {new Array(100).fill("").map((el, i) => (
                        <div key={i} className="c-row">
                            {new Array(20).fill("").map((e, idx) => (
                                <p key={idx}>{idx}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </ul> */}
        </CalendarContainer>
    );
};

const CalendarContainer = styled.div`
    max-width: 1024px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    overflow: scroll;

    &::-webkit-scrollbar,
    *::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 576px) {
        margin: 15px;
    }
`;

export default Calendar;
