var name= prompt("Qual é o seu nome?")
nome.innerHTML=(("Bom dia, seja bem vindo ao meu aplicativo de cálculo de IMC, ") + name)
var mass= prompt(('Qual é sua massa em quilogramas, ') + name + "?")
massa.innerHTML= 'Massa: '+ mass +" kg"
var height= prompt ('Qual é a sua altura em metros, ' + name + "?")
altura.innerHTML= "Altura: " + height + " m"   
var imc= mass/(height*height)  
IMC.innerHTML= "Seu valor de IMC foi de:  " + imc
if (imc<18.5) {complemento.innerHTML= 'Você está abaixo do peso, busque um nutricionista, por favor!'}
if (18.5<imc<24.9) {complementoimc.HTML="Está no intervalo de peso normal, parabéns amiguinho!"}
if (25<imc<29.9) {complementoimc.HTML="Está com sobrepeso, cuidado. Procure um nutricionista!"}
if (30<imc<34.9) {complementoimc.HTML="Está com obesidade grau 1, é um caminho quase sem volta, procure um nutricionista"}
if (35<imc<39.9) {complementoimc.HTML="Está com obesidade grau 2, é um caminho quase sem volta, procure um nutricionista imediatamente"}
if (imc>40) {complementoimc.HTML="Eita cachorrada, você está com obesidade grau 3, é um caminho sem volta, procure um nutricionista imediatamente ou continue sofrendo as consequências"}

//Menos do que 18,5	Abaixo do peso
//Entre 18,5 e 24,9	Peso normal
//Entre 25 e 29,9	Sobrepeso
//Entre 30 e 34,9	Obesidade grau 1
//Entre 35 e 39,9	Obesidade grau 2
//Mais do que 40	Obesidade grau 3
