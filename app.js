(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    app.DisplayEnums = {
      NONE: 'none',
      CONTACT: 'contact',
      REFERENCES: 'references'
    }

    var mainCollapse = document.getElementById('collapse');
    var currentDisplay = app.DisplayEnums.NONE;
    var animationDelay = 400;

    /*--------------Contact Details Collapseable--------------*/
    var contactDetailsDiv = document.getElementById('contactDetails');

    /*--------------Reference Details Collapseable--------------*/
    var referencesDetailsDiv = document.getElementById('referencesDetails');

    app.displayContactDetails = function(){
      var contactDetails = contactDetailsDiv.innerHTML;
      mainCollapse.innerHTML = contactDetails;
      currentDisplay = app.DisplayEnums.CONTACT;
    }

    app.displayReferenceDetails = function(){
      var referencesDetails = referencesDetailsDiv.innerHTML;
      mainCollapse.innerHTML = referencesDetails;
      currentDisplay = app.DisplayEnums.REFERENCES;
    }

    //Button Listeners
    document.getElementById('contact-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.CONTACT){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
      }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.CONTACT){
        mainCollapse.toggle();
        setTimeout(function(){ 
          app.displayContactDetails();
          mainCollapse.toggle();
        }, animationDelay); 
      //If the collapse is not opened we can just 
      }else if(!mainCollapse.opened){
        app.displayContactDetails();
        mainCollapse.toggle();
      }    
    });

    document.getElementById('reference-button').addEventListener('click', function(){
      //If the collapse is open but displaying the details clicked, just close it.
      if(mainCollapse.opened && currentDisplay == app.DisplayEnums.REFERENCES){
        mainCollapse.toggle();
      //Else if the collapse is opened but displaying other details than that that was
      //clicked. Close it, pause for the animation using a setTimeout function, change
      //the details and reopen it.
      }else if(mainCollapse.opened && currentDisplay != app.DisplayEnums.REFERENCES){
        mainCollapse.toggle();
        setTimeout(function(){ 
          app.displayReferenceDetails();
          mainCollapse.toggle();
        }, animationDelay); 
      //If the collapse is not opened we can just 
      }else if(!mainCollapse.opened){
        app.displayReferenceDetails();
        mainCollapse.toggle();
      }
    });
  });  
})(document);

