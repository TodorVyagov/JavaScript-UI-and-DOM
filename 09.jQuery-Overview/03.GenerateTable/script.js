$(document).ready(function () {
    var students = [{
        firstName: 'Peter',
        lastName: 'Ivanov',
        grade: 3
    },
    {
        firstName: 'Nikolay',
        lastName: 'Nikolov',
        grade: 2
    },
    {
        firstName: 'Milena',
        lastName: 'Grigorova',
        grade: 6
    },
    {
        firstName: 'Gergana',
        lastName: 'Borisova',
        grade: 12
    },
    {
        firstName: 'Boyko',
        lastName: 'Petrov',
        grade: 7
    }];

    generateTable(students);

    function generateTable(data) {
        var table = $('<table>');
        var thead = $('<tr>');
        for (var prop in data[0]) {
            console.log(prop);
            console.log(data[0][prop]);
            var th = $('<th>')
                    .html(prop.toUpperCase())
                    .css({
                        'border': '1px solid black',
                        'text-align': 'center'
                    });
            thead.append(th);
        }
        table.append(thead);


        for (var i = 0, len = data.length; i < len; i++) {
            var row = $('<tr>');

            for (var prop in data[i]) {
                var td = $('<td>')
                    .html(data[i][prop])
                    .css({
                        'border': '1px solid black',
                        'text-align': 'center'
                    });

                row.append(td);
            }

            table.append(row);
        }

        table.css('border-collapse', 'collapse');

        $('body').append(table);
    }
});