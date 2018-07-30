// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === "number") {
    return obj + "";
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === "boolean") {
    return obj + "";
  } else if (typeof obj === "string") {
    return "\"" + obj + "\"";
  } else if (Array.isArray(obj)) {
    var arrStr = "";
    for (let i = 0; i < obj.length; i++) {
      // arrStr += stringifyJSON(obj[i]);
      if (i === obj.length - 1) {
        arrStr += stringifyJSON(obj[i]);
      } else {
        arrStr += stringifyJSON(obj[i]) + ",";
      }
    }
    return "[" + arrStr + "]";
  } else if (typeof obj === "object") {
    var objStr = "";
    for (var key in obj) {
      if (key !== "functions" && key !== "undefined") {
        if (objStr) {
          objStr += ",";
        }
        objStr += ("\"" + key + "\":") + stringifyJSON(obj[key]);
      }
    }
    return "{" + objStr + "}";
  } 



};



// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];