ReactiveFullcalendar = function (options) {
    if ( !jQuery.isFunction(options.events) ) {
        throw new SyntaxError("Need events options declaring a function to manage reactive data");
    }

    var calendar = document.createElement('div');
    calendar.id = !options.id ? "fullCalendar" : options.id;
    calendar.className = !options.addedClasses ? "calendar" : "calendar " + options.addedClasses;
    $("#" + calendar.id + "_wrapper").append(calendar);
    this.calendar = $(calendar).fullCalendar(options);

    this.autorunFunctions = function() {
        if (options.autoruns) {
            options.autoruns.forEach(function(funcDef) {
                funcDef();
            });
        }
    };
};

ReactiveFullcalendar.prototype.update = function () {
    this.calendar.fullCalendar('refetchEvents');
};

