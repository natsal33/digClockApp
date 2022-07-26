function logDateTime () {
    let dateTime = new Date();
    const dateTimeString = dateTime.toString();
    const date = dateTimeString.substring(0, 16);
    const time = dateTimeString.substring(16,24);
    let dateString = dateFormat(date);
    let timeString = timeFormat(time);
    console.log(dateString);
    console.log(timeString);
    document.getElementById('time').innerHTML = timeString;
    document.getElementById('date').innerHTML = dateString;
    document.getElementById('heading').innerHTML = 'Simply Clocky';
}

function dateFormat(date){
    let dayOfTheWeek = '';
    let month = '';
    let inputDayOfWeek = date.substring(0,3);
    let inputMonth = date.substring(4,7);
    if (date.substring(8,9) === '0'){
        dayOfMonth = date.substring(9,10);
    } else {
        dayOfMonth = date.substring(8, 10);
    }
    let year = date.substring(11,15);


    switch(inputDayOfWeek){
        case 'Mon':
            dayOfTheWeek = 'Monday';
            break;
        case 'Tue':
            dayOfTheWeek = 'Tuesday';
            break;
        case 'Wed':
            dayOfTheWeek = 'Wednesday';
            break;
        case 'Thu':
            dayOfTheWeek = 'Thursday';
            break;
        case 'Fri':
            dayOfTheWeek = 'Friday';
            break;
        case 'Sat':
            dayOfTheWeek = 'Saturday';
            break;
        case 'Sun':
            dayOfTheWeek = 'Sunday';
    }

    switch(inputMonth) {
        case 'Jan':
            month = 'January';
            break;
        case 'Feb':
            month = 'February';
            break;
        case 'Mar':
            month = 'March';
            break;
        case 'Apr':
            month = 'April';
            break;
        case 'May':
            month = 'May';
            break;
        case 'Jun':
            month = 'June';
            break;
        case 'Jul':
            month = 'July';
            break;
        case 'Aug':
            month = 'August';
            break;
        case 'Sep':
            month = 'September';
            break;
        case 'Oct':
            month = 'October';
            break;
        case 'Nov':
            month = 'November';
            break;
        case 'Dec':
            month = 'December';
            break;
    }


    switch(dayOfMonth){
        case '1','21','31':
            dayOfMonth = dayOfMonth + 'st';
            break;
        case '2','22':
            dayOfMonth = dayOfMonth + 'nd';
            break;
        case '3','23':
            dayOfMonth = dayOfMonth + 'rd';
            break;
        default:
            dayOfMonth = dayOfMonth + 'th';
            break;
    }
    return(dayOfTheWeek + ', ' + month + ' ' + dayOfMonth + ' ' + year);
}

function timeFormat(time){
    let hour = time.substring(0,2);
    let minute = time.substring(3,5);
    let second = time.substring(6,8);
    let amPm = 'AM';
    if(hour > 12) {
        hour = hour - 12;
        amPm = 'PM';
    }
    return (hour + ':' + minute + ':' + second + ' ' + amPm); 
}

setInterval(logDateTime, 100);
