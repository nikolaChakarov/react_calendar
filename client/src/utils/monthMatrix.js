import dayjs from "dayjs";

export const monthMatrix = (month = dayjs().month()) => {

    const year = dayjs().year();
    let firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

    // index 0 to 6
    let padding_Days = - firstDayOfTheMonth + 1;

    const daysMatrix = new Array(6).fill([]).map(el => {

        return new Array(7).fill(null).map(d => {
            padding_Days++;

            return dayjs(new Date(year, month, padding_Days));
        })

    });

    return daysMatrix;
};

