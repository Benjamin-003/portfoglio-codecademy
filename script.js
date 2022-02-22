const htmlElement = document.getElementById('html');
const cssElement = document.getElementById('css');
const jsElement = document.getElementById('js');
const phpElement = document.getElementById('php');
const angularElement = document.getElementById('angular');

htmlElement.addEventListener('mouseover', function (event) {
   popup = window.open("https://fr.wikipedia.org/wiki/Hypertext_Markup_Language","popUpWindow","width=1200,height=1000,scrollbars=yes");
  })

  cssElement.addEventListener('mouseover', function (event) {
    popup = window.open("https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade","popUpWindow","width=1200,height=1000,scrollbars=yes");
   })
  
   jsElement.addEventListener('mouseover', function (event) {
    popup = window.open("https://fr.wikipedia.org/wiki/JavaScript","popUpWindow","width=1200,height=1000,scrollbars=yes");
   })
  
   phpElement.addEventListener('mouseover', function (event) {
    popup = window.open("https://fr.wikipedia.org/wiki/PHP","popUpWindow","width=1200,height=1000,scrollbars=yes");
   })

   angularElement.addEventListener('mouseover', function (event) {
    popup = window.open("https://fr.wikipedia.org/wiki/Angular","popUpWindow","width=1200,height=1000,scrollbars=yes");
   })