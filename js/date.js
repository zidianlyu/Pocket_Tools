function update() {
    let mon = moment().format('MMM');
    let yr = moment().format('YYYY');

    let time = moment().format('h:mm:ss');
    let date = moment().format('Do');
    let weekday = moment().format('dddd');
    let ampm = moment().format('a')
    $('.date-specific').text(date);
    $('.date-mon').text(mon);
    $('.date-yr').text(yr);
    $('.date-time').text(time);
    $('.date-weekday').text(weekday);
    $('.date-ampm').text(ampm);
}

setInterval(update, 1000);
