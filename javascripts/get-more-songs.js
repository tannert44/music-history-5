define(function () {
  var songs1 = [];
  
  return {
    setArray: function(){
      $.ajax(
          {
            url: "javascripts/music-info2.json", async: false
          }
      ).done(function(data){
        songs1 = data.songs;
      });
   },
   
   getSongs: function(){
      return songs1;
    } 
    
  }
});