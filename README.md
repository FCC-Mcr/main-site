# FCC Manchester Website

A Gatsby based project for the FCC Manchester website. The aim of this repo is to encourage members of the FCC Manchester meetup to learn, contribute and pair programme to improve their skills, confidence and experimentation.

## Prerequisites

- node `>=10.0.0`
- npm `>=6.10.0`

## 🚀 Quick start

1.  **Clone the repo**

    ```
    $ git clone https://github.com/FCC-Mcr/main-site.git fcc-mcr-site
    $ cd fcc-mcr-site
    $ npm install
    ```

2.  **Start developing.**


    ```sh
    npm run develop
    ```

3.  **Start editing!**

    Your site is now running at `http://localhost:8000` !

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

# Contributing

The site has been designed in Figma which will drive the projects UI, you can view it [here](https://www.figma.com/file/NbQumQ0KnG2rX9o17PI0uUW2/Untitled?node-id=0%3A1). Feel free to explore the document and get familiar with how the site will eventually look and function. If you login you should be able to see the styles tab which may come in handy when writing some of the CSS.

### Pull Request Process

1. Fork the repo and create your branch from develop (see naming convention below).
2. Push your changes to your fork and create a pull request (Make sure to squash your commits).
3. Merge your code into master

Note: You may merge the Pull Request in once your code has been reviewed by one of the code owners or if you do not have permission to do that, you may request one of the code owners to merge it for you.

### Naming Convention

When branching off from develop please follow the convention of `component/feature_branch`.

Note: We are using underscores as seperators `(_)` and not dashes `(-)`.

## Conventional Commits

Within this project we are going to be using conventional commits spec. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

A commit should contain the following structural elements, to communicate intent:

1. fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
2. feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
3. BREAKING CHANGE: a commit that has the text BREAKING CHANGE: at the beginning of its optional body or footer section introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
4. Others: commit types other than fix: and feat: are allowed, for example @commitlint/config-conventional (based on the Angular convention) recommends chore:, docs:, style:, refactor:, perf:, test:, and others.

We also recommend improvement for commits that improve a current implementation without adding a new feature or fixing a bug. Notice these types are not mandated by the conventional commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE).
A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., feat(parser): add ability to parse arrays.

For some examples see [here](https://www.conventionalcommits.org/en/v1.0.0-beta.4/#examples)
