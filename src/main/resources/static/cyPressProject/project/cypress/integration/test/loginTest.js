
/*
 * cyPressProject\project
 * node_modules\.bin\cypress open
*/

function fizzbuzz (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  }

  if (num % 3 === 0) {
    return 'fizz'
  }

  if (num % 5 === 0) {
    return 'buzz'
  }
}

describe('loginTestPage', () => {

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

  function numsExpectedToEq (arr, expected) {
    // loop through the array of nums and make
    // sure they equal what is expected
    arr.forEach((num) => {
      expect(fizzbuzz(num)).to.eq(expected)
    })
  }

 // it will only this case, after all case will not execute
 // it.only('returns "fizz" when number is multiple of 3', function () {
 //   numsExpectedToEq([9, 12, 18], 'fizz')
 // })

  it('returns "buzz" when number is multiple of 5', function () {
    numsExpectedToEq([10, 20, 25], 'buzz')
  })

  // this case will skip
  it.skip('returns "fizzbuzz" when number is multiple of both 3 and 5', function () {
    numsExpectedToEq([15, 30, 60], 'fizzbuzz')
  })

  it('LoginPage', () => {
    cy.visit('/')
    //cy.url().should("include", "/SmartInstall")       //访问地址
	  cy.wait(1000)
    cy.get('#username', {timeout: 5000}).type("admin")
    cy.get('#password', {timeout: 5000}).type("tpvision")
    cy.wait(1000)
    cy.get('.btn').click()
    cy.wait(3000)

  /*cy.fixture('example.json').as('testJson')
  cy.get('@testJson').then((data)=>{
      console.log("name:" + data.name);
      // cy.screenshot("baiduPage", {
      //   onAfterScreenshot ($el, props) {
      //     console.log("screen success");
      //   }
      // })
  })*/

  cy.get('#nav_tvs')
    .as('mainNaviTVs')
    //.parent('li')
    //.should('not.have.class', 'active')
    .then(($parentDom) => {
        cy.wait(3000)
        if (!$parentDom.hasClass('active')) {
          cy.get('@mainNaviTVs').click()
          cy.wait(3000)
        }
  })

  cy.wait(3000)

  cy.get('[data-table=tabs-devices]')
    .as('mainNaviTVs_tvs')
    //.parent("li")
    //.should('not.have.class', 'active')
    .should('be.visible')
    .then(($parentD) => {
        cy.wait(3000)
        if (!$parentD.hasClass('active')) {
          cy.get('@mainNaviTVs_tvs').click()
          cy.wait(3000)
        }
  })

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

  cy.wait(3000)

  cy.get('@TVData').then((tvData)=>{
      //console.log("TVDiscoveryData:" + tvData.TVDiscoveryData);
      commonRequest.url = tvData.WebServicesUrl;
      commonRequest.body = JSON.stringify(tvData.TVDiscoveryData);
      // send TVDiscovery data
      cy.request(commonRequest).then((resp)=>{
          //console.log("resp:" + JSON.stringify(resp));
          const statusCode = resp.status
          console.log("send TVDiscovery status:" + statusCode)
          cy.reload()
          cy.wait(5000)
          if (statusCode == 200) {
            commonRequest.body = JSON.stringify(tvData.ReadyForUpgradeData);
            // send IPClonservice, generate Firmware version
            cy.request(commonRequest).then((res) => {
                console.log("send IPClonservice status:" + res.status);
                cy.wait(3000)
            });
          }
      })
  })

  cy.wait(3000)

  cy.get('@TVData').then((tvData)=>{
     const obj = cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
     obj.should('exist')
        // 1. select tv
        .then(($targetDom) => {
            cy.wait(3000)
            if (!$targetDom.hasClass('active')) {
                $targetDom.find("input[name=select]").click()
            }
        })
        // 2. assign clone data
        .then(() => {
            cy.wait(3000)
            cy.get("#assign_select")
              .click()
              .then(($dom) => {
                  cy.wait(2500)
                  $dom.find("ul li:eq(3)").click()
                  cy.wait(2500)
                  cy.get("#assignSelectRows tr:eq(1)")
                    .click()
                    // 3. check assign clone color
                    .then(() => {
                        cy.wait(5000)
                        cy.get("#tvsBody tr[data-row-id=\"" + tvData.TVUniqueID + "\"]")
                          .find("#tv_CloneDiv")
                          .should('have.css', 'color', tvData.BlueColor)
                    })
              })
        })
  })

  cy.wait(5000)

  cy.get('@TVData').then((tvData) => {
      commonRequest.url = tvData.WebServicesUrl;
      commonRequest.body = JSON.stringify(tvData.UpGradeInProgressData);
      cy.request(commonRequest).then((resp) => {
          cy.wait(5000)
          const responseCode = resp.status;
          console.log("responseCode:" + responseCode);
          if (responseCode == 200) {

          }
      }).then(() => {
          cy.wait(5000)
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

  cy.wait(5000)

  cy.get('@TVData').then((tvData) => {
      commonRequest.url = tvData.WebServicesUrl;
      commonRequest.body = JSON.stringify(tvData.NotInUpgradeModeData);
      cy.request(commonRequest).then((resp) => {
          cy.wait(5000)
          const responseCode = resp.status;
          console.log("responseCode:" + responseCode);
          if (responseCode == 200) {

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
  })
})
