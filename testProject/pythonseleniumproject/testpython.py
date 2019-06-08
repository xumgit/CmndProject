 #coding=utf-8
from selenium import webdriver

# chromedriver download url: http://chromedriver.storage.googleapis.com/index.html
request_url = "http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas"
dr = webdriver.Chrome(executable_path='chromedriver_74_version.exe')
# driver = webdriver.Firefox() //打开Firefox浏览器
# driver = webdriver.Ie() //打开IE浏览器
dr.get(request_url)

