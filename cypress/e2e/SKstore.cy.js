/// <reference types="cypress" />
beforeEach('Setup',()=>{
  cy.viewport(1440,1080)
  cy.visit('https://skstore.eu')
  cy.url().should('contain', 'skstore')
  
})
describe('1 Change language',()=>{   

  it('1.1 Change language to Czech', () => {
      cy.get('#footer-language-button > .header__button-icon').click()
      cy.get(':nth-child(3) > .footer-select__link > .footer-select__link-name').click()
      cy.url().should('contain', 'https://skstore.eu/cs')
  })
  it('1.2 Change language to Romania', () => {
      cy.get('#footer-language-button > .header__button-icon').click()
      cy.get(':nth-child(4) > .footer-select__link > .footer-select__link-name').click()
      cy.url().should('contain', 'https://skstore.eu/ro')
  })
  it('1.3 Change language to Hungary', () => {
      cy.get('#footer-language-button > .header__button-icon').click()
      cy.get(':nth-child(5) > .footer-select__link > .footer-select__link-name').click()
      cy.url().should('contain', 'https://skstore.eu/hu')
  })
  it('1.4 Change language to Polish', () => {
      cy.get('#footer-language-button > .header__button-icon').click()
      cy.get('#footer-language-modal > .modal__content > .modal__body > .footer-select__list > :nth-child(1) > .footer-select__link').click()
      cy.url().should('contain', 'https://skstore.eu/pl')
  })
  
})

describe('2 Login actions',()=>{   

  it('2.1 Shows log in pop up', () => {
  
      cy.get('#header-login-modal-button > .header__button-icon').click()
      cy.get('#header-login-modal > .modal__content > .modal__body').should('be.visible')
  })

  it('2.2 Close log in pop up', () => {
  
      cy.get('#header-login-modal-button > .header__button-icon').click()
      cy.get('#header-login-modal > .modal__content > .modal__body').should('be.visible')
      cy.get('#header-login-modal > .modal__content > .modal__header > .button').click()
      cy.get('#header-login-modal > .modal__content > .modal__body').should('not.be.visible')
  })

  it('2.3 Possibility to create a new account', () => {
  
      cy.get('#header-login-modal-button > .header__button-icon').click()
      cy.get('#header-login-modal > .modal__content > .modal__body').should('be.visible')
      cy.get('.auth__register_button').click()
      cy.url().should('contain', 'https://skstore.eu/register')
  })

  it('2.4 Possibility to login in/out account', () => {
  
      cy.get('#header-login-modal-button > .header__button-icon').click()
      cy.get('#header-login-modal > .modal__content > .modal__body').should('be.visible')
      cy.get(':nth-child(3) > #email').click().type('testerautomat123@gmail.com')
      cy.get('.password-view-toggle > #password').click().type('Automatyczny123')
      cy.get('.auth > .auth__column > .auth__box > .form > :nth-child(6) > .button').click()
      cy.url().should('contain', 'https://skstore.eu/user')
      cy.get(':nth-child(8) > form > .button').click()
      cy.url().should('contain', 'https://skstore.eu')
  })

})

