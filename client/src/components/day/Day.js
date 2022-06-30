import styled from "styled-components";

const Day = ({ day, inCurrentMonth, isToday, handleDayClick }) => {
    return (
        <DayContainer
            inCurrentMonth={inCurrentMonth}
            className={isToday}
            onClick={handleDayClick}
        >
            <div className="day-header">
                <span>{day.format("DD")}</span>
                <span>{day.format("MMM")}</span>
            </div>
        </DayContainer>
    );
};

const DayContainer = styled.div`
    flex: 1;
    padding: 10px;
    background: ${({ inCurrentMonth }) =>
        inCurrentMonth === "in-current-month" && "var(--main-color)"};
    cursor: ${({ inCurrentMonth }) =>
        inCurrentMonth === "in-current-month" && "pointer"};

    color: ${({ inCurrentMonth }) =>
        inCurrentMonth === "in-current-month" ? "#fff" : "#dedede"};
    border-radius: 5px;

    .day-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export default Day;
