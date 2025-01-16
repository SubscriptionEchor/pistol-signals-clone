import moment from "moment";
import toast from "react-hot-toast";

export function formatDateTime(timestamp) {
    const date = moment.unix(timestamp).utc();
    const now = moment().utc();

    let dateText;
    if (date.isSame(now, 'day')) {
        dateText = 'Today';
    } else if (date.isSame(now.clone().subtract(1, 'day'), 'day')) {
        dateText = 'Yesterday';
    } else {
        dateText = date.format('YYYY-MM-DD');
    }

    return `${dateText}, ${date.format('HH:mm')} UTC`;
}



export function getFormattedDateFromTimestamp(targetTimestamp: any, onlyDate = false) {
    const targetDate = moment.unix(targetTimestamp);  // Convert UNIX timestamp to Moment date

    // Format the date to 'DD-MMM-YYYY HH:mm:ss'
    let formattedDate = targetDate.format('DD-MMM-YYYY HH:mm:ss');
    if (onlyDate) {
        formattedDate = targetDate.format('DD-MMM-YYYY');
    }

    return formattedDate;
}


export const validateTelegramId = (value) => {
    value = value.trim()

    if (!value) {
        return 'Please enter your Telegram username'
    }
    if (!RegExp('^@?[a-z0-9_]{5,32}$').test(value)) {
        return 'Invalid Telegram username format'
    }
    if (value.length < 5) {
        return 'Telegram username must be at least 5 characters long'
    }
    return false
};