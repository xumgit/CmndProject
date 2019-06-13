 #coding=utf-8
import requests
import json
import Common

class UpgradeInProgress:
    def __init__(self, generateTvsCount = 1):
        self.generateTvsCount = generateTvsCount
        self.upgradeInProgressData = {
                                    "CommandDetails": {
                                        "CloneToServerParameters": {
                                            "CloneToServerSessionStatus": {
                                                "CloneItemStatus": [{
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "ProfessionalApps",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "DataDump",
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
                                                        "CloneItemName": "AndroidAppsData",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "SmartInfoPages",
                                                        "CloneItemVersionNo": "22/03/2019:10:49"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Script",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "MediaChannels",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
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
                                                        "CloneItemName": "AndroidApps",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
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
                                                        "CloneItemName": "HTVCfg.xml",
                                                        "CloneItemVersionNo": "01/06/2019:20:05"
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
                                                        "CloneItemName": "CustomDashboardFallback",
                                                        "CloneItemVersionNo": "22/03/2019:11:57"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Banner",
                                                        "CloneItemVersionNo": "26/10/2018:04:39"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Schedules",
                                                        "CloneItemVersionNo": "23/08/2018:10:34"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }],
                                                "SessionEndTime": "",
                                                "SessionStartTime": "",
                                                "SessionStatus": ""
                                            },
                                            "CloneToServerStatus": "NotReady"
                                        },
                                        "IPCloneParameters": {
                                            "CloneSessionStatus": {
                                                "CloneItemStatus": [{
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "ProfessionalApps",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "RoomSpecificSettings",
                                                        "CloneItemVersionNo": "24/08/2018:11:45"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "AndroidAppsData",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "SmartInfoPages",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Script",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "MediaChannels",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "ProfessionalAppsData",
                                                        "CloneItemVersionNo": "01/06/2019:20:05"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "AndroidApps",
                                                        "CloneItemVersionNo": "01/01/2018:01:01"
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
                                                        "CloneItemName": "MainFirmware",
                                                        "CloneItemVersionNo": "TPM181HE_R.005.003.022.000"
                                                    },
                                                    "CloneStatus": "Successful"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "HTVCfg.xml",
                                                        "CloneItemVersionNo": "01/06/2019:20:05"
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
                                                        "CloneItemName": "CustomDashboardFallback",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Banner",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }, {
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "Schedules",
                                                        "CloneItemVersionNo": "23/08/2018:10:34"
                                                    },
                                                    "CloneStatus": "NotAvailable"
                                                }],
                                                "SessionEndTime": "",
                                                "SessionStartTime": "28/03/2019 12:35",
                                                "SessionStatus": "InProgress"
                                            },
                                            "CurrentUpgradeStatus": "UpgradeInProgress"
                                        },
                                        "WebServiceParameters": {
                                            "PollingFrequency": 10,
                                            "TVUniqueID": "900570AF241A9751"
                                        }
                                    },
                                    "CmdType": "Response",
                                    "Cookie": -1,
                                    "Fun": "IPCloneService",
                                    "Svc": "WebServices",
                                    "SvcVer": "4.0"
                                }

    def sendUpgradeInProgressData(self):
        common = Common.Common() 
        webservicesUrl = common.getWebservicesUrl()
        headers = common.getHeaders()
        timeout = common.getTimeout()
        successCount = 0
        start = 1
        end = self.generateTvsCount + 1
        for index in range(start, end):
            upgradeInProgressDataObj = generateSingleTvData(index)
            tvUniqueID = upgradeInProgressDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID']

            r = requests.post(webservicesUrl, headers=headers, 
                                data=json.dumps(upgradeInProgressDataObj), timeout=timeout)
            if (200 == r.status_code):
                successCount += 1               
            else:
                print("UpgradeInProgress failed, this tvUniqueID:" + tvUniqueID)
        if (successCount == self.generateTvsCount):
            print("UpgradeInProgress, All send success!")

    def generateSingleTvData(self, index):
        common = Common.Common()
        upgradeInProgressDataObj = self.upgradeInProgressData
        tvSerialNumber = common.generateTVSerialNumber(index)
        tvMACAddress = common.generateMacAddress(index)
        tvUniqueID = tvSerialNumber + tvMACAddress.replace(":", "", 5)
        upgradeInProgressDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID'] = tvUniqueID
        return upgradeInProgressDataObj