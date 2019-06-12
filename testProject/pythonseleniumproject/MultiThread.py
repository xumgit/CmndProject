#coding=utf-8

import requests
import json
import time
import datetime
import threading
import TVDiscovery
import ReadForUpgrade
import UpgradeInProgress
import NotInUpgradeMode
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
        if (self.threadName.find("TVDiscovery") > -1):
            sendTvdiscoveryData(self.startPosition, self.endPosition)
        elif (self.threadName.find("ReadForUpgrade") > -1):
            sendReadForUpgradeData(self.startPosition, self.endPosition)
        elif (self.threadName.find("UpgradeInProgress") > -1):
            sendUpgradeInProgressData(self.startPosition, self.endPosition)
        elif (self.threadName.find("NotInUpgradeMode") > -1):
            sendNotInUpgradeModeData(self.startPosition, self.endPosition)
        else:
            print("not send any command")

def sendTvdiscoveryData(startIndex, endIndex):
    tvDiscovery = TVDiscovery.TVDiscovery()
    common = Common.Common() 
    webservicesUrl = common.getWebservicesUrl()
    headers = common.getHeaders()
    timeout = common.getTimeout()
    for index in range(startIndex, endIndex):
        tvdiscoveryDataObj = tvDiscovery.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(tvdiscoveryDataObj), timeout=timeout)

def sendReadForUpgradeData(startIndex, endIndex):
    common = Common.Common() 
    webservicesUrl = common.getWebservicesUrl()
    headers = common.getHeaders()
    timeout = common.getTimeout()
    readForUpgrade = ReadForUpgrade.ReadForUpgrade()
    for indexI in range(startIndex, endIndex):
        readForUpgradeDataObj = readForUpgrade.generateSingleTvData(indexI)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(readForUpgradeDataObj), timeout=timeout)

def sendUpgradeInProgressData(startIndex, endIndex):
    common = Common.Common() 
    webservicesUrl = common.getWebservicesUrl()
    headers = common.getHeaders()
    timeout = common.getTimeout()
    upgradeInProgress = UpgradeInProgress.UpgradeInProgress()
    for indexJ in range(startIndex, endIndex):
        upgradeInProgressDataObj = upgradeInProgress.generateSingleTvData(indexJ)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(upgradeInProgressDataObj), timeout=timeout)

def sendNotInUpgradeModeData(startIndex, endIndex):
    common = Common.Common() 
    webservicesUrl = common.getWebservicesUrl()
    headers = common.getHeaders()
    timeout = common.getTimeout()
    notInUpgradeMode = NotInUpgradeMode.NotInUpgradeMode()
    for indexK in range(startIndex, endIndex):
        notInUpgradeModeDataObj = notInUpgradeMode.generateSingleTvData(indexK)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(notInUpgradeModeDataObj), timeout=timeout)

if __name__ == '__main__':
    starttime = datetime.datetime.now()

    generateTvsCount = 30
    groupTvs = 10
    divide = math.floor(generateTvsCount / groupTvs)
    remainder = generateTvsCount % groupTvs
    if (remainder > 0):
        divide = divide + 1
    
    for index in range(1, divide + 1):
        threadName = "TVDiscovery_" + str(index)
        start = (index - 1)*groupTvs + 1
        if (index == divide and remainder > 0):
            end = start + remainder
        else:
            end = start + groupTvs
        t = MultiThread(threadName, start, end)
        t.start()

    waitTime = math.floor(generateTvsCount / 40) * 5
    if (waitTime == 0):
        waitTime = 3
    time.sleep(waitTime)

    for index1 in range(1, divide + 1):
        threadName = "ReadForUpgrade_" + str(index1)
        start = (index1 - 1)*groupTvs + 1
        if (index1 == divide and remainder > 0):
            end = start + remainder
        else:
            end = start + groupTvs
        t = MultiThread(threadName, start, end)
        t.start()

    endtime = datetime.datetime.now()
    consumerTime = (endtime - starttime).seconds
    print ("total consumer time:" + str(consumerTime) + " seconds")