function update() {
    let day = moment().format('MMM-YYYY');
    let time = moment().format('h:mm:ss');
    let date = moment().format('D');
    let weekday = moment().format('ddd');
    let ampm = moment().format('a')
    $('.date-day').text(day);
    $('.date-time').text(time);
    $('.date-specific').text(date);
    $('.date-weekday').text(weekday);
    $('.date-ampm').text(ampm);
}

setInterval(update, 1000);
