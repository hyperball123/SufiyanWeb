# Git commands
 ## for first time users
    * If you want to check user name and email - (git config --list)

    <!-- using global we r saying we and to use these details everywhere -->
    * git config --global userr.name "Enter your user name"
    * git config --global user.email "github emailId"
    * git init
    
## rest of users(Not first timers)
    * git init ->
    for creating repo in that folder for which you are tracking

*git log - to check the commits and history

##
1.WORKING DIRECTORY -> PLACE WHERE ALL FILES AND FOLDERS EXISTS
2.STAGING AREA -> AREA WHERE U ADD YOUR FILES AND FOLDERS TO (STAGE) TO BE COMMITED LATER
3.GIT REPOSITORIES -> SAVED IN A REPO

After doing that all your files in that folder will have a mark "U" known as untracked

## to push to a repo
git remote add origin https://github.com/hyperball123/SufiyanWeb.git
git branch -M main
git push -u origin main
