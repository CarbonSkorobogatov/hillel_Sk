radius = parseInt(prompt("Enter radius")); //радиус основания цилиндра
z = parseInt(prompt("Enter height")); //z - высота цилиндра 

S =  Math.PI * Math.pow(radius, 2); // Подсчёт площади основания ("PI*r^2")
V = S * z; //Подсчёт объема 

document.write("<p>'*************'</p>");
document.write("'Обьем цилиндра с площадью основы *", S, "* , радиусом *", radius, "* и высотой *", z, "* равен:'");
document.write("<p>'--------------------'</p>");
document.write('V = ', V);
document.write("<p>'--------------------'</p>");
document.write("<p>'end'</p>");

