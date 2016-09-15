# -*- coding: utf-8 -*-

"""
Temperature data preprocessor.
"""

from sensor import Sensor


class TemperatureDataPreprocessor:
    """
    Provides methods to merge and prepare row parsed data.

    It has one interface method getMergedChunk([]) accepting
    a list of data pieces (for ex. from different files)
    It returns merged and validated data via a dict object.
    """
    def _populate_sensors(self, chunk, meta):
        """
        Returns data chunk populated with Sensor objects.
        """
        result = []
        sensor_values = []
        for i in chunk[0]:
            sensor_values.append([None for i in chunk])
        for j, v in enumerate(chunk):
            for k, p in enumerate(v):
                sensor_values[k][j] = p

        for index, i in enumerate(sensor_values):
            result.append(Sensor(name=str(index + 1), values=i))

        cp = Sensor(name='cp', values=meta.cp)
        md = Sensor(name='md', values=meta.md)
        result.append(cp)
        result.append(md)
        
        return result

    def getMergedChunk(self, *, data_chunks, meta):
        """
        Returns merged and cutted data object using given list of
        data pieces, and it's meta information.
        Implemented as a generator function.
        """
        # we don't need timestamps so remove them from data_chunks
        data_chunks = [[i[1] for i in chunk] for chunk in data_chunks]

        merged = list([i[0] + i[1] for i in zip(*data_chunks)])
        for i in range(0, len(merged)):
            sliced = merged[i:i + meta.slice_length]
            if len(sliced) == meta.slice_length == len(meta.cp) == len(meta.md):
                print('Yielding a chunk..')
                yield self._populate_sensors(sliced, meta)
            else:
                print('Invalid data slice or meta data length. Skipping')
