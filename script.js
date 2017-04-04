
  $('.save-button').on('click',function() {
    console.log("clicked");
    var addTitle = $('#titleInput').val();
    var addBody = $('#bodyInput').val();
    $('h2').append('<div class="newtitle">' + addTitle + '</div>');
    $('#bodyTextContainer').append('<div class="newBodyText">' + addBody +
    '</div>');
  })

    // NO GOD FUNCTIONS - Write individual/reusable functions where you can
    // For prepend - Instead of targeting individual elements, try targeting the section containing the guts of the card
    // Consider prepending -- it'll keep things in chronological order
    // For the upvote arrays (look at for loops) or objects
    // CONSOLE LOG EVERYTHING!!!!
    // ES6 back ticks
      // function clearInputs () {
      //   $(this).val('');
      //   $(this).val('');
      // });

// $(".save-button").on('click', function(){
//     alert('test');
// })
