 #coding=utf-8
from selenium import webdriver
import requests
import json
import time
import TVDiscovery
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

if __name__ == '__main__':
    print("startTime:" + getCurentTime())
    dr = getDriver() 
    openCmndPage(dr)
    time.sleep(3)
    logIn(dr)
    time.sleep(3)
    gotoFile_clone_tab(dr)
    time.sleep(3)
    uploadFile(dr)
    time.sleep(3)
    gotoTVS_tvs_tab(dr)
    time.sleep(3)

    starttime = datetime.datetime.now()	

    generateTvsCount = 5				
    tvDiscovery = TVDiscovery.TVDiscovery(generateTvsCount)
    tvDiscovery.genarateManyTvs()

    endtime = datetime.datetime.now()
    consumerTime = (endtime - starttime).seconds
    print ("total consumer time:" + str(consumerTime) + " seconds")

    time.sleep(10)
    print("endTime:" + getCurentTime())
    dr.quit()
    
