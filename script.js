//your code here
const table = document.querySelector('table')
const lastRow = document.createElement('tr')
const prices = document.querySelectorAll(`[data-ns-test=price]`)

let sum = 0
for(let i = 0; i < prices.length; i++){
	sum += parseInt(prices[i].textContent)
}

const newCol = document.createElement('td')
newCol.setAttribute('data-ns-test', 'grandTotal')
newCol.textContent = sum

lastRow.appendChild(newCol)
table.appendChild(lastRow)