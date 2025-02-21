//your code here
const table = document.querySelector('table')
const lastRow = document.createElement('tr')
const prices = document.querySelectorAll('[data-ns-test=prices]')

let sum = 0
for(let i = 0; i < prices.length; i++){
	sum += parseInt(prices[i].innerText)
}

const newCol = document.createElement('td')
newCol.innerText = sum
newCol.setAttribute('data-ns-test', 'grandTotal')

lastRow.appendChild(newCol)
table.appendChild(lastRow)