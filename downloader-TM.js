// ==UserScript==
// @name         File auto-downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Need server from my github @ github.com/akuankka128/discord-downloader
// @author       github.com/akuankka128
// @match        ^https?:\/\/(?:www\.)?discord(?:app)?\.com(?:\/.*)?$
// @require      https://greasyfork.org/scripts/403996-exev/code/ExEv.js?version=808391
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    document.events.on("mutation", m => {
        if(m.target.querySelector("[class^=contents-]")
           && m.removedNodes.length === 0 && m.addedNodes.length !== 0) {
            let it = m.addedNodes[Symbol.iterator]();
            let files = [];

            for(let el of it) {
                files.push(el.querySelector("a:first-of-type"));
            }

            files.forEach((e, i, a) => !e ? a.splice(i, 1) : 0);
            files.forEach(e => {
                let x = new XMLHttpRequest();
                x.open("GET", "http://127.0.0.1:8083/download/" + e.href);
                x.send();
            });
        }
    });
})();
