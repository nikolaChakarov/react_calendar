import React, { useContext, useRef, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import styled from 'styled-components';
import { Close, ArrowDropDown } from '@mui/icons-material';

import emailjs from '@emailjs/browser';


const ModalDayHours = ({ setShowDayModal, clickedDay }) => {
    const { addEvent, events, checkAvailability, user } = useContext(GlobalContext);

    const formEl = useRef();

    const [selectClick, setSelectClick] = useState(false);

    const [appointmentInfo, setAppointmentInfo] = useState({
        email: user.email,
        phone: '',
        hour: '',
        description: '',
        service: 'woman hair cut',
    });

    const handleAddEvent = (e) => {
        e.preventDefault();

        const period = clickedDay.format('DD/MM/YYYY');

        const userEventHour = {
            email: user.email,
            time: appointmentInfo.hour,
            service: appointmentInfo.service
        }

        addEvent(period, userEventHour);
    };

    const handleAppointment = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v5xahqb', 'template_3cenj7l', formEl.current, 'RwSIL8-81at69Cyrb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    const handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setAppointmentInfo(prev => ({
            ...prev,
            [inputName]: inputValue
        }));
    }

    const handleSelectChange = (service) => {
        setAppointmentInfo({
            ...appointmentInfo,
            service
        })
    }

    const handleHourCheck = (e) => {
        console.log(e.target.id);

        setAppointmentInfo({
            ...appointmentInfo,
            hour: e.target.id
        });
    }

    const [hours, setHours] = useState([]);
    const [takenHours, setTakenHours] = useState([]);

    const createHours = () => {
        const data = [];
        for (let i = 9; i < 18; i++) {
            let timeString = `${i < 10 ? '0' + i : i} - ${i + 1}`
            data.push({
                date: clickedDay.format('DD/MM/YYYY'),
                hour: timeString
            });
        }

        setHours(data);
    }

    const checkTakenHours = (date) => {
        let eventsData = events.filter(el => el.period === clickedDay.format('DD/MM/YYYY'));

        let takenHoursTemp = [];
        eventsData[0]?.eventsList.forEach(el => {
            takenHoursTemp.push(el.time);
        });

        setTakenHours(takenHoursTemp);
    }

    console.log(takenHours);

    useEffect(() => {
        checkTakenHours();
        createHours();
        checkAvailability(clickedDay);
    }, [events])


    // console.log(takenHours);

    return <ModalDayHoursContainer>
        <div className="m-day-hours-wrapper">
            <div className="day-modal-info">
                {clickedDay.format('DD/MM/YYYY')}
            </div>

            <Close onClick={() => setShowDayModal(false)} />

            <form
                className="form-email"
                onSubmit={handleAppointment}
                ref={formEl}
            >

                {/* we need this input because of the emaljs library. we send a form, and turns out it takes all name attributes. */}
                <input
                    type="text"
                    name={'hour'}
                    value={appointmentInfo.hour}
                    hidden
                    onChange={handleHourCheck}
                />
                <label>
                    <span>email:</span>
                    <input
                        type="text"
                        name='email'
                        placeholder='email'
                        value={appointmentInfo.email}
                        onChange={handleInputChange}
                    />
                </label>

                <label>
                    <span>mobile:</span>
                    <input
                        type="text"
                        name='phone'
                        placeholder='mobile number'
                        value={appointmentInfo.phone}
                        onChange={handleInputChange}
                    />
                </label>

                <div className="custom-select" onClick={() => setSelectClick(!selectClick)}>
                    <div className="cs-visible-wrapper">
                        <span>{appointmentInfo.service}</span>
                        <ArrowDropDown />
                        <input
                            type="text"
                            name={'service'}
                            value={appointmentInfo.service}
                            hidden
                            onChange={handleInputChange} />
                    </div>

                    {selectClick && <CustomSelect
                        currentSelect={appointmentInfo.service}
                        handleSelectChange={handleSelectChange}
                    />}
                </div>

                <hr />

                <ul className="hours-list">
                    {/* we need this input because of the emaljs library. we send a form, and turns out it takes all name attributes. */}
                    <input
                        type="text"
                        name="day"
                        value={clickedDay.format('DD/MM/YYYY')}
                        onChange={handleInputChange}
                        hidden
                    />
                    {hours.map((el, i) => (
                        <React.Fragment key={i}>
                            <li className="hour-choise">
                                <label>
                                    <span>{el.hour}</span>
                                    <input
                                        type="radio"
                                        id={el.hour}
                                        name='time-zone'
                                        onChange={handleHourCheck}
                                        disabled={takenHours.includes(el.hour)}
                                    />
                                </label>
                            </li>

                        </React.Fragment>
                    ))}

                </ul>

                <button type='button' onClick={handleAddEvent}>Add</button>

                <button type='submit'>Book Appointment</button>
            </form>
        </div>
    </ModalDayHoursContainer>
};

const CustomSelect = ({ currentSelect, handleSelectChange }) => {
    let services = ['men hair cut', 'woman hair cut', 'kid hair cut', 'dying hair', 'blow dry hair']

    services = services.filter(el => el !== currentSelect);

    const handleServiceClick = (service) => {
        handleSelectChange(service);
    }

    return <ul className="cs-hidden-wrapper">
        {services.map((el, i) => (
            <li onClick={() => handleServiceClick(el)} className='service-item' key={i}>{el}</li>
        ))}
    </ul>
}

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

    .form-email {
        display: flex;
        flex-direction: column;

        label {
            display: flex;
            flex-direction: column;
        }
    }

    .custom-select {
        border: 1px dashed red;
        width: 50%;
        position: relative;

        .cs-visible-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .cs-hidden-wrapper {
            position: absolute;
            border: 1px dashed green;
            background: #fff;
        }
    }
`;

export default ModalDayHours;