class GoogleMaps{

    destinationInputElement = "#searchboxinput";
    currentLocationInputElement = "#sb_ifc50 > .tactile-searchbox-input";
    routeBtnElement = ".eYqqWd";
    carRoutesBtnElement = '[data-travel_mode="0"] > button > .OzmNAc';
    allRoutesElements = "//*[contains(@class,'tUEI8e')]/div";
    choosenRouteKmElement = "//*[contains(@class,'hPzYFf')]/span";
    ourRouteElement = "#section-directions-trip-1 > .MespJc";



    get dectinationInput () {
        return cy.get(this.destinationInputElement)
    }

    get routeBtn () {
        return cy.get(this.routeBtnElement)
    }

    get currentLocationInput () {
        return cy.get(this.currentLocationInputElement)
    }

    get carRoutesBtn () {
        return cy.get(this.carRoutesBtnElement)
    }

    get allRoutes () {
        return cy.xpath(this.allRoutesElements);
    }

    get choosenRouteKm () {
        return cy.xpath(this.choosenRouteKmElement)
    }

    get ourRoute () {
        return cy.get(this.ourRouteElement);
    }

}

export const GoogleMapsPage = new GoogleMaps();