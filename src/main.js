require.config({
    baseUrl:"src",
    paths:{
        "modelRequire":"modelRequire",
        "viewRequire":"viewRequire"
    }
});
$(function(){
    require(['modelRequire','viewRequire'],function(modelRequire,viewRequire){
        var person = new modelRequire;
        var personView = new viewRequire({model:person});
    })
})
