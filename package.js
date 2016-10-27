Package.describe({
    summary: "Reactive Fullcalendar version 3.0.1 and Scheduler-1.4.0",
    version: '1.0.0',
    git: "https://github.com/gabdsg/reactive-fullcalendar-scheduler.git",
    name: 'gabdsg:reactive-fullcalendar-scheduler',
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.use('momentjs:moment@2.15.1', 'client');
    api.use('templating', 'client');
    api.addFiles([
        'fullcalendar.js',
        'fullcalendar.css',
        'scheduler.js',
        'scheduler.css',
        'locale-all.js',
        'gcal.js',
        'reactive-fullcalendar.js',
        'reactive-fullcalendar-template.html',
        'reactive-fullcalendar-template.js'
    ], 'client');
    api.export('ReactiveFullcalendar', 'client');
});
