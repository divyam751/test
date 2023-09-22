# Masai job Portal 📈
### JS-VITE-WITH-MOCK-SERVER

Please do NOT use VSCode live-server. It will not work. Use the npm commands suggested to you here.

## Installation
```
npm install --engine-strict
```
## Start only the Backend server
```
npm run server
```
## Start only Frontend server
```
npm run start
```
## Start both BE & FE in a single command
```
npm run watch
```
# Important files
```
├── index.html
├── scripts
│   └── index.js
└── styles
    └── style.css
```
## Maximum Marks - 22

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- The Submission should not contain spaces; for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

## Rubrics
```
✅ able to submit the app - 1 mark ( minimum score )

### fetching the initial data
---------------------------------------
✅ Shows the correct initial data - 3 marks 

### add , delete , and update a job
-----------------------------------------
✅ Able to add new jobs - 2 marks
✅ Check by adding a new job the pagination button should increased - 1 mark
✅ Able to delete a job - 2 marks
✅ Able to edit all fields of the jobs - 2 marks
✅ Able to edit the package - 1 mark

### sorting and filtering
----------------------------
✅ Low-to-high Sorts as expected - 1 mark
✅ high-to-low Sorts as expected - 1 mark
✅ Filters as expected - 1 mark

### pagination functionlity
------------------------------
✅ Low-to-high Sorts as expected with pagination - 1 mark
✅ high-to-low Sorts as expected with pagination - 1 mark
✅ Filters as expected with pagination - 1 mark
✅ Check for pagination functionality - 2 mark

### search functionality
---------------------------
✅ Able to search by role - 1 mark
✅ Able to search by company name - 1 mark

```
### You haven't been taught Cypress to run the test cases locally; you can see the passed/ failed test cases and test errors on CP itself.

## Some Rules to follow:-

- Before writing a single line of code, please read the problem statement very carefully.
- <span style=" color: red">Don't change the already given IDs or classes.</span>
- If you don't follow these rules, you might not get any marks even if you do everything correctly.

## Problem statements

- Use `fetch` for API requests 
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### <h1 style="color:#215dc8">index page</h1>

Your task is to build ***`Masai job Portal`*** app where different jobs are available, and you have to perform all `CURD` operations here, able to create, update, Read, and Delete jobs and also implement search functionality. Navbar has already been created no need to build it again.

<h4 style="color:#215dc8">
Problem 1. List of jobs on page load [3]
</h4>

On page `load`, a list of all `jobs` should be shown in the  `div#data-list-wrapper`. 

Expected markup (Jobs card list):
<!-- ![landingpage markup]() -->
<figure>
<img src="https://i.imgur.com/bofj9ZP.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>landingpage markup</b></figcaption>
</figure>

- The `div.card` is a card appended to the div with `div.card-list`.
- In the above markup you can see only 5 cards are present on the first page and each page limit is 5.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

Expected markup (example, single card div inside card-list div): 
<!-- ![jobMarkUp]() -->

<figure>
<img src="https://i.imgur.com/gjXoYR9.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single jobs card Markup</b></figcaption>
</figure>

- **Markup - elements, classes & IDs should be identical to the above screenshot.**

- The **card** with `div.card` and `data-id={id of div}` having two child div 
  1. The `div.card-img` in this image of the jobs is present.
  2. The `div.card-body` in this 
    -  h5 tag with `h5.card-role` **with role of job**.
    - p tag with `p.card-companyName` with the *companyName* of the job
    - p tag with `p.card-experienceRequired` with the *experienceRequired* of the job
    - p tag with `p.card-employmentType` with the *employmentType* of a jobs
    - p tag with `p.card-packageCTC` with the *packageCTC* of the job
    - p tag with `p.card-keySkills` with the *keySkills* of a jobs
    - anchor tag with `a.card-link` with *`Edit`* text
        -  class= card-link
        -  href=#
        -  data-id= id of the jobs 
    - button with `button.card-button` with *`Delete`* text 
        -  class= card-button
        -  data-id= id of the jobs