describe('3 Account actions', () => {
    beforeEach('Setup', () => {
      cy.fixture('users').then((users) => {
        const { email, password } = users;
        cy.get('#header-login-modal-button > .header__button-icon').click();
        cy.get('#header-login-modal > .modal__content > .modal__body').should('be.visible');
        cy.get(':nth-child(3) > #email').click().type(email);
        cy.get('.password-view-toggle > #password').click().type(password);
        cy.get('.auth > .auth__column > .auth__box > .form > :nth-child(6) > .button').click();
        cy.url().should('contain', 'https://skstore.eu/user');
      });
    });

  it('3.1 Change name in My Details', () => {
  
      cy.get(':nth-child(2) > #account-navigation-data').click()
      cy.get('.account__data > :nth-child(1) > :nth-child(2) > .button').click()
      cy.url().should('contain', 'https://skstore.eu/user/data/edit')
      cy.get('#firstname').click().clear().type('NewName')
      cy.get('#lastname').click().clear().type('NewSurname')
      cy.get('#user-edit-form > .mt-2 > .button').click()
      cy.url().should('contain', 'https://skstore.eu/user/data')
      cy.get(':nth-child(8) > form > .button').click()
  })

  it('3.2 Add new adress in My Adresses', () => {
  
      cy.get('.account__navigation > :nth-child(3) > .button').click()
      cy.get('.account__address-button').click()
      cy.url().should('contain', 'https://skstore.eu/user/addresses/create').wait(2000)
      cy.get('#firstname').click({force: true}).type('Piotr')
      cy.get('#lastname').click({force: true}).type('Kowalski')
      cy.get('#address').click({force: true}).type('Kowalskiego 1')
      cy.get(':nth-child(1) > .tail-select > .select-label > .label-inner').click({force: true})
      cy.get(':nth-child(1) > .tail-select > .select-dropdown > .dropdown-search > .search-input').click({force: true}).clear().type("Poland")
      cy.get('mark').click({force: true})
      cy.get('#city').click({force: true}).type('Warszawa')
      cy.get('#postcode').click({force: true}).type('00-001')
      cy.get('#phone').click({force: true}).type('666123666')
      cy.get('.mt-2 > .button').click()
      cy.url().should('contain', 'https://skstore.eu/user/addresses')
      cy.get(':nth-child(8) > form > .button').click()
  })

  it('3.3 Change My Size im my account', () => {
  
      cy.get('.account__navigation > :nth-child(5) > .button').click()
      cy.get('#shoes-dropdown > .dropdown__button').click()
      cy.get(':nth-child(15) > .account-personalization__label').click()
      cy.get('#shirt-dropdown > .dropdown__button').click()
      cy.get('#shirt-dropdown > .dropdown__list > .dropdown-list__body > .account-personalization__list > :nth-child(6) > .account-personalization__label').click()
      cy.get('#trousers-dropdown > .dropdown__button').click()
      cy.get('#trousers-dropdown > .dropdown__list > .dropdown-list__body > .account-personalization__list > :nth-child(6) > .account-personalization__label').click()
      cy.get('#user-edit-form > .form__group > .button').click()
      cy.url().should('contain', 'https://skstore.eu/user/me')
      cy.get(':nth-child(8) > form > .button').click()
  })
})

describe('4 Search on page',()=>{   

  it('4.1 Checking possibility of search item on page', () => {
      cy.get('.header__button-search-icon').click()
      cy.get('#header-search-form-input').click().type('lebron').type('{enter}').wait(1000)
      cy.url().should('contain', 'https://skstore.eu/products/lebron')
  })

  it('4.2 Checking possibility of search item on page', () => {
      cy.get('.header__button-search-icon').click()
      cy.get('#header-search-form-input').click().type('harden vii').type('{enter}').wait(1000)
      cy.url().should('contain', 'https://skstore.eu/products/harden')
  })
  
})

describe('5 Add product to the basket',()=>{   

  it('5.1 Add shoes to the basket', () => {
      cy.get(':nth-child(1) > .menu__category-link > span').click()
      cy.get(':nth-child(1) > .listing-product > .listing-product__link > .listing-product__image-block > .listing-product__image').click().wait(1000)
<<<<<<< HEAD


     cy.get('[data-sizeeu="43.0"] > .size__button > .size__value').click({force: true})


=======
<<<<<<< HEAD
      cy.get('[data-sizeeu="43.0"] > .size__button > .size__value').click({force: true})
=======
      cy.get('[data-sizeeu="36.0"] > .size__button > .size__value').click({force: true})
>>>>>>> parent of 8826ffb (projekt_gotowy)
>>>>>>> 83da8c717fea901d5088d2a9de822d893d8a41f6
      cy.get('.product__add-to-cart-button').click({force: true})
      cy.get('.add-to-cart__button-block > .button').click()
      cy.url().should('contain', 'https://skstore.eu/basket')
      cy.get('.basket-product__info-all').should('be.visible')
  })

  it('5.2 Delete shoes from the basket', () => {
      cy.get(':nth-child(1) > .menu__category-link > span').click()
      cy.get(':nth-child(1) > .listing-product > .listing-product__link > .listing-product__image-block > .listing-product__image').click().wait(1000)
<<<<<<< HEAD


      cy.get('[data-sizeeu="43.0"] > .size__button > .size__value').click({force: true})


=======
<<<<<<< HEAD
      cy.get('[data-sizeeu="43.0"] > .size__button > .size__value').click({force: true})
=======
      cy.get('[data-sizeeu="36.0"] > .size__button > .size__value').click({force: true})
>>>>>>> parent of 8826ffb (projekt_gotowy)
>>>>>>> 83da8c717fea901d5088d2a9de822d893d8a41f6
      cy.get('.product__add-to-cart-button').click({force: true})
      cy.get('.add-to-cart__button-block > .button').click()
      cy.get('.basket-product__remove-form > .button').click({force: true})
      cy.get('.basket__empty').should('be.visible')

  })
  
})