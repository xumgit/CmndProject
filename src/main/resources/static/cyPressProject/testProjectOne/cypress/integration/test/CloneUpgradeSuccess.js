
/*
 * cd cyPressProject\testProjectOne
 * 1. manual run:
        node_modules\.bin\cypress open
 * 2. command line run, and record a video and screenshot:
        npx cypress run --record --key 1c061c4f-7d5d-43e7-9fba-4beea9550293 --spec "cypress/integration/test/CloneUpgradeSuccess.js"
*/

// function fizzbuzz (num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return 'fizzbuzz'
//   }
//
//   if (num % 3 === 0) {
//     return 'fizz'
//   }
//
//   if (num % 5 === 0) {
//     return 'buzz'
//   }
// }

context('Unit Test', () => {

  before(function() {
	    cy.log('before => runs once before all tests in the block')
  })

  after(function() {
	    cy.log('after => runs once after all tests in the block')
  })

  beforeEach(function() {
	    cy.log('beforeEach => runs before each test in the block')
      cy.fixture('tvdata.json').as('TVData')
  })

  afterEach(function() {
	    cy.log('afterEach => runs after each test in the block')
  })

  // function numsExpectedToEq (arr, expected) {
  //   // loop through the array of nums and make
  //   // sure they equal what is expected
  //   arr.forEach((num) => {
  //       expect(fizzbuzz(num)).to.eq(expected)
  //   })
  // }

  const commonRequest = {
        method: 'POST',
        form: false,
        headers: {
            "Authorization": "whateverYouNeedForAuthentication",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        url: null,
        body: null
  }

  function changeData(data, changeDataObj) {       
        if (null == changeDataObj) {
            cy.log("changeDataObj is null")
            return data
        }
        if (null == data) {
            cy.log("data is null")
            return data
        }
        let notInUpgradeModeDataObj = data.NotInUpgradeModeData
        if (null == notInUpgradeModeDataObj) {
            cy.log("notInUpgradeModeDataObj is null")
            return data
        }
        let commandDetailsObj = notInUpgradeModeDataObj.CommandDetails
        if (null == commandDetailsObj) {
            cy.log("commandDetailsObj is null")
            return data
        }
        let ipCloneParametersObj = commandDetailsObj.IPCloneParameters
        if (null == ipCloneParametersObj) {
            cy.log("ipCloneParametersObj is null")
            return data
        }
        let cloneSessionStatusObj = ipCloneParametersObj.CloneSessionStatus
        if (null == cloneSessionStatusObj) {
            cy.log("cloneSessionStatusObj is null")
            return data
        }
        let cloneItemStatusArrObj = cloneSessionStatusObj.CloneItemStatus
        if (null == cloneItemStatusArrObj) {
            cy.log("cloneItemStatusArrObj is null")
            return data
        }
        let arrLen = cloneItemStatusArrObj.length
        for(let i = 0; i < arrLen; i++) {
            let cloneItemDetailsObj = cloneItemStatusArrObj[i].CloneItemDetails
            let cloneItemName = cloneItemDetailsObj.CloneItemName
            if (null != cloneItemName && "" != cloneItemName 
                    && changeDataObj.hasOwnProperty(cloneItemName)) {
                cloneItemDetailsObj.CloneItemVersionNo = changeDataObj[cloneItemName]
            }
        }
        return data
  }

  function one_Login_CMND_page() {
        cy.log("Login CMND page")
        cy.visit('/')
        //cy.url().should("include", "/SmartInstall")       //访问地址
        cy.wait(1000)
        cy.get('#username', {timeout: 5000}).type("admin")
        cy.get('#password', {timeout: 5000}).type("tpvision")
        cy.wait(1000)
        cy.get('.btn').click()
        cy.wait(3000)
  }

  function two_Navigation_to_TVS_tv_page() {
        cy.log("Navigation to TVS_tv page")
        cy.wait(3000)
        cy.get('#nav_tvs')
            .as('mainNaviTVs')
            //.parent('li')
            //.should('not.have.class', 'active')
            .then(($parentDom) => {
                cy.wait(3000)
                if (!$parentDom.parent().hasClass('active')) {
                    cy.get('@mainNaviTVs').click()
                    cy.wait(3000)
                }
            })

        cy.wait(3000)

        cy.get('a[data-table=tabs-devices]')
            .as('mainNaviTVs_tvs')
            //.parent("li")
            //.should('not.have.class', 'active')
            .should('be.visible')
            .then(($parentD) => {
                cy.wait(3000)
                if (!$parentD.parent().hasClass('active')) {
                cy.get('@mainNaviTVs_tvs').click()
                cy.wait(3000)
                }
            })
  }

  function three_Send_TVDiscovery_data() {
        cy.log("Send TVDiscovery, generate a emulator tv")
        cy.get('@TVData').then((tvData) => {
            cy.wait(3000)
            //console.log("TVDiscoveryData:" + tvData.TVDiscoveryData);
            commonRequest.url = tvData.WebServicesUrl
            commonRequest.body = JSON.stringify(tvData.TVDiscoveryData);
            cy.request(commonRequest).then((resp)=>{
                //console.log("resp:" + JSON.stringify(resp));
                cy.log("send TVDiscovery status:" + resp.status)
                cy.wait(10000)
                let isRefreshPage = true
                cy.get("#tvsBody > tr")
                .each(($tr, index, $arrList) => {
                    let tvUniqueID = $tr.attr("data-row-id")
                    if (tvUniqueID == tvData.TVUniqueID) {
                        isRefreshPage = false
                    }
                })
                .then(() => {
                    if (isRefreshPage) {
                        cy.reload()
                    }
                })             
            })
        })
  }

  function four_Send_IPClonservice_data() {
        cy.log("Send IPClonservice, show Firmware version")
        cy.get('@TVData').then((tvData) => {
            cy.wait(3000)
            commonRequest.url = tvData.WebServicesUrl
            commonRequest.body = JSON.stringify(tvData.ReadyForUpgradeData)
            cy.request(commonRequest).then((res) => {
                cy.log("send IPClonservice status:" + res.status)
                cy.wait(3000)
            });
        })
  }

  function five_Select_TV() {
        cy.log("Select TV")
        cy.wait(3000)
        cy.get('@TVData').then((tvData) => {
            cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                .should('exist')
                .then(($targetDom) => {
                    cy.wait(3000)
                    cy.get("#tvsBody > tr")
                      .each(($tr, index, $arrList) => {
                         let tvUniqueID = $tr.attr("data-row-id")
                         if (tvUniqueID != tvData.TVUniqueID) {
                             if ($tr.hasClass('active')) {
                                $tr.find("input[name=select]").click()
                             }
                         } else {
                            if (!$tr.hasClass('active')) {
                                $tr.find("input[name=select]").click()
                             }
                         }
                      })
                })
        })
  }

  function six_Assign_Clone_data() {
        cy.log("Assign Clone data, then check blue color")
        cy.wait(3000)
        cy.get('@TVData').then((tvData) => {
            cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                .should('exist')
                .then(() => {
                    cy.wait(3000)
                    cy.get("#assign_select")
                    .click()
                    .then(($dom) => {
                        cy.wait(1000)
                        $dom.find("ul li:eq(3)").click()
                        cy.wait(3000)
                        cy.get("#assignSelectRows > tr")
                            //.its('length')
                            //.should('be.gt', 1)
                            //.contains('CypressTestCloneData')
                            //.click()
                            .each(($tr, index, $arrList) => {
                                let selectText = $tr.find("td").eq(0).text()
                                cy.log("text_" + index + ":" + selectText)
                                if (selectText.indexOf('CypressTestCloneData') > -1) {
                                    cy.log("CloneData select success")
                                    $tr.click()                              
                                }
                            })
                            .then(() => {
                                cy.wait(10000)
                                cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                                .find("#tv_CloneDiv")
                                .should('have.css', 'color', tvData.BlueColor)
                            })
                    })
                })
        })
  }

  function seven_Click_Upgrade_button() {
        cy.log("Click Upgrade button, means ready to upgrade")
        cy.wait(3000)
        cy.get('@TVData').then((tvData)=>{
            cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
            .should('exist')
            .then(() => {
                    cy.wait(3000)
                    cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                    .should('exist')
                    .find("span.glyphicon-refresh")
                    .should('exist')
                    .click()
                })
        })
  }

  function eight_Emulator_TV_Response_UpgradeInprogress() {
        cy.log("Emulator TV response UpgradeInprogress, then check clone orange color")
        cy.wait(3000)
        cy.get('@TVData').then((tvData) => {
            commonRequest.url = tvData.WebServicesUrl;
            commonRequest.body = JSON.stringify(tvData.UpGradeInProgressData);
            cy.request(commonRequest).then((resp) => {
                cy.wait(3000)
                const responseCode = resp.status;
                console.log("responseCode:" + responseCode);
                if (responseCode == 200) {
                        cy.wait(1000)
                        cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                        .should('exist')
                        .find("img.hideIcon")
                        .then(($imgIcon) => {
                            cy.wait(1000)
                            if ($imgIcon.length > 0) {
                            } else {
                                cy.reload()
                            }
                        })
                }
            }).then(() => {
                cy.wait(3000)
                cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                    .should('exist')
                    .then(() => {
                        cy.wait(5000)
                        cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                        .find("#tv_CloneDiv")
                        .should('have.css', 'color', tvData.OrangeColor)
                    })
            })
        })
  }

  function nine_Emulator_TV_Response_NotInUpgradeMode() {
        cy.log("Emulator TV response NotInUpgradeMode, then check clone green color")
        cy.wait(3000)
        cy.get('@TVData').then((tvData) => {
            commonRequest.url = tvData.WebServicesUrl;
            let changeDataObj = {}
            changeDataObj[tvData.CloneItems["TVChannelList"]] = "04/06/2019:01:39";
            changeDataObj[tvData.CloneItems["HTVCfg.xml"]] = "04/06/2019:15:15";
            changeDataObj[tvData.CloneItems["ProfessionalAppsData"]] = "04/06/2019:15:15";
            changeDataObj[tvData.CloneItems["RoomSpecificSettings"]] = "24/08/2018:11:45";
            changeDataObj[tvData.CloneItems["Schedules"]] = "23/08/2018:10:34";
            changeDataObj[tvData.CloneItems["TVSettings"]] = "04/06/2019:13:39";
            let data = changeData(tvData, changeDataObj)
            commonRequest.body = JSON.stringify(data.NotInUpgradeModeData);
            cy.request(commonRequest).then((resp) => {
                cy.wait(7000)
                const responseCode = resp.status;
                cy.log("NotInUpgradeMode responseCode:" + responseCode);
                if (responseCode == 200) {
                    cy.wait(1000)
                    cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                    .should('exist')
                    .find("img.hideIcon")
                    .then(($imgIcon) => {
                        cy.wait(1000)
                        if ($imgIcon.length > 0) {
                            cy.reload()
                        } 
                    })
                }
            }).then(() => {
                cy.wait(5000)
                cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                    .should('exist')
                    .then(() => {
                        cy.wait(5000)
                        cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                        .find("#tv_CloneDiv")
                        .should('have.css', 'color', tvData.GreenColor)
                    })
            })
        })
  }

  function ten_Click_Info_Dialog_button() {
        cy.log("Click info dialog button, further check upgrade info")
        cy.wait(5000)
        cy.get('@TVData').then((tvData) => {
            cy.wait(5000)
            cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                .should('exist')
                .find("span.glyphicon-info-sign")
                .should('exist')
                .click()
                .then(() => {
                    cy.wait(2000)
                    cy.get("#TV_info").scrollTo('center')
                    cy.wait(8000)
                    .then(() => {
                        cy.get("#infoModal_ID button.close").click()
                    })
                })
        })
  }

  function eleven_delete_TV() {
        cy.log("delete this tv")
        cy.wait(3000)
        cy.get('@TVData').then((tvData) => {
            cy.wait(5000)
            cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                .should('exist')
                .find("span.glyphicon-trash")
                .should('exist')
                .click()
                .then(() => {
                    cy.wait(2000)
                    cy.get("#tvDeleteModal #deleteTV")
                    .should("exist")
                    .click()
                })
        })
  }

 // it will only this case, after all case will not execute
 // it.only('returns "fizz" when number is multiple of 3', function () {
 //   numsExpectedToEq([9, 12, 18], 'fizz')
 // })

  // it('returns "buzz" when number is multiple of 5', function () {
  //     numsExpectedToEq([10, 20, 25], 'buzz')
  // })
  //
  // // this case will skip
  // it.skip('returns "fizzbuzz" when number is multiple of both 3 and 5', function () {
  //     numsExpectedToEq([15, 30, 60], 'fizzbuzz')
  // })

  it('Clone Upgrade Success demo', () => {
      one_Login_CMND_page()
      two_Navigation_to_TVS_tv_page()
      three_Send_TVDiscovery_data()
      four_Send_IPClonservice_data()
      five_Select_TV()
      six_Assign_Clone_data()
      seven_Click_Upgrade_button()
      eight_Emulator_TV_Response_UpgradeInprogress()
      nine_Emulator_TV_Response_NotInUpgradeMode()
      ten_Click_Info_Dialog_button()
      eleven_delete_TV()
  })

  //it('TestEnd', () => {
  /*cy.fixture('example.json').as('testJson')
  cy.get('@testJson').then((data)=>{
      console.log("name:" + data.name);
      // cy.screenshot("baiduPage", {
      //   onAfterScreenshot ($el, props) {
      //     console.log("screen success");
      //   }
      // })
  })*/

  /*cy.get('#nav_files')
    .as('mainNaviFiles')
    .parent("li")
    // expect($tr).to.not.have.class('active')
    //.should('not.have.class', 'active')
    .then(($parentDom) => {
      if ($parentDom.hasClass('active')) {

      } else {
          cy.get('@mainNaviFiles').click()
          cy.wait(10)
      }
  });

  cy.get('[data-table=tabs_clone]')
    .as('mainNaviFiles_Clones')
    .parent("li")
    //.should('have.attr', 'aria-expanded', 'false')
    .then(($parentDom)=>{
        if ($parentDom.hasClass('active')) {

        } else {
            cy.get('@mainNaviFiles_Clones').click()
            cy.wait(10)
        }
        //console.log("select navi:" + $dom.text() + ",prop href:" + $dom.prop('href'));
  })*/

  // not support upload file
  //cy.get('#uploadedClone > #upload > #spanupload > [name="uploadedfile"]')
  //  .type('E:/clonedata/TPM181HE_CloneData.zip')
  //  .type('{enter}')

	//cy.get('#kw').type('CBA')
	//cy.get('#su').click()
	//cy.get('[href="http://zhidao.baidu.com/q?ct=17&pn=0&tn=ikaslist&rn=10&fr=wwwt&word=NBA"]').click()
    //cy.get('.right-nav').find('span').click()   //点击登录
    //cy.get('input[name="username"]').type('xuzl20')   //在用户输入框中输入用户名
    //cy.get('input[name="password"]').type('Pass1234') //在密码输入框中输入密码
    //cy.get('.loginBtn').click()  //点击按钮
  //})
})