| Sr. | tag    | class                                                      | text/src                      |
| --- | ------ | ---------------------------------------------------------- | ----------------------------- |
| 1.  | div    | <span style="color:#215dc8">card-img</span>                | add `img` tag inside this div |
| 1.  | img    | -                                                          | image of the job              |
| 2.  | h5     | <span style="color:#215dc8">card-role</span>               | the `role` of the job         |
| 3.  | p      | <span style="color:#215dc8">card-companyName</span>        | `companyName` of job          |
| 4.  | p      | <span style="color:#215dc8">card-experienceRequired</span> | `experienceRequired` of job   |
| 5.  | p      | <span style="color:#215dc8">card-employmentType</span>     | `employmentType` of job       |
| 6.  | p      | <span style="color:#215dc8">card-packageCTC</span>         | `packageCTC` of job           |
| 7.  | p      | <span style="color:#215dc8">card-keySkills</span>          | `keySkills` of job            |
| 8.  | a      | <span style="color:#215dc8">card-link</span>               | `Edit` text                   |
|     |        | data-id= id of the job                                     |                               |
| 9.  | button | <span style="color:#215dc8">card-button</span>             | `Delete` text                 |
|     |        | data-id= id of the job                                     |                               |


- Here, *`data-id`* is used to catch the `id` of the jobs. You can use a dataset.id refer to [working with dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

Expected UI (example card):
<!-- ![jobUI]() -->
<figure>
<img src="https://i.imgur.com/qjGUtaN.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Single jobs card UI</b></figcaption>
</figure>

Data mapping:
<!-- ![dataMarkUp]() -->
<figure>
<img src="https://i.imgur.com/Zmur8L4.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>dataMarkUp
</b></figcaption>
</figure>

- The data should be fetched from `${baseServerURL}/jobs`
- The jobs should be shown on page `load`

<h4 style="color:#215dc8">
Problem 2. Pagination [2]
</h4>

<figure>
<img src="https://i.imgur.com/0k9cci4.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Pagination</b></figcaption>
</figure>

- The buttons for pagination should be appended inside the `div` with `id=pagination-wrapper"` which is already mentioned in the boilerplate
- add _limit = 5 i.e. on each page `5` jobs should be there
- 10 buttons stating should be there (we have total 50 objects in db.json file and using limit=5 need to create 10 buttons)
- pagination should be dynamic as when we *add* a new job the pagination button should increased. `(i.e from 10 to 11)`
- **Hint** : - `?_page={pagenumber}&_limit=5`
- Note:- name the class names and data-testid's as mentioned in the image provided above(markup)

<h4 style="color:#215dc8">
Problem 3. Ability to add new Jobs [2]
</h4>

<!-- ![add jobs ] -->
<figure>
<img src="https://i.imgur.com/xdJOK7M.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Add new jobs
</b></figcaption>
</figure>

- make a 'POST' request at ```${baseServerURL}/jobs```
- *make a 'GET' request after the post to get updated data at ```${baseServerURL}/jobs```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.
- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`1`&_limit=5)**</span>

<!-- ![added jobs UI]() -->

<figure>
<img src="https://i.imgur.com/fM8gtjp.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>new jobs UI
</b></figcaption>
</figure>

<h4 style="color:#215dc8">
Problem 4. Ability to delete a Job [2]
</h4>

- In each job, the card adds a button `Delete` with `button.card-button` On clicking this button particular jobs must be removed from DOM as well as `db.json`.

- make a 'DELETE' request at ```${baseServerURL}/jobs/{jobId}```
- *make a 'GET' request after deleting to get updated data at ```${baseServerURL}/jobs```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 5. Ability to update all the fields of jobs [2]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)
- Add an event listener with ```click``` to anchor tag with class `.card-link` use preventDefault.
- The page should not reload on the click of the Edit link `.card-link`.

1. To update all fields 

- `#update-jobs-id`  should be populated with the `id` of the jobs 
- `#update-jobs-role` should be populated with the `role` of the jobs
- `#update-jobs-image` should be populated with the `image` of the jobs
- `#update-jobs-companyName` should be populated with the `companyName` of the jobs
- `#update-jobs-experienceRequired` should be populated with the `experienceRequired` of the jobs
- `#update-jobs-employmentType` should be populated with the `employmentType` of the jobs
- `#update-jobs-packageCTC` should be populated with the `packageCTC` of the jobs
- `#update-jobs-keySkills` should be populated with the `keySkills` of the jobs

<figure>
<img src="https://i.imgur.com/pXa40ge.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Update all fields</b></figcaption>
</figure>

