from glob import iglob
from datetime import datetime
import re
import json

import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def read(fileName):
    with open(fileName, "r") as file:
        return file.read()

def read_json_file(fileName):
    return json.loads(read(fileName))

def read_json_files(filePattern):
    for fileName in iglob(filePattern):
        yield read_json_file(fileName)
