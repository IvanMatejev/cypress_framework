import {Main} from "../../cypress/google_maps-pages/Main"

class ViaMichelin extends Main{
    allRoutesElements = "//*[contains(@class,'summary-container')]//li";
    currentLocationInputElement = "#departure";
    destinationInputElement = "#arrival";
    searchBtnElement = ".searchbox-submit-button";
    acceptCookiesElement = "#didomi-notice-agree-button";
    choosenRouteKmElement = ".highlight > .summary-details-item-distance > .summary-details-item-col-2"

    get allRoutes () {
        return cy.get(this.allRoutesElements)
    }

    get currentLocationInput () {
        return cy.get(this.currentLocationInputElement)
    }

    get dectinationInput () {
        return cy.get(this.destinationInputElement)
    }

    get searchBtn () {
        return cy.get(this.searchBtnElement)
    }

    get acceptCookies () {
        return cy.get(this.acceptCookiesElement)
    }

    get choosenRouteKm () {
        return cy.get()
    }
}

export const ViaMichelinPage = new ViaMichelin();