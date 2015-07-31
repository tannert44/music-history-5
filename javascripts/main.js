requirejs(
  ["dom-access", "populate-songs", "get-more-songs"], 
  function(dom, pop, getMore) {
////    console.log(dom);
     pop.setArray();
     var songsGot = pop.getSongs();
     console.log("Jew", songsGot);
     getMore.setArray();
     var moreSongsGot =  getMore.getSongs();
     console.log("German", moreSongsGot);
    
    $.each(songsGot, function(){
        var songOutput = "<span class='song-info'>";
            songOutput += this.name;
            songOutput += " - by ";
            songOutput += this.artist;
            songOutput += " on the album ";
            songOutput += this.album;
            songOutput += "</span>";
            songOutput += "<div class='delete_button'><button>Delete</button></div>";
        $('#song-info-content').append(songOutput);
        $('.delete_button').on("click", function(){
               $(this).prev().remove();
               $(this).remove();
            });
    });
    
      $('#song-info-content').append("<button id='more_button'>More</button>");
      
      $('#more_button').on("click", function(){
      $.each(moreSongsGot, function(){
          var songOutput2 = "<span class='song-info'>"
          songOutput2 += this.name
          songOutput2 += " - by "
          songOutput2 += this.artist
          songOutput2 += " on the album "
          songOutput2 += this.album
          songOutput2 += "</span>"
          songOutput2 +="<div class='delete_button'><button>Delete</button></div>";
          $('#more_button').before(songOutput2);
          
          $('.delete_button').on("click", function(){
             $(this).prev().remove();
             $(this).remove();
          });

        });
      });
  });



//    
//    
//    
//    
//    
//    
//    $('#more_button').on("click", function(){
//      $.ajax({url: "javascripts/music-info2.json"}).done(function(data){
//        
//      });
//    });
//    
//  });
//  
//});