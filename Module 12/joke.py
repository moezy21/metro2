import requests

joke = requests.get('https://api.chucknorris.io/jokes/random').json()
print("Here's a joke for you:", joke['value'])
