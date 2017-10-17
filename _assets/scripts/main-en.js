//= require vendors/moment.2.10.3.min
//= require vendors/zepto.1.2.0.min.js

// Replace datetimes by moments relative values
moment.locale('en');
document.querySelectorAll('time[datetime]').forEach(function(item){
    item.textContent = moment(item.getAttribute('datetime'), moment.ISO_8601).fromNow()
})