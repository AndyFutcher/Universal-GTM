// Declare Before Unload Events
window.addEventListener("beforeunload", function(event){
  dataLayer.push({'event':'beforeunload'});
});
