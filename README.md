react isomorphic static site generator boilerplate
===================

Yet another isomorphic react boilerplate. This one does not require node on server. Instead, it generates static HTML plus webpacked javascript that can be uploaded to any web server, is super fast on first HTTP GET and is SEO friendly, while still keeping the advantages of React development and lightning fast client side page transitions on subsequent user clicks with no more HTTP GETs.

Suitable for small to medium sized sites such as a marketing sites. Big sites with lots of content may need to be refactored to not load all content in the javascript webpack bundle.


Installation & Usage
-------------------
```
git clone https://github.com/GiovanniL19/react-isomorphic-static-site-generator-boilerplate.git
cd react-isomorphic-static-site-generator-boilerplate
yarn install
yarn serve
```

Then to generate the site run `yarn compile`. Or to generate the site and start development web server run `yarn start` and browse to [http://localhost:8080](http://localhost:8080/).

If the generated site will be hosted on web server root (e.g. not on GitHub where it is hosted at /project-name/ ) modify source files and remove the intentionally long project name from all places (including `weppack.config.js` and `package.json`).


Dependencies
-------------------
* React & react-router
* webpack 2.0 & static-site-generator-webpack-plugin
* babel (can be removed if ES6 not needed)


Non-Dependencies
-------------------
Generates static HTML code that can be uploaded to any web server, no node runtime on server needed.

TODO: and wishes
-------------------
* make react and react-router external dependencies instead of parts of the webpack bundle (all attempts to do so with externals directive failed, pull requests welcomed)
* auto generate gh-pages branch from source (currently the example generates all pages to public subdirectory, from there its subdirectory with project name is manually git committed to the gh-pages branch of this project)