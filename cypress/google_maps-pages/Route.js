import { GoogleMapsPage } from "./GoogleMaps";

class Route{
        longestRoute (routes) {
        
        let maxRoute= -1;
        let maxText= -1;
        let maxRouteElement=null;
        
        routes.each(($el)=>{
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

    chooseADestination ( page , destination ) {
        page.type(destination)
        
    }

    chooseACurrentLocation ( page,currentLocation) {
        page.type(currentLocation)
    }

}

export const RoutePage = new Route();