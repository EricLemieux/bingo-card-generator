function generateCards() {
    // Get the target
    let target = document.querySelector('#cards-target')

    // Clean the target
    target.innerHTML = '';

    // Get the input text
    let input = document.querySelector('#input-text').value.split('\n').map(a => a.trim()).filter(a => a !== "")

    // Get the number of cards to generate
    let numberOfCards = document.querySelector('#number-of-cards').value

    // Generate the cards
    for (let i = 0; i < numberOfCards; i++) {
        // Add the cards to the document
        target.append(generateSingleCard(input))
    }
}

function generateSingleCard(inputs) {
    let div = document.createElement('div')
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')

    for (let i of 'BINGO'.split('')) {
        let td = document.createElement('td')
        td.innerText = i
        thead.append(td)
    }
    table.append(thead)

    let data = generateSingleCard2dArray(inputs)
    for (let i in data) {
        let tr = document.createElement('tr')
        for (let j in data[i]) {
            let td = document.createElement('td')
            td.innerText = data[i][j]
            tr.append(td)
        }
        tbody.append(tr)
    }
    table.append(tbody)
    div.append(table)

    div.className="card";

    return div
}

function generateSingleCard2dArray(inputs) {
    let i = 0;
    let res = new Array(5)
    for (let j = 0; j < 5; j++) {
        res[j] = new Array(5).fill('')
    }

    for (let val of shuffleArray(inputs).slice(0, 25)) {
        res[i%5][Math.floor(i/5)] = val
        i++
    }

    return res
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}