var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // FIFO - First In First Out
  var obj = Object.create(queueMethods);
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue: function(val){
    let keys = Object.keys(this.storage);
    let max = keys.reduce(function(a, b){
      return Math.max(a, b);
    }, 0);

    this.storage[max + 1] = val;
  },

  dequeue: function() {
    let keys = Object.keys(this.storage);
    let min = keys.reduce(function(a, b) {
      return Math.min(a, b);
    }, keys[0]);
    let poppedVal = this.storage[min];
    delete this.storage[min];
    return poppedVal;
  },

  size: function(){
    return Object.keys(this.storage).length;
  }


};


