import { Page } from "../base-pages/base-page";

const po = new Page(); 

fixture `Title tests`


    test(`Assert that page has correct title`, async t => {
        await t.expect(po.title.innerText).eql('Courses for you')
    });


