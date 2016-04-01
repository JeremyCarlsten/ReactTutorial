ReactDOM.render(
    React.createElement(Forum, null),
    document.getElementById('forum')
);

var myemitter = new EventEmitter();

myemitter.on('STARTED_THE_APP', function(){
    console.log("Started this shiz.");
});

myemitter.on('STARTED_THE_APP', function(){
    console.log("Started this shiz.2");
});

myemitter.emit('STARTED_THE_APP');

ForumDispatcher.register(function(action){
    console.log("recieved an action");
    console.log(action);
});