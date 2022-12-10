import { loadPage } from "./loadPage.js";
import { upgradeRender } from "./upgradeWindows.js";


const mainContainer = document.querySelector("#container-main");
mainContainer.innerHTML = loadPage();




const upgradeRenderHTML = document.querySelector("#container-all-upgrade")
upgradeRenderHTML.innerHTML = upgradeRender();





mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("popup-")) {
        const [,requestId] = click.target.id.split("-")
           console.log("You have clicked", requestId)
           upgradeRenderHTML.innerHTML = upgradeRender(requestId);
    }
})








