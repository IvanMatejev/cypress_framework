import {Main} from "../google_maps-pages/Main"
import {GoogleMapsPage} from "../google_maps-pages/GoogleMaps"
import {ViaMichelinPage} from "../google_maps-pages/ViaMichelinPage"

describe('Google maps', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("viaMichelin")}`);  
    });
    
    it.skip('Longest Route Google', () => {
        
        let page;

        if(Cypress.env("googleMaps")){
            page = GoogleMapsPage
        }else if(Cypress.env("viaMichelin")){
            page = ViaMichelinPage
        }

        cy.log(page)
        
        page.chooseADestination(page.dectinationInput,"Amsterdam")

        page.routeBtn.click()

        page.chooseACurrentLocation(page.currentLocationInput,"Beograd")

        page.carRoutesBtn.click()

        
        page.longestRoute(page.allRoutes)

        cy.get('@maxRouteElement').click().type('{enter}')
       
        cy.get('@maxText').then(maxText => {
            page.choosenRouteKm.should('contain.text', `${maxText}`)
        })   
    });

    it('Longest Route ViaMichelin', () => {

        let page;

        if(Cypress.env("googleMaps")){
            page = GoogleMapsPage
        }else if(Cypress.env("viaMichelin")){
            page = ViaMichelinPage
        }
        
        cy.on("window:alert", (str) => {
    
            page.acceptCookies.click();
        });

        page.chooseADestination(page.dectinationInput,"Sombor").type("{enter}")

        page.chooseACurrentLocation(page.currentLocationInput,"Beograd").type("{enter}")

        page.searchBtnElement.click();

        page.longestRout(page.allRoutes)

        cy.get('@maxRouteElement').click()
       
        cy.get('@maxText').then(maxText => {
            page.choosenRouteKm.should('contain.text', `${maxText}`)
        })   
    });
});