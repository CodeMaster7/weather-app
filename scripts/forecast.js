class Forecast {
    constructor() {
        this.key = 'MTZQWIXLHujCjSBy7G9doqAIiYyWCgbH'
        this.weatherUrI = 'https://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    }
    async updateCity (city) {
        const cityDets = await this.getCity(city) // wait before the promise finishes then assign it to the variable
        const weather = await this.getWeather(cityDets.Key)

        // Object Shorthand Notaion = when the property or key is the same as the value
        return { cityDets,weather }
    }

    async getWeather (id) {
        const query = `${id}?apikey=${this.key}`
        const response = await fetch(this.weatherUrI + query)
        const data = await response.json()

        return data[0]
    }

    async getCity (city) {
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURI + query)
        const data = await response.json()

        return data[0]
    }
}
