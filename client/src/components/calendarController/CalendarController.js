import dayjs from "dayjs";
import styled from "styled-components";
import { weekDays } from "../../utils/siteDetails";

import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const CalendarController = ({ setMonthIndex }) => {
    return (
        <CalendarControllerContainer className="calendar-controller">
            <div className="c-controller-wrapper">
                <div className="arrows-wrapper">
                    <ArrowCircleLeft
                        className="c-controller-arrow"
                        onClick={() => setMonthIndex((prev) => prev - 1)}
                    />
                    <ArrowCircleRight
                        className="c-controller-arrow"
                        onClick={() => setMonthIndex((prev) => prev + 1)}
                    />

                    <button
                        className="c-controller-bttn"
                        onClick={() => setMonthIndex(dayjs().month())}
                    >
                        Today
                    </button>
                </div>

                <ul className="week-days-list">
                    {weekDays.map((d, i) => (
                        <li className="week-day-name" key={i}>
                            {d}
                        </li>
                    ))}
                </ul>
            </div>
        </CalendarControllerContainer>
    );
};

const CalendarControllerContainer = styled.div`
    display: flex;
    flex-direction: column;

    .week-days-list {
        display: flex;
        gap: 10px;
    }

    .week-day-name {
        flex: 1;
        padding: 10px;
        border: 1px dashed lightblue;
    }
`;

export default CalendarController;
