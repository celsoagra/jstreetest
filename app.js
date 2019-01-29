$(function () {
    var data = [
       { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
       { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
       { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
       { "id" : "ajson4", "parent" : "ajson2", "text" : "Child 2" },
    ];

   $("#jstree").jstree({
     "core" : {
       "themes" : { "variant" : "large" },
       "check_callback" : true,        
        "data": data
      },
      
      "plugins" : [ "sort", "state", "wholerow"]
  });

});
