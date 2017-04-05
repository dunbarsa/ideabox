function IdeaCardContent(title, body) {
  this.title = title;
  this.body = body;
  this.id = Date.now();
  this.quality = 'swill';
}

$('.save-button').on('click',function() {
  console.log("Save button has been clicked");
  var $title = $('#titleInput').val();
  var $body = $('#bodyInput').val();
  var ideaCard = new IdeaCardContent($title, $body);
  prependCard(ideaCard);
  clearCard();
});

function prependCard(ideaCard){
  $('.idea-container').prepend(`
    <div class='one-idea' id='${ideaCard.id}'>
      <h2 id='title-text'>${ideaCard.title}</h2>
      <button type='button' id='delete-button'>
        <img src='icons/delete.svg' alt='Delete button'>
      </button>
      <p id='body-text'>${ideaCard.body}</p>
      <article>
        <button class='arrows' id='upvote'>
          <img src='icons/upvote.svg' alt='Upvote icon.'>
        </button>
        <button class='arrows' id='downvote'>
          <img src='icons/downvote.svg' alt='Downvote icon.'>
        </button>
        <div class='quality-box'>
          <p>quality: </p>&ensp;<p class='var-quality'>${ideaCard.quality}</p>
        </div>
      </article>
    </div>`);
}

$('.idea-container').on('click', '#delete-button', function() {
  console.log("Idea deleted.");
  $(this).parent().remove();
});

//correlate DOWNvote arrows with displayed quality state- swill, plausible, and genius.
$('.idea-container').on('click', '#downvote', function(){
  var $ideaQuality = $(this).parent().find('.var-quality');
  if ($ideaQuality.text() == 'swill') {
    $ideaQuality.text('swill');
  } else if ($ideaQuality.text() == 'plausible') {
    $ideaQuality.text('swill');
  } else if ($ideaQuality.text() == 'genius') {
    $ideaQuality.text('plausible');
  }
});

//correlate UPvote arrows with displayed quality state.
$('.idea-container').on('click', '#upvote', function(){
  var $ideaQuality = $(this).parent().find('.var-quality');
  if ($ideaQuality.text() == 'swill') {
    $ideaQuality.text('plausible');
  } else if ($ideaQuality.text() == 'plausible') {
    $ideaQuality.text('genius');
  } else if ($ideaQuality.text() == 'genius') {
    $ideaQuality.text('genius');
  }
});


//delete single card when trash is clicked
function clearCard () {
  $('#titleInput').val('');
  $('#bodyInput').val('');
}
