
//VARIAVEIS&CONSTANTES
//saida
console.log("Insira o nome do seu jogador")
//declara uma variavel
let nickname = "Nane"
//concatenando uma mensagem fixed + uma variavel
console.log("Bem-Vindo " + nickname)
console.log(nickname + " entrou no servidor")
//
const notificacao = "Pokemon Go diz:"
console.log(notificacao + " " +"Tem um novo pokemon na região")
console.log(notificacao + " " + "Você foi derrotado por um mestre pokemon")

//EXEMPLO PRATICO 
let PoteCafe ="Café Pilão"
let PoteAcucar = "Açucar Cristal"
let PoteBiscoito ="Biscoito de Polvilho"
console.log("Hoje na cozinha da vovó temos:" + " | " + PoteCafe + " | " + PoteAcucar + " | " + PoteBiscoito)

PoteCafe = "Café 3Corações"
PoteAcucar = "Açucar Demerara"
PoteBiscoito = "Biscoite de Maizena"
console.log("Hoje na cozinha da vovó temos:" + " | " + PoteCafe + " | " + PoteAcucar + " | " + PoteBiscoito)


//TIPOS DE VARIAVEIS
//pokemon

let NomePokemon = "Pikachu"
let NivelPokemon = 20
let PontosDeVidaPokemon  = 45
let PokemonSexo = "M"
let Selecionavel = false

//string: são variaveis que armazenam texto
//number: são variaveis que armazenam números
//Boolean: são variaveis lógicas, que armazenm o valor ligado ou desligado (tru/false)

//EXEMPLO PRATICO
//nome, idade, numero de telefone, cpf, endereço, recebe pensão
let Nome = "Tereza"
let Idade = 76
let NumeroTelefone = "(11)9.7656-4408"
//qualquer numero que não va ser utilizado em nenhuma operação matemática o future, deve ser armazenado em formato de texto
let CPF = "123.456.789-98"
let Endereco ="Rua dos limoeiros, numero 75, bairro da Jaguatirica"
let RecebePensao = "True"

//CRIANDO E MANIPULANDO VETORES E MATRIZES
//vetores são coleções para armazenamento de dados preferencialmente do mesmo tipo, dentro de uma mesma caixinha
let Nomepokemon=["Pikachu", "Charmander" , "Bubassauro"]
pokemon.pop()
console.log(pokemon[0])

//matrizes são utilizadas para organizar dados de diferente tipos
let TimePokemon = [
    "pikachu", "M", 1]
    [ "Charmander", "F", 3]

console.log("0 pokemon" + TimePokemon[1][0] + "é do sexo" + "e está no nível" + TimePokemon[1][2])

 //Para informações simples = VARIAVEL 
 // Para varias informações do mesmo tipo = VETOR
 // Para varios tipos de informações = MATRIZ

 //OPERADORES MATEMÁTICOS
 let idade = 30
console.log(idade)
//adição
idade = 30 + 6
console.log(idade)
//qualquer operação que você faça com uma variavel só é refletido depois que chega naquela linha, pois todo código é lido de forma sequencial
//é possível utilizar o sinal "+" para concatenar informações (texto+variavel ou texto+texto)
idade = 30 + 6
console.log("Joana tem " + idade + " anos")
//subtração
idade = 30 - 6
console.log(idade)

let CodigoDoProduto = 1023
let CodigoExato = CodigoDoProduto - 1000
console.log(CodigoExato)

let PrimeiroNumero = 1023
let SegundoNumero = 1000
console.log(PrimeiroNumero-SegundoNumero)

