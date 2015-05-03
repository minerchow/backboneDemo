var PersonView = Backbone.View.extend({
    el:"#test",
    initialize:function(){
        this.listenTo(this.model, 'change', this.render);
    },
    render:function(){
        console.log(this.model.toJSON())
        var html = template('testView',this.model.toJSON().data);
        $('#test').append(html)
    },
    events:{
        "click #a":"call"
    },
    call:function(event){
        console.log($(event.currentTarget));
    }
})
var personView = new PersonView({model:person});