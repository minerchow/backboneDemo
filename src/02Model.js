
var Person = Backbone.Model.extend({
   defaults:{

   },
   initialize:function(){
        this.post();
   },

   post:function(){
       this.fetch({
           url:"data.json",
           success:function(model){
               console.log(model.toJSON())
           }
       })
   }
});


var person =new Person;




