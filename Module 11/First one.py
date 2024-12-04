class Julkaisu:
    def __init__(self, nimi):
        self.nimi = nimi

class Kirja(Julkaisu):
    def __init__(self, nimi, kirjoittaja, sivumaara):
        Julkaisu.__init__(self, nimi)
        self.kirjoittaja = kirjoittaja
        self.sivumaara = sivumaara

    def print_info(self):
        print("Kirja:", self.nimi)
        print("Kirjoittaja:", self.kirjoittaja)
        print("Sivumäärä:", self.sivumaara)

class Lehti(Julkaisu):
    def __init__(self, nimi, paatoimittaja):
        Julkaisu.__init__(self, nimi)
        self.paatoimittaja = paatoimittaja

    def tulosta_tiedot(self):
        print("Lehti:", self.nimi)
        print("Päätoimittaja:", self.paatoimittaja)

aku_ankka = Lehti("Aku Ankka", "Aki Hyyppä")
hytti = Kirja("Hytti n:o 6", "Rosa Liksom", 200)

print("Julkaisujen tiedot:")
aku_ankka.tulosta_tiedot()
print()
hytti.print_info()
