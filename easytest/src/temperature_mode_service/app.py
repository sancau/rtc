# -*- coding: utf-8 -*-

import json
import base64

from temperature_mode_handler import TemperatureModeHandler

# let's assume we've got some json input received via a JSON API
# and the data from log files is encoded to BASE64
################################################################################
logs = []
for path in ['test_data/0left.txt', 'test_data/0right.txt']:
    with open(path) as f:
        encoded = base64.b64encode(bytes(f.read(), encoding='1251'))

        # example
        decoded = base64.decodebytes(encoded)
        string = str(decoded, encoding='1251')
        lines = string.split('\n')
        for line in lines:
            print(line)

        # should send base64 string
        # logs.append(encoded)

        # for now still sending path
        logs.append(path)

fake_cp_md = [0 for i in range(0, 10)]
TEST_INPUT = {
    "target": "0",
    "logs": [
        {
            "file": str(logs[0]),
            "sensors_count": "8",
        },
        {
            "file": str(logs[1]),
            "sensors_count": "8",
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

payload = json.loads(JSON_TEST_INPUT)
handler = TemperatureModeHandler()
result = handler.handle(payload)
print(result)

