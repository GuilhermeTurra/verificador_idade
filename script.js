function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulto-m.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebe-f.png')
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adulta-f.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosa-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)
    }
}