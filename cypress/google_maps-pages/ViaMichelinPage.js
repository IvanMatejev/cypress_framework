class ViaMichelin{
    allRoutesElements = "//*[contains(@class,'summary-container')]//li";
    currentLocationInputElement = "#departure";
    destinationInputElement = "#arrival";
    searchBtnElement = ".searchbox-submit-button";
    acceptCookiesElement = ".didomi-continue-without-agreeing";
    choosenRouteKmElement = ".highlight > .summary-details-item-distance > .summary-details-item-col-2"

    get allRoutes () {
        return cy.get(this.allRoutesElements)
    }

    get currentLocationInput () {
        return cy.get(this.currentLocationInputElement)
    }

    get destinationInput () {
        return cy.get(this.destinationInputElement)
    }

    get searchBtn () {
        return cy.get(this.searchBtnElement)
    }

    get acceptCookies () {
        return cy.get(this.acceptCookiesElement)
    }

    get choosenRouteKm () {
        return cy.get(this.choosenRouteKm)
    }
}

export const ViaMichelinPage = new ViaMichelin();