 #coding=utf-8
import requests
import json
import Common

class ReadForUpgrade:
    def __init__(self):
        self.readForUpgradeData = {
                                    "CommandDetails": {
                                        "CloneToServerParameters": {
                                            "CloneItemsAvailableToServer": [{
                                                "CloneItemName": "RoomSpecificSettings",
                                                "CloneItemVersionNo": "24/08/2018:11:45"
                                            }, {
                                                "CloneItemName": "ProfessionalAppsData",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "AndroidApps",
                                                "CloneItemVersionNo": "01/01/2018:01:01"
                                            }, {
                                                "CloneItemName": "TVSettings",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "HTVCfg.xml",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "TVChannelList",
                                                "CloneItemVersionNo": "01/06/2019:08:05"
                                            }],
                                            "CloneToServerSessionStatus": {
                                                "CloneItemStatus": [{
                                                    "CloneItemDetails": {
                                                        "CloneItemName": "ProfessionalApps",
                                                        "CloneItemVersionNo": ""
                                                    },
                                                    "CloneStatus": "NotAvailable"
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
                                                "SessionStartTime": "",
                                                "SessionStatus": ""
                                            },
                                            "CloneToServerStatus": "NotReady"
                                        },
                                        "IPCloneParameters": {
                                            "CloneItemsRequiredForUpgrade": [{
                                                "CloneItemName": "RoomSpecificSettings",
                                                "CloneItemVersionNo": "24/08/2018:11:45"
                                            }, {
                                                "CloneItemName": "ProfessionalAppsData",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "AndroidApps",
                                                "CloneItemVersionNo": "01/01/2018:01:01"
                                            }, {
                                                "CloneItemName": "TVSettings",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "MainFirmware",
                                                "CloneItemVersionNo": "TPM181HE_R.005.003.022.000"
                                            }, {
                                                "CloneItemName": "HTVCfg.xml",
                                                "CloneItemVersionNo": "01/06/2019:20:05"
                                            }, {
                                                "CloneItemName": "TVChannelList",
                                                "CloneItemVersionNo": "01/06/2019:08:05"
                                            }],
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
                                                "SessionStartTime": "",
                                                "SessionStatus": ""
                                            },
                                            "CurrentUpgradeStatus": "ReadyForUpgrade"
                                        },
                                        "WebServiceParameters": {
                                            "PollingFrequency": 10,
                                            "TVUniqueID": "900570AF241A9751"
                                        }
                                    },
                                    "CmdType": "Response",
                                    "Cookie": 293,
                                    "Fun": "IPCloneService",
                                    "Svc": "WebServices",
                                    "SvcVer": "4.0"
                                }

    def sendReadForUpgradeData(self, tvUniqueID):
        common = Common.Common() 
        webservicesUrl = common.getWebservicesUrl()
        headers = common.getHeaders()
        timeout = common.getTimeout() 
        readForUpgradeDataObj = self.readForUpgradeData
        readForUpgradeDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID'] = tvUniqueID
        r = requests.post(webservicesUrl, headers=headers, 
                                data=json.dumps(readForUpgradeDataObj), timeout=timeout)
        return r.status_code
        #print("send ReadForUpgrade status:" + str(r.status_code)) 

    def generateSingleTvData(self, index):
        common = Common.Common()
        readForUpgradeDataObj = self.readForUpgradeData
        tvSerialNumber = common.generateTVSerialNumber(index)
        tvMACAddress = common.generateMacAddress(index)
        tvUniqueID = tvSerialNumber + tvMACAddress.replace(":", "", 5)
        readForUpgradeDataObj['CommandDetails']['WebServiceParameters']['TVUniqueID'] = tvUniqueID
        return readForUpgradeDataObj