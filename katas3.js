const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result){
   const body = document.getElementsByTagName('body')[0];
   const divi = document.createElement('div');
   const node = document.createTextNode(result);
   divi.appendChild(node);
   body.appendChild(divi);
   divi.classList.add("Results");
  
}

function kata1() {
  
    let resultado = [];
    for(let i = 1; i <= 25; i++){
       resultado += i + ", ";
      
    }
    
     showResults(resultado);
   
    // implemente o código do kata 1 aqui
}
kata1();



function kata2() {
    let resultado = [];
    for(let i = 25; i >= 1; i--){
        resultado += i + ", ";
    }
   showResults(resultado);
    // implemente o código do kata 2 aqui
}
kata2();


function kata3() {
    let resultado = [];
    for(let i = 1; i <= 25; i++){
        resultado += -i + ", ";
    }
   showResults(resultado);
    // implemente o código do kata 3 aqui
}
kata3();

function kata4() {
    let resultado = [];
    for(let i = 25; i >= 1; i--){
        resultado += -i + ", ";
    }
   showResults(resultado);
    // implemente o código do kata 4 aqui
}
kata4();

function kata5() {
    let resultado = [];
    for(let i = 25; i >= 0; i--){
      resultado += i + ", ";
    }
   
    for(let i = 1; i <= 25; i++){
        resultado += -i + ", ";
    }
    
   showResults(resultado + resultado)
    // implemente o código do kata 5 aqui
}
kata5();

function kata6() {
    let resultado = [];
    for(let i = 3; i <= 100; i++){
      
        if(i%3 == 0){
            resultado += i + ", ";
        }
    }
    showResults(resultado);
    // implemente o código do kata 6 aqui
}
kata6();

function kata7() {
    let resultado = [];
    for(let i = 7; i <= 100; i++){
        if( i%7 == 0){
            resultado += i + ", ";
        }
    }
    showResults(resultado);
    // implemente o código do kata 7 aqui
}
kata7();

function kata8() {
    let resultado = [];
    for(let i = 100; i >= 1; i--){
        if(i%3 == 0 || i%7 == 0){
            resultado += i + ", ";
        }
    }
    showResults(resultado);

    // implemente o código do kata 8 aqui
}
kata8();

function kata9() {
    let resultado = [];
    for(let i = 0; i <= 100; i++){
        if(i%5 == 0 && i%2 !== 0){
            resultado += i + ", ";
        }
    }
    showResults(resultado);
    // implemente o código do kata 9 aqui
}
kata9();

function kata10() {
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        resultado += sampleArray[i] + ". ";
    }
    showResults(resultado);
    // implemente o código do kata 10 aqui
}
kata10();

function kata11() {
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 == 0){
            resultado += sampleArray[i] + ", ";
        }
    }
   showResults(resultado);
    // implemente o código do kata 11 aqui
}
kata11();

function kata12() {
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%2 !== 0){
            resultado += sampleArray[i] + ", ";
        }
    }
    showResults(resultado);
    
    // implemente o código do kata 12 aqui
}
kata12();

function kata13() {
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        if(sampleArray[i]%8 == 0){
            resultado += sampleArray[i] + ", ";
        }
    }
    showResults(resultado);
    // implemente o código do kata 13 aqui
}
kata13();

function kata14() {
    let resultado = [];
    for(let i = 0; i < sampleArray.length; i++){
        resultado += sampleArray[i]**2 + ", ";
    }
    showResults(resultado);
    // implemente o código do kata 14 aqui
}
kata14();

function kata15() {
    
    let numberbefore = 0;
    let resultado = 0;
    for(let i = 1; i <= 20; i++){
        numberbefore = i;
        resultado += numberbefore;
    }

    showResults(resultado);
    // implemente o código do kata 15 aqui
}
kata15();

function kata16() {
    let numberbefore = 0;
    let resultado = 0;
    for( let i = 0; i < sampleArray.length; i++){
        numberbefore = sampleArray[i];
        resultado += numberbefore;

    }
   showResults(resultado);
    // implemente o código do kata 16 aqui
}
kata16();

function kata17() {
    
    let arrNum = 0;
    let resultado = sampleArray[1];
    for( let i = 0; i < sampleArray.length; i++){
       
       
        arrNum = sampleArray[i];
       if( resultado > arrNum){
           resultado = arrNum; 
       }
       
      

    }
    showResults(resultado);
    // implemente o código do kata 17 aqui
}
kata17();

function kata18() {

    let arrNum = 0;
    let resultado = sampleArray[1];
    for( let i = 0; i < sampleArray.length; i++){
        arrNum = sampleArray[i];
     
        if( arrNum > resultado){
            resultado = arrNum;
        }
        
    }
    showResults(resultado);
    // implemente o código do kata 18 aqui
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    let retangul = 0;
    for( let i = 0; i <= 20; i++){

    }

    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}

