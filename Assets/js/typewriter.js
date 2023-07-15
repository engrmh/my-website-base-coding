var app = document.querySelector('#typeWriterTitle');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: '|',
    // delay: 3
});

typewriter.typeString('DEVELOPER')
    .pauseFor(2500)
    .deleteAll()
    .typeString('UI DESSIGNER')
    .pauseFor(2500)
    .start();
