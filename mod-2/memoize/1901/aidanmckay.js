const commandQuestions = [{
    "gitCommand": "git status",
    "answers": [
        "list which (unstaged) files have changed", 
        "display whether or not git has been initiated", 
        "show the current status of your remote repository",
        "list which (staged) files have changed"
        ],
    "category": "Current State"
    
},
{
    "gitCommand": "git diff",
    "answers": [
        "list (unstaged) changes to files",
        "", 
        "list (staged) changes to files", 
        ""
        ],
    "category": "Current State"
},
{
    "gitCommand": "git log",
    "answers": [
        "list recent commits",
         "log all of the git commands available",
          "list the  ",
           ""
           ],
    "category": "Current State"
},
{
    "gitCommand": "git add",
    "answers": [
        "stage file",
        "change file through command line before adding to repo",
        "",
        ""
        ],
    "category": "Adding files to repo"
},
{
    "gitCommand": "git commit -m [message]",
    "answers": [
        "commit file",
        "",
        "",
        ""
        ],
    "category": "Adding files to repo"
},
{
    "gitCommand": "git commit -am [message]",
    "answers": [
        "add/commit all changes from all tracked files (no untracked files) in one go",
        "add/commit all changes from all tracked files (including untracked files) in one go",
        "",
        ""
        ],
    "category": "Adding files to repo"
},
{
    "gitCommand": "git reset [filename]",
    "answers": [
        "unstage file",
        "",
        "unstage file and revert recent changes",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git commit --amend -m [message]",
    "answers": [
        "alter the last commit (add any unstaged files, new comment)",
        "",
        "",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git reset --soft HEAD^",
    "answers": [
        "undo previous commit, put changes in staging",
        "",
        "",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git reset --hard HEAD^",
    "answers": [
        "undo last commit and all changes",
        "",
        "",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git reset -hard HEAD^^",
    "answers": [
        "undo the last two commits and all changes",
        "",
        "",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git checkout -- cats.html index.html",
    "answers": [
        "undo all changes that were made to the files cats.html AND index.html",
        "",
        "",
        ""
        ],
    "category": "Undoing previous actions"
},
{
    "gitCommand": "git remote add origin git@example.com:example/petshop.git",
    "answers": [
        "add a remote repository",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git push -u origin master",
    "answers": [
        "push current local repo to remote. -u sets it to default for the future",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git remote -v show",
    "answers": [
        "show the available remote repositories that have been added",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git pull",
    "answers": [
        "checkout and merge remote changes in one go",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git fetch origin",
    "answers": [
        "update the local cache of the remote repository",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git remote -v update",
    "answers": [
        "bring remote refs up to date (and -v show which branches were updated)",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git status -uno",
    "answers": [
        "will tell you whether the branch you are tracking is ahead, behind or has diverged. If it says nothing, the local and remote are the same",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git show-branch *master",
    "answers": [
        "will show you the commits in all of the branches whose names end in master (eg master and origin/master)",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git show remote origin",
    "answers": [
        "show local<->remote branch tracking and sync status",
        "",
        "",
        ""
        ],
    "category": "Remote repositories"
},
{
    "gitCommand": "git fetch origin",
    "answers": [
        "downloads commits, files, and refs from a remote repository into your local repo",
        "",
        "",
        ""],
    "category": "Examine Changes on Remote"
},
{
    "gitCommand": "git log HEAD...origin/master --oneline",
    "answers": [
        "shows commit messages",
        "",
        "",
        ""
        ],
    "category": "Examine Changes on Remote"
},
{
    "gitCommand": "git diff HEAD..origin/master",
    "answers": [
        "shows all changes on remote compared to local HEAD",
        "",
        "",
        ""],
    "category": "Examine Changes on Remote"
},
{
    "gitCommand": "git branch",
    "answers": [
        "list currently existing branches",
        "",
        "",
        ""
        ],
    "category": "Branch"
},
{
    "gitCommand": "git branch [branchname]",
    "answers": [
        "create new branch",
        "",
        "",
        ""
        ],
    "category": "Branch"
},
{
    "gitCommand": "git checkout -b [branchname]",
    "answers": [
        "create new branch and move to it",
        "",
        "",
        ""
        ],
    "category": "Branch"
},
{
    "gitCommand": "git checkout [branchname]",
    "answers": [
        "move to that branch",
        "",
        "",
        ""
        ],
    "category": "Branch"
},
{
    "gitCommand": "git branch -d [branchname]",
    "answers": [
        "remove branch", 
        "", 
        "", 
        ""
        ],
    "category": "Branch"
},
{
    "gitCommand": "git checkout master; git merge [branchname]",
    "answers": [
        "conditions for fast-forward merge - nothing new on master between branch start/end points", 
        "", 
        "", 
        ""
        ],
    "category": "Merging Branch"
},
{
    "gitCommand": "git add --patch (or -p for short)",
    "answers": [
        "goes through each change and asks you what you want to do",
        "", 
        "", 
        ""
        ],
    "category": "Cache/Staging Area"
},
{
    "gitCommand": "git add --interactive (or -i for short)",
    "answers": [
        "used to review and manipulate changes over whole repository", 
        "", 
        "", 
        ""
        ],
    "category": "Cache/Staging Area"
}]

export default commandQuestions;
