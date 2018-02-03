$(document).ready( () => {

  let $jammies = $('a#jammies'), $moods = $('a#moods'), $about = $('a#about'), $type = $('img.type'), $text = $('div.text');

  const mq = window.matchMedia( "(max-width: 414px)");
  if (mq.matches) {
    $jammies.replaceWith('<a id="jammies" class="nav-item" href="/jammies"><img src="assets/music-button.png" /></a>');
    $moods.replaceWith('<a id="moods" class="nav-item" href="/moods"><img src="assets/ig-button.png" /></a>');
    $about.replaceWith('<a id="about" class="nav-item" href="javascript:void(0)"><img src="assets/about-button.png" /></a>');
    $type.replaceWith('<img class="type" src="assets/mobile.png" />');
   }
  else {
    $jammies.replaceWith('<a id="jammies" class="nav-item" href="/jammies">JAMMIES</a>');
    $moods.replaceWith('<a id="moods" class="nav-item" href="/moods">MOODS</a>');
    $about.replaceWith('<a id="about" class="nav-item" href="javascript:void(0)">ABOUT</a>');
    $type.replaceWith('<img class="type" src="assets/main.png" />');
  }

  $("a#about").click ( () => {
      $text.toggleClass('hide');
  });
});
