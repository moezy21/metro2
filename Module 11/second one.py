class Auto:
    def __init__(self, rekisteri, huippunopeus):
        self.rekisteri = rekisteri
        self.huippunopeus = huippunopeus
        self.nopeus = 0
        self.matka = 0

    def aja(self, tunnit):
        self.matka = self.matka + self.nopeus * tunnit

class Sahkoauto(Auto):
    def __init__(self, rekisteri, huippunopeus, akkukapasiteetti):
        Auto.__init__(self, rekisteri, huippunopeus)
        self.akkukapasiteetti = akkukapasiteetti

class Polttomoottoriauto(Auto):
    def __init__(self, rekisteri, huippunopeus, tankin_koko):
        Auto.__init__(self, rekisteri, huippunopeus)
        self.tankin_koko = tankin_koko

tesla = Sahkoauto("ABC-15", 180, 52.5)
toyota = Polttomoottoriauto("ACD-123", 165, 32.3)

tesla.nopeus = 100
toyota.nopeus = 90

tesla.aja(3)
toyota.aja(3)

print("Sähköauton matkamittari:", tesla.matka, "km")
print("Polttomoottoriauton matkamittari:", toyota.matka, "km")
