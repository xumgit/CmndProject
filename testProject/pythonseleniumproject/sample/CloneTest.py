from selenium.webdriver import Chrome
from threading import Thread
import threading
import datetime
from selenium.webdriver.support.select import Select
import selenium.common.exceptions as ex
import os
import time
import traceback
global lock
lock = False


def remove_logfile():
    if os.path.isfile('logs.txt'):
        os.unlink('logs.txt')


def logger(msg):
    with open('logs.txt', 'a') as fi:
        timestamp = str(datetime.datetime.today())
        fi.write(timestamp+" - "+msg+"\n")
    return


def precondition_setup():
    session = Chrome('chromedriver.exe')
    session.maximize_window()
    session.implicitly_wait(20)
    session.get("http://localhost:8080/smartcontrol/")
    session.find_element_by_id("username").send_keys("admin")
    session.find_element_by_id("password").send_keys("tpvision")
    session.find_element_by_name("submit").click()
	time.sleep(2)
    #session.find_element_by_id("nav_tvs").click()
	
	tvs_parentObj = session.find_element_by_xpath("//a[@id='nav_tvs']/..")
    class_tvs = tvs_parentObj.get_attribute("class")
    #print('class_tvs:' + class_tvs + ",text:" + tvs_parentObj.text)
    if ('active' != class_tvs) :
        tvs_parentObj.click()
    time.sleep(2)
	
	devices_parentObj = session.find_element_by_xpath("//a[@data-table='tabs-devices']/..")
    class_tvs_tvs = devices_parentObj.get_attribute("class")
    #print('class_tvs_tvs:' + class_tvs_tvs + ",text:" + devices_parentObj.text)
    if ('active' != class_tvs_tvs) :
        devices_parentObj.click()
    time.sleep(2) 
	
    #session.find_element_by_xpath("//fieldset/div[2]/div/div/div/div[2]/div[1]/button[@type='button']").click()
    #session.find_element_by_xpath("//fieldset/div[2]/div/div/div/div[2]/div[1]/ul/li/a[text()='50']").click()
    return session


def check_color(session, devicemac):
    msg = ("check_color called by %d for %s" % (threading.get_ident(), devicemac))
    logger(msg)
    xpath_value = "//div[contains(@startallid,'%s')]" % devicemac
    text_color = 'rgb(255, 191, 0)'
    while text_color == 'rgb(255, 191, 0)':  # Check if upgrade is in progress and wait until its complete #
        try:
            cl_identifier = session.find_element_by_xpath(xpath_value)
            text_color = cl_identifier.get_attribute("style").split(";")[0].split(":")[1].strip(" ")
            if text_color == 'rgb(255, 191, 0)':
                time.sleep(5)
        except ex.StaleElementReferenceException:
            text_color = 'rgb(255, 191, 0)'

    if text_color in ['rgb(1, 223, 1)', 'blue', 'red']:  # rgb(1, 223, 1) - Green #
        proceed = True
    else:
        proceed = False
    return proceed


def checkbox_select(session, devicemac):  # Check box selection based on the device MAC #
    global lock
    msg = ("checkbox_select called by %d for %s" % (threading.get_ident(), devicemac))
    logger(msg)
    while lock:  # Check if the lock is already acquired and then wait until released #
        logger("Waiting for lock release in checkbox_select for %s by thread %d" % (devicemac, threading.get_ident()))
        time.sleep(2)
    lock = True  # Acquire lock, to be released in checkbox_unselect to avoid multiple threads accessing check boxes #
    xpath_value = "//input[contains(@value,'%s')]" % devicemac
    ch_status = False
    while not ch_status:
        try:
            chbox = session.find_element_by_xpath(xpath_value)
            ch_status = chbox.is_selected()
            if ch_status is False:
                chbox = session.find_element_by_xpath(xpath_value)
                chbox.click()
                time.sleep(1)
                chbox = session.find_element_by_xpath(xpath_value)
                ch_status = chbox.is_selected()
        except ex.StaleElementReferenceException:
            ch_status = False
    time.sleep(2)
    return


def checkbox_unselect(session, devicemac):  # Check box un-selection based on the device MAC #
    global lock
    msg = ("checkbox_unselect  called by %d for %s" % (threading.get_ident(), devicemac))
    logger(msg)
    xpath_value = "//input[contains(@value,'%s')]" % devicemac
    ch_status = True
    while ch_status:
        try:
            chbox = session.find_element_by_xpath(xpath_value)
            ch_status = chbox.is_selected()
            if ch_status is True:
                chbox = session.find_element_by_xpath(xpath_value)
                chbox.click()
                time.sleep(1)
            chbox = session.find_element_by_xpath(xpath_value)
            ch_status = chbox.is_selected()
        except ex.StaleElementReferenceException:
            ch_status = True
    time.sleep(2)
    lock = False
    return


