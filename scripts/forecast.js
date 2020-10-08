const key = 'scripts/key.js'

// get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${keys}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}

// city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${keys}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}
