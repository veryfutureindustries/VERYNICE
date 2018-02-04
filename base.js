$(document).ready( () => {
  let $jammies = $('a#jammies'), $moods = $('a#moods'), $about = $('a#about');
  $about.click( () => {
    let $gif = $('img.img-fluid'), $text = $('div.text');
    $gif.toggleClass("hide");
    $text.toggleClass("hide");
  });

  const mq = window.matchMedia( "(max-width: 414px)" );
  if(mq.matches) {
    $jammies.replaceWith('<a id="jammies" class="nav-item" href="/jammies"><img id="button" src="assets/music-button.png" /></a>');
    $moods.replaceWith('<a id="moods" class="nav-item" href="/moods"><img id="button" src="assets/ig-button.png" /></a>');
    $about.replaceWith('<a id="about" class="nav-item" href="javascript:void(0)"><img id="button" src="assets/about-button.png" /></a>');
    }
    else {
      $jammies.replaceWith('<a id="jammies" class="nav-item tk-league-gothic" href="/jammies">jammies</a>');
      $moods.replaceWith('<a id="moods" class="nav-item tk-league-gothic" href="/moods">moods</a>');
      $about.replaceWith('<a id="about" class="nav-item tk-league-gothic" href="javascript:void(0)">about</a>');
    }

});
