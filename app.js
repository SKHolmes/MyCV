(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    var mainCollapse;
    var toggled;
    //var contactDetails = "<h1 margin='8px'>Contact Details.</h1><hr>";
    var contactDetails = document.getElementById("contactDetails").innerHTML;

/*    mainCollapse = document.createElement("iron-collapse");
    Polymer.dom(mainCollapse).innerHTML = contactDetails;
    Polymer.dom(mainCollapse).id = "collapse";
    document.getElementById("editable").appendChild(mainCollapse);*/

    mainCollapse = document.getElementById("collapse");
    mainCollapse.innerHTML = contactDetails;

    document.getElementById("contact-button").addEventListener("click", function(){
      mainCollapse.toggle();
      toggled = !toggled;
      app.displayContactDetails();      
    });

    app.displayContactDetails = function(){
      console.log("this is okay");
    }

  });  
})(document);

