# Techsmiths website

## What is this?
This is the GitHub repository for the Techsmiths website.

## I just want to view the website
No problem. Just head over to https://www.techsmiths.uk

## I want to have a nose around to see how you made the site!
Great! Have a browse!

The website is a static site build using only vanilla HTML, CSS and Javascript.  
We wanted to show that you can make a nice site without using loads of complex frameworks.

However, we've used a few nice tools to help us:
* [Jekyll](https://jekyllrb.com)  
  This helps us reduce duplication in our HTML files.  
  
  For example, every page has the same header / nav bar.  
  In [index.html](index.html), we use the code...
  ```
  {% include header.html %}
  ```
  ...to include the whole of [_includes/header.html](_includes/header.html)  
  How handy!

* [Sass](https://sass-lang.com) (well, actually SCSS)  
  This helps reduce duplication in our CSS files.
  
  We love CSS.  
  But, the CSS file for our website grew to 1200 lines of code! 😱

  Sass helps us split this up into all the components that you can see in the [_sass](_sass) folder.  
  Thanks, Sass! 👍

* [GitHub Pages](https://pages.github.com)  
  Hosting a website can be a bit if a hassle, and can be costly.  
  For a simple, static website like techsmiths.uk, GitHub Pages make this very easy, and free!  
  You even get a nice, shiny HTTPS certificate from [Let's Encrypt](https://letsencrypt.org) 🔒

## Zero-to-hero
If you've been asked to make a change to the Techsmiths website, this is the bit for you to read...

1. Install [Ruby](https://www.ruby-lang.org/en)
   
   On Windows, download from here:  
   https://rubyinstaller.org/downloads  
   This page is a bit of a wall of text!  
   There's a section "Which version to download?" (top, right), which is helpful.

2. Install [Jekyll](https://jekyllrb.com)
   
   In a Terminal / Command Prompt, run ...
   ```
   gem install bundler jekyll
   ```

3. Clone this repo
   
   ```
   git clone git@github.com:Softwire/TechsmithsWebsite.git
   ```

4. Run Jekyll

   In this folder, run...
   ```
   ./jekyll.sh
   ```
   This will build the website and start a server at http://localhost:4000

   As you make changes to files, the site will be automatically re-built.  
   Just press refresh in your browser to see the changes.

5. Push your changes to GitHub

   The site will automatically be rebuilt and pushed to https://www.techsmiths.uk  
   You can see the status of the build / deployment at https://github.com/Softwire/TechsmithsWebsite/deployments