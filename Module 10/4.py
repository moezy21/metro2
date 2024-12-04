import random

class Car:
    def __init__(self, number, current_speed, max_speed):
        self.travelled = 0
        self.number = number
        self.current_speed = current_speed
        self.max_speed = max_speed

    def accelerate(self, km):
        if self.current_speed + km > self.max_speed:
            self.current_speed = self.max_speed
        else:
            self.current_speed = self.current_speed + km

    def run_for(self, hours):
        self.travelled = self.travelled + hours * self.current_speed

class Kilpailu:
    def __init__(self, name, distance, cars):
        self.name = name
        self.distance = distance
        self.cars = cars
        self.hour = 0

    def tunti_kuluu(self):
        self.hour = self.hour + 1
        for car in self.cars:
            change = car.max_speed * random.uniform(-0.1, 0.15)
            car.accelerate(change)
            car.run_for(1)

    def tulosta_tilanne(self):
        print()
        print("Kilpailun", self.name, "tilanne", self.hour, "tunnin jälkeen:")
        print("Auto     Matka       Nopeus      Max nopeus")
        print("-" * 40)

        sorted_cars = sorted(self.cars, key=lambda car: car.travelled, reverse=True)

        for car in sorted_cars:
            print(f"{car.number:<8} {car.travelled:>8.1f} {car.current_speed:>10.1f} {car.max_speed:>12.1f}")

    def kilpailu_ohi(self):
        for car in self.cars:
            if car.travelled >= self.distance:
                return True
        return False

if __name__ == "__main__":
    cars = []
    for i in range(10):
        number = "ABC-" + str(i)
        max_speed = random.randint(60, 200)
        cars.append(Car(number, 0, max_speed))

    race = Kilpailu("Suuri romuralli", 8000, cars)

    while not race.kilpailu_ohi():
        race.tunti_kuluu()
        if race.hour % 10 == 0:
            race.tulosta_tilanne()

    print("\nKilpailu päättyi!")
    race.tulosta_tilanne()
