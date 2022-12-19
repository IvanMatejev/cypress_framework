import { NavigationPage } from "../../cypress/google_maps-pages/Navigation";

class Route{
        longestRoute () {
        
        let maxRoute= -1;
        let maxText= -1;
        let maxRouteElement=null;
        
        NavigationPage.allRoutes.each(($el)=>{
            let current = $el.text().replace(/\D/g, '')

            if( maxRoute < current ) {
                maxRoute = current;
                maxText = $el.text()
                maxRouteElement = $el
            }
            
            cy.wrap(maxRoute).as('maxRoute');
            cy.wrap(maxText).as('maxText');
            cy.wrap(maxRouteElement).as('maxRouteElement')

        })
    }

    chooseARoute ( currentLocation, destination ) {
        NavigationPage.dectinationInput.type(destination)
        NavigationPage.routeBtn.click()
        NavigationPage.currentLocationInput.type(currentLocation).type('{enter}')
        NavigationPage.carRoutesBtn.click()
    }

}

export const RoutePage = new Route();