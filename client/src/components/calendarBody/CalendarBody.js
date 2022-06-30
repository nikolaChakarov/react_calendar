import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { InsertEmoticon } from "@mui/icons-material";

import Day from "../day/Day";
import styled from "styled-components";

import { monthMatrix } from "../../utils/monthMatrix";
import { weekDays } from "../../utils/siteDetails";

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
                <div className="c-body-inner">
                    <ul className="week-days-list">
                        {weekDays.map((d, i) => (
                            <li className="week-day-name" key={i}>
                                {d}
                            </li>
                        ))}
                    </ul>
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
                                        handleDayClick={(e) =>
                                            handleDayClick(e, d)
                                        }
                                    />
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            <div className="smile-wrapper">
                <span>Have an appointment! Pick a day...</span>
                <InsertEmoticon className="smile-icon" />
            </div>
        </CalendarBodyContainer>
    );
};

const CalendarBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    padding: 10px;
    margin: 10px;
    box-shadow: var(--main-shadow);
    border-radius: 5px;

    .c-body-wrapper {
        display: flex;
        flex-direction: column;
    }

    .c-body-inner {
        flex-wrap: wrap;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .week-days-list {
        display: flex;
        flex-direction: row;
        gap: 10px;
    }

    .week-day-name {
        flex: 1;
        padding: 10px;
        min-width: 100px;
        color: var(--secondary-color);
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-week-wrapper {
        display: flex;
        gap: 10px;
    }

    .today {
        background: var(--secondary-color);
    }

    .smile-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        padding-top: 10px;
        border-top: 1px groove #fff;
        color: var(--secondary-color);
    }
`;

export default CalendarBody;
