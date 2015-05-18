define("viewRequire",function(){
    var PersonView = Backbone.View.extend({
        el:"#test",
        initialize:function(){
            this.listenTo(this.model, 'change', this.render);
        },
        render:function(){
            console.log(this.model.toJSON())
          //  this.model.toJSON().data.name="ssss";
            var html = template('testView',this.model.toJSON().initDataFormatted.data);
            $('#test').html(html)
        },
        events:{
            "click #a":"call"
        },
        call:function(event){
            $.ajax({
                url:"data.json",
                dataType:"json",
                data:{
                    "name":"assss"
                }
            }).done(function(){

            })
        }
    })
    return PersonView;
})