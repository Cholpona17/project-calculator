
const divAll = document.createElement('div')
divAll.classList.add('divAll')
let result = ''
const output = document.createElement('input')
output.classList.add('cssInput')
output.value = result
output.disabled = true
const body = document.body
const btnWrapper = document.createElement('div')
body.append(divAll)
divAll.append(output, btnWrapper)
const arr = [
    'AC', 'C', '*',
    '/', '7', '8',
    '9', '+', '4',
    '5', '6', '-', '1',
    '2', '3', '=',
]
const getBtnValue = (event) => {
    let num = event.target.value
    if (num == 'C') {
        result = result.substring(0, result.length - 1)
    } else if (num == 'AC') {
        result = ''
    } else if (num == '=') {
        result = eval(result)
    } else {
        result += num
    }
    output.value = result
}

arr.forEach(element => {
    const btn = document.createElement('input')
    btn.classList.add('word')
    btn.type = 'button'
    btn.value = element
    btn.addEventListener('click', getBtnValue)
    btnWrapper.append(btn)
})

