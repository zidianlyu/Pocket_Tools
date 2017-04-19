function update() {
    let day = moment().format('ddd, MMM-D-YYYY');
    let time = moment().format('h:mm:ssA');
    $('.clock-day').text(day);
    $('.clock-time').text(time);
}

setInterval(update, 1000);
