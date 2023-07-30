const time = document.querySelector("h1")
const date = document.querySelector("h2")
const timezone = document.querySelector('p')




const interval = setInterval(() => {
    const now = new Date()

    const now_time = now.toLocaleTimeString({}, {timeZoneName: 'short'}).split(' ')

    time.innerHTML = now_time[0]
    date.innerHTML = now.toLocaleDateString()
    timezone.innerHTML = now_time[1]

}, 1000)

