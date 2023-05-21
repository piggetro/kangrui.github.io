function myFunction()
{
    var userInput = document.querySelector('#more');
    var message = document.querySelector('.tasks');
    message.innerHTML = userInput.value;
    console.log(userInput.value);
}
// stores today's date
var date = new Date(); 
function calendar()
{
    date.setDate(1);
    //the month days
    var monthDays = document.querySelector('.days');
    //gets lastday of this month
    var lastDay = new Date(date.getFullYear(), date.getMonth()+ 1, 0);
    //prev last day
    var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0);
    //next month days
    var nextMonthday = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var nextDays = (7 - nextMonthday.getDay() - 1);
    //array to store the month
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    //to display today's month
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    //display the date in a readable manner
    document.querySelector('.date p').innerHTML = new Date().toDateString();
    //to create number of days
    var days = '';
    //prev days
    for (var k = date.getDay(); k > 0;k--)
    {
        days += "<div class='prev-date'>" + (prevLastDay.getDate() - k + 1) + "</div>";
    }
    //current days
    for(var i = 1; i <= lastDay.getDate(); i++)
    {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth())
        {
            days += "<div class='today' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>" + i + '</div>';
        }
        else
        {
            days += '<div>' + i + '</div>';
        }
    }
    //next month days
    for (var j = 1; j <= nextDays; j++)
    {
        days +="<div class='next-date'>" + j + "</div>";
    }
    monthDays.innerHTML = days;
};
document.querySelector('.next').addEventListener('click', function(){
    date.setMonth(date.getMonth() + 1);
    calendar();
});
document.querySelector('.prev').addEventListener('click', function(){
    date.setMonth(date.getMonth() - 1);
    calendar();
});
calendar();