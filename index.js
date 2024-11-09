function calcularRank(vitorias, derrotas){
    let saldoVitorias= vitorias - derrotas;
    let nivel;
   
    if(vitorias<10){
        nivel= "ferro";
    } else if(vitorias<=20){
        nivel="Bronze";
    } else if (vitorias<=50){
        nivel="Prata";
    } else if(vitorias<=80){
        nivel="Ouro";
    } else if(vitorias<=90){
        nivel="Diamante";
    } else if(vitorias<=100){
        nivel="Lendario";
    } else{
        nivel="Imortal";
    }
console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
calcularRank(85, 20); // O Herói tem de saldo de 65 está no nível de Diamante
