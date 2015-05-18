define("modelRequire",function(){
    var Person = Backbone.Model.extend({
        defaults:{
            initDataFormatted:null
        },
        initialize:function(){
           this.post();
        },
        post:function(){
            //this.fetch({
            //    url:"data.json",
            //    success:function(model){
            //        //console.log(model.toJSON())
            //    }
            //})
            var that = this;
            $.ajax({
                url:"data.json",
                dataType:"json"
            }).done(function(data){
                that.set({"initDataFormatted":data});
                console.log(that.get('initDataFormatted'));
                that.update();
            })

        },
        update:function(){
            //console.log(this.get('initDataFormatted'));
            this.set(
                {"initDataFormatted":
                    {
                        data:{
                            "name":"22"
                        }
                    }
                })
        }
    });
    return Person;
})