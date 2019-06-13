 #coding=utf-8
import math
import requests
import json
import datetime
import time
import Common
import ReadForUpgrade

class TVDiscovery:
    def __init__(self, generateTvsCount = 1):
        self.generateTvsCount = generateTvsCount
        self.tvdiscoveryData = {
                                "CommandDetails": {
                      	            "TVDiscoveryParameters": {
                                        "PowerStatus": "On",
                                        "TVIPAddress": "127.10.11.12",
                                        "TVMACAddress": "70:AF:24:1A:97:51",
                                        "TVModelNumber": "32HFL5014/12",
                                        "TVRoomID": "00000",
                                        "TVSerialNumber": "9005",
                                        "VSecureTVID": "8000000000000011E870"
                                    },
                                    "WebServiceParameters": {
                                        "PollingFrequency": 10,
                                        "TVUniqueID": "900570AF241A9751"
                                    }
                                },
                                "CmdType": "Response",
                                "Cookie": -1,
                                "Fun": "TVDiscoveryService",
                                "Svc": "WebServices",
                                "SvcVer": "4.0"
                                }

    def say_state(self):
        print("")
    
    def genarateManyTvs(self): 
        common = Common.Common() 
        webservicesUrl = common.getWebservicesUrl()
        headers = common.getHeaders()
        timeout = common.getTimeout()
        successCount = 0
        readForUpgrade = ReadForUpgrade.ReadForUpgrade()     
        start = 1
        end = self.generateTvsCount + 1
        for index in range(start, end):
            tvdiscoveryDataObj = self.generateSingleTvData(index)
            tvUniqueID =  tvdiscoveryDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID'] 
            
            r = requests.post(webservicesUrl, headers=headers, 
                                data=json.dumps(tvdiscoveryDataObj), timeout=timeout)                                                      
            returnCode = readForUpgrade.sendReadForUpgradeData(tvUniqueID)
            #print("TV:" + str(index) + ",TVDiscovery:" + str(r.status_code) + ",ReadForUpgrade:"+ str(returnCode))
            if (200 == r.status_code and 200 == returnCode):
                successCount += 1               
            else:
                print("TVDiscovery & ReadForUpgrade failed, this tvUniqueID:" + tvUniqueID)
        if (successCount == self.generateTvsCount):
            print("TVDiscovery & ReadForUpgrade, All send success!")

    def generateSingleTvData(self, index):
        common = Common.Common()
        tvdiscoveryDataObj = self.tvdiscoveryData
        commandDetailsObj = tvdiscoveryDataObj['CommandDetails']
        tvDiscoveryParametersObj = commandDetailsObj['TVDiscoveryParameters']
        webServiceParametersObj = commandDetailsObj['WebServiceParameters']
        tvDiscoveryParametersObj['TVIPAddress'] = common.generateIpAddress(index)
        tvMACAddress = common.generateMacAddress(index)
        tvDiscoveryParametersObj['TVMACAddress'] = tvMACAddress
        tvRoomID = common.generateRoomId(index)
        tvDiscoveryParametersObj['TVRoomID'] = tvRoomID
        tvSerialNumber = common.generateTVSerialNumber(index)
        tvDiscoveryParametersObj['TVSerialNumber'] = tvSerialNumber
        tvUniqueID = tvSerialNumber + tvMACAddress.replace(":", "", 5)
        webServiceParametersObj['TVUniqueID'] = tvUniqueID
        return tvdiscoveryDataObj


# ========== start test ==========
# if __name__ == '__main__':
#     starttime = datetime.datetime.now()

#     generateTvsCount = 100
#     #tvdiscovery = TVDiscovery(generateTvsCount)
#     #tvdiscovery.genarateManyTvs()

#     readForUpgrade = ReadForUpgrade.ReadForUpgrade(generateTvsCount)
#     readForUpgrade.show()

#     endtime = datetime.datetime.now()

#     consumerTime = (endtime - starttime).seconds
#     print ("total consumer time:" + str(consumerTime) + " seconds")
# ========== end test ==========