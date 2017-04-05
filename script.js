$('.save-button').on('click',function() {
    console.log("Save button has been clicked");
    var addTitle = $('#titleInput').val();
    var addBody = $('#bodyInput').val();
    $('.idea-container').prepend(`
      <div class='one-idea'>
        <h2 id='title-text'>${addTitle}</h2>
        <button type='button' id='delete-button'>
          <img src='icons/delete.svg' alt='Delete button'>
        </button>
        <p id='body-text'>${addBody}</p>
        <article>
          <button class='arrows' id='upvote'>
            <img src='icons/upvote.svg' alt='Upvote icon.'>
          </button>
          <button class='arrows' id='downvote'>
            <img src='icons/downvote.svg' alt='Downvote icon.'>
          </button>
          <div class='quality-box'>
            <p>quality: </p>&ensp;<p class='var-quality'>swill</p>
          </div>
        </article>
      </div>`);

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
    var $ideaQuality = $(this).parent().find('.var-quality');
    if ($ideaQuality.text() == 'swill') {
      $ideaQuality.text('plausible');
    } else if ($ideaQuality.text() == 'plausible') {
      $ideaQuality.text('genius');
    } else if ($ideaQuality.text() == 'genius') {
      $ideaQuality.text('genius');
    }
  });
});

  //delete single card when trash is clicked
  function clearCard () {
    $('#titleInput').val('');
    $('#bodyInput').val('');
  }
