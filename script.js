const yesclick = document.querySelector("button:nth-of-type(1)");
const noclick = document.querySelector("button:nth-of-type(2)");
const h1text = document.querySelector("h1");
const para = document.querySelector("p")
const image = document.querySelector("img");
const noButton = document.querySelector(".no");
const imgElement = document.querySelector(".img img");
function toggleButtons() {
    if (yesclick.style.display === "none" && noclick.style.display === "none") {
        yesclick.style.display = "inline-block"; // Show Yes button
        noclick.style.display = "inline-block";
        image.style.display = "block";
        imgElement.src = "image8.jpg";
        h1text.textContent = "Lo mirchain kha lo aur man jao";
        // para.textContent = "ap esy nhi manain gi  "
        h1text.style.fontSize = "50px"; // Show No button
    }
}
yesclick.addEventListener("click", () => {

});
const messages = ["Man jao na! 🥺", "pookie hi bn jao! 😢", "Don't say no! 💔", "Think again! 😭", "dubara soch lo", "itni mehnat ki bnany main ab to man jao", "time for plan B", "Ya wli ussy zyada krvi hain", "ya bhi apky lia", "man ja ve tenun sair krvan", "Yad rakhna bs ab to khtm ha theek ha bs main nhi baat krta"];
let count = 0;
noclick.addEventListener("click", () => {
    switch (count) {
        case 0:
            h1text.textContent = messages[0];
            imgElement.src = "image4.gif";
            noButton.style.padding = "15px 30px";
            break;
        case 1:
            h1text.textContent = messages[1];
            imgElement.src = "image2.gif";
            noButton.style.padding = "30px 35px";
            para.textContent = "Pookie mtlb lrki ...app hain to nhi but 😂😂😂"
            break;
        case 2:
            h1text.textContent = messages[2];
            imgElement.src = "image3.gif";
            noButton.style.padding = "35px 40px";
            para.textContent = "iska bhi apko nhi pta chup krky yes kr do "
            break;
        case 3:
            h1text.textContent = messages[3];
            imgElement.src = "image4.gif";
            noButton.style.padding = "40px 45px";
            para.textContent = "But sad apky pas dimag nhi ha "
            break;
        case 4:
            h1text.textContent = messages[4];
            imgElement.src = "image5.gif";
            noButton.style.padding = "45px 50px";
            para.textContent = "NO BRAIN U HAVE "
            break;
        case 5:
            h1text.textContent = messages[5];
            imgElement.src = "image6.gif";
            noButton.style.padding = "50px 55px";
            para.textContent = "Khbrdar jo bola mene kha tha...mehnat ka phl ayesha nhi ap dain yes bolo "
            break;
        case 6:
            h1text.textContent = messages[6];
            imgElement.src = "image7.gif";
            h1text.style.fontSize = "100px";
            noclick.style.display = "none";
            yesclick.style.display = "none";
            image.style.display = "none";
            noButton.style.padding = "55px 60px";
            para.textContent = "Mirchain Hazir hain apki khidmat main "
            setTimeout(toggleButtons, 500);
            break;
        case 7:
            h1text.textContent = messages[7];
            imgElement.src = "image9.png";
            imgElement.style.width = "300px";
            noButton.style.transform = "scale(1.3)";
            break;
        case 8:
            h1text.textContent = messages[8];
            imgElement.src = "image10.png";
            noButton.style.transform = "scale(1.5)";
            break;
        case 9:
            h1text.textContent = messages[9];
            imgElement.src = "image11.png";
            noButton.style.transform = "scale(1.7)";
            break;
        case 10:
            h1text.textContent = messages[0];
            imgElement.src = "image13.gif";
            noButton.style.transform = "scale(2.0)";
            para.textContent = "Meri na shi bnda billi pr hi trs kha ly";
            break;
        case 11:
            h1text.textContent = messages[10];
            imgElement.src = "image14.jpg";
            noButton.style.transform = "scale(2.1)";
            para.textContent = "ya wo reel wla ha ....agr mujhay pta chla ky tu usky sath bhi esa bs phit to khtm ha 😅"
            break;
        case 12:
            h1text.textContent = messages[0];
            imgElement.src = "image15.jpg";
            noButton.style.transform = "scale(2.2)";
            para.textContent = "Man jao ";
            break;
        case 13:
            h1text.textContent = messages[0];
            imgElement.src = "image16.jpg";//yhn pr theek ha image
            noButton.style.transform = "scale(2.4)";
            break;
        case 14:
            h1text.textContent = messages[0];
            imgElement.src = "image17.jpg";
            noclick.style.display = "none";
            break;

    }
    count++;
    console.log(count);
});
yesclick.addEventListener("click", () => {
    h1text.textContent = "Mujhay pta tha ap man jain gi😊";
    imgElement.src = "image7.gif";
    yesclick.style.display = "none";
    para.textContent="Bly Bly ho gai aj to 🥳🥳🥳🥳🎉🎉🎉"
    noclick.style.display="none";
});

