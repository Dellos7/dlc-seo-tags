import { newE2EPage, E2EElement, E2EPage } from "@stencil/core/testing";
import { seoData, metaDescriptionTag, metaOgTitleTag } from './e2emocks';

describe("dlc-seo-tags", () => {
    
    describe("rendering", () => {
        let element: E2EElement;
        let page: E2EPage;
        let head: E2EElement;
        beforeEach(async () => {
            page = await newE2EPage();
            await page.setContent(`<dlc-seo-tags></dlc-seo-tags>`);
            element = await page.find("dlc-seo-tags");
            element.setProperty("data", seoData);
            head = await page.find('head');
        });

        it("exists head element", () => {
            expect(head).toBeTruthy();
        });

        it("creates the element", () => {
        expect(element).toBeTruthy();
        });

        it("sets data prop", async() => {
            await page.waitForChanges();
            expect(element.getProperty('data')).toBeTruthy();
        });

        it("sets title", async() => {
            await page.waitForChanges();
            let titleEl = await head.find('title');
            expect(titleEl).toBeTruthy();
            expect(titleEl).toEqualText(seoData.title);
        });

        it("sets meta description tag", async() => {
            await page.waitForChanges();
            let metaDescriptionEl = await head.find(`meta[name="description"]`);
            expect(metaDescriptionEl).toBeTruthy();
            expect(metaDescriptionEl.getAttribute('content')).toEqual(metaDescriptionTag.content);
        });

        it("sets meta og:title tag", async() => {
            await page.waitForChanges();
            let metaOgDescriptionEl = await head.find(`meta[property="og:title"]`);
            expect(metaOgDescriptionEl).toBeTruthy();
            expect(metaOgDescriptionEl.getAttribute('content')).toEqual(metaOgTitleTag.content);
        });
  });
});
