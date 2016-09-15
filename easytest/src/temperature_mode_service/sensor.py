# -*- coding: utf-8 -*-


class Sensor:
    """This class describes a data set for a certain sensor.

    It provides some usefull properties to use while processing
    the data.
    """
    def __init__(self, *, name, values):
        self.values = values
        self.name = name

    def _round(self, value):
        """Returns the max length of a number in data.
        """
        digits = max([len(str(i).split('.')[1]) for i in self.values])
        return round(value, digits)

    def average():
        doc = "The average property."
        def fget(self):
            res = sum(self.values) / float(len(self.values))
            return self._round(res)
        return locals()

    def max_temperature():
        doc = "The max_temperature property."
        def fget(self):
            return max(self.values)
        return locals()

    def min_temperature():
        doc = "The min_temperature property."
        def fget(self):
            return min(self.values)
        return locals()

    def positive_deviation():
        doc = "The positive_deviation property."
        def fget(self):
            res = abs(abs(self.max_temperature) - abs(self.average))
            return self._round(res)
        return locals()

    def negative_deviation():
        doc = "The negative_deviation property."
        def fget(self):
            res = abs(abs(self.min_temperature) - abs(self.average))
            return self._round(res)
        return locals()

    negative_deviation = property(**negative_deviation())
    positive_deviation = property(**positive_deviation())
    min_temperature = property(**min_temperature())
    max_temperature = property(**max_temperature())
    average = property(**average())
