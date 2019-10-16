//Fonction numbers() renvoie les nombres de 1 à 100

var numbers = function() {

    for(var i=1; i<100; i++){

        console.log(i);
    }
    return console.log(i);
}

exports.numbers = numbers;

//Fonction even() renvoie les nombres pairs de 1 à 100

var even = function() {

    for(var i=1; i<100; i++){

        if(i%2 === 0){
            console.log("Nombres pairs : " + i);
        }
        
    }
}
exports.even=even;

//Fonction odd() renvoie les nombres impairs de 1 à 100

var odd = function() {

    for(var i=1; i<=100; i++){

        if(i%2 !== 0){
            console.log("Nombres impairs : " + i);
        }
        
    }
}
exports.odd = odd;