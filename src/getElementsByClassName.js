// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var matchedElements = [];
  var doesMatch = function (element) {
    if (element.classList.value.includes(className)) {
      matchedElements.push(element);
    }
    if (element.children) {
      for (let i = 0; i < element.children.length; i++) {
        doesMatch(element.children[i]);
      }
    } 
  };
  doesMatch(body);
  return matchedElements;
};


// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];