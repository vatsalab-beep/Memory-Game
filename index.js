
 let count = 0;
let image;
function createNewEle (typeOf, innerhtml, classname, imgsrc)
{
 var sampleelement = document.createElement(typeOf);

    sampleelement.innerHTML = innerhtml;
    sampleelement.classList.add(classname);
    sampleelement.src = imgsrc;
    return sampleelement;
}

let boxMemCards = document.querySelector(".boxMemCards")

for (let x=0; x<18; x++){
    let memoryCard = createNewEle("div", null, "memoryCard");
    memoryCard.classList.add("front");

    image = createNewEle("img",null, null,"babyyoda.png");

    memoryCard.appendChild(image);
    boxMemCards.appendChild(memoryCard);
}


let imagesArr = ["panda.png", "dog.png","cat.png","lion.png","carrot.png","cow.png"];






// converts nodelist to array 
let allmemcards = document.querySelectorAll(".memoryCard");//node list of memcards

let cards = [];
for(let i = 0, n; n = allmemcards[i]; ++i) cards.push(n);
console.log(cards);
     cards.map(r => r.addEventListener("click",function(){
        Toggle (r);
      
      }));



function memCardBack (div)
{     
    div.removeChild(div.firstChild);
    div.classList.remove("front");
    div.classList.add("back");
    let img = createNewEle("img",null,null,imagesArr[0]);
    console.log (img);
       div.appendChild(img);
    //console.log (image1 +"hdkwhf");

}


function memCardFront (div){

    let x = div.firstChild;
    div.removeChild(x);
  
    div.classList.remove("back");
     div.classList.add("front");
     let image2 = createNewEle("img",null, null,"babyyoda.png");
     div.appendChild(image2);
}


    function Toggle (x){

            if (x.classList.contains("front") )
            {
                memCardBack (x);

            }
            else 
                memCardFront (x);
    }

    
    















