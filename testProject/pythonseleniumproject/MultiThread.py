#coding=utf-8

import requests
import json
import time
import datetime
import threading
import TVDiscovery
import Common
import math

class MultiThread(threading.Thread):

    def __init__(self, threadName, start, end):
        super().__init__()
        self.threadName = threadName
        self.startPosition = start
        self.endPosition = end

    def run(self):
        print(self.threadName + ",startIndex:" + str(self.startPosition) + ",endIndex:" + str(self.endPosition))
        sendTvdiscoveryTest(self.startPosition, self.endPosition)

def sendTvdiscoveryTest(startIndex, endIndex):
    generateTvsCount = 30
    tvDiscovery = TVDiscovery.TVDiscovery(generateTvsCount)
    common = Common.Common() 
    webservicesUrl = common.getWebservicesUrl()
    headers = common.getHeaders()
    timeout = common.getTimeout()
    for index in range(startIndex, endIndex):
        tvdiscoveryDataObj = tvDiscovery.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(tvdiscoveryDataObj), timeout=timeout)

if __name__ == '__main__':
    starttime = datetime.datetime.now()

    generateTvsCount = 54
    groupTvs = 10
    divide = math.floor(generateTvsCount / groupTvs)
    remainder = generateTvsCount % groupTvs
    if (remainder > 0):
        divide = divide + 1
    
    for index in range(1, divide + 1):
        t = "t" + str(index)
        start = (index - 1)*groupTvs + 1
        if (index == divide and remainder > 0):
            end = start + remainder
        else:
            end = start + groupTvs
        t = MultiThread("TVDiscovery1", start, end)
        t.start()

    endtime = datetime.datetime.now()
    consumerTime = (endtime - starttime).seconds
    print ("total consumer time:" + str(consumerTime) + " seconds")