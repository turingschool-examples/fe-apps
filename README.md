# Student Instructions

Begin by **forking** this repo, then cloning down your forked copy to your machine. `cd` into the project directory from your terminal.


## Whateverly

1) Create a new file at: `/mod-2/whateverly/<yourCohortNumber>/<yourGitHubUsername>.js`

    * The project and cohort directories have already been created for you, double check that you are adding your new file to this pre-existing directory
    * Your GitHub username is the last part of the URL when you go to your profile at `https://github.com/<yourUserName>` e.g. my username would be [brittanystoroz](https://github.com/brittanystoroz)

2) Your file should include 2 datasets, both assigned to variables that you export at the bottom of the file. Follow the structure of this [sample file](https://github.com/turingschool-examples/fe-apps/blob/master/mod-2/whateverly/1811/sample.js) to create yours. **Do not overwrite this file.**

3) Commit and push your changes. Open a pull request.




## Memoize

1) Create a new file at: `/mod-2/memoize/<yourCohortNumber>/<yourGitHubUsername>.js`

    * The project and cohort directories have already been created for you, double check that you are adding your new file to this pre-existing directory
    * Your GitHub username is the last part of the URL when you go to your profile at `https://github.com/<yourUserName>` e.g. my username would be [brittanystoroz](https://github.com/brittanystoroz)

2) Your file should include one or two datasets, assigned to variables that you export at the bottom of the file. Follow the structure of this [sample file](https://github.com/turingschool-examples/fe-apps/blob/master/mod-2/whateverly/1811/sample.js) to create yours. **Do not overwrite this file.**

3) Commit and push your changes. Open a pull request.





# Instructor Instructions

* Add a cohort directory for the current project
* Merge student PRs for adding their datasets
* Pull down all changes
* Double-check that no syntax errors have been added by running the local server with `node index.js` *(Assuming you get a message that says the server is running on localhost:3000, everything is fine. If the server doesn't start up, you'll get some sort of error message.)*
* New endpoints will automatically be generated with the following pattern: `localhost:3000/api/v1/projectName/cohortNumber/studentGitHubUserName/dataVariable` e.g. `localhost:3000/api/v1/whateverly/1811/lizAsbell/smoothies`



## Heroku Setup & Deployment

* Go to heroku.com and login to the turing instructors account (credentials in staff channel posted by Katelyn)
* Click on the `fe-apps` project > Access
* Add yourself as a collaborator with your personal Heroku account
* Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) if you don't have it yet, and login with your personal Heroku credentials from your terminal with `heroku login`
* Add a Heroku remote to your local copy of `fe-apps` with `heroku git:remote -a fe-apps`
* Deploy to Heroku with `git push heroku master`










