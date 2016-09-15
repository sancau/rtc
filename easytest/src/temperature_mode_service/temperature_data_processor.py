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

    def _calculate(self, data):
        """
        Calculates all the values that are required to determine
        the result.

        Returns a dict of calculated values.
        """
        print([sensor.name for sensor in data])
        print([sensor.values for sensor in data if sensor.name == '16'])

        # got array of sensor object containing data. need to calculate
        # all the nessecary data and pass along to _get_result to apply domain
        # specific logic

        return {}

    def _get_result(self, calculated_data):
        """
        Applyes domain specific logic to the given dict of
        calculated results.

        Returns a dict contaning resolution of the test and
        the resulting values.
        """
        
        # NOT IMPLEMENTED

        return {'success': True, 'values': {}}

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

            calculated = self._calculate(data)
            result = self._get_result(calculated)
            if result['success']:
                res['done'] = True
                res['reason'] = TEST_SUCCESS
                res['values'] = result['values']
                return res

            else:
                res['reason'] = TEST_FAIL

        except Exception as e:
            res['reason'] = e

        return res
