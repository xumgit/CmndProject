describe('Plugin Unit Another Test', () => {

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

    function two_Navigation_to_Files_clone_page() {
        cy.get("#nav_files")
        .as('mainNaviFiles')
        .then(($parentDom) => {
            cy.wait(3000)
            if (!$parentDom.parent().hasClass('active')) {
                cy.get('@mainNaviFiles').click()
                cy.wait(3000)
            }
        })
        cy.wait(3000)
        cy.get('a[data-table=tabs_clone]')
        .as('mainNaviFiles_clone')
        .then(($parentD) => {
            cy.wait(3000)
            if (!$parentD.parent().hasClass('active')) {
                cy.get('@mainNaviFiles_clone').click()
                cy.wait(3000)
            }
        })
    }

    // https://github.com/abramenal/cypress-file-upload
    it('Upload File Demo', () => {
        one_Login_CMND_page()
        two_Navigation_to_Files_clone_page()
        cy.wait(5000)
        const uploadFileName = 'test/TPM181HE_CloneData.zip'
        cy.fixture(uploadFileName).then((fileContentData) => {
            cy.get('input[name="uploadedfile"]').upload(
                {
                    fileContent: fileContentData, 
                    fileName: 'TPM181HE_CloneData.zip', 
                    mimeType: 'application/zip'
                },
                {
                    subjectType: 'input', 
                    force: false
                },
            );           
        });
        cy.wait(5000)
        two_Navigation_to_Files_clone_page()
    })
})