function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    }else
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')


    if (fsex[0].checked){
        gênero = 'Homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
        }else if(idade < 18 ){
            //adolecente
            img.setAttribute('src', 'foto-adolecente-m.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'foto-homem.png')
        }else{
            img.setAttribute('src', 'foto-idoso-m.png')
            //idoso
        }

    }else if(fsex[1].checked){
        gênero = 'Mulher'

        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'foto-bebe-f.png')
        }else if(idade < 18 ){
            //adolecente
            img.setAttribute('src', 'foto-adolecente-f.png')
        }else if(idade < 50){
            //adulto
            img.setAttribute('src', 'foto-mulher.png')
        }else{
            img.setAttribute('src', 'foto-idoso-f.png')
            //idoso
        }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
}