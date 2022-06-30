import { useState } from "react";
import dayjs from "dayjs";
import styled from "styled-components";

import CalendarController from "../components/calendarController/CalendarController";
import CalendarBody from "../components/calendarBody/CalendarBody";

const Calendar = () => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());

    return (
        <CalendarContainer className="calendar-container">
            {/* <CalendarController setMonthIndex={setMonthIndex} />
            <CalendarBody monthIndex={monthIndex} /> */}

            <ul>
                <div className="inner">
                    {new Array(100).fill("").map((el, i) => (
                        <div key={i} className="row">
                            {new Array(20).fill("").map((e, idx) => (
                                <p key={idx}>{idx}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </ul>
        </CalendarContainer>
    );
};

const CalendarContainer = styled.div`
    /* max-width: 1024px; */
    display: flex;
    /* margin: 20px auto; */
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    border: 2px dashed green;
    overflow: scroll;

    .row {
        border: 1px dashed blue;
        margin: 5px;
        padding: 2px;
        display: flex;
        background: lightcoral;

        p {
            border: 1px dashed;
            margin: 5px;
            padding: 2px;
        }
    }

    @media (max-width: 576px) {
        ul {
            display: flex;
            flex-direction: column;
        }

        .inner {
            flex-wrap: wrap;
            overflow: scroll;
            display: flex;
            flex-direction: column;
        }
    }
`;

export default Calendar;
