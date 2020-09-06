// Pass Page Dependencies To GA
if (window.performance) { // Performance Supported
  var resources=performance.getEntriesByType("resource"),resourceVar='',resourceValue=0,resourceLabel={{Page Navigation}};
  for (var resource=0;resource<resources.length;resource++) {
    resourceVar=resources[resource].name.split(';')[0]; // Strip Code/BASE64
    resourceVar=resourceVar.split('?')[0]; // Strip Parameters
    resourceValue=resources[resource].responseEnd-resources[resource].startTime;
    if (resourceValue>0) { // Not Cached (Dont Round)
      dataLayer.push({
         'event':'timing'
        ,'EventCategory':resources[resource].initiatorType
        ,'EventVar':resourceVar
        ,'EventValue':parseInt(resourceValue)
        ,'EventLabel':resourceLabel
      });
    }
  }
}
