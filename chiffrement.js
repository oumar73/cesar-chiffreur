const btn_copier=document.querySelector(".copier");
const btn_effacer=document.querySelector(".effacer");
const input=document.querySelector("#Decalage");
const btn_plus=document.querySelector(".plus");
const btn_moin=document.querySelector(".moin");
const btn_chiffrer=document.querySelector("#chiffrer");
const btn_dechiffrer=document.querySelector("#dechiffrer");
const textera=document.querySelector("#textarea");
const btn_retour=document.querySelector(".retour");
const page_dechiffrement=document.querySelector(".dechiffrement");
const liste_proposition=document.querySelector(".liste_proposition");



// bouton plus , moins, effacer.

let compteur=0;
btn_plus.addEventListener("click",()=>{
    compteur=parseInt(input.value);
    compteur=compteur+1;
    input.value=compteur;
})
btn_moin.addEventListener("click",()=>{
    compteur=parseInt(input.value);
    compteur=compteur-1;
    input.value=compteur;
})
btn_effacer.addEventListener("click",()=>{ 
    textera.value="";
})

// fonction principale
function UniCode(message, decalge){
    let resultat="";
    let max_unicode=0x110000;
    decalge=((decalge%max_unicode)+max_unicode)%max_unicode;
    for (let i of message){
        let code=i.codePointAt(0);
        let noveau_code=(code + decalge)%max_unicode;
        resultat=resultat+String.fromCodePoint(noveau_code);
    }
    return resultat;
}

// bouton chiffrer , dechiffrer .
btn_chiffrer.addEventListener("click",()=>{
    
    let msg=textera.value;
    textera.value="";
    textera.value=UniCode(msg, parseInt(input.value));
    
 
})

btn_dechiffrer.addEventListener("click",()=>{
    let msg=textera.value;
    textera.value="";
    textera.value=UniCode(msg,-parseInt(input.value));
    
})

    
    
// })
// bouton retour

btn_retour.addEventListener("click",()=>{
     page_dechiffrement.classList.add("hidden");
})

// bouton copier
btn_copier.addEventListener("click",()=>{
    navigator.clipboard.writeText(textera.value)
    // .then(()=>{
    //     alert("texte")
    // })
})