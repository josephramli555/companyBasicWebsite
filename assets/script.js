let bannerText = "Design. Deploy. Scale";
let descText = "PureBalance is your #1 IT solution when it comes to website. Our partners include Google, Netflix, and Fmovies";
let bannerIndex = 0;
let descIndex=0;
let bannerObject = document.querySelector(".banner");
let descObject = document.querySelector(".banner-desc");

function typeBanner(){
    let textnode = document.createTextNode(bannerText.charAt(bannerIndex));
    bannerObject.insertBefore(textnode,bannerObject.childNodes[bannerIndex]);
    bannerIndex++;
    if(bannerIndex < bannerText.length){
        setTimeout(typeBanner,70);
        return;
    }
    typeDesc();   
}

function typeDesc(){
    
    let textnode = document.createTextNode(descText.charAt(descIndex));
    descObject.insertBefore(textnode,descObject.childNodes[descIndex]);
    descIndex++;
    if(descIndex < descText.length)
        setTimeout(typeDesc,50);
}

typeBanner();
