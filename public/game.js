
$('.play-game').click(function () {
  playGame('humanVsComputer/' + $(this).data('game-action'));
});

$('.play-cpu-vs-cpu').click(function () {
  playGame('computerVsComputer');
});

function playGame(gamePath) {
  $('.play-game').removeClass("btn-success").removeClass("btn-warning").removeClass("btn-danger").addClass("btn-primary");
  $('.cpu-game').removeClass("btn-success").removeClass("btn-warning").removeClass("btn-danger").addClass("btn-secondary");
  $.get('api' + window.location.pathname + '/' + gamePath, function (response) {
    if (response.winner == 1) {
      $('.play-game[data-game-action=' + response.player_1 + ']').removeClass("btn-primary").addClass("btn-success");
      $('.cpu-game[data-game-action=' + response.player_2 + ']').removeClass("btn-primary").addClass("btn-danger");
    } else if (response.winner == 2) {
      $('.play-game[data-game-action=' + response.player_1 + ']').removeClass("btn-primary").addClass("btn-danger");
      $('.cpu-game[data-game-action=' + response.player_2 + ']').removeClass("btn-primary").addClass("btn-success");
    } else {
      $('.play-game[data-game-action=' + response.player_1 + ']').removeClass("btn-primary").addClass("btn-warning");
      $('.cpu-game[data-game-action=' + response.player_2 + ']').removeClass("btn-primary").addClass("btn-warning");
    }
    $winner = $('[data-player=' + response.winner + ']');
    $winner.data('total', $winner.data('total') + 1);
    $winner.html($winner.data('total'));
  }).fail(function () {
    alertServerIsDown();
  });
}

function alertServerIsDown() {
  $(`<div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Server error</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Sorry but the server is not responding now.</p>
            <p>May be you played more than a hour ?</p>
            <p>Please try later</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`
  ).modal();
}