const $video = document.querySelector('#Video');
const $play = document.querySelector('#Play');
const $pause = document.querySelector('#Pause');
const $backward = document.querySelector('#Backward');
const $forward = document.querySelector('#Forward');


$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);


function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

$backward.addEventListener('click', handleBackward);

function handleBackward() {
    // $video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
}

$forward.addEventListener('click', handleForward);

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