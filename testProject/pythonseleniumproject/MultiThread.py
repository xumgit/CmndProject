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
import CommonConstant
import math

class MultiThread(threading.Thread):

    def __init__(self, threadName, start, end, upgradeIdentifier = {}):
        super().__init__()
        self.threadName = threadName
        self.startPosition = start
        self.endPosition = end
        self.upgradeIdentifierDict = upgradeIdentifier

    def run(self):
        common = Common.Common() 
        webservicesUrl = common.getWebservicesUrl()
        headers = common.getHeaders()
        timeout = common.getTimeout()
        commonConstant = CommonConstant.CommonConstant()
        print(self.threadName + ",startIndex:" + str(self.startPosition) + ",endIndex:" + str(self.endPosition - 1))
        if (getCurrentType(self.threadName).find(commonConstant.getTVDiscovery()) > -1):
            sendTVDiscoveryData(self.startPosition, self.endPosition, webservicesUrl, headers, timeout)
        elif (getCurrentType(self.threadName).find(commonConstant.getReadForUpgrade()) > -1):
            sendReadForUpgradeData(self.startPosition, self.endPosition, webservicesUrl, headers, timeout)
        elif (getCurrentType(self.threadName).find(commonConstant.getUpgradeInProgress()) > -1):
            sendUpgradeInProgressData(self.startPosition, self.endPosition, webservicesUrl, headers, timeout)
        elif (getCurrentType(self.threadName).find(commonConstant.getNotInUpgradeMode()) > -1):
            sendNotInUpgradeModeData(self.startPosition, self.endPosition, self.upgradeIdentifierDict, webservicesUrl, headers, timeout)
        else:
            print("not send any command")

def sendTVDiscoveryData(startIndex, endIndex, webservicesUrl, headers, timeout):
    tvDiscovery = TVDiscovery.TVDiscovery()
    for index in range(startIndex, endIndex):
        tvdiscoveryDataObj = tvDiscovery.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(tvdiscoveryDataObj), timeout=timeout)

def sendReadForUpgradeData(startIndex, endIndex, webservicesUrl, headers, timeout):
    readForUpgrade = ReadForUpgrade.ReadForUpgrade()
    for index in range(startIndex, endIndex):
        readForUpgradeDataObj = readForUpgrade.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(readForUpgradeDataObj), timeout=timeout)

def sendUpgradeInProgressData(startIndex, endIndex, webservicesUrl, headers, timeout):
    upgradeInProgress = UpgradeInProgress.UpgradeInProgress()
    for index in range(startIndex, endIndex):
        upgradeInProgressDataObj = upgradeInProgress.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(upgradeInProgressDataObj), timeout=timeout)

def sendNotInUpgradeModeData(startIndex, endIndex, upgradeIdentifierDict, webservicesUrl, headers, timeout):
    notInUpgradeMode = NotInUpgradeMode.NotInUpgradeMode(upgradeIdentifier = upgradeIdentifierDict)
    for index in range(startIndex, endIndex):
        notInUpgradeModeDataObj = notInUpgradeMode.generateSingleTvData(index)
        r = requests.post(webservicesUrl, headers=headers, 
                data=json.dumps(notInUpgradeModeDataObj), timeout=timeout)

def getCurrentType(typeValue):
    commonConstant = CommonConstant.CommonConstant()
    threadName = "None_"
    if (typeValue.find(commonConstant.getTVDiscovery()) > -1):
        threadName = commonConstant.getTVDiscovery() + "_"
    elif (typeValue.find(commonConstant.getReadForUpgrade()) > -1):
        threadName = commonConstant.getReadForUpgrade() + "_"
    elif (typeValue.find(commonConstant.getUpgradeInProgress()) > -1):
        threadName = commonConstant.getUpgradeInProgress() + "_"
    elif (typeValue.find(commonConstant.getNotInUpgradeMode()) > -1):
        threadName = commonConstant.getNotInUpgradeMode() + "_"
    else:
        threadName = "None_"
    return threadName

def mulThreadSendTypeData(typeValue, divide, remainder, groupTvs, upgradeIdentifier = {}):
    threadName = getCurrentType(typeValue)
    for index in range(1, divide + 1):
        currentThreadName = threadName + str(index)
        start = (index - 1)*groupTvs + 1
        if (index == divide and remainder > 0):
            end = start + remainder
        else:
            end = start + groupTvs
        t = MultiThread(currentThreadName, start, end, upgradeIdentifier)
        t.start()
        t.join(timeout=2)

# if __name__ == '__main__':
#     starttime = datetime.datetime.now()

#     generateTvsCount = 10
#     groupTvs = 30
#     divide = math.floor(generateTvsCount / groupTvs)
#     remainder = generateTvsCount % groupTvs
#     if (remainder > 0):
#         divide = divide + 1
#     commonConstant = CommonConstant.CommonConstant()
#     mulThreadSendTypeData(commonConstant.getTVDiscovery(), divide, remainder, groupTvs)
#     mulThreadSendTypeData(commonConstant.getReadForUpgrade(), divide, remainder, groupTvs)

    # waitTime = math.floor(generateTvsCount / 40) * 5
    # if (waitTime == 0):
    #     waitTime = 3
    # time.sleep(waitTime)

    

    # common = Common.Common() 
    # testUrl = Common.getTestUrl()
    # print("testUrl:" + testUrl)

    # endtime = datetime.datetime.now()
    # consumerTime = (endtime - starttime).seconds
    # print ("total consumer time:" + str(consumerTime) + " seconds")