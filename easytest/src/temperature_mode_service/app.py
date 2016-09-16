# -*- coding: utf-8 -*-

import json

from meta import Meta
from temperature_data_parser import TemperatureDataParser
from temperature_data_preprocessor import TemperatureDataPreprocessor
from temperature_data_processor import TemperatureDataProcessor

# let's emulate we have some json input received by the service via JSON API
fake_cp_md = [0 for i in range(0, 10)]
TEST_INPUT = {
    "target": "-40",
    "logs": [
        {
            "file": "test_data/0_left.txt",
            "sensors_count": "8",
        },
        {
            "file": "test_data/0_right.txt",
            "sensors_count": "8",
        },
    ],
    "sensors_total": "10",
    "slice_length": "10",
    "round_to": "2",
    "cp": fake_cp_md,
    "md": fake_cp_md,
    "date": None,
    "time": None
}

JSON_TEST_INPUT = json.dumps(TEST_INPUT)  # now its pure json
payload = Meta(json.loads(JSON_TEST_INPUT))  # instantiate Meta object


def handle_temperature_mode(meta):
    data_chunks = []
    for log in meta.logs:
        parser = TemperatureDataParser(
            sensors_count=log.sensors_count,
            digits=meta.round_to)

        data, date, time = parser.parse(log.file)
        meta.date = date
        meta.time = time
        data_chunks.append(data)

    preprocessor = TemperatureDataPreprocessor()
    processor = TemperatureDataProcessor()

    for chunk in preprocessor.get_merged_chunk(
        data_chunks=data_chunks,
            meta=meta):
        res = processor.process(chunk)
        print('\n %s \n' % res)
        if res['done']:
            print('Result received.')
            return res
    else:
        print('Could not find a chunk that\'s passing the test.')

TEST_RESULT = handle_temperature_mode(payload)
