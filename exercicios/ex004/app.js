function tabuada () {
  let nume = document.getElementById('num')
  let tab = document.getElementById('seltab')
  if (nume.value.length == 0) {
    window.alert('Por Favor, Digite um numero!')
  } else {
    let n = Number(nume.value)
    let c = 1 
    tab.innerHTML = ''
      while (c <= 10) {
        let intem = document.createElement('option')
        intem.text = `${n} x ${c} = ${n*c}`
        intem.value = `tab ${c}`
        tab.appendChild(intem)
        c++
      }
  }

}