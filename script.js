import    entradaDados from "readline-sync";

console.log("Bem vindo!!")

let divida = parseInt(entradaDados.question("Informe o valor de sua divida:"));


if(divida > 0){

    let diasAtraso = parseInt(entradaDados.question("informe o total de dias de atraso do pagamento:"));
    

    if (diasAtraso>0 && diasAtraso<15 ){

        let  taxa  = 0.5;
        let total = divida +(divida  *  taxa );
         console.log(`Devido ao atraso, sua dívida recebeu 5% de juros e agora está no valor de R$ ${total.toFixed(2)}`)
    
    }
    
    else if (diasAtraso > 15){
        let taxa = 0.10;
        let total = divida + (divida * taxa  );
        console.log(`Devido ao atraso, sua dívida recebeu 10% de juros e agora está no valor de R$ ${total.toFixed(2)}`)
    
    
    
    }


    else { 
        console.log("Sua vida financeira está  em dia!!")
    }
       
}

else{

    console.log("Ocorreu um problema!! ")

    

}


