import requests

api_key = "XXXX"

while True:
    city = input("Syötä kaupungin nimi: ")

    weather_url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key

    response = requests.get(weather_url)

    if response.status_code == 200:
        weather_data = response.json()
        temp_kelvin = weather_data["main"]["temp"]
        temp_celsius = temp_kelvin - 273.15
        weather_desc = weather_data["weather"][0]["description"]

        print("Lämpötila: {:.1f} °C".format(temp_celsius))
        print("Säätila:", weather_desc)
    else:
        print("Kaupunkia ei löytynyt. Yritä uudelleen.")
