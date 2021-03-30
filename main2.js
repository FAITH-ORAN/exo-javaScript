var lastName = prompt("veuillez entrer votre prénom");
if(isNaN(lastName) || lastName == typeof("string")){
    alert("Bonjour " + lastName);
}else{
    alert("ce n'est pas une entrée correct");
}
