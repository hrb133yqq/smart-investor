# -*- coding: utf-8 -*-
import os.path
import requests
import time
import re
'''
pre-request: pip install requests
'''
def download(url, headers, saveTo, sleepSeconds=3, retryTimes=3, timeout=5):
    if os.path.isfile(saveTo):
        print "Download ignored:", saveTo
    else:
        try:
            print "Download start:", url
            response = requests.get(url, headers=headers, timeout=10)
            print "Download finished:", saveTo

            if response.status_code==requests.codes.ok:
                with open(saveTo, "wb") as file:
                    file.write(response.content)
                    print "File saved:", saveTo
                time.sleep(sleepSeconds)
            else:
                print "Status code:", response.status_code
                if retryTimes > 0:
                    retryTimes -= 1
                    print "Start retry:", retryTimes
                    download(url, headers, saveTo, sleepSeconds, retryTimes, timeout)
                else:
                    response.raise_for_status()

        except Exception as e:
            print "Exception:", e
            if retryTimes > 0:
                retryTimes -= 1
                print "Start retry:", retryTimes
                download(url, headers, saveTo, sleepSeconds, retryTimes, timeout)
            else:
                raise

def get(url, headers):
        print "Get start:", url
        response = requests.get(url, headers=headers)
        time.sleep(3)
        if response.status_code==requests.codes.ok:
            print "Get finished."
            return response.content
        else:
            response.raise_for_status()
