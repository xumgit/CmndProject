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
    time.sleep(2)
    title = dr.title
    print("title:" + title)
    currentUrl = dr.current_url
    print("currentUrl:" + currentUrl)

def logIn(dr):
    dr.find_element_by_id('username').send_keys('admin')
    dr.find_element_by_id('password').send_keys('tpvision')
    dr.find_element_by_css_selector("input[name='submit']").click()

def gotoFile_clone_tab(dr):
    files_parentObj = dr.find_element_by_xpath("//a[@id='nav_files']/..")
    class_files = files_parentObj.get_attribute("class")
    if ('active' != class_files) :
        files_parentObj.click()
    time.sleep(3)
    clone_parentObj = dr.find_element_by_xpath("//a[@data-table='tabs_clone']/..")
    class_files_clone = clone_parentObj.get_attribute("class")
    if ('active' != class_files_clone) :
        clone_parentObj.click()   

def uploadFile(dr):
    exist = checkUploadFileEsixt(dr)
    if exist > 0:
        print("had exist uploaded clone package")
    else:
        file_path = os.path.abspath('testdata' + os.sep  + 'TPM181HE_CypressTestCloneData.zip') 
        print("upload file path:" + file_path)
        inputObj = dr.find_element_by_css_selector("input[name='uploadedfile']").send_keys(file_path)
        time.sleep(5)

def checkUploadFileEsixt(dr):
    exist = 0
    listObj = dr.find_elements_by_css_selector("#grid-clone > tbody > tr > td:nth-of-type(2) > input")
    listlen = len(listObj)
    for index in range(0, listlen):
        cloneDataValue = listObj[index].get_attribute("value")
        if (cloneDataValue.find("CypressTestCloneData") > -1):
            exist = 1
            break
    return exist

def gotoTVS_tvs_tab(dr):
    print("currentUrl:" + dr.current_url)
    tvs_parentObj = dr.find_element_by_xpath("//a[@id='nav_tvs']/..")
    class_tvs = tvs_parentObj.get_attribute("class")
    print('class_tvs:' + class_tvs + ",text:" + tvs_parentObj.text)
    if ('active' != class_tvs) :
        tvs_parentObj.click()
    time.sleep(3)
    print("currentUrl:" + dr.current_url)
    devices_parentObj = dr.find_element_by_xpath("//a[@data-table='tabs-devices']/..")
    class_tvs_tvs = devices_parentObj.get_attribute("class")
    print('class_tvs_tvs:' + class_tvs_tvs + ",text:" + devices_parentObj.text)
    if ('active' != class_tvs_tvs) :
        devices_parentObj.click()

def changePageSize(dr):   
    pageSize = dr.find_element_by_css_selector('#grid_devices-header button.dropdown-toggle span.dropdown-text').text
    if (50 == int(pageSize)):
        pass
    else:
        toggleBtn = dr.find_element_by_css_selector('#grid_devices-header button.dropdown-toggle')
        toggleBtn.click()
        time.sleep(1)
        liaList = dr.find_elements_by_css_selector('#grid_devices-header ul.dropdown-menu:nth-of-type(1) > li > a')
        liaListLen = len(liaList)
        for index in range(0, liaListLen):
            if (50 == int(liaList[index].text)):
                liaList[index].click()
                break

def selectAllTv(dr):
    selectAllTvCheck = dr.find_element_by_css_selector("input[name='select']")
    isSelected = selectAllTvCheck.is_selected()
    print("isSelected:" + str(isSelected))
    if isSelected:
        pass
    else:
        selectAllTvCheck.click()

