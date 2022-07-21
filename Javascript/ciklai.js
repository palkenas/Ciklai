// pirma uzduotis

console.log("-----Pirma Užduotis-------");
var arr = [];
for (var i = 0, t = 300; i < t; i++) {
    arr.push(Math.round(Math.random() * t))
}

console.log(arr)

let count = 0;
let text = " ";
for (let i = 0; i < 300; i++) {
    let random = Math.round(Math.random() * 300);
    if (random > 150) {
        count++;
        ;
    }
    if (random > 275) {
        text += "[" + random + "] ";
    }
    else {
        text += random + " ";

    }
}
text += ""
console.log(text);
console.log("-------------")
console.log(count);

// antra užduotis

console.log("-----anra uzduotis-------");

text1 = "";
for (var i = 77; i < 3000; i += 77) {
    text1 += i + ",";
}

console.log(text1.substring(0, text1.length - 2));


// trečia užduotis

console.log("------trečia užduotis-------");

let text2 = "";
for (let i = 0; i < 10000; i++) {
    text2 += "*";
    if (i % 100 === 0) {
        console.log(text2);
        text2 = "";
    }
}

console.log("-----------------------------");


for (let i = 0; i < 10; i++) {
    text2 = "";
    for (let a = 0; a < 10; a++) {
        text2 += "*";
    }
    console.log(text2);
}

console.log("-------------ketvirta uzduotis----------------");

for (let i = 0; i < 10; i++) {
    text3 = "";
    for (let a = 0; a < 10; a++) {
        if (i == a) {
            text3 += "0"
        }
        else if (a == (9 - i)) {
            text3 += "0"
        }
        else {
            text3 += "*"
        }
    }
    console.log(text3);
}

// ------------- penkta užduotis-------------

console.log("-----------penkta uzduotis------------");



for (let i = 0; i < 1; i++) {
    let x = Math.round(Math.random())
    if (x == 0) {
        console.log("H");
    }
    else {
        console.log("S");
    }
}

while (i <= 1) {

    for (let i = 0; i < 1; i++) {
        let x = Math.round(Math.random())
        if (x == 0) {
            console.log("H");
        }
        else {
            console.log("S");
        }
    }
}
console.log("-----scenarijus a-----------");

let counter = 0;
while (true) {
    let x = Math.round(Math.random());
    if (x == 0) {
        counter++;
        console.log("H")
        break
    }
    if (x == 1) {
        counter = 0;
        console.log("S");
    }
}

console.log("---------scenarijus b ----------");

while (true) {
    let x = Math.round(Math.random());
    if (x == 0) {
        counter++;
        console.log("H")
    }
    if (counter == 4) {
        break;
    }
    if (x == 1) {
        console.log("S");
    }
}

console.log("-----------scenarijus c -----------");


while (true) {
    let x = Math.round(Math.random());
    if (x == 0) {
        counter++;
        console.log("H")
    }
    if (counter == 3) {
        break;
    }
    if (x == 1) {
        counter = 0;
        console.log("S");
    }
}

// šešta užduotis

console.log("--------- šešta užduotis ----------");

let kazys = 0;
let petras = 0;
while (true) {
    petras += Math.round(Math.random() * 10 + 10);
    kazys += Math.round(Math.random() * 20 + 5);
    if (kazys >= 222 || petras >= 222) {
        break;
    }
    if (petras > kazys) {
        console.log("Partiją laimėjo: Petras " + petras + " taškų.");
    }
    if (petras == kazys) {
        console.log("Lygiosios");
    }
    if (kazys > petras) {
        console.log("Partiją laimėjo: Kazys " + kazys + " taškų.");
    }
}

if (petras > kazys) {
    console.log("Žaidimą laimėjo: Petras su " + petras + " taškų.");
} else if (petras == kazys) {
    console.log("Lygiosios.");
}
else {
    console.log("Žaidimą laimėjo Kazys su " + kazys + " taškų.");
}

// septinta užduotis

console.log("---------Septinta užduotis-------");

for (let i = 0; i < 21; i++) {
    text3 = "";
    for (let a = 0; a < 21; a++) {
        if ((i + a >= 10) && (i - a <= 10) && (a - i <= 10) && (i + a <= 30)) {
            text3 += "0";
        }
        else {
            text3 += " ";
        }

    }
    console.log(text3);

}
// if (a > 20 - 20 + i && a < 20 - i)


// aštunta užduotis

console.log("---------Aštunta užduotis-------");

// a dalis

console.log("---------A dalis-------");


let smugisA = 0;
count = 0
while (true) {
    smugisA += Math.round(Math.random() * 15 + 5);
    count++;
    if (smugisA >= 425) {
        break;
    }
}
console.log(count);

// b dalis

console.log("---------B dalis-------");
let smugisB = 0;
counteris = 0;
for (let i = 0; i < 5; i++) {
    while (true) {
        let tikimybe = Math.round(Math.random());
        if (tikimybe == 1) {
            smugisB += Math.round(Math.random() * 10 + 20);
            counteris++
        }
        if (smugisB >= 85) {
            break;
        }
    }
}
console.log(counteris*5);

// devinta užduotis

console.log("---------Devinta užduotis-------");
// Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200, 
// atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). 
// Sugeneruokite antrą stringą, pasinaudodami pirmu, palikdami jame tik 
// pirminius skaičius (t.y tokius, kurie dalinasi be liekanos tik iš 1 ir patys savęs). 
// Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. 
// (reikės split() funkcijos ir masyvų.)

count = 0;
text = " ";
for (let i = 0; i < 50; i++) {
    let random = Math.round(Math.random()*199 + 1);
    text += random + " ";
}
let u = text.split(" ");
let o = text.includes(u, 0);
if (o == true) {
    console.log(false);
}
    else {
        console.log(text);
    }
// -------------------------------------------------

    let isPrime = true;
    for (let i = 2; i <= 200; i++) {
      if(u % i == 0 ){
        console.log("sis skaicius nera pirminis!");
        isPrime = false;
      }
    }
    console.log(isPrime);