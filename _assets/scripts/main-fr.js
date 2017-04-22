//= require analytics
//= require vendors/moment.2.10.3.min
//= require vendors/moment_fr

// Replace datetimes by moments relative values
moment.locale('fr');
document.querySelectorAll('[datetime]').forEach(function(item){
    item.textContent = moment(item.getAttribute('datetime'), moment.ISO_8601).fromNow()
})