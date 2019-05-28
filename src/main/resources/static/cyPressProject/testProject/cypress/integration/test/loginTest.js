describe('loginTestPage', () => {
  it('LoginPage', () => {
    cy.visit('http://localhost:8080/cas/login?service=http%3A%2F%2Flocalhost%3A8080%2FSmartInstall%2Flogin%2Fcas')
    cy.url().should("include", "/cas/login")       //访问地址
	  cy.wait(10)
    cy.get('#username', {timeout: 5000}).type("admin")
    cy.get('#password', {timeout: 5000}).type("tpvision")
    cy.wait(1)
    cy.get('.btn').click()
    cy.wait(10)

    cy.fixture('example.json').as('testJson')
    cy.get('@testJson').then((data)=>{
      console.log("name:" + data.name);
      // cy.screenshot("baiduPage", {
      //   onAfterScreenshot ($el, props) {
      //     console.log("screen success");
      //   }
      // })
    })


	//cy.get('#kw').type('CBA')
	//cy.get('#su').click()
	//cy.get('[href="http://zhidao.baidu.com/q?ct=17&pn=0&tn=ikaslist&rn=10&fr=wwwt&word=NBA"]').click()
    //cy.get('.right-nav').find('span').click()   //点击登录
    //cy.get('input[name="username"]').type('xuzl20')   //在用户输入框中输入用户名
    //cy.get('input[name="password"]').type('Pass1234') //在密码输入框中输入密码
    //cy.get('.loginBtn').click()  //点击按钮
  })
})
