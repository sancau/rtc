# -*- coding: utf-8 -*-

import json

from temperature_data_parser import TemperatureDataParser
from temperature_data_preprocessor import TemperatureDataPreprocessor
from temperature_data_processor import TemperatureDataProcessor

class Log:
    """
    Describes single log object that embedded to a Meta object.
    """
    def __init__(self, payload):
        self.file = payload['file']
        self.sensors_count = int(payload['sensors_count'])


class Meta:
    """
    Describes temperature mode meta data object.
    """
    def __init__(self, payload):
        self.sensors_total = int(payload['sensors_total'])
        self.cp = [float(v) for v in payload['cp']]
        self.md = [float(v) for v in payload['md']]
        self.target = float(payload['target'])
        self.slice_length = int(payload['slice_length'])
        self.round_to = int(payload['round_to'])
        self.logs = [Log(log) for log in payload['logs']]


# lets emulate we have some json input recieved by the service via REST
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
    "cp": ["1", "2", "3"],
    "md": ["1", "2", "3"]
}

JSON_TEST_INPUT = json.dumps(TEST_INPUT) # now its pure json
meta = Meta(json.loads(JSON_TEST_INPUT)) # instanciate Meta object

data_chunks = []
for log in meta.logs:
    parser = TemperatureDataParser(
        sensors_count=log.sensors_count,
        digits=meta.round_to)
    data, date, time = parser.parse(log.file)
    meta.date = date;
    meta.time = time;
    data_chunks.append(data)

preprocessor = TemperatureDataPreprocessor()
processor = TemperatureDataProcessor()

for chunk in preprocessor.getMergedChunk(
    data_chunks=data_chunks,
    meta=meta):
    res = processor.process(chunk)
    if res['done']:
        print('Result recieved.')
        print(res)
        break
else:
    print('Could not find a chunk that\'s passing the test.')
