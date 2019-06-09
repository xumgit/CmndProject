 #coding=utf-8
from selenium import webdriver
import requests
import time

# chromedriver download url: http://chromedriver.storage.googleapis.com/index.html
request_url = "http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas"
dr = webdriver.Chrome(executable_path='chromedriver_74_version.exe')
# driver = webdriver.Firefox() //打开Firefox浏览器
# driver = webdriver.Ie() //打开IE浏览器
response = dr.get(request_url)
statusCode = response.status_code
responseText = response.text
print("response:" + response + ",responseText:" + responseText)
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

#dr.get()



time.sleep(3)
dr.quit()
