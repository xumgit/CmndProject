#coding=utf-8

from selenium.webdriver import Chrome
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from threading import Thread
import threading
import selenium.common.exceptions as ex
import traceback
import datetime
import os
import time

def remove_logfile():
    if os.path.isfile('logs.txt'):
        os.unlink('logs.txt')

def logger(msg):
    with open('logs.txt', 'a') as fi:
        timestamp = str(datetime.datetime.today())
        fi.write(timestamp + " - " + msg + "\n")
    return

def precondition_setup():
    dr = Chrome('chromedriver' + os.sep + 'chromedriver.exe')
    dr.maximize_window()
    dr.implicitly_wait(20)
    dr.get("http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas")
    dr.find_element_by_id("username").send_keys("admin")
    dr.find_element_by_id("password").send_keys("tpvision")
    dr.find_element_by_name("submit").click()
    time.sleep(2)
    #dr.find_element_by_id("nav_tvs").click()
	
    tvs_parentObj = dr.find_element_by_xpath("//a[@id='nav_tvs']/..")
    class_tvs = tvs_parentObj.get_attribute("class")
    #print('class_tvs:' + class_tvs + ",text:" + tvs_parentObj.text)
    if ('active' != class_tvs) :
        tvs_parentObj.click()
    time.sleep(2)
	
    devices_parentObj = dr.find_element_by_xpath("//a[@data-table='tabs-devices']/..")
    class_tvs_tvs = devices_parentObj.get_attribute("class")
    #print('class_tvs_tvs:' + class_tvs_tvs + ",text:" + devices_parentObj.text)
    if ('active' != class_tvs_tvs) :
        devices_parentObj.click()
    time.sleep(2) 
	
    #dr.find_element_by_xpath("//fieldset/div[2]/div/div/div/div[2]/div[1]/button[@type='button']").click()
    #dr.find_element_by_xpath("//fieldset/div[2]/div/div/div/div[2]/div[1]/ul/li/a[text()='50']").click()
    return dr

def unSelectAll(dr):
    try:
        chbox = dr.find_element_by_xpath("//table[@id='grid_devices']/thead/tr/th[1]/input[@type='checkbox']")
        ch_status = chbox.is_selected()
        if ch_status:
            chbox.click()
            time.sleep(1)
        else:
            chbox.click()
            chbox = dr.find_element_by_xpath("//table[@id='grid_devices']/thead/tr/th[1]/input[@type='checkbox']")
            ch_status = chbox.is_selected()
            if ch_status:
                chbox.click()
            time.sleep(1)
    except Exception as e:
        print("exception:" + e)

def selectTv(dr, devicemac):
    try:
        xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]" % devicemac
        trObj = dr.find_element_by_xpath(xpath_data)
        chbox = trObj.find_element_by_css_selector('td:nth-of-type(1) > input')
        if chbox.is_selected():
            pass
        else:
            chbox.click()
        time.sleep(1)           
    except Exception as e:
        print("exception:" + str(e))

def clone_selection_test(dr, loopno, devicemac, seletCloneType, selectCloneFile):
    selectTv(dr, devicemac)
    assignClonePackage(dr, seletCloneType, selectCloneFile)
    clickStartUpgrade(dr, devicemac)
    xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[10]/div" % devicemac
    WebDriverWait(dr, 60).until(lambda dr: dr.find_element_by_xpath(xpath_data).value_of_css_property("color") == "rgba(255, 191, 0, 1)")

def clickStartUpgrade(dr, devicemac):
    try:
        xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[11]/a[3]" % devicemac
        upgradeObj = dr.find_element_by_xpath(xpath_data)
        upgradeObj.click()         
    except Exception as e:
        print("exception:" + str(e))

def assignClonePackage(dr, seletCloneType, selectCloneFile):
    dr.find_element_by_id('assign_select').click()
    time.sleep(1)
    liList = dr.find_elements_by_css_selector('#assign_select > ul > li')
    listlen = len(liList)
    for indexI in range(0, listlen):
        cloneType = liList[indexI].text
        if (cloneType.find(seletCloneType) > -1) :
            liList[indexI].click()
            break
    time.sleep(2) 
    tdList = dr.find_elements_by_css_selector('#assignSelectRows > tr > td:nth-of-type(1)')
    tdListlen = len(tdList)
    for indexJ in range(0, tdListlen):
        cloneValue = tdList[indexJ].text
        if (cloneValue.find(selectCloneFile) > -1) :
            tdList[indexJ].click()
            break
    WebDriverWait(dr, 30).until(EC.invisibility_of_element_located((By.CSS_SELECTOR, ".toast-item-wrapper")))
    time.sleep(1)
    checkCloneColor(dr, "AssignCloneData", "rgba(0, 0, 255, 1)")

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

def thread_creators(dr, loopno, mac_list, seletCloneType, selectCloneFile):
    threads = len(mac_list) + 1  # Number of threads to create #
    try:
        jobs = []
        for i in range(1, threads):
            thread = Thread(target=clone_selection_test, args=(dr, loopno, mac_list[i-1], seletCloneType, selectCloneFile))
            jobs.append(thread)

        for j in jobs:  # Start the threads #
            j.start()
            time.sleep(2)

        for j in jobs:  # Ensure all of the threads have finished while finishing tests #
            j.join()
            time.sleep(2)
    except:
        print(traceback.print_exc())


if __name__ == '__main__':
    print("==========start Stress Test case==========")
    mac_list = ['70AF241366FF']
    dr = precondition_setup()
    unSelectAll(dr)
    thread_creators(dr, 10, mac_list, 'Channels', 'CypressTestCloneData')
    time.sleep(5)
    dr.quit()
    print("===========end Stress Test case===========")