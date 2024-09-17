# The Metea Valley CSC Website

The website where our club posts all sorts of important recources such as meeting plans and general club information for the world to see.

# Contributing

First make sure that you have npm, git, and Node.js installed, otherwise, you won't be able to run the website or commit changes.
You may also need to look into how to make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

## Setup

Download the dependencies by running:

```bash
npm install
```

Then to start the express server on port 7777 run:

```bash
make debug
```

If you are windows just manualy type the commands found in `Makefile`

You can now go to http://localhost:7777 in your favorite web brower to view the website

## Project Structure

```bash

── src                 # Main project folder
   ├── pages           # Markdown resources
   ├── static          # Styling files
   │   ├── css
   │   │   └── fonts   # Fonts
   │   └── images         # Image resources
   │       └── favicon-32x32.png
   └── views           # EJS
       └── partials    # Contains site wide resources
```

## Adding new resources

TODO
