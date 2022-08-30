function aula (nome,videoID ) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula ('bem vindo',123)
const aula2 =new aula ('ate breve', 456)

console.log(aula1,aula2)