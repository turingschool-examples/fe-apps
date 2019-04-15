let commands = [{
    "definition": "Initialize a New Git Repository",
    "answer": "git init",
    "choices": ["git start", "git init", "git push"],
    "id": 1
    },
    {
      "definition": "Commit Tracked Files with Message",
      "answer": "git commit -m",
      "choices": ["git init", "git merge -m", "git commit"],
      "id": 2
    },
    {
      "definition": "See Working Version vs. Staged Version",
      "answer": "git diff",
      "choices": ["git remote", "git reset", "git diff"],
      "id": 3
    },
    {
      "definition": "Begin Tracking a File",
      "answer": "git add",
      "choices": ["git add", "git track", "git start"],
      "id": 4
    },
     {
      "definition": "Set User Name and Email in Configuration File",
      "answer": "git config",
      "choices": ["git set", "git config", "git init"],
      "id": 5
    },
    {
      "definition": "Copy a Repository from a Remote Source",
      "answer": "git clone",
      "choices": ["git init", "git remote", "git clone"],
      "id": 6
    },
    {
      "definition": "Return to Latest Commit Version",
      "answer": "git reset",
      "choices": ["git remote", "git reset", "git return"],
      "id": 7
    },
    {
      "definition": "Merge Two Branches",
      "answer": "git merge",
      "choices": ["git combine", "git add", "git merge"],
      "id": 8
    },
    {
      "definition": "Create and Switch to a New Branch",
      "answer": "git checkout -b",
      "choices": ["git checkout", "git checkout -b", "git switch"],
      "id": 9
    },
    {
      "definition": "Save Changes Without Commit",
      "answer": "git stash",
      "choices": ["git stash", "git merge", "git save"],
      "id": 10
    },
    {
      "definition": "Show All Working Branches",
      "answer": "git branch",
      "choices": ["git checkout", "git branch", "git all"],
      "id": 11
    },
    {
      "definition": "Switch to a Different Branch",
      "answer": "git checkout",
      "choices": ["git switch", "git branch", "git checkout"],
      "id": 12
    },
     {
      "definition": "Retrieve Latest Changes from Remote Source",
      "answer": "git pull",
      "choices": ["git pull", "git set", "git push"],
      "id": 13
    },
    {
      "definition": "Restore Saved Changes on Working Directory",
      "answer": "git stash pop",
      "choices": ["git stash", "git stash pop", "git clone"],
      "id": 14
    },
    {
      "definition": "Delete a Branch",
      "answer": "git branch -d",
      "choices": ["git delete", "git remove", "git branch -d"],
      "id": 15
    },
    {
      "definition": "Revert to Changes on a Specific Commit",
      "answer": "git revert [SHA1]",
      "choices": ["git recall [SHA1]", "git revert [SHA1]", "git merge [SHA1]"],
      "id": 16
    },
    {
      "definition": "View Commit History for Current Branch",
      "answer": "git log",
      "choices": [
        "git view",
        "git show",
        "git log"
      ],
      "id": 17
    },
    {
      "definition": "Discard Latest Commit",
      "answer": "git reset HEAD~",
      "choices": [
        "git undo HEAD~",
        "git discard HEAD~",
        "git reset HEAD~"
      ],
      "id": 18
    },
    {
      "definition": "Show Commit History for Another Working Branch",
      "answer": "git log [branch]",
      "choices": [
        "git show [branch]",
        "git log [branch]",
        "git history [branch]"
      ],
      "id": 19
    },
    {
      "definition": "Merge Onto Existing Branch",
      "answer": "git merge [name]",
      "choices": [
        "git save [name]",
        "git commit [name]",
        "git merge [name]"
      ],
      "id": 20
    },
    {
      "definition": "List Modified Files",
      "answer": "git status",
      "choices": [
        "git status",
        "git diff",
        "git files"
      ],
      "id": 21
    },
    {
      "definition": "Revert a File to the Last Commit",
      "answer": "git checkout [file-name]",
      "choices": [
        "git save [file-name]",
        "git checkout [file-name]",
        "git return [file-name]"
      ],
      "id": 22
    },
    {
      "definition": "Staged Version vs. Last Commit Version",
      "answer": "git diff --staged",
      "choices": [
        "git show --staged",
        "git diff --staged",
        "git compare --staged"
      ],
      "id": 23
    },
    {
      "definition": "Make Changes to Last Commit",
      "answer": "git commit --amend -m",
      "choices": [
        "git change --commit -m",
        "git updarte --change -m",
        "git commit --amend -m"
      ],
      "id": 24
      },
      {
        "definition": "View Single Line Log",
        "answer": "git log --oneline",
        "choices": [
          "git log --single",
          "git log --oneline",
          "git log --one"
        ],
        "id": 25
      },
      {
        "definition": "Undo Latest Merge",
        "answer": "git merge --abort",
        "choices": [
          "git merge --abort",
          "git merge --cancel",
          "git merge --undo"
        ],
        "id": 26
      },
      {
        "definition": "Reset Files to Last Commit and Discard Tracked File Changes",
        "answer": "git reset --hard",
        "choices": [
          "git reset --discard",
          "git reset --hard",
          "git reset --delete"
        ],
        "id": 27
      },
      {
        "definition": "Add a New Branch to Remote",
        "answer": "git push -u",
        "choices": [
          "git add -u",
          "git push -u",
          "git save -u"
        ],
        "id": 28
      },
      {
        "definition": "Show Changes Since Commit",
        "answer": "git status",
        "choices": [
          "git view",
          "git show",
          "git status"
        ],
        "id": 29
      },
      {
        "definition": "Remove a Tracked File from Index and Working Directory",
        "answer": "git rm [file-name]",
        "choices": [
          "git rm [file-name]",
          "git discard [file-name]",
          "git delete [file-name]"
        ],
        "id": 30
      }];

module.exports = {
  commands
}