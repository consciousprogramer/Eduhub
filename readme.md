> # Eduhub

> Guys also try to find a good name for the startup 😀

##### *Dont't* ❗ touch the main branch, use dev branch for pull requests. main will run in production!

> *let me know about any mistakes here, in the issues section not on discord/watsapp,it will vanish there*

1. first of all fork this repo
2. clone it in your machine
3. run `git remote add upstream https://github.com/consciousprogramer/Eduhub.git` use this `remote` to keep your local repo in sync with original repo using `git fetch/pull`.
4. write code and use dev branch for pull requests 😎.

### Frontend
The frontend folder contains the nextjs project with redux boilerplate (plus some extra redux code) already setup, but you dont't need to bother about the redux code currently. we will mostly write code in pages and components folder initially.

how to run project locally, follow these steps
1. step one: `npm i`
1. step two: `npm run dev`
1. step three: open  `http://localhost:3000`

### nodeBackend
This folder contains the nodejs part of the backend.
I have already setup nodemon for automatic reloads.

> This will runs on PORT **8080** not *3000*

To run this, you will require mongodb atlas password,which i have provided on watsapp/discord. **please keep that a secret!**

create a `.env` file in nodeBackend folder and place the mongodb secret password there like this `PASSWORD=YOUR_PASSWORD_HERE`

1. step one: `npm i`
1. step two: `npm start`
1. step three: open  `http://localhost:8080`

*currently frontend and backend are not configured to talk to each other*

### pythonBackend
This is not configured currently, and hence will not run







--------------------------------------------
>**IGNORE THESE BElOW AS THE REPO IS NOW PUBLIC**

.[ If you are a verified collaborater ] check all created branches by `git branch -a` if branch with your name does not exist then create a new branch with your name by `git checkout -b YOUR_NEW_BRANCH_NAME`, now use this branch as your branch to pull request from to dev branch

.[ If you are a contributer] nothing special there proceed as normal fork, clone contribute 😎.