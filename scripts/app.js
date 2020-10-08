// DOM manipulation and event handling
const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')

// Update the UI with the data
const updateUI = (data) => {
    // const cityDets = data.cityDets
    // const weather = data.weather

    // destructure properties - same as above
    const {cityDets, weather} = data // from this data object i want you to get the cityDets property and store it in a const named cityDets

    // update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Imperial.Value}</span>
            <span>&deg;F</span>
        </div>
    `

    // update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSrc)

    // ternary operator
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'
    time.setAttribute('src', timeSrc)

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }
}

const updateCity = async (city) => {
    const cityDets = await getCity(city) // wait before the promise finishes then assign it to the variable
    const weather = await getWeather(cityDets.Key)

    // Object Shorthand Notaion = when the property or key is the same as the value
    return { cityDets,weather }
}

cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault()

    // get city value
    const city = cityForm.city.value.trim()
    cityForm.reset()

    // update the ui with new city
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err))
})