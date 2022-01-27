window.onload = function () {
  var div = document.createElement('div');
  div.setAttribute('style', 'position: fixed; z-index: 9999999; top: 0; left: calc(50% - 100px); width: 200px; height: 35px; background-color: black; border-radius: 0 0 15px 15px;');
  document.body.prepend(div);
}
