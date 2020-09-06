function(){
  if (window.performance) {return performance.getEntriesByType("navigation")[0].type;}
}
