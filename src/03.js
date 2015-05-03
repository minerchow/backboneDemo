/**
 * Created by Administrator on 2015/2/15.
 */
var AppRouter = Backbone.Router.extend({
   routes:{
       "posts/:id":"getPost",
       "download/*path":"downloadFile",
       ":route/:action":"loadView",
       "*actions":"defaultRoute"
   },

   getPost:function(id){
       alert(id);
   },

   defaultRoute:function(actions){
        alert(actions);
   },

   downloadFile:function(path){
       alert(path);
   },

   loadView:function(route,action){
        alert(route+"_"+action);
   }
});

var app = new AppRouter;
Backbone.history.start();