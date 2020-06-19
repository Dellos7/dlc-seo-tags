import { MetaTag, SeoTagsData } from '../../models/interfaces';

export const metaDescriptionTag: MetaTag = {
    name: 'description',
    content: 'Page description'
};
export const metaOgTitleTag: MetaTag = {
    property: 'og:title',
    content: 'Page og description'
};
export const seoData: SeoTagsData = {
    title: 'Page title',
    meta: [ metaDescriptionTag, metaOgTitleTag ],
    links: [
        {
            rel: 'canonical',
            href: 'http://canonical-url/'
        }
    ]
};