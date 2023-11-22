const MyHashMap = function () {
  this.hashMap = new Array().fill();
};

MyHashMap.prototype.put = function (key, value) {
  return null;
};

MyHashMap.prototype.get = function (key) {
  if (!this.hashMap[key]) {
    return -1;
  }
  return this.hashMap[key];
};

MyHashMap.prototype.remove = function (key) {
  if (!this.hashMap[key]) {
    return null;
  }
  return this.hashMap[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
