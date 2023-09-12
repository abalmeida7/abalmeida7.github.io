const headerSection = document.querySelector('.header-section');
const contentSection = document.querySelector('.content-section');
const leftPane = document.querySelector('.left-pane')
const rightPane = document.querySelector('.right-pane')
const rightSpan = document.querySelector('.material-symbols-outlined.right');
const leftSpan = document.querySelector('.material-symbols-outlined.left');
const title = document.getElementById('title');

function expandHeader() {
    title.classList.remove('collapsed');
    headerSection.classList.remove('collapsed');
    headerSection.classList.remove('collapsed-left');
    headerSection.classList.remove('collapsed-right');
    leftPane.classList.remove('expanded');
    rightPane.classList.remove('expanded');
    leftSpan.classList.remove('expanded');
    rightSpan.classList.remove('expanded');
}

function expandLeft() {
    leftPane.classList.add('expanded');
    rightPane.classList.remove('expanded');
    headerSection.classList.add('collapsed-left');
    title.classList.add('collapsed');
    leftSpan.classList.add('expanded');
    rightSpan.classList.remove('expanded');
}

function expandRight() {
    rightPane.classList.add('expanded');
    leftPane.classList.remove('expanded');
    headerSection.classList.add('collapsed-right');
    title.classList.add('collapsed');
    rightSpan.classList.add('expanded');
    leftSpan.classList.remove('expanded');
}

leftPane.addEventListener('click', expandLeft, false);
rightPane.addEventListener('click', expandRight, false);
headerSection.addEventListener('click', expandHeader, false);