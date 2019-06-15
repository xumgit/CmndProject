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

MAC_List = ['70AF241A9751']
Test_Times = 3
Select_Clone_Type = 'Channels'
select_Clone_File = 'CypressTestCloneData'
AssignCloneData_WAIT_TIME = 30
UpgradeInProgress_WAIT_TIME = 30
NotInUpgradeMode_WAIT_TIME = 30

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
    totalLoop = loopno + 1
    for index in range(1, totalLoop):
        #xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[10]/div" % devicemac
        #WebDriverWait(dr, 10).until(lambda dr: dr.find_element_by_xpath(xpath_data).value_of_css_property("color") == "rgba(255, 191, 0, 1)")
        time.sleep(5)
        xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[8]/div" % devicemac
        ipAddress = dr.find_element_by_xpath(xpath_data).text
        selectTv(dr, devicemac)
        assignClonePackage(dr, seletCloneType, selectCloneFile)
        time.sleep(1)
        element = (By.CSS_SELECTOR, ".toast-item-wrapper")
        #toastTip = dr.find_element_by_css_selector("div.toast-container > div.toast-item-wrapper").is_displayed()
        elementVisible = is_element_visible(dr, element)
        #print("the " + str(index) + " time, elementVisible:" + str(elementVisible))
        if not elementVisible:
            pass
        else:
            try:
                #resultAssignClone = WebDriverWait(dr, 10).until(EC.invisibility_of_element_located(element))
                resultAssignClone = is_element_visible_timeout(dr, element, AssignCloneData_WAIT_TIME)
                if resultAssignClone:
                    while True:
                        elementVisible = is_element_visible(dr, element)
                        if elementVisible:
                            time.sleep(1)
                            continue
                        else:
                            break
            except Exception as e:
                logger("Thread: %d, the %s time, ipAddress: %s, AssignCloneData, Color not change" % (threading.get_ident(), str(index), str(ipAddress)))
        logger("Thread: %d, the %s time, ipAddress: %s, AssignCloneData" % (threading.get_ident(), str(index), str(ipAddress)))       
        time.sleep(1)
        checkCloneColor(dr, index, devicemac, "AssignCloneData", "rgba(0, 0, 255, 1)")
        clickStartUpgrade(dr, devicemac)
        logger("Thread: %d, the %s time, ipAddress: %s, wait response UpgradeInProgress" % (threading.get_ident(), str(index), str(ipAddress)))
        print("the " + str(index) + " time, wait response UpgradeInProgress")
        xpath_circleImg = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[11]/img[@class='hideIcon']" % devicemac  
        element = (By.XPATH, xpath_circleImg)
        resultInprogress = is_element_visible_timeout(dr, element, UpgradeInProgress_WAIT_TIME)   
        if not resultInprogress:
            logger("Thread: %d, the %s time, ipAddress: %s, wait response UpgradeInProgress, Circle not rotate" % (threading.get_ident(), str(index), str(ipAddress)))
            dr.refresh()
            dr.implicitly_wait(60)     
            # resultInprogress = WebDriverWait(dr, 30).until(lambda dr: dr.find_element_by_xpath(xpath_circleImg).is_displayed())
            # if not resultInprogress:
            #     dr.refresh()
            #     dr.implicitly_wait(60)      
        time.sleep(1)
        checkCloneColor(dr, index, devicemac, "UpgradeInProgress", "rgba(255, 191, 0, 1)")
        logger("Thread: %d, the %s time, ipAddress: %s, wait response NotInUpgradeMode" % (threading.get_ident(), str(index), str(ipAddress)))
        print("the " + str(index) + " time, wait response NotInUpgradeMode")
        element = (By.XPATH, xpath_circleImg)
        resultNotInUpgradeMode = is_element_invisible_timeout(dr, element, NotInUpgradeMode_WAIT_TIME)   
        if not resultNotInUpgradeMode:
            logger("Thread: %d, the %s time, ipAddress: %s, wait response NotInUpgradeMode, Circle not stop" % (threading.get_ident(), str(index), str(ipAddress)))
            dr.refresh()
            dr.implicitly_wait(60)
            # resultNotInUpgradeMode = WebDriverWait(dr, 30).until(lambda dr: not (dr.find_element_by_xpath(xpath_circleImg).is_displayed()))
            # if not resultNotInUpgradeMode:
            #     dr.refresh()
            #     dr.implicitly_wait(60)            
        time.sleep(1)
        checkCloneColor(dr, index, devicemac, "NotInUpgradeMode", "rgba(1, 223, 1, 1)")
        circleImgStatus = dr.find_element_by_xpath(xpath_circleImg).is_displayed()
        #print("the " + str(index) + " time, circleImgStatus:" + str(circleImgStatus))
        if circleImgStatus:
            xpath_stop = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[11]/a[contains(@title, 'Stop')]" % devicemac 
            dr.find_element_by_xpath(xpath_circleImg).click()
            time.sleep(1)

