/* && */

let isAdmin = true;
let isModerator = false;
let isUser = true;

    if(isAdmin && isModerator) {
        console.log("Tú eres Administrado y moderador");
    } else {
        console.log("No eres admin y mod")
    }


/*|| or*/

    if(isAdmin || isModerator) {
        console.log("Tú eres Administrado o moderador");
    } else {
        console.log("No eres admin y mod")
    }

/* && !!*/

if((isAdmin || isModerator) && isUser){
    console.log("Tú eres Administrado o moderador y eres usuario");
} else {
    console.log("No eres admin y mod y no eres usuario")
}