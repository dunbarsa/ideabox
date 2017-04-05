


























































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
    } else if ($('.var-quality').text('plausible')) {
      $('.var-quality').text('genius');
    } else if ($('.var-quality').text('genius')) {
      $('.var-quality').text('genius');
    }
  });

});

  //delete single card when trash is clicked
  function clearCard () {
    $('#titleInput').val('');
    $('#bodyInput').val('');
  }
