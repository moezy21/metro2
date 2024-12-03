import random

class Car:
    def __init__(self, number, current_speed, max_speed):
        self.current_speed = current_speed
        self.max_speed = max_speed
        self.travelled = 0
        self.number = number

    def run_for(self, hours):
        self.travelled += hours * self.current_speed
  
    def accelerate(self, km):
        if self.current_speed + km > self.max_speed:
            self.current_speed = self.max_speed
        else:
            self.current_speed += km
cars = []
for i in range(10):
    cars.append(Car('ABC-' + str(i), 0, random.randint(60, 200)))

break_cycle = False
while True:
    if break_cycle:
        break;
    for c in cars:
        c.run_for(1)
        c.accelerate(c.max_speed * random.uniform(-0.1, 0.15))
        if c.travelled > 10000:
            break_cycle = True

print(f"{'Car':<18} {'Distance':>20} {'Current Speed':>20} {'Max Speed':>15}")
cars = sorted(cars, key=lambda car: car.travelled, reverse=True)
for car in cars:
    print(f"{car.number:<8} {car.travelled:>10.1f} {car.current_speed:>20.1f} {car.max_speed:>15}")
