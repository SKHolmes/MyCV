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

    /*--------------Contact Details Collapseable--------------*/
    var contactDetailsDiv = document.getElementById('contactDetails');
    var gitBtn = document.createElement('paper-button');
    gitBtn.textContent = 'GitHub Profile.';
    gitBtn.raised = true;
    gitBtn.id = 'gitButton';
    gitBtn.link = 'https://github.com/SKHolmes';
    app.listen(gitBtn, 'tap', 'test');
    app.listen(gitBtn, 'click', 'test');
    gitBtn.addEventListener('tap', function(){
      alert('here');
    });

    gitBtn.onclick = 'test';
    gitBtn.click = function(){ console.log('here'); }        
    var githubDiv = document.getElementById('githubDiv');
    githubDiv.appendChild(gitBtn);

    /*--------------Reference Details Collapseable--------------*/
    var referencesDetailsDiv = document.getElementById('referencesDetails');

    app.test = function(){
      console.log('here');
    }
    gitBtn.setAttribute('on-click', 'test');

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
        }, 500); 
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
        }, 400); 
      //If the collapse is not opened we can just 
      }else if(!mainCollapse.opened){
        app.displayReferenceDetails();
        mainCollapse.toggle();
      }
    });

    document.getElementById('gitButton').addEventListener('click', function(){
      console.log('hello?');
    });


      /*while(true){
        setTimeout(function(){ 
          console.log('after timeout'); 
          break next;
        }, 2000);
      }
      next: app.displayReferenceDetails();*/

/*      mainCollapse.toggle();
    });
    */
    
    document.getElementById('gitButton').addEventListener('click', function(){
      console.log('here');
    });

  });  
})(document);

