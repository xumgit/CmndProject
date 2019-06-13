#coding=utf-8
import math

class Common:
    def __init__(self):
        self.webservicesUrl = "http://localhost:8080/SmartInstall/webservices.jsp"
        self.headers = {
                "Authorization": "whateverYouNeedForAuthentication",
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        self.timeout = 30

    def getWebservicesUrl(self):
        return self.webservicesUrl

    def getHeaders(self):
        return self.headers

    def getTimeout(self):
        return self.timeout

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

def getTestUrl():
    print("test url")
    return "http://www.baidu.com"
