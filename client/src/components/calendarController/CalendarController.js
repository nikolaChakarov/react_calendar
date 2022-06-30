import dayjs from "dayjs";
import styled from "styled-components";

import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const CalendarController = ({ setMonthIndex, monthIndex }) => {
    const year = dayjs().year();
    const day = dayjs(new Date(year, monthIndex, 1));

    return (
        <CalendarControllerContainer className="calendar-controller">
            <div className="arrows-wrapper">
                <ArrowCircleLeft
                    className="c-controller-arrow"
                    onClick={() => setMonthIndex((prev) => prev - 1)}
                />
                <ArrowCircleRight
                    className="c-controller-arrow"
                    onClick={() => setMonthIndex((prev) => prev + 1)}
                />
            </div>

            <div className="c-current-month">{day.format("MMMM YYYY")}</div>

            <div className="bttn-wrapper">
                <button
                    className="c-controller-bttn"
                    onClick={() => setMonthIndex(dayjs().month())}
                >
                    Today
                </button>
            </div>
        </CalendarControllerContainer>
    );
};

const CalendarControllerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;

    .arrow-wrapper {
        display: flex;
    }

    .c-controller-arrow {
        font-size: 40px;
        color: var(--main-color);
    }

    .c-controller-bttn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background: var(--secondary-color);
        color: #fff;
        box-shadow: var(--main-shadow);
    }

    .c-current-month {
        font-weight: 700;
        color: var(--main-color);
    }
`;

export default CalendarController;
