#!/bin/python

import sqlite3
import json 


def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

connection = sqlite3.connect("dep73.sqlite3")
connection.row_factory = dict_factory
cursor = connection.cursor()

for table in ['tools', 'misc_items', 'test_systems']:
  cursor.execute("select * from %s" % table )
  results = cursor.fetchall()

  with open("%s.json" % table, 'w', encoding='utf-8') as file:
      data = json.dumps(results, ensure_ascii=False)
      print(data)
      file.write(data)

connection.close()