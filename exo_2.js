const lastDayOfPreviousMonth = (dates) => {
    for (item of dates) {
        let date = new Date(item);
        let year = date.getFullYear();
        let month = date.getMonth();
        let last_day = new Date(year, month, 0).getDate();
        if (month === 1){
            console.log(new Date(year-1, month-1, last_day).toLocaleString().replace(',', '').slice(0, -3));

        }
        console.log(new Date(year, month-1, last_day).toLocaleString().replace(',', '').slice(0, -3));
    }
}

lastDayOfPreviousMonth(['2004-03-10', '1987-11-04', 'Janv 25 2015'])