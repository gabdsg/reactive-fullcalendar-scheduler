Based on http://fullcalendar.io/ v3.0.1 and https://fullcalendar.io/scheduler/ v1.4.0

For the complete list of changes in version 3, visit the releases page:
https://github.com/fullcalendar/fullcalendar/releases

### Installation ###

```bash
    meteor add supaseca:reactive-fullcalendar
```

### Usage ###
Template:

```handlebars
    <template name="myTemplate">
        {{ > ReactiveFullcalendar options=calendarOptions }}
    </template>
```
    
Client JS:

```javascript
    Template.myTemplate.helpers({
        calendarOptions: {
            // While developing, in order to hide the license warning, use the following key
            schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
            // Standard fullcalendar options
            height: 700,
            hiddenDays: [ 0 ],
            slotDuration: '01:00:00',
            minTime: '08:00:00',
            maxTime: '19:00:00',
            lang: 'fr',
            // Function providing events reactive computation for fullcalendar plugin
            events: function(start, end, timezone, callback) {
                console.log(start.format(), end.format());
                // Get events from the CalendarEvents collection
                // return as an array with .fetch()
                var events = CalendarEvents.find({
                     "id"         : "calendar1",
                     "startValue" : { $gte: start.valueOf() },
                     "endValue"   : { $lte: end.valueOf() }
                }).fetch();
                callback(events);
            },
            // Optional: id of the calendar
            id: "calendar1",
            // Optional: Additional classes to apply to the calendar
            addedClasses: "col-md-8",
            // Optional: Additional functions to apply after each reactive events computation
            autoruns: [
                function () {
                    console.log("user defined autorun function executed!");
                }
            ]
        },
    });
```

### More details ###
- Many fullcalendar can be added on the same page by using different id
- autoruns need to be an array of functions


### History ###

- This package was originally written by gquemart and is available at:
https://github.com/gquemart/meteor-reactive-fullcalendar
- It was later forked by fermuch and is available at:
https://github.com/fermuch/meteor-reactive-fullcalendar
- And then later forked by koretech:
https://github.com/koretech/meteor-reactive-fullcalendar
