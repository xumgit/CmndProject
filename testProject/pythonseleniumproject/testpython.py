 #coding=utf-8
from selenium import webdriver
import requests
import json
import time
import TVDiscovery
import UpgradeInProgress
import NotInUpgradeMode
import datetime
import os

def getCurentTime(): 
    currentTime =  time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) 
    return currentTime

def getDriver():
    # driver = webdriver.Firefox() //打开Firefox浏览器
    # driver = webdriver.Ie() //打开IE浏览器
    driver = webdriver.Chrome(executable_path='chromedriver_74_version.exe')
    return driver
    
def openCmndPage(dr):    
    # chromedriver download url: http://chromedriver.storage.googleapis.com/index.html
    request_url = "http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas" 
    response = dr.get(request_url)
    #statusCode = response.status_code
    #responseText = response.text
    #print("response:" + response + ",responseText:" + responseText)
    dr.maximize_window()
    dr.implicitly_wait(5)
    title = dr.title
    #print("title:" + title)
    currentUrl = dr.current_url
    #print("currentUrl:" + currentUrl)

def logIn(dr):
    dr.find_element_by_id('username').send_keys('admin')
    dr.find_element_by_id('password').send_keys('tpvision')
    dr.find_element_by_css_selector("input[name='submit']").click()

def gotoFile_clone_tab(dr):
    files_parentObj = dr.find_element_by_xpath("//a[@id='nav_files']/..")
    class_files = files_parentObj.get_attribute("class")
    if ('active' != class_files) :
        files_parentObj.click()
    time.sleep(2) 
    clone_parentObj = dr.find_element_by_xpath("//a[@data-table='tabs_clone']/..")
    class_files_clone = clone_parentObj.get_attribute("class")
    if ('active' != class_files_clone) :
        clone_parentObj.click()
    time.sleep(1)   

def uploadFile(dr, filePath, uploadFileKey):
    exist = checkUploadFileExist(dr, uploadFileKey)
    if exist > 0:
        print("had exist uploaded clone package")
    else:
        absolutionFilePath = os.path.abspath(filePath) 
        #print("absolutionFilePath:" + absolutionFilePath)
        inputObj = dr.find_element_by_css_selector("input[name='uploadedfile']").send_keys(absolutionFilePath)
        dr.implicitly_wait(60)

def fileClonePageCycle(dr, uploadFileKey):
    currentActivePage = dr.find_element_by_css_selector("#grid-clone-footer ul.pagination li.active")
    #print("ulObj:" + str(ulObj.text))
    #currentActivePage = ulObj.find_element_by_xpath("//li[contains(@class, 'active')]")
    pageText = currentActivePage.text
    if (1 != int(pageText)):
        dr.find_element_by_css_selector("#grid-clone-footer ul.pagination li.page-1 a").click()
    liListObj = dr.find_elements_by_xpath("//div[@id='grid-clone-footer']/div/div/ul/li[starts-with(@class, 'page-')]")
    #liListObj = dr.find_elements_by_css_selector("#grid-clone-footer ul.pagination > li")
    liListLen = len(liListObj)
    for index in range(0, liListLen):
        if index != 0:
            pageIndex = index + 1
            dr.find_element_by_css_selector("#grid-clone-footer ul.pagination li.page-" + str(pageIndex) + " a").click()
        time.sleep(3)        
        deleteUploadFile(dr, uploadFileKey)

def deleteUploadFile(dr, uploadFileKey):
    count = getHaveUploadFileNameCount(dr, uploadFileKey)
    if (count > 0):
        for index in range(0, count):
            time.sleep(1)
            hitIndex = getHitIndex(dr, uploadFileKey)
            if (hitIndex > 0):
                aListObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr:nth-of-type(" + str(hitIndex) + ") > td:nth-of-type(12) > a")
                aListLen = len(aListObj)
                for indexJ in range(0, aListLen):
                    idValue = aListObj[indexJ].get_attribute("id")
                    if idValue.find("dele_") > -1 :
                        aListObj[indexJ].click()
                        time.sleep(1)
                        dr.find_element_by_id('deleteCloneConfirmBtn').click()
                        time.sleep(2)
                        break
    # trListObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr")
    # #listObj = tBodyObj.find_elements_by_css_selector("tr > td:nth-of-type(2) > input")
    # trListlen = len(trListObj)
    # for index in range(0, trListlen):
    #     trIndex = index + 1
    #     listObj = dr.find_element_by_css_selector("#grid-clone > tbody > tr:nth-of-type(" + str(trIndex) + ") > td:nth-of-type(2) > input")
    #     cloneDataValue = listObj.get_attribute("value")
    #     if (cloneDataValue.find(uploadFileKey) > -1):
    #         aListObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr:nth-of-type(" + str(trIndex) + ") > td:nth-of-type(12) > a")
    #         aListLen = len(aListObj)
    #         for indexJ in range(0, aListLen):
    #             idValue = aListObj[indexJ].get_attribute("id")
    #             if idValue.find("dele_") > -1 :
    #                 aListObj[indexJ].click()
    #                 #tdListObj.find_element_by_xpath("//a[contains(@id, 'dele_')]")
    #                 #tdListObj.find_element_by_xpath("//a[ends-with(@id, 'dele_')]")
    #                 #tdListObj.find_element_by_xpath("//a[starts-with(@id, 'dele_')]").click()
    #                 time.sleep(1)
    #                 dr.find_element_by_id('deleteCloneConfirmBtn').click()
    #                 time.sleep(2)
    #                 break
    #                 #aListObj = trListObj[index].find_elements_by_css_selector("td:nth-of-type(12) > a")
    #                 #aListLen = len(aListObj)
    #                 #for indexJ in range(0, aListLen):
    #                 #    nameValue = aListObj[indexJ].get_attribute("id")
    #                 #break
    # return 1

