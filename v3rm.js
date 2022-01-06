// ==UserScript==
// @name         V3rmillion Script Copy Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy codeblocks on v3rmillion with ease!
// @author       Xyba (https://v3rmillion.net/member.php?action=profile&uid=612047)
// @match        https://v3rmillion.net/showthread.php*
// @icon         https://pbs.twimg.com/profile_images/549393909147639809/inDjQlSs_400x400.png
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';


    let collection = document.getElementsByClassName("codeblock");

    for(let item of collection){
        let zNode = document.createElement('div');
        zNode.innerHTML = '<button id="myButton" type="button">'
            + 'Copy Code</button>'
        ;
        zNode.setAttribute ('id', 'myContainer');
        item.appendChild(zNode);
        let codeblockInner = item.children[1].firstChild.textContent;

        zNode.onclick = function() {
            if (navigator.clipboard.writeText(codeblockInner)) {
                var newNode = document.createElement ('p');
                newNode.innerHTML = 'Code Copied!';
                zNode.appendChild(newNode);
                setTimeout(() => zNode.removeChild(zNode.childNodes[1]), 1500);
            } else {
                alert("something went wrong");
            }
        }
    }

    GM_addStyle ( `#myContainer {
       display: flex;
       margin-top: 10px;
   }
   #myButton {
       cursor: pointer;
   }
   #myContainer p {
       color: green;
       margin: 4px 9px;
       -webkit-animation: fadein .5s; /* Safari, Chrome and Opera > 12.1 */
      -moz-animation: fadein .5s; /* Firefox < 16 */
       -ms-animation: fadein .5s; /* Internet Explorer */
        -o-animation: fadein .5s; /* Opera < 12.1 */
           animation: fadein .5s;
   }

   @keyframes fadein {
   from { opacity: 0; }
   to   { opacity: 1; }
   }

   /* Firefox < 16 */
   @-moz-keyframes fadein {
   from { opacity: 0; }
   to   { opacity: 1; }
    }

    /* Safari, Chrome and Opera > 12.1 */
   @-webkit-keyframes fadein {
   from { opacity: 0; }
   to   { opacity: 1; }
   }

   /* Internet Explorer */
   @-ms-keyframes fadein {
   from { opacity: 0; }
   to   { opacity: 1; }
   }

   /* Opera < 12.1 */
   @-o-keyframes fadein {
   from { opacity: 0; }
   to   { opacity: 1; }
   }` );
})();
