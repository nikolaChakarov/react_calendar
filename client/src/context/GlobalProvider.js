import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const init = {
    user: null,
    isLoading: false,
    error: null,
    events: [],
    addEvent: (eventType, period) => { },
    getMonthEvents: (period) => { },

};

export const GlobalContext = createContext(init);

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, init);

    const addEvent = async (eventType, period) => {
        try {
            let res = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

            // event structute [{ period: 'MM/YYYY', eventsList: []}]

            let neededDay = res.find(el => el.period === period);

            if (!neededDay) {
                neededDay = { period, eventsList: [] };
                neededDay.eventsList.push(eventType);
                res.push(neededDay);
            } else {
                neededDay.eventsList.push(eventType);
            }

            dispatch({
                type: 'ADD_EVENT',
                payload: res
            })

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

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(state.events));

    }, [state.events])

    return <GlobalContext.Provider value={{
        events: state.events,
        addEvent,
        getMonthEvents,
        dispatch
    }}>
        {children}
    </GlobalContext.Provider>
}