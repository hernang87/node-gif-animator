var gm = require('gm');
var im = gm.subClass({imageMagick: true});

im()
    .in('/Users/hernan/Desktop/gif/frame1.png')
    .in('/Users/hernan/Desktop/gif/frame2.png')
    .in('/Users/hernan/Desktop/gif/frame3.png')
    .in('/Users/hernan/Desktop/gif/frame4.png')
    .delay(100)
    .write('animated.gif', err => {
        if(err) throw err;
        console.log("animated.gif created"); 
    });