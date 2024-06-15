import { Selector } from "testcafe";

export class Page {

    // Title
    title: Selector;

    // Footer
    linkedinBtn: Selector;

    constructor () {
        this.linkedinBtn = Selector('.bi-linkedin');
        this.title = Selector("title")
    }
}
