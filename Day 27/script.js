const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Massege One',
    'Massege Two',
    'Massege Three',
    'Massege Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessege()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessege() {
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}