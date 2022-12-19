import {RoutePage} from "../../cypress/google_maps-pages/Route"
import {GoogleMapsPage} from "../google_maps-pages/GoogleMaps"
import {ViaMichelinPage} from "../google_maps-pages/ViaMichelinPage"

describe('Google maps', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("baseUrl")}`);
    });
    
    it('Longest Route Google', () => {
        
        RoutePage.chooseADestination(GoogleMapsPage.dectinationInput,"Amsterdam")

        GoogleMapsPage.routeBtn.click()

        RoutePage.chooseACurrentLocation(GoogleMapsPage.currentLocationInput,"Beograd")

        GoogleMapsPage.carRoutesBtn.click()

        
        RoutePage.longestRoute(GoogleMapsPage.allRoutes)

        cy.get('@maxRouteElement').click().type('{enter}')
       
        cy.get('@maxText').then(maxText => {
            GoogleMapsPage.choosenRouteKm.should('contain.text', `${maxText}`)
        })   
    });

    it.skip('Longest Route ViaMichelin', () => {
        
        ViaMichelinPage.acceptCookies.click()

        RoutePage.chooseADestination(ViaMichelinPage.dectinationInput,"Sombor").type("{enter}")

        RoutePage.chooseACurrentLocation(ViaMichelinPage.currentLocationInput,"Beograd").type("{enter}")

        ViaMichelinPage.searchBtnElement.click();

        RoutePage.longestRout(ViaMichelinPage.allRoutes)

        cy.get('@maxRouteElement').click()
       
        cy.get('@maxText').then(maxText => {
            ViaMichelinPage.choosenRouteKm.should('contain.text', `${maxText}`)
        })   
    });
});