import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const init = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isLoading: false,
    error: null,
    events: localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [],
    dailyHours: [],
    addEvent: (period, eventType) => { },
    getMonthEvents: (period) => { },
    registerUser: (userInfo) => { },
    loginUser: (userInfo) => { },
    logout: () => { },
    checkAvailability: (day) => { }
};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, init);

    const addEvent = async (period, eventType) => {
        try {

            // event structute [{ period: 'MM/YYYY', eventsList: [ev]}]
            // ev -> {email, hour, type}

            let neededDay = state.events.find(el => el.period === period);

            if (!neededDay) {
                neededDay = { period, eventsList: [] };
                neededDay.eventsList.push(eventType);
                state.events.push(neededDay);
            } else {
                neededDay.eventsList.push(eventType);
            }

            localStorage.setItem('events', JSON.stringify(state.events));

            dispatch({
                type: 'ADD_EVENT',
                payload: state.events
            });

        } catch (err) {
            console.log(err);
        }
    }

    const getMonthEvents = async (period) => {
        try {
            let res = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

            // event structute [{ period: 'MM/YYYY', eventsList: []}]

            let eventsForCurrentMonth = res.filter(el => el.period === period);

            dispatch({
                type: 'GET_MONTH_EVENTS',
                payload: eventsForCurrentMonth
            })

        } catch (err) {
            console.log(err);
        }
    }

    const registerUser = (userInfo) => {

        try {
            // check if user exists
            const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null;

            if (!users) {
                localStorage.setItem('users', JSON.stringify([userInfo]))
                localStorage.setItem('user', JSON.stringify(userInfo))
                dispatch({
                    type: 'REGISTER',
                    payload: userInfo
                });
            } else if (!users.find(el => el.email === userInfo.email)) {
                let users = JSON.parse(localStorage.getItem('users'));
                users.push(userInfo);
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('user', JSON.stringify(userInfo))

                dispatch({
                    type: 'REGISTER',
                    payload: userInfo

                });
            } else {
                dispatch({
                    type: 'ERROR',
                    payload: 'email is allready taken'
                });
            }


        } catch (error) {
            console.log(error);
        }
    }

    const loginUser = (userInfo) => {

        try {
            // check if user exists
            const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null;

            if (!users) {
                dispatch({
                    type: 'ERROR',
                    payload: 'no such an user'
                });
            } else if (!users.find(el => el.email === userInfo.email)) {
                dispatch({
                    type: 'ERROR',
                    payload: 'invalid credenials'
                });
            } else {
                dispatch({
                    type: 'LOGIN',
                    payload: userInfo
                });
                localStorage.setItem('user', JSON.stringify(userInfo))

            }


        } catch (error) {
            console.log(error);
        }
    }

    const checkAvailability = (dayObj) => {
        const day = dayObj.format('DD/MM/YYYY');

        try {

            // event structute [{ period: 'MM/YYYY', eventsList: []}]
            const eventsForSelectedDay = state.events.find(el => el.period === day); // []

            dispatch({
                type: 'CHECK_AVAILABILITY',
                payload: eventsForSelectedDay
            })

        } catch (err) {
            console.log(err);
        }

    }

    return <GlobalContext.Provider value={{
        events: state.events,
        user: state.user,
        error: state.error,
        dailyHours: state.dailyHours,
        checkAvailability,
        addEvent,
        getMonthEvents,
        registerUser,
        loginUser,
        dispatch
    }}>
        {children}
    </GlobalContext.Provider>
}