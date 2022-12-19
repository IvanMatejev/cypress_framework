import {RoutePage} from "../../cypress/google_maps-pages/Route"
import {NavigationPage} from "../../cypress/google_maps-pages/Navigation"

describe('Google maps', () => {
    
    it('Longest route', () => {
        cy.visit("https://www.google.com/maps/@44.8069632,20.4275712,12z?hl=sr")
        
        RoutePage.chooseARoute("Beograd", "Amsterdam")
        
        RoutePage.longestRoute()

        cy.get('@maxRouteElement').click().type('{enter}')
       
        cy.get('@maxText').then(maxText => {
            NavigationPage.choosenRouteKm.should('contain.text', `${maxText}`)
        })   
    });
});