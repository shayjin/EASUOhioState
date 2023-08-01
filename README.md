## EASU @ The Ohio State University 
https://activities.osu.edu/involvement/student_organizations/find_a_student_org?i=bfa22847-f3f8-4260-815a-a748183c7b53&l=E&c=Columbus&page=0
## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

## Setup
- Download Git (https://git-scm.com/downloads)
- Download latest node.js (https://nodejs.org/en)
- Clone EASU repository
- npm install
- Download https://fontsfree.net/sf-pro-display-regular-font-download.html
- Place the file in the outtermost level (along with README, pakcage.json, etc.)
- npm start
- go to localhost:3000/EASU

## General Rules
- No Strict Rules on Naming
    There are strict no rules on naming images, files, and classes and I won't be picky, but just make sure they are reasonable. 
- Coding Conventions
    No strict rules on coding styles either. Idrc about efficiency (We'll make it efficient LATER when we have absolutely nothing to do). Just make sure it works lol. 
- No Backend / Fake DB
    We use a "fake" database, so that we don't have to pay lol. All DB "tables" are located under ./src/DB.
    For any long text entries, repetitions of HTML components, create a database table in here and import it. 
    Example: import Eboard from "./DB/Eboard";
- Adding Pictures
    Add pictures to ./src/sources.
    All lowercase.
    Replace spaces with underscores.
    File format doesn't matter.  
    Example: A picture related to EASU's Merch Event will be named "merch_event.png".
- Creating / Updating Features
    If it's a minor text fix, image fix, or adding a new event, just push to the master branch. 
    If it's more than a minor change, create a feature branch and make a pull request. 
- Adding Future Works
    If you see any areas of the website that need improvements, or find any bugs, add it to the section below. 

## Future Work 
### Check Constantly
- Reduce duplicate code and always use repetitions (for loops). 
- Put any long text entries into the DB. 

### High Priority
- Organizing Directories:
    Create a "components" folder.
    Create folders for all sub-pages (Events, Gallery, History, Navbar, Navbar2).
    Move .js files for all sub-pages into the corresponding folders.
    Fix imports.
- Organizing CSS Files:
    Finish "Organize Directories" first.
    Go to the "components" folder.
    Create CSS files for all sub-pages (Events, Gallery, History, Navbar, Navbar2) in the corresponding folders. 
    Copy and paste all necessary components from "App.css" to the corrseponing CSS files + remove components if they aren't used in "App.js".
- Organizing Image Files:
    All image files are dumped in the sources folder right now and it looks ugly. 
    Oranize them with folders (Events, Eboard, Logo, Extra, Old, Add more if needed). 
    Put all of the dog pictures in the Old folder. 
- Fixing the Email Buttons:
    In the eboard section, the email buttons are dummy buttons (they don't do anything). I just put it because it looks cool.
    I don't think anyone will want to email us... Should we get rid of it? Any other buttons to add? Any ideas? Idk what to do on this one. 
- Fixing indents. I made this by myself and rushed through it so it looks dirty.
    For .js files + .css files. 
- Add a DB Table for Sponsors, import, and make it reusable.
- Update the Sponsors section. Add Belle's Bread?


### Low Priority
- Fixing the NavBar + Auto Scrolling
    Right now it has all components on the main page, but when you go to different pages like Events, Gallery, or History, I made it so that "Navbar2" appears. So currently there are 2 navbars, which is kinda weird.
    Get rid of Navbar2 and make it so that after you go to a different page, when you want to come back to the main page, it auto-scrolls.
    For example, if you're on the Events page and click Sponsor on the navbar (assuming Navbar.js is the only navbar we're using), it will come back to the main page and automatically scroll down to the Sponsor section. 

### Very Low Priority 
- Upgrade to Next.js + TypeScript