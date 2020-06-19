import { Component, Prop } from '@stencil/core';
import { SeoTagsData, MetaTag, LinkTag } from '../../models/interfaces';

const linksRelUnique = [ 'canonical', 'icon', 'manifest' ];

@Component({
  tag: 'dlc-seo-tags'
})
export class DlcSeoTags {

  @Prop() data: SeoTagsData;

  insertSeoTags(){
    if( this.data ){
      this.insertDocumentTitle();
      for( let metaTag of this.data.meta ){
        this.insertMetaTag( metaTag );
      }
      for( let linkTag of this.data.links ){
        this.insertLink( linkTag );
      }
    }
  }

  insertDocumentTitle(){
    document.title = this.data.title;
  }

  insertMetaTag( tag: MetaTag ){
    let el = null;
    if( tag.name ){
      el = document.head.querySelector(`meta[name="${tag.name}"]`);
    } else{
      el = document.head.querySelector(`meta[property="${tag.property}"]`);
    }
    let isEl = !!el;
    if( !isEl ) el = document.createElement('meta');
    tag.name ? el.setAttribute('name', tag.name) : el.setAttribute('property', tag.property)
    el.setAttribute('content', tag.content);
    if( !isEl )document.head.appendChild(el);
  }

  insertLink( link: LinkTag ){
    const uniqueLink = linksRelUnique.includes( link.rel );
    let el;
    if( uniqueLink ){
      el = document.head.querySelector( `link[rel="${link.rel}"]` );
      if( !el ){
        el = document.createElement('link');
        el.setAttribute('rel', link.rel);
        el.setAttribute('href', link.href);
        document.head.appendChild(el);
      } else{
        el.setAttribute('href', link.href);
      }
    } else{
        el = document.createElement('link');
        el.setAttribute('rel', link.rel);
        el.setAttribute('href', link.href);
        document.head.appendChild(el);
    }
  }

  render() {
    this.insertSeoTags();
    return;
  }
}
