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

## Blog

To add one of your blog posts to the FCC MCR we have made it as simple as possible. Go into `content > blog` and you will see some already existing blog posts (these are good because it will give you an idea of how your blog post should be formatted). Firstly you will probably notice the naming convention, to keep eveything ordered and easy to find we are using the naming convention of `YYYY-MM-DD-blog-post-name`, which is very similar to how Jekyl suggests to format your folders.

We have put everything into folders because we want to make it easy for you to add images and any other media. Instead of having to search for an images folder you just pop everything in your blog post directory and link everything relative to your current directory.

Now within your folder you'll need to create your `index.md` file, this will be where you write your post. Before you start creating your post we need to add some frontmatter. Find an example frontmatter below

```md
---
title: An Example Post Title
date: 2019-09-17
author: Adam Collier
featuredImage: ./featured-image.png (optional but encouraged)
---
```

And after that you are ready to write/add your first blog post!

## Learning Resources

To add learning resources (which we hope you do), go into `content > learning resources` and there you will find a few different sections. You simply add your resource to one of the existing markdown files following the same formatting. Before you make a pull request please check that your link is working and make sure there are no spelling errors. If you see a spelling error while editing don't hesitate to fix it, it helps everyone in the community.

If you feel there should be another learning section created feel free to create your own and make a pul request. We will then either pull it straight in or discuss if it already fits into an existing space.
