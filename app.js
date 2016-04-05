(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    var mainCollapse = document.getElementById('collapse');

    /*--------------Contact Details Collapseable--------------*/
    var contactDetailsDiv = document.getElementById('contactDetails');
    var gitBtn = document.createElement('paper-button');
    gitBtn.textContent = 'GitHub Profile.';
    gitBtn.raised = true;
    gitBtn.id = 'gitButton';
    gitBtn.link = 'https://github.com/SKHolmes';
    gitBtn.onClick = function(){ console.log('here'); }        
    var githubDiv = document.getElementById('githubDiv');
    githubDiv.appendChild(gitBtn);

    /*--------------Reference Details Collapseable--------------*/
    var referencesDetailsDiv = document.getElementById('referencesDetails');



    app.displayContactDetails = function(){
      var contactDetails = contactDetailsDiv.innerHTML;
      mainCollapse.innerHTML = contactDetails;
    }

    app.displayReferenceDetails = function(){
      var referencesDetails = referencesDetailsDiv.innerHTML;
      mainCollapse.innerHTML = referencesDetails;
    }

    //Button Listeners
    document.getElementById('contact-button').addEventListener('click', function(){
      app.displayContactDetails();    
      mainCollapse.toggle();      
    });

    document.getElementById('reference-button').addEventListener('click', function(){
      if(mainCollapse.opened){
        mainCollapse.toggle();
      }
      while(true){
        setTimeout(function(){ 
          console.log('after timeout'); 
          break next;
        }, 2000);
      }
      next: app.displayReferenceDetails();

      mainCollapse.toggle();
    });
    document.getElementById('gitButton').addEventListener('click', function(){
      console.log('here');
    });
  });  
})(document);

