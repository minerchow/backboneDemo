
var Person = Backbone.Model.extend({
   defaults:{

   },
   initialize:function(){

   }
});


var person =new Person;
person.fetch({
    url:"data.json",
    success:function(model){
    }
})



