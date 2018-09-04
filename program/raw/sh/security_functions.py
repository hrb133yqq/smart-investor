import os.path
import requests
'''
pre-request: pip install requests
'''
def download(url, headers, saveTo):
    if os.path.isfile(saveTo):
        print "Download ignore:", saveTo
    else:
        print "Download started:", url
        response = requests.get(url, headers=headers)
        if response.status_code==requests.codes.ok:
            with open(saveTo, "w") as file:
                file.write(response.content)
                print "Download finished:", saveTo
        else:
            response.raise_for_status()