def getHaveUploadFileNameCount(dr, uploadFileKey):
    count = 0
    trListObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr")
    #listObj = tBodyObj.find_elements_by_css_selector("tr > td:nth-of-type(2) > input")
    trListlen = len(trListObj)
    for index in range(0, trListlen):
        trIndex = index + 1
        listObj = dr.find_element_by_css_selector("#grid-clone > tbody > tr:nth-of-type(" + str(trIndex) + ") > td:nth-of-type(2) > input")
        cloneDataValue = listObj.get_attribute("value")
        if (cloneDataValue.find(uploadFileKey) > -1):
            count = count + 1
    return count

def getHitIndex(dr, uploadFileKey):
    hitIndex = -1
    trListObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr")
    #listObj = tBodyObj.find_elements_by_css_selector("tr > td:nth-of-type(2) > input")
    trListlen = len(trListObj)
    for index in range(0, trListlen):
        trIndex = index + 1
        listObj = dr.find_element_by_css_selector("#grid-clone > tbody > tr:nth-of-type(" + str(trIndex) + ") > td:nth-of-type(2) > input")
        cloneDataValue = listObj.get_attribute("value")
        if (cloneDataValue.find(uploadFileKey) > -1):
            hitIndex = trIndex
            break
    return hitIndex

def checkUploadFileExist(dr, uploadFileKey):
    exist = 0
    listObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr > td:nth-of-type(2) > input")
    listlen = len(listObj)
    for index in range(0, listlen):
        cloneDataValue = listObj[index].get_attribute("value")
        if (cloneDataValue.find(uploadFileKey) > -1):
            exist = 1
            break
    return exist

def gotoTVS_tvs_tab(dr):
    #print("currentUrl:" + dr.current_url)
    tvs_parentObj = dr.find_element_by_xpath("//a[@id='nav_tvs']/..")
    class_tvs = tvs_parentObj.get_attribute("class")
    #print('class_tvs:' + class_tvs + ",text:" + tvs_parentObj.text)
    if ('active' != class_tvs) :
        tvs_parentObj.click()
    time.sleep(2) 
    #print("currentUrl:" + dr.current_url)
    devices_parentObj = dr.find_element_by_xpath("//a[@data-table='tabs-devices']/..")
    class_tvs_tvs = devices_parentObj.get_attribute("class")
    #print('class_tvs_tvs:' + class_tvs_tvs + ",text:" + devices_parentObj.text)
    if ('active' != class_tvs_tvs) :
        devices_parentObj.click()
    time.sleep(1) 

def changePageSize(dr, pageSize):   
    currentPageSize = dr.find_element_by_css_selector('#grid_devices-header button.dropdown-toggle span.dropdown-text').text
    if (pageSize == int(currentPageSize)):
        pass
    else:
        toggleBtn = dr.find_element_by_css_selector('#grid_devices-header button.dropdown-toggle')
        toggleBtn.click()
        time.sleep(1)
        liaList = dr.find_elements_by_css_selector('#grid_devices-header ul.dropdown-menu:nth-of-type(1) > li > a')
        liaListLen = len(liaList)
        for index in range(0, liaListLen):
            if (pageSize == int(liaList[index].text)):
                liaList[index].click()
                break
        time.sleep(1)

def selectAllTv(dr):
    selectAllTvCheck = dr.find_element_by_css_selector("input[name='select']")
    isSelected = selectAllTvCheck.is_selected()
    print("isSelected:" + str(isSelected))
    if isSelected:
        pass
    else:
        selectAllTvCheck.click()
    time.sleep(1)

def assignClonePackage(dr, seletCloneType, uploadFileKey):
    dr.find_element_by_id('assign_select').click()
    time.sleep(1)
    liList = dr.find_elements_by_css_selector('#assign_select > ul > li')
    listlen = len(liList)
    for index in range(0, listlen):
        cloneType = liList[index].text
        if (cloneType.find(seletCloneType) > -1) :
            liList[index].click()
            break
    time.sleep(2) 
    tdList = dr.find_elements_by_css_selector('#assignSelectRows > tr > td:nth-of-type(1)')
    tdListlen = len(tdList)
    for indexJ in range(0, tdListlen):
        cloneValue = tdList[indexJ].text
        if (cloneValue.find(uploadFileKey) > -1) :
            tdList[indexJ].click()
            break
    time.sleep(1)

