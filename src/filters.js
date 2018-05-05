export default {
    minutesToHours(value, isAbbreviation = false) {
        let hourText = isAbbreviation ? 'sa' : 'saat';
        let minuteText = isAbbreviation ? 'dk' : 'dakika';
        if (value >= 60) {
            return `${Math.ceil(value / 60)} ${hourText}`;
        } else {
            return `${value} ${minuteText}`;
        }
    }
};
