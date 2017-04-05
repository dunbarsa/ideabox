

$('.save-button').on('click',function() {
    console.log("Save button has been clicked.");
    var addTitle = $('#titleInput').val();
    var addBody = $('#bodyInput').val();
    $('.idea-container').prepend("<div class='one-idea'><h2 id='title-text'>" + addTitle +
    "</h2><button type='button' id='delete-button' alt=''><img src='icons/delete.svg'></button> \
    <p id='body-text'>" + addBody + "</p> \
    <article><button class='arrows' id='upvote'><img class='arrows' src='icons/upvote.svg' alt='Upvote icon.'></button> \
    <button class='arrows' id='downvote'><img src='icons/downvote.svg' alt='Downvote icon.'></button> \
    <div class='quality-box'><p>quality:</p><p class='var-quality'></p> \
    </div></article></div>");
    $('#delete-button').on('click', function() {
      console.log("Idea deleted.");
      $(this).parent().remove();
    })

    clearCard();
  });

function clearCard () {
  console.log("Input text cleared.")
  $('#titleInput').val('');
  $('#bodyInput').val('');
}

var qualityArray = ['swill', 'plausible', 'genius'];



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
