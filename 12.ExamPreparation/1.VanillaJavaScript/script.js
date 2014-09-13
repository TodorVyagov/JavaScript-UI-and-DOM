function createCalendar(selector, events) {
    var calendarContainer = document.querySelector(selector);
    console.log(calendarContainer);

    var day = document.createElement('div');
    day.style.margin = 0;
    day.style.padding = 0;
    day.style.display = 'inline-block';
    day.style.width = '150px';
    day.style.height = '150px';
    day.style.border = '1px solid black';

    var title = document.createElement('h3');
    title.style.backgroundColor = '#CCCCCC';
    title.style.borderBottom = '1px solid black';

    var dFrag = document.createDocumentFragment();

    var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (var i = 0; i < 30; i++) {
        /*title: '9 Exam',
			date: '9',
			hour: '10:00',
			duration: '60'*/
        //if (events[i].date === i + 1) {
        //    var head = 
        //}

        var currentDay = daysOfWeek[i % 7];
        var date = title.cloneNode(true);
        date.innerHTML = currentDay + ' ' + (i + 1) + ' June 2014';
        var dayOfMonth = day.cloneNode(true);
        dayOfMonth.appendChild(date);

        if (i % 7 == 0) {
            var lineBreak = document.createElement('br');
            dFrag.appendChild(lineBreak);
        }
        dFrag.appendChild(dayOfMonth);
    }

    calendarContainer.appendChild(dFrag);
}
