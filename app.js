(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    var mainCollapse;
    var toggled;

    mainCollapse = document.createElement("iron-collapse");
    Polymer.dom(mainCollapse).innerHTML = "Hi.";
    document.getElementById("editable").appendChild(mainCollapse);

    document.getElementById("contact-button").addEventListener("click", function(){
      console.log("sup");
      mainCollapse.toggle();
      toggled = !toggled;      
    });

    app.displayContactDetails = function(){
      console.log("this is okay");
    }

  });  
})(document);

