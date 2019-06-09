import math
import requests
import json
import datetime
import time
import ReadForUpgrade

class TVDiscovery:
    def __init__(self, generateTvsCount = 1):
        self.generateTvsCount = generateTvsCount
        self.webservicesUrl = "http://localhost:8080/SmartInstall/webservices.jsp"
        self.headers = {
                "Authorization": "whateverYouNeedForAuthentication",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
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
        self.timeout = 30

    def say_state(self):
        print("")
    
    def genarateManyTvs(self): 
        readForUpgrade = ReadForUpgrade.ReadForUpgrade()     
        start = 1
        end = self.generateTvsCount + 1
        for index in range(start, end):
            tvdiscoveryDataObj = self.tvdiscoveryData
            commandDetailsObj = tvdiscoveryDataObj['CommandDetails']
            tvDiscoveryParametersObj = commandDetailsObj['TVDiscoveryParameters']
            webServiceParametersObj = commandDetailsObj['WebServiceParameters']
            tvDiscoveryParametersObj['TVIPAddress'] = self.generateIpAddress(index)
            tvMACAddress = self.generateMacAddress(index)
            tvDiscoveryParametersObj['TVMACAddress'] = tvMACAddress
            tvRoomID = self.generateRoomId(index)
            tvDiscoveryParametersObj['TVRoomID'] = tvRoomID
            tvSerialNumber = self.generateTVSerialNumber(index)
            tvDiscoveryParametersObj['TVSerialNumber'] = tvSerialNumber
            tvUniqueID = tvSerialNumber + tvMACAddress.replace(":", "", 5)
            webServiceParametersObj['TVUniqueID'] = tvUniqueID
            
            r = requests.post(self.webservicesUrl, headers=self.headers, 
                                data=json.dumps(tvdiscoveryDataObj), timeout=self.timeout)                               
            print("current tv count:" + str(index) + ",status:" + str(r.status_code))   
            readForUpgrade.sendReadForUpgradeData(tvUniqueID)

    def generateIpAddress(self, index):
        ipAddress = "127.1.1.1"   
        if index == 0:
            index = 1
        
        if index > 0 and index <= 255 : 
            ipAddress = "127.1.1." + str(index)
        elif index > 255 and index <= 510 :
            index = index - 255
            ipAddress = "127.1.2." + str(index)
        elif index > 510 and index <= 765 :
            index = index - 510
            ipAddress = "127.1.3." + str(index)
        elif index > 765 and index <= 1020 :
            index = index - 765
            ipAddress = "127.1.4." + str(index)

        return ipAddress

    def generateMacAddress(self, index):
        macAddress = "70:AF:24:1A:97:51" 
        
        if index >= 0 and index <= 9 :
            macAddress = "0" + str(index) + ":AF:24:1A:97:51"
        elif index >= 10 and index <= 99 :
            macAddress = str(index) + ":AF:24:1A:97:51"
        elif index >= 100 and index <= 999 :
            index = math.floor(index / 10)
            macAddress = "AF:" + str(index) + ":24:1A:97:51"
        elif index >=1000 and index <= 9999 :
            index = math.floor(index / 100)
            macAddress = "AF:BE:" + str(index) + ":1A:97:51"

        return macAddress

    def generateRoomId(self, index):
        roomId = "00000"

        if index >= 0 and index <= 9 :
            roomId = "0000" + str(index)
        elif index >= 10 and index <= 99 :
            roomId = "000" + str(index)
        elif index >= 100 and index <= 999 :
            roomId = "00" + str(index)
        elif index >= 1000 and index <= 9999 :
            roomId = "0" + str(index)
        elif index >= 10000 and index <= 99999 :
            roomId = str(index)

        return roomId

    def generateTVSerialNumber(self, index):
        prefixTvseri = "1234"
        tvSerialNumber = "12345678"

        if index >= 0 and index < 10 :
            tvSerialNumber = prefixTvseri + str(index)
        elif index >= 10 and index < 99 :
            tvSerialNumber = prefixTvseri + str(index)
        elif index >= 99 and index < 999 :
            tvSerialNumber = prefixTvseri + str(index)
        elif index >= 999 and index < 9999 :
            tvSerialNumber = prefixTvseri + str(index)

        return tvSerialNumber


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