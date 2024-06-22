var para = "";
para += "<h2> The best programming langueges in my mind is : </h2>"
document.querySelector("h2").innerHTML = para;

var progLang = ['C++' , 'JS' , 'Python'];
var list = "";
for (var i=0 ; i<3 ; i++){
    list += "<li>" + progLang[i] + "</li>";
}
document.querySelector("ul").innerHTML=list;