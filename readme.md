![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

![.github/workflows/publish-to-npm.yml](https://github.com/Dellos7/dlc-seo-tags/workflows/Test%20and%20NPM%20publish/badge.svg)

# dlc-seo-tags

## Install

```bash
npm i dlc-seo-tags --save
```

## Use in a Stencil app

Import the component in `src/index.ts`:

```bash
// ...
import 'dlc-seo-tags';
```

**Usage**. Example in a component acting as a page:

```tsx
import { Component, h } from '@stencil/core';
import { SeoTagsData } from 'dlc-seo-tags';

const seoData: SeoTagsData = {
  title: 'About page',
  meta: [
    { name: 'description', 'Description of this page' },
    { property: 'og:description', content: 'Description of this page' },
    { property: 'og:image', content: '/any/image/path.jpg' },
    { property: 'og:url', content: `${window.location.origin}${window.location.pathname}` },
    { name: 'twitter:title', 'About page' },
    { name: 'twitter:description', 'Description of this page' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@_dlopezcast' },
    { name: 'twitter:creator', content: '@_dlopezcast' },
  ],
  links: [
    { rel: 'canonical', href: `${window.location.origin}${window.location.pathname}` }
  ]
};

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})
export class AboutPage {

  render() {
    return (
      <div class="about-page">
        <dlc-seo-tags data={seoData}></dlc-seo-tags>
        <header>
          <h1>Hey, my name is David!</h1>
        </header>
        <main>
          <p>Description of myself ;)</p>
        </main>
      </div>
    );
  }
}

```


## Publish package notes

```bash
git config alias.tag-release '!git tag release-$(cat package.json | grep version | head -1 | awk -F: "{ print $2 }" | sed "s/[\",]//g" | tr -d "[[:space:]]")-$(cat package.json | grep name | head -1 | awk -F: "{ print $2 }" | sed "s/[\",]//g" | tr -d "[[:space:]]")'
```

```bash
# ... commit
git tag-release
git push origin master --tags
```