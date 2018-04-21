function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  var deepChild = document.querySelector('div#grand-node').querySelector('*');

  while(deepChild) {
    if (deepChild.querySelector('*')) {
      deepChild = deepChild.querySelector('*');
    } else {
      return deepChild;
    }
  }
}

function increaseRankBy(n) {
  var listItems = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n;
  }
}