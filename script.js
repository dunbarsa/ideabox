//
//   $('.save-button').on('click',function() {
//     console.log("clicked");
//     var addTitle = $('#titleInput').val();
//     var addBody = $('#bodyInput').val();
//     $('.idea-container').prepend("<div class='one-idea'><h2 id='title-text'>" + addTitle +
//     "</h2><button type='button' id='delete-button' alt=''><img src='icons/delete.svg'></button> \
//     <p id='body-text'>" + addBody + "</p> \
//     <article><img class='arrows' src='icons/upvote.svg' alt='Upvote icon.'> \
//     <img class='arrows' src='icons/downvote.svg' alt='Downvote icon.'> \
//     <div class='quality-box'><p>quality:</p><p class='var-quality'></p> \
//     </div></article></div>");
//     // $('h2').append('<div class="newtitle">' + addTitle + '</div>');
//     // $('#bodyTextContainer').append('<div class="newBodyText">' + addBody +
//     // '</div>');
//     $('#delete-button').on('click', function() {
//       console.log("I work");
//       $(this).parent().remove();
//     })
//     clearCard();
//   });
// // <img src='icons/delete.svg'>
// function clearCard () {
//   $('#titleInput').val('');
//   $('#bodyInput').val('');
// }



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







$('.save-button').on('click',function() {
    console.log("clicked");
    var addTitle = $('#titleInput').val();
    var addBody = $('#bodyInput').val();
    $('.idea-container').prepend("<div class='one-idea'><h2 id='title-text'>" + addTitle +
    "</h2><button type='button' id='delete-button'><img src='icons/delete.svg' alt='Delete button'></button> \
    <p id='body-text'>" + addBody + "</p> \
    <article><button class='arrows' id='upvote'><img src='icons/upvote.svg' alt='Upvote icon.'></button> \
    <button class='arrows' id='downvote'><img src='icons/downvote.svg' alt='Downvote icon.'></button> \
    <div class='quality-box'><p>quality: </p>&ensp;<p class='var-quality'>swill</p> \
    </div></article></div>");
    // $('h2').append('<div class="newtitle">' + addTitle + '</div>');
    // $('#bodyTextContainer').append('<div class="newBodyText">' + addBody +
    // '</div>');
    $('#delete-button').on('click', function() {
      console.log("I work");
      $(this).parent().remove();
    });
    clearCard();

  //correlate DOWNvote arrows with displayed quality state- swill, plausible, and genius.
  $('#downvote').on('click', function(){
    if ($('.var-quality').text('swill')) {
      $('.var-quality').text('swill');

  }});

  //correlate UPvote arrows with displayed quality state.
  $('#upvote').on('click', function(){
    if ($('.var-quality').text('swill')) {
      $('.var-quality').text('plausible');

  }});

});

  //delete single card when trash is clicked
  function clearCard () {
    $('#titleInput').val('');
    $('#bodyInput').val('');
  }
