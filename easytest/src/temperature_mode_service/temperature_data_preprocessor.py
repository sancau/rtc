# -*- coding: utf-8 -*-

"""
Temperature data preprocessor.
"""

class TemperatureDataPreprocessor:
    """
    Provides methods to merge and prepare row parsed data.

    It has one interface method getMergedChunk([]) accepting
    a list of data pieces (for ex. from different files)
    It returns merged and validated data via a dict object.
    """
    def _populate_sensors(self, chunk):
        """
        Returns data chunk populated with Sensor objects.
        """
        # TODO
        return chunk


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
            chunk = merged[i:i + meta.slice_length]
            if len(chunk) == meta.slice_length:
                yield self._populate_sensors(chunk)
