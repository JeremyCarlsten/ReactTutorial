function EventEmitter(){
    this._events = {};
}

//  [ //_events
//    "type1":[function(){/* listner */}, function(){ /* listner */}]
//  ]

EventEmitter.prototype.on = function(type, listener){
  this._events[type] = this._events[type] || [];
  this._events[type].push(listener);
};

EventEmitter.prototype.emit = function(type){
  if(this._events[type]){
      this._events[type].forEach(function(listener){
          listener();
      });
  }
};

EventEmitter.prototype.removeListener = function(type, listener){
  if(this._events[type]){
      this._events[type].splice(this._events[type].indexOf(listener),1);
  }
};