//Multiplicação 
let PrecoProduto = 100.99
let ValorTaxa = PrecoProduto * 2
console.log(ValorTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador*multiplicando
console.log("resultado da multiplicação é " + produto)
multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

//Divisão 
let NotaDoMercado = 50
console.log(NotaDoMercado / 2)
let PessoasParaDividir = 2
console.log(NotaDoMercado/PessoasParaDividir)
//Operação de módulo (resto da divisão)
let calculo = 10%3
console.log(calculo)

//Incremento e Decremento
let contador = 1
console. log(contador)
//'++' incremento
contador++
contador++
contador++  
console.log (contador)
// '--' decremento
contador--
contador--
console.log(contador)

//OPERADORES DE ATRIBUIÇÃO
let preco = 10
//ao colocar um sinal matematico junto com o sinal de igual(atribuição) você está dizendo que quer fazer uma operação com o valor que já está armazenada na variavel
preco += 5
console.log(preco)
preco -= 5
console.log(preco)

//EXPRESSÕES MATEMÁTICAS
//funcionam da mesma forma que na matemática, ou seja, a multiplicação e divisão tem prioridade sobre a adição e subtração, para alterar essa ordem, utilizamos os parênteses
let resultado = 2 * ((5 + 5-7))
console.log(resultado)

//OPERADORES RELACIONAIS OU COMPARAÇÃO
//utilizados para comparar valores e retornar um valor lógico (true ou false)
let numero ="1"
console.log(numero == 1) //true
console.log(numero === 1) //false
console.log(numero != 1) //false
console.log(numero !== 1) //true
// = é atribuição
// == igual a (compara o valor)
// === estritamente igual a (compara o valor e o formato) - é a forma mais segura de comparação dentro do JS
// != diferente de (compara o valor)

//guardar o valor em uma variavel de resultado
let marca = "Nike"
let resultadoMarca = marca != "Adidas"
console.log(resultadoMarca)

let CPFBloqueado = "123.456.789-10"
let CPFUsuario = "234.567.890--45"
let EmbarqueLiberado = CPFBloqueado === CPFUsuario
console.log("O passageiro está liberado para embarque?" + EmbarqueLiberado)

let idadeMinima = 18
let idadeUsuaria = 17
console.logo(idadeUsuaria >= idadeMinima) //false
console.logo(idadeUsuaria <= idadeMinima) //true
console.logo(idadeUsuaria > idadeMinima) //false
console.logo(idadeUsuaria < idadeMinima) //true
let idadePermitidaValida = idadeUsuaria >= idadeMinima
console.log("A usuária tem idade permitida?" + idadePermitidaValida)
// >= maior ou igual a
// <= menor ou igual a
// > maior que
// < menor que

let idadeDeCorte = 50
let IdadeCliente = 45
let resultadoIdade = IdadeCliente <= IdadeCliente
console.log("O cliente tem idade para o plano especial?" + resultadoIdade)

//OPERADORES LÓGICOS
//utilizados para trabalhar com mais de uma condição ao mesmo tempo

//OPERADOR AND (E)
// representado por '&&' - todas as condições precisam ser verdadeiras para retornar true
let idadeMinima = 18
let vistoVerificado = true
let resultadoAnd = (idadeMinima >= 18) && (vistoVerificado === true)
console.log(resultadoAnd) //true
//outra forma de escrever 
console.log( (idadeMinima >= 18) && (vistoVerificado === true) ) //true
//100 moedas coletadas e 1 item estrela
let moedasColetadas = 20
let item = "estrela"
let resultado = (moedasColetadas ===100) && (item === "estrelha")
console.log(resultado) //false

let moedasColetadas = 100
let item = "estrela"
let resultado = (moedasColetadas ===100) && (item === "estrelha")
console.log(resultado) //true

//OPERADOR OR (OU)
// representado por '||' - apenas uma das condições precisa ser verdadeira para retornar true
let Tempo = "sol"
let itemPersonagem = "guarda-chuva"
let PodeSair = (Tempo !== "chuva") || (itemPersonagem === "guarda-chuva")
console.log("Nosso personagem pode sair?" + PodeSair) //true
//outra forma de escrever
console.log( (Tempo !== "chuva") || (itemPersonagem === "guarda-chuva") ) //true

//OPERADOR NOT (NÃO)
// representado por '!' - inverte o valor lógico da condição (nega uma afirmação)
let tempo = "chuva"
let resultado = tempo === "chuva"
console.log(resultado) //true
let resultadoNot = ! (tempo === "chuva")
console.log(resultadoNot) //false
//outra forma de escrever
console.log( ! (tempo === "chuva") ) //false

let tempo = "chuva"
let horario = 8
let resultadoHorario = (tempo !== "chuva") && (horario > 6)
console.log("O personagem pode sair?" + resultadoHorario) //false
let resultadoHorarioNot = ! ( (tempo !== "chuva") && (horario > 6) )
console.log("O personagem não pode sair?" + resultadoHorarioNot) //true 

//TRABALHANDO COM CONDICIONAIS IF
//Estrutura básica do if
//if (condição) - bloco de código a ser executado se a condição for verdadeira
let ehLigado = false
if(ehLigado) {
    console.log("executou comando")
}
//tudo que está dentro das chaves será executado se a condição for verdadeira
let ehLigado = true
if(ehLigado) {
    console.log("executou comando")
}
//Exemplo 2
let possuiOvos = false
let itensComprados = ""
if(possuiOvos) {
    itensComprados = "Leite"

}
console.log("item comprado: " + itensComprados) //não executa nada pois a condição é falsa

let possuiOvos = true
let itensComprados = ""
if(possuiOvos) {
    itensComprados = "Leite"

}
console.log("item comprado: " + itensComprados) //executa o comando pois a condição é verdadeira]

//Esturutura básica do else
//else - bloco de código a ser executado se a condição for falsa
let possuiOvos = true
let itensComprados = ""
if(possuiOvos) {
    itensComprados = "Leite"

}
else {
    console.log("Passou na seção de congelados")
    itensComprados = "Lasnha Congelada"
}
console.log("item comprado: " + itensComprados) //executa "item comprado: Leite"

let possuiOvos = false
let itensComprados = ""
if(possuiOvos) {
    itensComprados = "Leite"

}
else {
    console.log("Passou na seção de congelados")
    itensComprados = "Lasnha Congelada"
}
console.log("item comprado: " + itensComprados) //executa "Passou na seção de congelados" e "item comprado: Lasnha Congelada"

//Estrutura básica do else if
//else if - bloco de código a ser executado se a condição anterior for falsa e essa condição for verdadeira
let NiveldeFome = 1 
if(NiveldeFome === 1) {
    console.log("Pouca Fome")
} else if (NiveldeFome === 2){
    console.log("Com Fome")
} else {
    console.log("Muita Fome")
}
//executa "Pouca Fome"

let NiveldeFome = 2
if(NiveldeFome === 1) {
    console.log("Pouca Fome")
} else if (NiveldeFome === 2){
    console.log("Com Fome")
} else {
    console.log("Muita Fome")
}
//executa "Com Fome"
let NiveldeFome = 3
if(NiveldeFome === 1) {
    console.log("Pouca Fome")
} else if (NiveldeFome === 2){
    console.log("Com Fome")
} else {
    console.log("Muita Fome")
}
//executa "Muita Fome" para qualquer valor diferente de 1 ou 2

//INTRODUÇÃO AO SWITCH CASE
//Estrutura básica do switch case - conhecido como uma estrutura de if/else utilizado quando estamos trabalhando com várias opções. Pode ser utilizado em parelelo ao if/else
//switch (expressão) - bloco de código a ser executado dependendo do valor da expressão
//estrutura de decisão com múltiplas condições
//switch/case/break(parar a execução a estrtutura após um bloco ser executado) /default(resposta padrão - caso nenhuma das condições sejam atendidas)
let Fruta = "banana"
switch(Fruta) {
    case "laranja": 
    console.log("Suco de Laranja")
    break
    case "banana":
    case "Mamão"
    console.log("Vitamina de " + Fruta) 
    break
    case "Uva":
    console.log("Suco de Uva")
    break
    default:
    console.log("Suco de Frutas")
    }
//também pode ser utilizado com números

//ESTRUTURAS DE REPETIÇÃO
//Conteúdo que vai se repetir até que determinada condição seja verdadeira
//Estrutura básica do FOR
for (let contador= 0; contador <4; contador++) {
    console.log(contador)
    console.log("aumentando o contador")
}
//executa o bloco de código 4 vezes, imprimindo o valor do contador a cada repetição
//CUIDADOS COM FOR
let PontosDeVida = 0 
for (let i = 0; i < 10; i++) {
    PontosDeVida += 1
    console.log("Tomou poção mágica " + PontosDeVida)
}
console.log(PontosDeVida + " Totais")
//executa o bloco de código 10 vezes, imprimindo a quantidade de pontos de vida a cada repetição e o total ao final

//Estrutura básica do WHILE
//alternativa ao for
//while (condição) - bloco de código a ser executado enquanto a condição for verdadeira
let contador = 0
while (contador < 3) {
    console.log("ola)")
}
//cuidado para não criar loops infinitos
let contador = 0
while (contador < 3) {
    console.log("ola")
    contador++
}
//executa o bloco de código 3 vezes, imprimindo "ola" a cada repetição

//Estrutura básica do DO WHILE
//do - bloco de código a ser executado pelo menos uma vez antes de verificar a condição
//while (condição) - bloco de código a ser executado enquanto a condição for verdadeira 
let contador = 0
do {
    console.log("ola")
    contador++
} while (contador < 3)
//executa o bloco de código 3 vezes, imprimindo "ola" a cada repetição