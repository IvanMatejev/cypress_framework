class Main{
    header = ".main-header";
    user = "#userName-value";

    get headerElement(){
        return cy.get(this.header);
    }

    get userElement(){
        return cy.get(this.user);
    }
}
export {Main};