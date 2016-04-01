(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  window.addEventListener('WebComponentsReady', function() {

    var mainCollapse = document.getElementById("collapse");
    var contactDetailsDiv = document.getElementById("contactDetails");

    var gitBtn = document.createElement("paper-button");

    gitBtn.addEventListener("click", function(){
      console.log('here0');
      location.href = "https://github.com/SKHolmes";
    });

    var contactDetailsInitialised = false;

    document.getElementById("contact-button").addEventListener("click", function(){
      app.displayContactDetails();    
      mainCollapse.toggle();      
    });

    app.displayContactDetails = function(){

      if(!contactDetailsInitialised){
        gitBtn.textContent = 'GitHub Profile.';
        gitBtn.raised = true;
        gitBtn.id = 'gitButton';
        var githubDiv = document.getElementById("githubDiv");
        githubDiv.appendChild(gitBtn);
        contactDetails
        nitialised = true;
      }
      var contactDetails = contactDetailsDiv.innerHTML;
      mainCollapse.innerHTML = contactDetails;
    }
  });  
})(document);

