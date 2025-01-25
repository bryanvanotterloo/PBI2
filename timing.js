var intervalId = null;
onmessage = function(event) {
    if ( event.data.start ) {
        intervalId = setInterval(function(){
            postMessage('start.tick');
        },event.data.ms||0);
    }
    if ( event.data.stop && intervalId !== null ) {
        clearInterval(intervalId);
    }
};