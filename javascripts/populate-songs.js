define(function () {
  var songs = [];
  
  return {
    setArray: function(){
      $.ajax(
          {
            url: "javascripts/music-info.json", async: false
          }
      ).done(function(data){
        songs = data.songs;
      });
   },
   
   getSongs: function(){
      return songs;
    } 
    
  }
});