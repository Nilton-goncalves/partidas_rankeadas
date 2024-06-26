let balance = saldo (0, 0)
let nome = "Nilton"

function saldo (vitorias,derrotas){
let saldo = vitorias - derrotas
return saldo
}


for (let wins=0; wins < 12; wins++){
    
    let nivel = ""

    switch (true) {
        case (balance <= 10):
        nivel = "ferro"
        break

    case (balance >= 11 && balance <= 20):
    nivel = "bronze"
    break

    case (balance >= 21 && balance <= 50):
    nivel = "prata"
    break

    case (balance >= 51 && balance <= 80):
    nivel = "ouro"
    break

    case (balance >= 81 && balance <= 90):
    nivel = "diamante"
    break

    case (balance >= 91 && balance <= 100):
    nivel = "lendário"
    break

    case (balance >= 101):
    nivel = "imortal"
    break
    
}

    balance += 10
    console.log (`O herói ${nome} tem saldo de ${balance} vitórias e está no nível ${nivel}`)
    }

    