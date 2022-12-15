
it('Deve efetuar login via API', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3035/api/security/login',
        body: {
            "username": "clovis",
	        "password": "PISOMtech2323*"
        }
    })
})