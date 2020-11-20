window.onload = function (){
    
    let ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    //on selectionne la div du milieu 
    let middle = document.querySelector(".midle");
    middle.appendChild(ul);
    
   
    //console.log(horoscope);
    for (d of horoscope){
        //creation de li 
        let li = document.createElement('li');
        ul.appendChild(li);

        //création de la carte 
        //on crée la div.card
        let divCard = document.createElement("div");
        divCard.setAttribute("class","card");
        divCard.setAttribute("style","width: 18rem;");
        // on crée la balise img
        let img = document.createElement("img");
        img.setAttribute("class","card-img-top");
        //on la lie a div.card
        divCard.appendChild(img);
        // on crée la div.card-body
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        //on lie a div.card
        divCard.appendChild(cardBody);
        // on crée la balise h5.card-title 
        let h5 = document.createElement("h5");
        h5.setAttribute("class","card-title");
        //on lui donne une texte 
        h5.innerHTML=d.signe;
        // on l'ajoute a card body 
        cardBody.appendChild(h5);
        //on crée la balise p.card-text4
        let p = document.createElement("p");
        p.setAttribute("class","card-text");
        p.innerHTML=d.texte;
        //on ajoute la balise p a card body 
        cardBody.appendChild(p);

        //on lie la card au li 
        li.appendChild(divCard);

        console.log(d);
        ul.appendChild(li);
    }
}
