class Hissi:
    def __init__(self, alin_kerros, ylin_kerros):
        self.alin = alin_kerros
        self.ylin = ylin_kerros
        self.nykyinen = alin_kerros

    def move(self, target):
        if self.nykyinen < target:
            self.nykyinen = self.nykyinen + 1
        elif self.nykyinen > target:
            self.nykyinen = self.nykyinen - 1
        print("Hissi on kerroksessa", self.nykyinen)

    def goto(self, kohde):
        while self.nykyinen != kohde:
            self.move(kohde)

class Talo:
    def __init__(self, alin_kerros, ylin_kerros, hissien_lkm):
        self.hissit = []
        self.alin = alin_kerros
        for i in range(hissien_lkm):
            self.hissit.append(Hissi(alin_kerros, ylin_kerros))

    def aja_hissia(self, hissi_nro, kohdekerros):
        print("Hissi", hissi_nro, ":")
        self.hissit[hissi_nro].goto(kohdekerros)

    def palohalytys(self):
        print("PALOHÄLYTYS - kaikki hissit alas!")
        for i in range(len(self.hissit)):
            self.aja_hissia(i, self.alin)

talo = Talo(1, 10, 2)
talo.aja_hissia(0, 5)
talo.aja_hissia(1, 3)
talo.palohalytys()