def getAssignItemIdentifier(dr):
    identifier = "10/06/2019:15:05"
    firstTvObj = dr.find_element_by_css_selector('#tvsBody > tr:nth-of-type(1) > td:nth-of-type(10) > div')
    sicloneidentValue = firstTvObj.get_attribute("sicloneident")
    try:
        time_temp = time.strptime(sicloneidentValue, "%Y/%m/%d-%H:%M:%S")
        identifier = time.strftime("%d/%m/%Y:%H:%M", time_temp)
        print("identifier:" + identifier)
    except Exception as e:
        print("exception:" + e)
    return identifier

def checkCloneColor(dr, logType, color):
    tvsList = dr.find_elements_by_css_selector('#tvsBody > tr > td:nth-of-type(10) > div')
    tvListLen = len(tvsList)
    for index in range(0, tvListLen):
        colorValue = tvsList[index].value_of_css_property("color")
        if (color == colorValue):
            pass
        else:
            startallidValue = tvsList[index].get_attribute("startallid")
            errTvObj = dr.find_element_by_css_selector("#tvsBody > tr[data-row-id='" + startallidValue + "'] > td:nth-of-type(8) > div")
            print(logType + ",color not match, tv ip address:" + errTvObj.text)

def forceUpgradeItem(dr, forceBtnText):
    forceUpgradeBtn = dr.find_element_by_id('allBtn')
    if ((forceUpgradeBtn.text).find(forceBtnText) > -1):
        forceUpgradeBtn.click()
    else:
        print("force upgrade error")
    time.sleep(1)

if __name__ == '__main__':
    print("startTime:" + getCurentTime())
    starttime = datetime.datetime.now()	

    generateTvsCount = 30
    uploadFilePath = 'testdata' + os.sep  + 'TPM181HE_CypressTestCloneData.zip'
    uploadFileKey = 'CypressTestCloneData'
    selectCloneType = 'Channels'
    pageSize = 50
    forceBtnText = 'Force'
    blueColor = "rgba(0, 0, 255, 1)"
    orangeColor = "rgba(255, 191, 0, 1)"
    greenColor = "rgba(1, 223, 1, 1)"

    dr = getDriver() 
    openCmndPage(dr)
    dr.implicitly_wait(3)
    logIn(dr)
    dr.implicitly_wait(3)
    gotoFile_clone_tab(dr)
    time.sleep(3)
    uploadFile(dr, uploadFilePath, uploadFileKey)
    time.sleep(3)
    gotoTVS_tvs_tab(dr)
    time.sleep(3)
    changePageSize(dr, pageSize)
    time.sleep(3)
     				
    tvDiscovery = TVDiscovery.TVDiscovery(generateTvsCount)
    tvDiscovery.genarateManyTvs()
    time.sleep(1)   
    dr.refresh()
    dr.implicitly_wait(30)
    #print("==========generate tv success==========")
  
    time.sleep(1)
    selectAllTv(dr)
    time.sleep(1)
    assignClonePackage(dr, selectCloneType, uploadFileKey)
    time.sleep(20)
    assignIdentifier = getAssignItemIdentifier(dr)
    dr.implicitly_wait(10)   
    checkCloneColor(dr, "Assign", blueColor)
    #print("==========assign Clone package success==========")

    time.sleep(1)
    forceUpgradeItem(dr, forceBtnText)
    #print("==========click upgrade success==========")  
  
    upgradeInProgress = UpgradeInProgress.UpgradeInProgress(generateTvsCount)
    upgradeInProgress.sendUpgradeInProgressData()
    time.sleep(1) 
    dr.refresh()
    dr.implicitly_wait(30)
    checkCloneColor(dr, "UpgradeInprogess", orangeColor)
    #print("==========send upgradeInProgress success==========")
    time.sleep(10)
   
    upgradeIdentifier = {"TVChannelList": assignIdentifier}
    notInUpgradeMode = NotInUpgradeMode.NotInUpgradeMode(generateTvsCount, upgradeIdentifier)
    notInUpgradeMode.sendNotInUpgradeModeData()
    time.sleep(1)
    dr.refresh()
    dr.implicitly_wait(30)
    checkCloneColor(dr, "NotInUpgradeMode", greenColor)
    #print("==========send NotInUpgradeMode success==========")

    time.sleep(2)
    gotoFile_clone_tab(dr)
    time.sleep(2)
    fileClonePageCycle(dr, uploadFileKey)
    #deleteUploadFile(dr, uploadFileKey)
    #print("==========delete Clone Package success==========")

    endtime = datetime.datetime.now()
    consumerTime = (endtime - starttime).seconds
    print ("total consumer time:" + str(consumerTime) + " seconds")

    time.sleep(10)
    print("endTime:" + getCurentTime())
    dr.quit()
    
