function checkCashRegister(price, cash, cid) {
    let change = cash* 100 - price *100; //variable que resta el dinero recibido menos el precio
    let cidTotal = 0;
    //saber lo que hay de cash en la caja así que iteramos este array cid con for
    for (let elem of cid){
      //sumamos el total de caja con el elemento
        cidTotal += elem[1] *100; //elem[1] posición 1 de array cid que es el dinero que sumamos al total y eso por 100 para sacar el precio sin centavos
        console.log(cidTotal);
    }
    if(change > cidTotal){ //si el cambio es mayor que el total en caja es que tenemos fondos insuficientes
            return {status: "INSUFFICIENT_FUNDS", change: []};

    } else if(change === cidTotal){
        return {status: "CLOSED", change: cid};

    }else{
          let answer = []; //otra variable como holder para empujar cualquier cosa de holder que no sea cero
          cid = cid.reverse(); //tiene que ser de más a menos ordenados como nos pide el ejercicio
          //console.log(cid);
          let moneyUnits = { //en este objeto,usamos numeros enteros sin decimales y expresada en centavos. Si necesitamos acceder usamos bracket notatio
            "ONE HUNDRED": 10000,
            "TWENTY": 2000,
            "TEN": 1000,
            "FIVE": 500,
            "ONE": 100,
            "QUARTER": 25,
            "DIME": 10,
            "NICKEL": 5,
            "PENNY": 1 
            };
       //ahora volvemos a querer saber cuanto dinero tenemos de cada denomincación así que otro FOR
        for (let elem of cid){
          //después del while creamos array vacio para guardar los dif tipos de dinero sacados de caja
            let holder = [elem[0], 0];       
         //console.log(holder); //imprime billete a ceros todos y lo llevamos a variable
        //sumamos el total de caja con el elemento      
        //console.log(elem);
        //multiplicar elem posición 1 del array donde está el dinero por 100
            elem[1] = elem[1]*100;
          //ahora ponemos la condición while de que cambio sea mayor o igual y hacemos un objeto que contenga las unidades de dinero
            while(change >= moneyUnits[elem[0]] && elem[1] > 0){
                change -= moneyUnits[elem[0]]; //que es 25
              //decrementamos en 25
                elem[1] -= moneyUnits[elem[0]];
                holder[1] += moneyUnits[elem[0]]/100 //posición 1 del array holder y le sumamos y todo esto dividido por 100  
            }
          if(holder[1] > 0){//deshacernos de todos los ceros
            answer.push(holder); //al array vacío le metemos al final el holder
            //console.log(answer);
          }
        }

        if(change >0){
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        
        return {status: "OPEN", change: answer};
        }
        //cierre del else
}  


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

/*
Caja registradora
Diseñe una función de cajón de caja registradora checkCashRegister()que acepte el precio de compra como primer argumento ( price), el pago como segundo argumento ( cash) y el efectivo en cajón ( cid) como tercer argumento.

cides una matriz 2D que enumera la moneda disponible.

La checkCashRegister()función siempre debe devolver un objeto con una statusclave y una changeclave.

Devuélvalo {status: "INSUFFICIENT_FUNDS", change: []}si el efectivo en el cajón es menor que el cambio adeudado, o si no puede devolver el cambio exacto.

Devolución {status: "CLOSED", change: [...]}con efectivo en cajón como valor de la llave changesi es igual al cambio adeudado.

En caso contrario, devolver {status: "OPEN", change: [...]}, con el cambio adeudado en monedas y billetes, ordenados de mayor a menor, como valor de la changellave.

Unidad monetaria	Cantidad
Centavo	$0.01 (PENIQUE)
Níquel	$0.05 (NÍQUEL)
Diez centavos	$0.1 (DIME)
Cuarto	$0.25 (TRIMESTRE)
Dólar	$1 (UNO)
Cinco dólares	$5 (CINCO)
Diez dólares	$10 (DIEZ)
Veinte dólares	$20 (VEINTE)
Cien dolares	$100 (CIEN)
Vea a continuación un ejemplo de una matriz de efectivo en cajón:

[
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]

function checkCashRegister(price, cash, cid) {
    let change;
    return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

*/