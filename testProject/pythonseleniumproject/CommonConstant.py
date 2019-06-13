#coding=utf-8
import os

class CommonConstant:

    def __init__(self):       
        self.TVDiscovery = "TVDiscovery"
        self.ReadForUpgrade = "ReadForUpgrade"
        self.UpgradeInProgress = "UpgradeInProgress"
        self.NotInUpgradeMode = "NotInUpgradeMode"
        self.generateTvsCount = 50
        self.groupTvs = 10
        self.uploadFilePath = 'testdata' + os.sep  + 'TPM181HE_CypressTestCloneData.zip'
        self.uploadFileKey = 'CypressTestCloneData'
        self.selectCloneType = 'Channels'
        self.pageSize = 50
        self.forceBtnText = 'Force'
        self.blueColor = "rgba(0, 0, 255, 1)"
        self.orangeColor = "rgba(255, 191, 0, 1)"
        self.greenColor = "rgba(1, 223, 1, 1)"
        self.none = "None"
        self.assignCloneData = "AssignCloneData"
        self.absolutionChromedriverPath = 'chromedriver' + os.sep + 'chromedriver_75_version.exe'

    def getNone(self):
        return self.none

    def getTVDiscovery(self):
        return self.TVDiscovery

    def getReadForUpgrade(self):
        return self.ReadForUpgrade

    def getUpgradeInProgress(self):
        return self.UpgradeInProgress

    def getNotInUpgradeMode(self):
        return self.NotInUpgradeMode

    def getGenerateTvsCount(self):
        return self.generateTvsCount

    def getGroupTvs(self):
        return self.groupTvs

    def getUploadFilePath(self):
        return self.uploadFilePath

    def getUploadFileKey(self):
        return self.uploadFileKey

    def getSelectCloneType(self):
        return self.selectCloneType

    def getPageSize(self):
        return self.pageSize

    def getForceBtnText(self):
        return self.forceBtnText

    def getBlueColor(self):
        return self.blueColor

    def getOrangeColor(self):
        return self.orangeColor

    def getGreenColor(self):
        return self.greenColor

    def getAssignCloneData(self):
        return self.assignCloneData

    def getAbsolutionChromedriverPath(self):
        return self.absolutionChromedriverPath