const $video = document.querySelector('#Video');
const $play = document.querySelector('#Play');
const $pause = document.querySelector('#Pause');
const $backward = document.querySelector('#Backward');
const $forward = document.querySelector('#Forward');


$pause.addEventListener('click', handlePause);
$play.addEventListener('click', handlePlay);


function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);

function handleBackward() {
    // $video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
}

function handleForward() {
    // $video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
}

const $progress = document.querySelector('#Progress');
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTime);

function handleLoaded() {
    $progress.max = $video.duration
    console.log('Im running', $video.duration)
}

function handleTime() {
    $progress.value = $video.currentTime;
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value)
}