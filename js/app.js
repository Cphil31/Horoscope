window.onload = function (){

    let x = document.getElementsByTagName("BODY")[0];

    let title = document.createElement("h1");
    title.setAttribute("class","text-center my-5");
    title.innerHTML="Horoscope des soukounian";
    x.appendChild(title);

    
    let cont = document.createElement("div");
    cont.setAttribute("class","container");
    x.appendChild(cont);

    let row = document.createElement("div");
    row.setAttribute("class","row mt-5 ");
    cont.appendChild(row);
 
    
    //console.log(horoscope);
    for (d of horoscope){
        //creation de col
        let col = document.createElement('div');
        col.setAttribute("class","col- mr-1");
        row.appendChild(col);
        
        //création de la carte 
        //on crée la div.card
        let divCard = document.createElement("div");
        divCard.setAttribute("class","card m-2");
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
        
        
        row.appendChild(divCard);
        
    }
    
    
    
}
