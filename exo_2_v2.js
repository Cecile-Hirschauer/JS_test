const lastDayOfPreviousMonth = (dates) => {
    for (item of dates) {
        let date = new Date(item);
        let parsed_date = Date.parse(item);
        let day = date.getDate();
        console.log(new Date(parsed_date - (day * 86400000)).toLocaleString().replace(',', '').slice(0, -3))
    }
}


lastDayOfPreviousMonth(['2004-03-10', '1987-11-04', 'Janv 25 2015'])