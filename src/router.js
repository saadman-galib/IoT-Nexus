import { runJSAgain } from "./main.js";

const route = (e) => {
    e = e || window.event;
    e.preventDefault();
    window.history.pushState({}, "", e.target.href);
    handleLocation();
};

const routes = {
    404: "/src/pages/404.html",
    "/": "/src/pages/home.html",
    "/basics": "/src/pages/basics.html",
    "/devices": "/src/pages/devices.html",
    "/implementation": "/src/pages/implementation.html",
    "/news": "/src/pages/news.html",
    "/resources": "/src/pages/resources.html",
};

const handleLocation = async () => {
    const content = document.querySelector("#root");
    const path = routes[window.location.pathname] || routes[404];
    fetch(path)
        .then((response) => response.text())
        .then((html) => {
            content.innerHTML = html;
            runJSAgain();
        });
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
