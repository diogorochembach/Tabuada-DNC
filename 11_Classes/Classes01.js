// let jogador = {
//     nome:'Neymar',
//     posicao:'Atacante',
//     numGols: 400
// }

const Jogador = function (nome, posicao, numGol){
    Nome = nome,
    Posicao = posicao,
    Gols = numGol


    this.getNome = function(){
        return Nome
    }
    this.getPos = function(){
        return Posicao
    }
    this.getGol = function(){
        return Gols
    }
}

const Neymar = new Jogador("Neymar", "Atacante", 400)
console.log(Neymar.getNome())
const Renato = new Jogador("Renato Augusto", "Meio Campo", 80)
console.log(Renato.getNome())