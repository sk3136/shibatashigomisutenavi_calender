var Calendar_e_7 = [
    // moeru
    [],
    // moenai
    ['4/','5/','6/','7/','8/','9/','10/','11/','12/','13/','14/','15/'],
    // akikan
    ['4/','4/','5/','5/','6/','6/','7/','7/','8/','8/','9/','9/','10/','10/','11/','11/','12/','12/','13/','13/','14/','14/','15/','15/'],
    // happou
    ['4/','5/','6/','7/','8/','9/','10/','11/','12/','13/','14/','15/'],
    // furununo
    ['4/','5/','6/','7/','8/','9/','10/','11/','12/','13/','14/','15/'],
    // sinbun
    ['4/','4/','5/','5/','6/','6/','7/','7/','8/','8/','9/','9/','10/','10/','11/','11/','12/','12/','13/','13/','14/','14/','15/','15/'],
    // akibin
    ['4/','5/','6/','7/','8/','9/','10/','11/','12/','13/','14/','15/']
];

function moeru_e_7() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var month_now = month;
    var date_now = 1;
    for (var i = 0; i < month_days_Number(month) + month_days_Number(month + 1); i++) {
        var dayOfWeek = new Date(year, month_now - 1, date_now).getDay();
        if (i == month_days_Number(month)) {
            if (month_now + 1 >= 13) {
                year++
                month_now = month_now - 11;
            } else {
                month_now++
            }
            date_now = 1;
        }
        if (month_now == 4 && date_now == 27 || month_now == 4 && date_now == 28) {
        } else if (dayOfWeek == 2 || dayOfWeek == 4 || dayOfWeek == 6) {
            if (month_now > 3) {
                Calendar_e_7[0].push(month_now + '/' + date_now);
            } else {
                Calendar_e_7[0].push(Number(month_now + 12) + '/' + date_now);
            }
        }
        date_now++;
    }
}