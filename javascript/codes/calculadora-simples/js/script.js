function Calcular(){
    var numb1 = window.document.getElementById("txtn1")
    var numb2 = window.document.getElementById("txtn2")
    var res = window.document.getElementById("res")
    var fop = window.document.getElementsByName("radiobutton")
    var n1 = Number(numb1.value)
    var n2 = Number(numb2.value)
    var resultado = 0

    if (fop[0].checked){
        resultado = n1 + n2
        res.innerHTML = `${n1} + ${n2} = ${resultado}`

    } else if (fop[1].checked){
        resultado = n1 - n2
        res.innerHTML = `${n1} - ${n2} = ${resultado}`

    } else if (fop[2].checked){
        resultado = n1 * n2
        res.innerHTML = `${n1} x ${n2} = ${resultado}`

    } else if (fop[3].checked){
        resultado = n1 / n2
        res.innerHTML = `${n1} / ${n2} = ${resultado}`
    }
}