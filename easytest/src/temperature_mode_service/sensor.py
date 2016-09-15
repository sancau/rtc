# -*- coding: utf-8 -*-


class Sensor:
    def __init__(self, *, name, values):
        self.values = values
        self.name = name

    def getAverage(self):
        pass

    def getMinAmplitude(self):
        pass

    def getMaxAmplitude(self):
        pass
