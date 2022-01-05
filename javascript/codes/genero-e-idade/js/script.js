;function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // Ano Atual
    var fano = window.document.getElementById('txtI1') // Ano de Nascimento
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente.")
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var ger = ''
        img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'

        } else if (idade > 0 && idade <= 12){
            ger = 'Alpha'
            img.src = "imagens/alphamas.png"

        } else if (idade > 12 && idade < 25){
            ger = 'Z'
            img.src = "imagens/zmas.png"

        } else if (idade >= 25 && idade < 40){
            ger = 'Y'
            img.src = "imagens/ymas.png"

        } else if (idade >= 40 && idade < 60){
            ger = 'X'
            img.src = "imagens/xmas.png"

        } else if (idade >= 60 && idade < 80){
            ger = 'Boomer'
            img.src = "imagens/boomermas.png"

        } else if (idade >= 80){
            ger = 'Unknow'
            img.src = "imagens/interrogation.png"
        }

    if (fsex[1].checked){
            genero = 'Mulher'

        } else if (idade >= 0 && idade < 11){
            ger = 'Alpha'
            img.src = "imagens/alphafem.png"

        } else if (idade >= 11 && idade < 25){
            ger = 'Z'
            img.src = "imagens/zfem.png"

        } else if (idade >= 25 && idade < 40){
            ger = 'Y'
            img.src = "imagens/yfem.png"

        } else if (idade >= 40 && idade < 60){
            ger = 'X'
            img.src = "imagens/xfem.png"

        } else if (idade >= 60 && idade < 80){
            ger = 'Boomer'
            img.src = "imagens/boomerfem.png"

        } else if (idade >= 80){
    
            img.src = "imagens/interrogation.png"
        }
        res.style.textAlign = 'center'
        res.innerText = `Recebemos ${genero} da Geração "${ger}".`
        res.appendChild(img)
    }
}