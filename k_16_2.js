var Calendar_k_16_2 = [
    // moeru
    [],
    // moenai
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // akikan
    ['04','04','05','05','06','06','07','07','08','08','09','09','10','10','11','11','12','12','13','13','14','14','15','15'],
    // happou
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // furununo
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // sinbun
    ['04','04','05','05','06','06','07','07','08','08','09','09','10','10','11','11','12','12','13','13','14','14','15','15'],
    // akibin
    ['04','05','06','07','08','09','10','11','12','13','14','15']
];

function moeru_k_16_2() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var month_now = month;
    var date_now = 1;
    for (var i = 0; i < month_days_Number(month) + month_days_Number(month + 1); i++) {
        var dayOfWeek = new Date(year, month_now - 1, date_now).getDay();
        if (i == month_days_Number(month) + 1) {
            if (month_now + 1 >= 13) {
                year++
                month_now = month_now - 11;
            } else {
                month_now++
            }
            date_now = 1;
        }
        if (month_now == 4 && date_now == 27 || month_now == 4 && date_now == 28) {
        } else if (dayOfWeek == 2 || dayOfWeek == 5) {
            if (month_now > 3) {
                Calendar_k_16_2[0].push(month_now + '/' + date_now);
            } else {
                Calendar_k_16_2[0].push(Number(month_now + 12) + '/' + date_now);
            }
        }
        date_now++;
    }
}