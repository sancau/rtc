# -*- coding: utf-8 -*-

"""
Temperature data processor.
"""

IN_PROGRESS = 'The processing is in progress.'
INVALID_DATA = 'The processing canceled due to invalid input data.'
TEST_FAIL = 'The data was processed. The test is NOT passed.'
TEST_SUCCESS = 'The data was processed. The test is passed.'


class TemperatureDataProcessor:
    """
    This class contains processing logic for temperature data.

    It has one interface method process(data), that accepts a data object
    and returns a result object of type dict.

    The class constructor requires kw agrument 'slice_length' of type int.
    """

    def _validate_input(self, data):
        """
        Ensures that the provided data length is at least equal to
        the required 'slice_length'.
        """
        return True and data # can be specified later

    def process(self, data):
        """
        Processing the given data.
        Returns a dict object containing result, reason and values.
        """
        res = {'done': False, 'reason': IN_PROGRESS, 'values': None }

        try:
            if not self._validate_input(data):
                res['reason'] = INVALID_DATA
                return res
            amplitudes = []
            for sensor in data:
                amplitudes.append(sensor.negative_deviation)
                amplitudes.append(sensor.positive_deviation)
            max_amplitude = max(amplitudes)
            print('\nMAX AMPLITUDE: %s \n' % max_amplitude)
            if max_amplitude >= 0.5:
                res['reason'] = TEST_FAIL
                return res
            result_values = {}

            # MAX AMPLITED HERE < 0.5
            # CAN GO ON WITH TEST LOGIC FROM HERE

            res['done'] = True
            res['reason'] = TEST_SUCCESS
            res['values'] = result_values
            return res
        except Exception as e:
            res['reason'] = e
        return res
