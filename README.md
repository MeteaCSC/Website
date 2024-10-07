# The Metea Valley CSC Website

The website where our club posts all sorts of important recources such as meeting plans and general club information for the world to see.

# Contributing

We are always happy for someone to share their ideas for how the website, but we just require 2 things

1) Keep it school appropriate 
2) Anything new that is added must pass the build tests before changes can be pushed to cloudflare (WIP)

If you are unfamiliar with version control I suggest you check out how to make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) and learn the basics of [git](https://www.w3schools.com/git/git_intro.asp?remote=github). Nequa also has a pretty good guide on their [repo](https://github.com/NVComputing/nvcomputingsite).
## Setup

#### GOOGLE IS YOUR FRIEND. If you ever have a question about something, someone online has probally answered it. Look farther than just the first search result.

Make sure that you have npm, git, and Node.js installed, otherwise, you won't be able to run the website or commit changes.

The setup for this project may be changing a lot, so it might be good to check this every so often until we get Cloudflare integration working.

Download the dependencies by running:

```bash
npm install
```

This should install the following thing:
* typescript   - While you can use js, the main part of the website in in ts
* ejs          - A lot like HTML but we can reuse components (ex. navbar, footer)
* express      - The server
* marked       - Markdown to HTML converter

Then to start the express server on port 7777 type of respective commands into the terminal:

Linux

```bash
make debug
```

Windows/MacOS
```bash
npx tsc
cp -R ./src/* ./build/
node build/app.js
```
Sorry windows users but you need to manualy type the commands found in `Makefile` (someone needs to fix the node commands so that the Cloudflare builds stop failing).

Now go to http://localhost:7777 in your favorite web brower to view the website!

## Project Structure

```bash

── src                 
   ├── app.ts           # Entry point of the project
   ├── pages            # Markdown resources
   ├── static           # To be loaded by the client
   │   ├── css          # CSS
   │   │   └── fonts    # Fonts
   │   ├── scripts      # Userland code
   │   └── images       # Image resources
   └── views            # EJS/HTML
       └── partials     # Site wide resources (ex navbar/footer)
```

## Adding new resources

### Calendar
In the root directory there should be a file called `dates.json` where you can add any new events. 

An example for how this should look is:
```json
{
    "date": "2024-09-12",
    "name": "Activity Fair",
    "timeStart": 0,         // Ignore this since its a whole day thing
    "timeEnd": 0            // Also the calendar doesn't support times (yet)
}
```

### Weekly slides

TODO

### Leaderboards

TODO