// creare lista mail 
const iscritti = ['gianluca@mail', 'mauro@mail', 'tiziano@mail', 'alby@mail'];
// console.log (iscritti);
// prompt per avere la mail dall'utente 
const userMail = prompt ('Inserire Email');
// verificare se la mail è presente nell'elenco 

let trovato = false

for (let i = 0; i < iscritti.length; i++) {
    if (userMail === iscritti[i]) {
        trovato = true
    }
} 

if (trovaton = true) {
    console.log ('Email già registrata');
} else {
    console.log ('Email non registrata');
}