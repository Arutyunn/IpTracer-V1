const btn = document.querySelector('.search__btn')
const search = document.querySelector('.search__input')
const dataIp = document.querySelector('.block_title-ip')
const dataLocation = document.querySelector('.block_title-location')
const dataTimeZone = document.querySelector('#block_title-timeZone')
const dataIsp = document.querySelector('.block_title-isp')
const frame = document.querySelector('iframe')


btn.addEventListener('click', getMap)



function getMap() {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_A7jcVwOL6fTirmiygoT3KJKo8bruB&ipAddress=${search.value}`)
        .then(response => response.json())
        .then(dok => {
            console.log(dok)
            return createDok(dok)
        })

}


function createDok(data) {
    dataIp.innerHTML = `<h4>${data.ip}</h4>`
    dataLocation.innerHTML = `<h4>${data.location.city}</h4>`
    dataTimeZone.innerHTML = `<h4>${data.location.timezone}</h4>`
    dataIsp.innerHTML = `<h4>${data.isp}</h4>`

    let lat = data.location.lat
    let lng = data.location.lng
    map.setView([lat, lng])
    let marker = L.marker([lat, lng]).addTo(map);
}



let map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);