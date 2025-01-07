import moment from "moment";


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