/*yay 2a*/

let even = true
for (let i = 0; i < 10; i++){ 
    console.log(i,even);
    if (even==true) {
        even=false
        console.log("X");
        
    } else {
        even=true
        console.log("0");
        
    }
 }  
 /*2b */

 let resultat = ""
 for (let i=0; i <20;i++) {
    let amountofspaces = (Math.floor(Math.random()*5)+1)

    resultat +="O"
    resultat +=" ".repeat(amountofspaces)
    
 }

 console.log(resultat);

 /*2c */

 let citynames = ["malmö","landskorna","lund","elsöv"]
 for (let i= 0;i<citynames.length;i++) {
    let city = citynames[i]
    for (let i = 0;i<city.length;i++){
        console.log(city.charAt(i),i);
        
    }
 }