# -*- coding: utf-8 -*-

import json
from datetime import datetime

from meta import Meta
from temperature_data_parser import TemperatureDataParser
from temperature_data_preprocessor import TemperatureDataPreprocessor
from temperature_data_processor import TemperatureDataProcessor

# let's assume we've got some json input received via a JSON API
################################################################################

fake_cp_md = [0 for i in range(0, 10)]
TEST_INPUT = {
    "target": "0",
    "logs": [
        {
            "file": "test_data/0left.txt",
            "sensors_count": "1",
        },
        {
            "file": "test_data/0right.txt",
            "sensors_count": "1",
        },
    ],
    "sensors_total": "2",
    "slice_length": "10",
    "round_to": "1",
    "cp": fake_cp_md,
    "md": fake_cp_md,
    "max_deviation": "2"
}

JSON_TEST_INPUT = json.dumps(TEST_INPUT)  # now its pure json
################################################################################


def handle_temperature_mode(meta):
    """
    Top level processing method.
    :param meta: An object of type dict containing all the meta information and
     data that is required for the test to be processed.
    :return: An object of type dict containing the test result and all the
    resulting values and meta information.
    """

    data_chunks = []
    for log in meta.logs:
        parser = TemperatureDataParser(
            sensors_count=log.sensors_count,
            digits=meta.round_to)

        data, date, time = parser.parse(log.file)
        try:
            if not meta.date or \
                datetime.strptime(meta.date, '%d.%m.%Y') < \
                    datetime.strptime(date, '%d.%m.%Y'):
                meta.date = date
                meta.time = time
        except ValueError:
            print('Date parsing error, %d' % date)

        meta.time = time
        data_chunks.append(data)

    preprocessor = TemperatureDataPreprocessor()
    processor = TemperatureDataProcessor()

    res = {}
    for chunk in preprocessor.get_merged_chunk(
            data_chunks=data_chunks,
            meta=meta):
        res = processor.process(chunk, meta)
        if res['done']:
            break
    return res

payload = Meta(json.loads(JSON_TEST_INPUT))  # instantiate Meta object

validation_status = payload.validate()
if validation_status['valid']:
    TEST_RESULT = handle_temperature_mode(payload)
else:
    TEST_RESULT = {
        'done': False,
        'errors': validation_status['errors']
    }

print(TEST_RESULT)