def assignClonePackage(dr):
    dr.find_element_by_id('assign_select').click()
    time.sleep(3)
    liList = dr.find_elements_by_css_selector('#assign_select > ul > li')
    listlen = len(liList)
    for index in range(0, listlen):
        cloneType = liList[index].text
        if (cloneType.find("Channels") > -1) :
            liList[index].click()
            break
    time.sleep(3)
    tdList = dr.find_elements_by_css_selector('#assignSelectRows > tr > td:nth-of-type(1)')
    tdListlen = len(tdList)
    for indexL in range(0, tdListlen):
        cloneValue = tdList[indexL].text
        if (cloneValue.find("CypressTestCloneData") > -1) :
            tdList[indexL].click()
            break
    time.sleep(5)

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

def checkCloneColor(dr, type, color):
    tvsList = dr.find_elements_by_css_selector('#tvsBody > tr > td:nth-of-type(10) > div')
    tvListLen = len(tvsList)
    for index in range(0, tvListLen):
        colorValue = tvsList[index].value_of_css_property("color")
        if (color == colorValue):
            pass
        else:
            startallidValue = tvsList[index].get_attribute("startallid")
            errTvObj = dr.find_element_by_css_selector("#tvsBody > tr[data-row-id='" + startallidValue + "'] > td:nth-of-type(8) > div")
            print(type + ",color not match, tv ip address:" + errTvObj.text)

def forceUpgradeItem(dr):
    forceUpgradeBtn = dr.find_element_by_id('allBtn')
    if ((forceUpgradeBtn.text).find("Force") > -1):
        forceUpgradeBtn.click()
    else:
        print("force upgrade error")

if __name__ == '__main__':
    print("startTime:" + getCurentTime())
    dr = getDriver() 
    openCmndPage(dr)
    dr.implicitly_wait(3)
    logIn(dr)
    dr.implicitly_wait(3)
    gotoFile_clone_tab(dr)
    dr.implicitly_wait(3)
    uploadFile(dr)
    dr.implicitly_wait(3)
    gotoTVS_tvs_tab(dr)
    dr.implicitly_wait(3)
    changePageSize(dr)
    dr.implicitly_wait(3)
    starttime = datetime.datetime.now()	

    generateTvsCount = 50				
    tvDiscovery = TVDiscovery.TVDiscovery(generateTvsCount)
    tvDiscovery.genarateManyTvs()
    dr.implicitly_wait(5)
    dr.refresh()
    print("==========generate tv success==========")

    blueColor = "rgba(0, 0, 255, 1)"
    dr.implicitly_wait(5)
    selectAllTv(dr)
    time.sleep(1)
    assignClonePackage(dr)
    time.sleep(1)
    assignIdentifier = getAssignItemIdentifier(dr)
    checkCloneColor(dr, "Assign", blueColor)
    print("==========assign Clone package success==========")

    time.sleep(1)
    forceUpgradeItem(dr)
    print("==========click upgrade success==========")  

    orangeColor = "rgba(255, 191, 0, 1)"
    upgradeInProgress = UpgradeInProgress.UpgradeInProgress(generateTvsCount)
    upgradeInProgress.sendUpgradeInProgressData()
    dr.implicitly_wait(5)
    dr.refresh()
    dr.implicitly_wait(5)
    checkCloneColor(dr, "UpgradeInprogess", orangeColor)
    print("==========send upgradeInProgress success==========")
    time.sleep(10)

    greenColor = "rgba(1, 223, 1, 1)"
    upgradeIdentifier = {"TVChannelList": assignIdentifier}
    notInUpgradeMode = NotInUpgradeMode.NotInUpgradeMode(generateTvsCount, upgradeIdentifier)
    notInUpgradeMode.sendNotInUpgradeModeData()
    dr.implicitly_wait(5)
    dr.refresh()
    dr.implicitly_wait(5)
    checkCloneColor(dr, "NotInUpgradeMode", greenColor)
    print("==========send NotInUpgradeMode success==========")

    endtime = datetime.datetime.now()
    consumerTime = (endtime - starttime).seconds
    print ("total consumer time:" + str(consumerTime) + " seconds")

    time.sleep(10)
    print("endTime:" + getCurentTime())
    dr.quit()
    
