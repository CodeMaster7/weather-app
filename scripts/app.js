// DOM manipulation and event handling
const cityForm = document.querySelector('form')
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
        .then(data => console.log(data))
        .catch(err => console.log(err))
})