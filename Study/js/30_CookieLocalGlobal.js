//Set the value in a local storage object
localStorage.setItem('name', myName);

//Get the value from storage object
localStorage.getItem('name');

//Delete the value from local storage object
localStorage.removeItem(name);//Delete specifice obeject from local storege
localStorage.clear();//Delete all from local storege

document.cookie = "cookie_name=choco"; 
document.cookie = "cookie_taste=strawberry"; 
console.log(document.cookie); 
// logs "yummy_cookie=choco; tasty_cookie=strawberry"s