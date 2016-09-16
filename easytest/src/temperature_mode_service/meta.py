# -*- coding: utf-8 -*-
from log import Log


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
        self.date = payload['date']
        self.time = payload['time']
