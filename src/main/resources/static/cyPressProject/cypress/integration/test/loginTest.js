describe('loginTestPage', () => {
  it('LoginPage', () => {
    cy.visit('http://www.baidu.com')          //访问地址
	  cy.wait(5)
	//cy.get('#kw').type('CBA')
	//cy.get('#su').click()
	//cy.get('[href="http://zhidao.baidu.com/q?ct=17&pn=0&tn=ikaslist&rn=10&fr=wwwt&word=NBA"]').click()
    //cy.get('.right-nav').find('span').click()   //点击登录
    //cy.get('input[name="username"]').type('xuzl20')   //在用户输入框中输入用户名
    //cy.get('input[name="password"]').type('Pass1234') //在密码输入框中输入密码
    //cy.get('.loginBtn').click()  //点击按钮
  })
})
