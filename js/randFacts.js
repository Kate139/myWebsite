const button = document.getElementById('button')
const toasts = document.getElementById('fact')

const messages = [
    'Fact #1: Fudge jujubes pastry Chocolate Bar Lolipop Candy Bar toffee sugar plum. Cupcake macaroon donut pastry','Fact #2: ', 'Fact #3: ', 'Fact #4: ',
]



const types = ['color1', 'color2', 'color3']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('fact')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 120000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)
    ]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)
    ]
}




