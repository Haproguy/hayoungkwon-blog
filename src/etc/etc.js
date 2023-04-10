export function dateFormatYDM() {
    const date = new Date();

    const formatDate = new Intl.DateTimeFormat('kr').format(date);

    return formatDate;
}

