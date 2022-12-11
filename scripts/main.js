import { loadPage } from "./loadPage.js";
import { levelUpCost } from "./resourceCounter.js";
import { upgradeRender } from "./upgradeWindows.js";


const mainContainer = document.querySelector("#container-main");
mainContainer.innerHTML = loadPage();




const upgradeRenderHTML = document.querySelector("#container-all-upgrade")
upgradeRenderHTML.innerHTML = upgradeRender();





mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("popup-")) {
        const [,popupId] = click.target.id.split("-")
           console.log("You have clicked", popupId)
           upgradeRenderHTML.innerHTML = upgradeRender(popupId);
    }
})

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("upgrade")) {
        const [,upgradeId] = click.target.id.split("--")
           console.log("You have clicked", upgradeId)
           levelUpCost(upgradeId)
    }
})





