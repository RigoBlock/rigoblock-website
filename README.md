# Rigoblock website readme

## Install, Development and Production Building

`bundle install` to install gems from Gemfile  
 `bundle exec jekyll serve` to start a development server with live reload on http:\\localhost:4000  
 `bundle exec jekyll build` to build the website for production use.

The website will be built in `_site` folder.

## `_config.yml`

This is the base config file for jekyll.
In this file you have to change the value of:

- `title`
- `email`
- `description`
- `baseurl`
- `url`
- `twitter_username`
- `github_username`
- `facebook_username`
- `linkedin_username`
- `discord_username`
- `telegram_link`

## `_data\roadmap`

This file manages the element of the section `Roadmap`
It is a YAML list. This is an example object:

```
  - date: 'February 2016'
    content: 'Concept<br />Originated'
```

## `_data\partners`

This file manages the element of the section `Partners - Partners`
It is a YAML list. This is an example object:

```
  - image: 'ethfinex.png'
    link: 'http://www.google.com'
```

## `_data\building`

This file manages the element of the section `Partners - Building with`
It is a YAML list. This is an example object:

```
  - image: '0xprotocol.png'
    link: 'http://www.google.com'
```

## `_data\team`

This file manages the element of the section `Team`
This file contains two YAML lists: `members` and `advisors`.
This is an example object for `members` list (image, linkedin, github and twitter key are not mandatory):

```
  - name: "Gabriele Rigo"
    title: "Smart Contract R&D "
    bio: "Previously Treasurer @1BN+ USD Global Macro Hedge Fund and Head of Investment @25BN+ USD Asset Management Company. Msc Finance from Bocconi & HSG."
    image: "rigo.png"
    linkedin: 'https://linkedin.com'
    github: 'https://github.com'
    twitter: 'https://twitter.com'
```

This is an example object for `advisors` list:

```
  - name: "Mikael Olofsson"
    title: "Investor and Advisor"
    bio: "Co-founder iXledger Technologies. Managing Partner Polymbios Capital."
```

## `_project` folder

This folder contains the slide for the `Project` section of the website.
Each file produce a subsection. On the top of file it is present an object
that configures the slide according to layout.

```
  ---

  title: "What is Rigoblock?"
  subtitle: "01. What"
  video_link: https://www.youtube.com/watch?v=ZW6Mus9XBU8
  slug: "project-01-what"
  animation: true

  ---
```

The rest of file composes the text part of the subsection. Markdown or HTML
are allowed.

## `_press` folder

This folder contains the slide for the `Press` section of the website.
Each file produce a press element. On the top of file it is present an object
that configures the press object. Here is an example (`pubdate` will be parsed
automatically):

```
  ---
  title: Fintastico
  pubdate: 2017/11/18
  link: http://www.google.com
  ---
```

## `_positions` folder

This folder contains the slide for the `Open Positions` section of the website.
Each file produce a position element. On the top of file it is present an object
that configures the position object. Here is an example:

---

title: Front end<br />Developer

---

The rest of file composes the text part of the position element. Markdown or HTML
are allowed.

## Static assets

Static assets can be copied in `assets\downloads` and called with `asset`: template tag whthout specifying the complete path.

```
  {% asset 'filename.ext' %}
```

Links can also be created without the asset plugin:

```
  {{site.url}}/assets/downloads/white-paper.pdf
```

PDF files are copied in `assets\pdfs`

```
  {% asset 'RigoBlockPaper.pdf' @path %}
```

will produce the complete path.
This produces a hashed link which is not good in case of backlinks to the paper