def clickStartUpgrade(dr, devicemac):
    try:
        xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[11]/a[3]" % devicemac
        upgradeObj = dr.find_element_by_xpath(xpath_data)
        upgradeObj.click()         
    except Exception as e:
        print("exception:" + str(e))

def is_element_visible(dr, element):
    try:
        the_element = EC.visibility_of_element_located(element)
        assert the_element(dr)
        flag = True
    except:
        flag = False
    return flag

def is_element_visible_timeout(dr, element, timeout):
    isElementVisible = False
    time_start = datetime.datetime.now()
    while True:
        time_now = datetime.datetime.now()
        time_difference = (time_now - time_start).seconds
        if time_difference <= timeout:
            recheck_the_element = is_element_visible(dr, element)
            if recheck_the_element:
                isElementVisible = recheck_the_element
                break
            else:
                time.sleep(1)
                continue 
        else:
            break             
    return isElementVisible

def is_element_invisible(dr, element):
    try:
        the_element = EC.invisibility_of_element_located(element)
        assert the_element(dr)
        flag = True
    except:
        flag = False
    return flag

def is_element_invisible_timeout(dr, element, timeout):
    isElementInVisible = False
    time_start = datetime.datetime.now()
    while True:
        time_now = datetime.datetime.now()
        time_difference = (time_now - time_start).seconds
        if time_difference <= timeout:
            recheck_the_element = is_element_invisible(dr, element)
            if recheck_the_element:
                isElementInVisible = recheck_the_element
                break
            else:
                time.sleep(1)
                continue 
        else:
            break             
    return isElementInVisible

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
    time.sleep(1)

def checkCloneColor(dr, index, devicemac, logType, color):
    xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[10]/div" % devicemac
    tvObj = dr.find_element_by_xpath(xpath_data)
    colorValue = tvObj.value_of_css_property("color")
    xpath_data = "//tbody[@id='tvsBody']/tr[contains(@data-row-id,'%s')]/td[8]/div" % devicemac
    ipAddress = dr.find_element_by_xpath(xpath_data).text
    if (color == colorValue):
        logger("Thread: %d, the %s time, ipAddress: %s, logType: %s, checkColor success" % (threading.get_ident(), str(index), str(ipAddress), logType))
        #msg = ("check_color success called by %d for %s, logType: %s" % (threading.get_ident(), devicemac, logType))
    else:
        logger("Thread: %d, the %s time, ipAddress: %s, logType: %s, checkColor failed" % (threading.get_ident(), str(index), str(ipAddress), logType))
        print(logType + ",color not match, tv ip address:" + ipAddress)
        #msg = ("check_color failed called by %d for %s, logType: %s, ip address: %s" % (threading.get_ident(), devicemac, logType, ipAddress))

def thread_creators(dr, loopno, mac_list, selectCloneType, selectCloneFile):
    threads = len(mac_list) + 1  # Number of threads to create #
    try:
        jobs = []
        for i in range(1, threads):
            thread = Thread(target=clone_selection_test, args=(dr, loopno, mac_list[i-1], selectCloneType, selectCloneFile))
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
    remove_logfile()
    dr = precondition_setup()
    unSelectAll(dr)
    thread_creators(dr, Test_Times, MAC_List, Select_Clone_Type, select_Clone_File)
    time.sleep(5)
    dr.quit()
    print("===========end Stress Test case===========")