#coding=utf-8

import time
import os
import sys
sys.path.append('../')
import TestCase
import CommonConstant

commonConstant = CommonConstant.CommonConstant()
absolutionChromedriverPath = os.path.abspath(os.pardir + os.sep + commonConstant.getAbsolutionChromedriverPath())
print("path:" + absolutionChromedriverPath)
dr = TestCase.getDriver(absolutionChromedriverPath)
TestCase.openCmndPage(dr)
dr.implicitly_wait(3)
TestCase.logIn(dr)
dr.implicitly_wait(3)
time.sleep(5)
TestCase.gotoTVS_tvs_tab(dr)