def clone_select(session, cloneindex, devicemac):  # Clone selection based on the device MAC #
    msg = ("clone_select is called by %d for %d" % (threading.get_ident(), cloneindex))
    logger(msg)
    checkbox_select(session, devicemac)
    xpath = "//button[@data-id='cl_select']"
    try:
        clone_value = (session.find_element_by_xpath(xpath).get_attribute('title'))
    except ex.StaleElementReferenceException:
        time.sleep(2)
        clone_value = (session.find_element_by_xpath(xpath).get_attribute('title'))

    if cloneindex is 0 and clone_value == 'None':
        pass
    elif cloneindex is 0 and clone_value != 'None':
        while clone_value != 'None':
            try:
                session.find_element_by_xpath(xpath).click()
                time.sleep(1)
                clfile_selector = Select(session.find_element_by_id("cl_select"))
                clfile_selector.select_by_index(0)
                clone_value = (session.find_element_by_xpath(xpath).get_attribute('title'))
                if clone_value != 'None':  # To make sure 'None' is selected when cloneindex is 0 by changing index #
                    session.find_element_by_xpath(xpath).click()
                    time.sleep(1)
                    clfile_selector = Select(session.find_element_by_id("cl_select"))
                    clfile_selector.select_by_index(1)
                    clone_value = (session.find_element_by_xpath(xpath).get_attribute('title'))
            except ex.StaleElementReferenceException:
                clone_value = ''

    elif cloneindex is not 0:
        while clone_value == 'None':
            try:
                session.find_element_by_xpath(xpath).click()
                time.sleep(1)
                clfile_selector = Select(session.find_element_by_id("cl_select"))
                clfile_selector.select_by_index(cloneindex)
                clone_value = (session.find_element_by_xpath(xpath).get_attribute('title'))
            except ex.StaleElementReferenceException:
                clone_value = 'None'
        validate_color(session, 'blue', devicemac, 5)
        time.sleep(2)
    else:
        pass
    time.sleep(2)
    checkbox_unselect(session, devicemac)
    return


def start_upgrade(session, devicemac):
    global lock
    while lock:
        msg = ("Waiting for lock release before start upgrading for %s by thread %d" % (devicemac,threading.get_ident()))
        logger(msg)
        time.sleep(2)
    lock = True
    msg = ("start_upgrade is called by %d for %s" % (threading.get_ident(), devicemac))
    logger(msg)
    session.find_element_by_xpath("//*[starts-with(@name, 'Updating_') and contains(@name, '%s')]" % devicemac).click()
    time.sleep(2)
    validate_color(session, 'rgb(255, 191, 0)', devicemac, 2)
    lock = False
    return


def validate_color(session, validatecolor, devicemac, sleepvalue):
    msg = ("validate_color called by %d for %s - %s" % (threading.get_ident(), devicemac, validatecolor))
    logger(msg)
    xpath_value = "//div[contains(@startallid,'%s')]" % devicemac
    text_color = ''
    while text_color != validatecolor:
        try:
            cl_identifier = session.find_element_by_xpath(xpath_value)
            text_color = cl_identifier.get_attribute("style").split(";")[0].split(":")[1].strip(" ")
            if text_color != validatecolor:
                time.sleep(sleepvalue)
        except ex.StaleElementReferenceException:
            text_color = ''
    time.sleep(2)
    return


def end_test(session):
    session.close()


def unselect_all(session):
    msg = ("Unselect all called by %d" % (threading.get_ident()))
    logger(msg)
    xpath_value = "//*[@id='grid_devices']/thead/tr/th/input[contains(@value,'all')]"
    ch_status = True
    while ch_status:
        try:
            chbox = session.find_element_by_xpath(xpath_value)
            chbox.click()
            time.sleep(1)
            ch_status = chbox.is_selected()
            if ch_status:
                time.sleep(1)
        except ex.StaleElementReferenceException:
            ch_status = True
    time.sleep(2)
    return


def clone_selection_test(session, loopno, devicemac):
    global lock
    for i in range(0, loopno):
        start_time = time.time()
        proceed = check_color(session, devicemac)
        if proceed:
            clone_select(session, 0, devicemac)
        clone_select(session, 1, devicemac)
        start_upgrade(session, devicemac)  # Comment this for IIC and use an external IR blaster to do reinstall TV #
        validate_color(session, 'rgb(1, 223, 1)', devicemac, 10)
        end_time = time.time()
        exetime = end_time-start_time
        msg = ("Loop %d for %s took %.2f seconds by thread %d" % (i, devicemac, exetime, threading.get_ident()))
        logger(msg)
        print(msg)
    return


def thread_creators(session, loopno, mac_list):
    global lock
    threads = len(mac_list)+1  # Number of threads to create #
    try:
        jobs = []
        for i in range(1, threads):
            thread = Thread(target=clone_selection_test, args=(session, loopno, mac_list[i-1]))
            jobs.append(thread)

        for j in jobs:  # Start the threads #
            j.start()
            time.sleep(2)

        for j in jobs:  # Ensure all of the threads have finished while finishing tests #
            j.join()
            time.sleep(2)
        end_test(session)
    except:
        print(traceback.print_exc())


if __name__ == "__main__":
    mac_list = ['1C5A6BCCFC00', '1C5A6BCCFC02', '1C5A6BCCFC0D', '70AF24136718', '1C5A6BCCFC25']  # Enter the mac ids without ":" for the devices to be tested #
    remove_logfile()  # uncomment this function if the old log file clear is not required before test run" #
    session = precondition_setup()
    unselect_all(session)
    thread_creators(session, 2000, mac_list)
