class Jogador {
    constructor(nome, posicao, numGol){
        this.nome = nome
        this.posicao = posicao
        this.numGol = numGol
    }
    GolsMarcados(){
        console.log(`O ${this.nome} já marcou ${this.numGol} gols em sua carreira`)
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 400)
Neymar.GolsMarcados()

const Pele = new Jogador('Pelé', 'Atacante', 1000)
Pele.GolsMarcados()

console.log(typeof Jogador)
