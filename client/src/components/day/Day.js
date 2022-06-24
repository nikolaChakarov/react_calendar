import styled from 'styled-components';

const Day = ({ day, inCurrentMonth, isToday, handleDayClick }) => {

    return <DayContainer
        inCurrentMonth={inCurrentMonth}
        className={isToday}
        onClick={handleDayClick}
    >
        <div className="day-header">
            <span>{day.format('DD/MM/YYYY')}</span>
        </div>
    </DayContainer>
};

const DayContainer = styled.div`
    flex: 1;
    padding: 10px;
    border: 1px dashed lightsalmon;
    background: ${({ inCurrentMonth }) => inCurrentMonth === 'in-current-month' && 'red'};
    cursor:  ${({ inCurrentMonth }) => inCurrentMonth === 'in-current-month' && 'pointer'};

  
`

export default Day;