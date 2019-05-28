
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
