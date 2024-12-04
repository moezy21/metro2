from flask import Flask, jsonify

app = Flask(__name__)

def check_if_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

@app.route('/prime/<int:number>', methods=['GET'])
def prime_status(number):
    data = {
        "Number": number,
        "isPrime": check_if_prime(number)
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=3000)
