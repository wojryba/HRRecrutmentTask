# Notetaker - Coding Test

This is an example Phoenix project which has been setup as a "close to real world" coding task. It may well be one of the most over-engineered notes app that has ever been created, but let's not worry about who thought this would be a good idea.

The goal of this exercise is to give you an opportunity to demonstrate some knowledge/ability across an array of technologies, both frontend and backend, using a similar tech stack to what we use at HR GO Labs. This includes:

* Phoenix/elixir
* Graphql api with absinthe
* React frontend
* Tailwind css
* Postgres database
* Docker

## Prerequisites

You'll need to have `docker` and `docker-compose` installed on your machine, so you'll be able to build the docker image and run it with the Postgres db from a single command.

## Getting Started

Clone the repo, and then from the root of the project run `docker-compose up` to build/launch the project. You should then be able to go to [http://localhost:4000]() in your browser to see the app load.

If you make any changes to files outside of `./lib` and `./assets` you'll need to run `docker-compose build && docker-compose up` to rebuild the development docker image.

FYI even after the server has started webpack takes a while to compile everything on the page - refresh a couple of times if it looks weird!



If all went well you should see something like this:

 ![screenshot](https://raw.githubusercontent.com/spacebetween/imagehost/master/images/image.j0qza2n9mkm.png)

## Overview

The `/notes` url embeds a react app onto the page (this is loaded from `/assets/js/notesApp.js`). There is wildcard route matching so any sub paths of `/notes/*` will also render the same page and load the react app, so react should be in charge of any routing from there.

The react app is fetching data from a graphql endpoint at http://localhost:4000/graphql. (There is also the graphiql playground setup for interactive exploration of the api at http://localhost:4000/graphiql). It fetches all the notes from the API and displays them in a list. The code for the graphql schema is at `./lib/notetaker_web/schema.ex`. 

## Tasks to complete

Right now it is very much a read only list. So it would be good to create new notes. Could you:

1. Setup a new view within the react app that renders a form to create a new note. Title and note body will be required fields. Connect this up to the "Create New Note" button on the list page (if the create page can have a different url that would be great.)
2. When submitting the form it will need to call a new graphql mutation to create a new note. This will need to be setup within the react app and in the backend schema. The schema will need a new resolver so that the new note posted through is saved into the database.
3. When this has been inserted it should return to the list page. It would be good to configure Apollo to update the frontend cache, so it doesn't have to refetch all the notes to display the new one that was just added.

If you speed through the above and are then thinking "Is that it?" - please feel free to expand the demo app in any other ways you see fit that time will allow. Some suggestions would be:

* Allow editing/deleting the existing notes
* Accept markdown as the note body and render this as html on the list page
* Add a tags field, and enter tags when creating a note. Could then filter the view so you are only displaying 1 tag at a time. 
* Request the browser location on the Create page and store the location when a note is created.
* Anything else that you think would be fun.

## Get out of jail free cards

If running through the tasks you hit any blockers and are worried you may not be able to complete things, please feel free to think outside the box in order to achieve the functionality required. This could be:

* Problems with the graphql api? Creating a rest API in phoenix and hitting this instead from react would be fine. 
* React issues - server rendered html can be used so you don't need to worry about the javascript SPA.
* Phoenix headaches - if getting phoenix working is causing too much pain then setting up a different backend could be a plan B.

The main thing is we'll want to have a conversation at the end about how it went, what you learnt etc, (and whether someone using your app could create a note!)