- make a 'PATCH' request at ```${baseServerURL}/jobs/${jobId}``` to update *role, image,companyName,experienceRequired, employmentType,packageCTC, and keySkills*
- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/jobs```*
- **` the page must not reload the list must update`**  otherwise you will lose the marks.

<h4 style="color:#215dc8">
Problem 6. Ability to update only the package [1]
</h4>

- Able to populate the following input on edit link click.( *Hint* - use preventDefault() to prevent the default behaviour of `<a>` tag of redirecting)

- `#update-package-job-id` should be populated with the `id` of the job
- `#update-package-job-package` should be populated with the `package` of the job

- Once the edit inputs are populated, if the user clicks the `#update-package-job` button. 
- the package of that particular job should update based on the value entered in the `#update-package-job-package`. 
- The package of the job in the list should update without any page *reloads*.

- - **` the page must not reload the list must update`**  otherwise you will lose the marks.

- make a 'PATCH' request at ```${baseServerURL}/jobs/${jobId}```

- *make a 'GET' request after the patch to get updated data at ```${baseServerURL}/jobs```*

<h4 style="color:#215dc8">
Problem 7. Sorting Jobs Based on 
</h4>

- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<figure>
<img src="https://i.imgur.com/t1AKmjU.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>sort Low to high</b></figcaption>
</figure>


With the click of the button `#sort-low-to-high`, the jobs list should be sorted in ascending order based on their *package*.

With the click of the button `#sort-high-to-low`, the jobs list should be sorted in descending order based on their *package*.

You may use any approach of your choice for sorting. You may sort the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please use the [JSON Server documentation](https://github.com/typicode/json-server).

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 8. Filtering Jobs based on the companyName [1]
</h4>
 You have to create three types of filters as

 1. ***Google***
 2. ***Microsoft***
 3. ***capgemini***
- Filtering for `Google` UI:
<!-- ![filter Google] -->

<figure>
<img src="https://i.imgur.com/BcZLM5c.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Sort Based On publish date Newest first  </b></figcaption>
</figure>

When the button `#filter-Google` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`Google`***.

When the button `#filter-Microsoft` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`Microsoft`***.

When the button `#filter-capgemini` is clicked, the jobs list is expected to be filtered. It should only show the jobs whose `companyName` is ***`capgemini`***.

You may use any approach of your choice for filtering. You may filter the available data, or you may make a new fetch request to the server and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server).


- <span style=" color: green">No need to complete functionality for simultaneously working of filter and sorting operations</span>

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

<h4 style="color:#215dc8">
Problem 9. Search by role/company name
</h4>

- To implement search functionality on top there is a select tag with *options* to search by companyName  

1. ***`role`***
<!-- ![search by role] -->

<figure>
<img src="https://i.imgur.com/JkNfl64.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Search by role and `QA tester` as search query</b></figcaption>
</figure>

 2. ***`companyName`***

A select tag (`select#search-by-select`) with options as
  1. role
  2. companyName is already created
Every time you have to select eighter option, next to it there is an input box (`input#search-by-input`) You have to enter the role/companyName name if it is included in the role/companyName's name respectively show those job only after clicking a search button(`button#search-by-button`)

You may use any approach of your choice for search functionality. You may use the available data or you may make a new fetch request to the server (with params as ***`?${role/companyNmae}_like=${role of job/companyName of job}`***) and update the list. In case you want to fetch data, please refer to the [JSON Server documentation](https://github.com/typicode/json-server). 


***Note***:- Get the updated data from API after the POST, PATCH, or DELETE request is done.

<figure>
<img src="https://i.imgur.com/rsMph70.png"  style=" border-radius: 5px;" width="100%"/>
<figcaption align = "center"><b>Problem is tetsed on CP</b></figcaption>
</figure>

- irrespective of `sorting`, `filtering`, and `searching` for every fetch request limit your data to 5 per page <span style=" color: red">**(Hint: _page=`<pagenumber>`&_limit=5)**</span>

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes to respond,
- so we request you to read the problem carefully and debug it before itself
- We also request you not just submit it last minute
- Try to keep one submission at a time
- Use `${baseServerURL}/what-ever-route` for server url & not `localhost:9090/what-ever-route` in your solution. Failing to do so may cause all the tests to fail.
