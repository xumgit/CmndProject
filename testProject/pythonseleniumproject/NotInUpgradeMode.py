 #coding=utf-8
import requests
import json
import Common

class NotInUpgradeMode:
    def __init__(self, generateTvsCount = 1, upgradeIdentifier = {}):
        self.generateTvsCount = generateTvsCount
        self.upgradeIdentifier = upgradeIdentifier
        self.notInUpgradeModeData = {
                                        "Svc": "WebServices",
                                        "SvcVer": "4.0",
                                        "Cookie": -1,
                                        "CmdType": "Response",
                                        "Fun": "IPCloneService",
                                        "CommandDetails": {
                                            "WebServiceParameters": {
                                                "PollingFrequency": 10,
                                                "PollingFrequencyGreen": 60,
                                                "TVUniqueID": "900570AF241A9751"
                                            },
                                            "IPCloneParameters": {
                                                "CurrentUpgradeStatus": "NotInUpgradeMode",
                                                "CloneSessionStatus": {
                                                    "SessionStartTime": "28/05/2019 10:33",
                                                    "SessionEndTime": "28/05/2019 10:39",
                                                    "SessionStatus": "Successful",
                                                    "CloneItemStatus": [{
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "MainFirmware",
                                                            "CloneItemVersionNo": "TPM181HE_R.005.003.022.000"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "Script",
                                                            "CloneItemVersionNo": ""
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "TVChannelList",
                                                            "CloneItemVersionNo": "01/06/2019:08:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "TVSettings",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "WelcomeLogo",
                                                            "CloneItemVersionNo": "29/03/2019 16:41"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "SmartInfoPages",
                                                            "CloneItemVersionNo": ""
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "ProfessionalAppsData",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "CustomDashboardFallback",
                                                            "CloneItemVersionNo": ""
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "MediaChannels",
                                                            "CloneItemVersionNo": ""
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "RoomSpecificSettings",
                                                            "CloneItemVersionNo": "24/08/2018:11:45"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "Schedules",
                                                            "CloneItemVersionNo": "23/08/2018:10:34"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "HTVCfg.xml",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    },{
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "Banner",
                                                            "CloneItemVersionNo": "28/05/2019:10:39"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    },{
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "ProfessionalApps",
                                                            "CloneItemVersionNo": "28/05/2019:10:39"
                                                        },
                                                        "CloneStatus": "NotAvailable"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "AndroidAppsData",
                                                            "CloneItemVersionNo": "28/05/2019:10:39"
                                                        },
                                                        "CloneStatus": "NotAvailable"
                                                    }]
                                                }
                                            },
                                            "CloneToServerParameters": {
                                                "CloneToServerStatus": "Ready",
                                                "CloneToServerSessionStatus": {
                                                    "SessionStartTime": "",
                                                    "SessionEndTime": "",
                                                    "SessionStatus": "",
                                                    "CloneItemStatus": [{
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "TVChannelList",
                                                            "CloneItemVersionNo": "01/06/2019:08:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "TVSettings",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "WelcomeLogo",
                                                            "CloneItemVersionNo": "29/03/2019 16:41"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "SmartInfoPages",
                                                            "CloneItemVersionNo": "10/05/2019 16:06"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "ProfessionalAppsData",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "CustomDashboardFallback",
                                                            "CloneItemVersionNo": "Not Available"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "MediaChannels",
                                                            "CloneItemVersionNo": "29/03/2019 16:41"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "RoomSpecificSettings",
                                                            "CloneItemVersionNo": "24/08/2018:11:45"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "Schedules",
                                                            "CloneItemVersionNo": "23/08/2018:10:34"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "DataDump",
                                                            "CloneItemVersionNo": "Not Available"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }, {
                                                        "CloneItemDetails": {
                                                            "CloneItemName": "HTVCfg.xml",
                                                            "CloneItemVersionNo": "01/06/2019:20:05"
                                                        },
                                                        "CloneStatus": "Successful"
                                                    }]
                                                },
                                                "CloneItemsAvailableToServer": [{
                                                    "CloneItemName": "TVChannelList",
                                                    "CloneItemVersionNo": "01/06/2019:08:05"
                                                }, {
                                                    "CloneItemName": "TVSettings",
                                                    "CloneItemVersionNo": "01/06/2019:20:05"
                                                }, {
                                                    "CloneItemName": "WelcomeLogo",
                                                    "CloneItemVersionNo": "29/03/2019 16:41"
                                                }, {
                                                    "CloneItemName": "SmartInfoPages",
                                                    "CloneItemVersionNo": "10/05/2019 16:06"
                                                }, {
                                                    "CloneItemName": "ProfessionalAppsData",
                                                    "CloneItemVersionNo": "01/06/2019:20:05"
                                                }, {
                                                    "CloneItemName": "CustomDashboardFallback",
                                                    "CloneItemVersionNo": "Not Available"
                                                }, {
                                                    "CloneItemName": "MediaChannels",
                                                    "CloneItemVersionNo": "29/03/2019 16:41"
                                                }, {
                                                    "CloneItemName": "RoomSpecificSettings",
                                                    "CloneItemVersionNo": "24/08/2018:11:45"
                                                }, {
                                                    "CloneItemName": "Schedules",
                                                    "CloneItemVersionNo": "23/08/2018:10:34"
                                                }, {
                                                    "CloneItemName": "DataDump",
                                                    "CloneItemVersionNo": "Not Available"
                                                }, {
                                                    "CloneItemName": "HTVCfg.xml",
                                                    "CloneItemVersionNo": "01/06/2019:20:05"
                                                }]
                                            }
                                        }
                                    }

    def sendNotInUpgradeModeData(self): 
        common = Common.Common() 
        webservicesUrl = common.getWebservicesUrl()
        headers = common.getHeaders()
        timeout = common.getTimeout()      
        successCount = 0
        start = 1
        end = self.generateTvsCount + 1
        for index in range(start, end):
            notInUpgradeModeDataObj = self.generateSingleTvData(index)
            tvUniqueID = notInUpgradeModeDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID']
            
            r = requests.post(webservicesUrl, headers=headers, 
                                data=json.dumps(notInUpgradeModeDataObj), timeout=timeout)
            if (200 == r.status_code):
                successCount += 1               
            else:
                print("NotInUpgradeMode failed, this tvUniqueID:" + tvUniqueID)
        if (successCount == self.generateTvsCount):
            print("NotInUpgradeMode, All send success!")
    
    def generateSingleTvData(self, index):
        common = Common.Common()
        notInUpgradeModeDataObj = self.notInUpgradeModeData
        tvSerialNumber = common.generateTVSerialNumber(index)
        tvMACAddress = common.generateMacAddress(index)
        tvUniqueID = tvSerialNumber + tvMACAddress.replace(":", "", 5)
        notInUpgradeModeDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID'] = tvUniqueID
        cloneItemStatusArr = notInUpgradeModeDataObj['CommandDetails']['IPCloneParameters']['CloneSessionStatus']['CloneItemStatus']
        cloneItemStatusLen = len(cloneItemStatusArr)
        for indexJ in range(0, cloneItemStatusLen):
            cloneItemDetailsObj = cloneItemStatusArr[indexJ]['CloneItemDetails']
            if cloneItemDetailsObj['CloneItemName'] in self.upgradeIdentifier:
                cloneItemDetailsObj['CloneItemVersionNo'] = self.upgradeIdentifier[cloneItemDetailsObj['CloneItemName']]
        return notInUpgradeModeDataObj