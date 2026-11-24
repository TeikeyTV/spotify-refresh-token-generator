console.log('connected');

/* --------------------------------------------------
Spotify Refresh Token Generator
Author: Teikey
Scope: System Cassette

✦  Twitter     - https://www.x.com/teikeytv
✦  Twitch      - https://www.twitch.tv/teikeytv
-------------------------------------------------- */

const routes = {
    '#/home': '<p>This is default Home page</p>',
    '#/page1': '<p>Page 1</p>',
    '#/page2': '<p>Page 2</p>',
    '#/page2': '<p>Page 2</p>'
};


function renderRoute() {
    const hash = window.location.hash || '#/home';
    document.getElementById('app').innerHTML = routes[hash] || '<h1>404 Not Found</h1>';
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', renderRoute);