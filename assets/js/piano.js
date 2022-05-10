const colorWhite = "#fff";
const colorBlack = "#000";
const changeColor = "#66CCFF";
const whiteKeys = document.querySelectorAll(".white-keys kbd");
const blackKeys = document.querySelectorAll(".black-keys kbd");
const lightKeys = document.querySelectorAll(".light span");

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "KeyA":
            const audioA = new Audio("/assets/media/A.mp3");
            changeBackGroundColor("whiteKeys", 0, 0);
            audioA.play();
            break;
        case "KeyD":
            const audioD = new Audio("/assets/media/D.mp3");
            changeBackGroundColor("whiteKeys", 2, 4);
            audioD.play();
            break;
        case "KeyE":
            const audioE = new Audio("/assets/media/E.mp3");
            changeBackGroundColor("blackKeys", 1, 3);
            audioE.play();
            break;
        case "KeyF":
            const audioF = new Audio("/assets/media/F.mp3");
            changeBackGroundColor("whiteKeys", 3, 5);
            audioF.play();
            break;
        case "KeyG":
            const audioG = new Audio("/assets/media/G.mp3");
            changeBackGroundColor("whiteKeys", 4, 7);
            audioG.play();
            break;
        case "KeyH":
            const audioH = new Audio("/assets/media/H.mp3");
            changeBackGroundColor("whiteKeys", 5, 9);
            audioH.play();
            break;
        case "KeyJ":
            const audioJ = new Audio("/assets/media/J.mp3");
            changeBackGroundColor("whiteKeys", 6, 11);
            audioJ.play();
            break;
        case "KeyS":
            const audioS = new Audio("/assets/media/S.mp3");
            changeBackGroundColor("whiteKeys", 1, 2);
            audioS.play();
            break;
        case "KeyT":
            const audioT = new Audio("/assets/media/T.mp3");
            changeBackGroundColor("blackKeys", 2, 6);
            audioT.play();
            break;
        case "KeyU":
            const audioU = new Audio("/assets/media/U.mp3");
            changeBackGroundColor("blackKeys", 4, 10);
            audioU.play();
            break;
        case "KeyW":
            const audioW = new Audio("/assets/media/W.mp3");
            changeBackGroundColor("blackKeys", 0, 1);
            audioW.play();
            break;
        case "KeyY":
            const audioY = new Audio("/assets/media/Y.mp3");
            changeBackGroundColor("blackKeys", 3, 8);
            audioY.play();
            break;
        default:
            break;
    }
});

document.addEventListener("keyup", ()=> {
    for (let i = 0; i < whiteKeys.length; i++) {
        whiteKeys[i].style.background = colorWhite;
    };

    for (let i = 0; i < blackKeys.length; i++) {
        blackKeys[i].style.background = colorBlack;
    };

    for (let i = 0; i < lightKeys.length; i++) {
        lightKeys[i].style.background = colorWhite;
    };    
});

function changeBackGroundColor(type, item, lightItem) {
    if (type === "whiteKeys") {
        whiteKeys[item].style.background = changeColor;
        lightKeys[lightItem].style.background = changeColor;
    } else if (type === "blackKeys") {
        blackKeys[item].style.background = changeColor;
        lightKeys[lightItem].style.background = changeColor;
    }

}