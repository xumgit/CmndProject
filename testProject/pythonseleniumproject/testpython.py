 #coding=utf-8
from selenium import webdriver
import requests
import json
import time
import TVDiscovery
import datetime

currentTime =  time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) 
print("currentTime:" + currentTime)
# chromedriver download url: http://chromedriver.storage.googleapis.com/index.html
request_url = "http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas"
dr = webdriver.Chrome(executable_path='chromedriver_74_version.exe')
# driver = webdriver.Firefox() //打开Firefox浏览器
# driver = webdriver.Ie() //打开IE浏览器
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

dr.find_element_by_id('username').send_keys('admin')
dr.find_element_by_id('password').send_keys('tpvision')
dr.find_element_by_css_selector("input[name='submit']").click()
time.sleep(3)

# navigation to TVS -> TVS
dr.find_element_by_id('nav_tvs').click()
time.sleep(3)
dr.find_element_by_css_selector("a[data-table='tabs-devices']").click()
time.sleep(3)

starttime = datetime.datetime.now()	

generateTvsCount = 10				
tvDiscovery = TVDiscovery.TVDiscovery(generateTvsCount)
tvDiscovery.genarateManyTvs()

endtime = datetime.datetime.now()
consumerTime = (endtime - starttime).seconds
print ("total consumer time:" + str(consumerTime) + " seconds")

time.sleep(10)
dr.quit()
