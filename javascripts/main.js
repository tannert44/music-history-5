requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, pop, getMore) {
    
    pop.getSongs(function(data) {
      var getSongs = data;
          $.each(getSongs, function(){
            var songOutput = "<span class='song-info'>";
                songOutput += this.name;
                songOutput += " - by ";
                songOutput += this.artist;
                songOutput += " on the album ";
                songOutput += this.album;
                songOutput += "</span>";
                songOutput += "<div class='delete_button'><button>Delete</button></div>";
            dom.append(songOutput);
            
            
            $('.delete_button').on("click", function(){
                   $(this).prev().remove();
                   $(this).remove();
                  });
            
            
          });
      
      
          $('#song-info-content').append("<button id='more_button'>More</button>");
      
      
          getMore.getSongs(function(data) {
            var getMoreSongs = data;
        
      
             $('#more_button').on("click", function(){
               $.each(getMoreSongs, function(){
                 var songOutput2 = "<span class='song-info'>";
                 songOutput2 += this.name;
                 songOutput2 += " - by ";
                 songOutput2 += this.artist;
                 songOutput2 += " on the album ";
                 songOutput2 += this.album;
                 songOutput2 += "</span>";
                 songOutput2 +="<div class='delete_button'><button>Delete</button></div>";
                $('#more_button').before(songOutput2);

                $('.delete_button').on("click", function(){
                   $(this).prev().remove();
                   $(this).remove();
                   });
               });
             });
            
          });
      
    });
    
    
    
  
});
