function(){ // Returns Navigation Type (navigate, reload, back_forward)
  if (window.performance) {return performance.getEntriesByType("navigation")[0].type;}
}
