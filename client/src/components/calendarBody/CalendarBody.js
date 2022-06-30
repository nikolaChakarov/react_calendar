import { useState, useEffect } from "react";
import dayjs from "dayjs";

import Day from "../day/Day";
import styled from "styled-components";

import { monthMatrix } from "../../utils/monthMatrix";
import ModalDayHours from "../modalDayHours/ModalDayHours";

const CalendarBody = ({ monthIndex }) => {
    const [month, setMonth] = useState([]);
    const [paddingMonthIndex, setPaddingMonthIndex] = useState(monthIndex);

    const [clickedDay, setClickedDay] = useState(null);

    const [showDayModal, setShowDayModal] = useState(false);

    const handleDayClick = (e, d) => {
        if (d.month() !== monthIndex) return;

        setClickedDay(d);

        setShowDayModal(true);
    };

    useEffect(() => {
        setMonth(monthMatrix(monthIndex));
    }, [monthIndex]);

    /* set padding class days */
    useEffect(() => {
        if (monthIndex === dayjs().month()) {
            setPaddingMonthIndex(dayjs().month());
        } else if (monthIndex >= 0 && monthIndex <= 11) {
            setPaddingMonthIndex(monthIndex);
        } else if (monthIndex < 0 && monthIndex % 12 !== 0) {
            setPaddingMonthIndex((monthIndex % 12) + 12);
        } else if (monthIndex > 11) {
            setPaddingMonthIndex(monthIndex % 12);
        } else {
            setPaddingMonthIndex(0);
        }
    }, [monthIndex]);

    return (
        <CalendarBodyContainer className="calendar-body">
            {showDayModal && (
                <ModalDayHours
                    setShowDayModal={setShowDayModal}
                    clickedDay={clickedDay}
                />
            )}

            <div className="c-body-wrapper">
                {month.map((week, i) => (
                    <div className="c-week-wrapper" key={i}>
                        {week.map((d, idx) => {
                            return (
                                <Day
                                    key={idx}
                                    day={d}
                                    inCurrentMonth={`${
                                        d.month() === paddingMonthIndex &&
                                        "in-current-month"
                                    }`}
                                    isToday={`${
                                        dayjs().format("DD/MM/YYYY") ===
                                        d.format("DD/MM/YYYY")
                                            ? "today"
                                            : ""
                                    }`}
                                    handleDayClick={(e) => handleDayClick(e, d)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </CalendarBodyContainer>
    );
};

const CalendarBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px dashed red;

    .c-body-wrapper {
        display: flex;
        flex-direction: column;
        border: 1px dashed green;
        gap: 10px;
    }

    .c-week-wrapper {
        display: flex;
        border: 1px dashed blue;
        gap: 10px;
    }

    .today {
        background: blue;
    }
`;

export default CalendarBody;
