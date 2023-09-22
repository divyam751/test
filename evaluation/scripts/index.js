// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const jobURL = `${baseServerURL}/jobs`;
let mainSection = document.getElementById("data-list-wrapper");

let paginationWrapper = document.getElementById("pagination-wrapper");

// job
let jobRoleInput = document.getElementById("job-role");
let jobImageInput = document.getElementById("job-image");
let jobCompanyNameInput = document.getElementById("job-companyName");
let jobExperienceRequiredInput = document.getElementById(
  "job-experienceRequired",
);
let jobEmploymentTypeInput = document.getElementById("job-employmentType");
let jobpackageCTCInput = document.getElementById("job-packageCTC");
let jobKeySkillsInput = document.getElementById("job-keySkills");
let jobCreateBtn = document.getElementById("add-job");

// Update job
let updateJobIdInput = document.getElementById("update-job-id");
let updateJobRoleInput = document.getElementById("update-job-role");
let updateJobImageInput = document.getElementById("update-job-image");
let updateJobCompanyNameInput = document.getElementById(
  "update-job-companyName",
);
let updateJobExperienceRequiredInput = document.getElementById(
  "update-job-experienceRequired",
);
let updateJobEmploymentTypeInput = document.getElementById(
  "update-job-employmentType",
);
let updateJobPackageCTCInput = document.getElementById("update-job-packageCTC");
let updateJobKeySkillsInput = document.getElementById("update-job-keySkills");
let updateJobBtn = document.getElementById("update-job");

//Update packageCTC
let updatePackageJobId = document.getElementById("update-package-job-id");
let updatePackageJobPackage = document.getElementById(
  "update-package-job-package",
);
let updatePackageJobBtn = document.getElementById("update-package-job");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterGoogle = document.getElementById("filter-Google");
let filterMicrosoft = document.getElementById("filter-Microsoft");
let filtercapgemini = document.getElementById("filter-capgemini");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Jobs Data
let jobsData = [];
let queryParamString = null;
let pageNumber = 1;

// Function to create a single job card HTML markup
function createJobCard(job) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("data-id", job.id);

  const cardImg = document.createElement("div");
  cardImg.className = "card-img";
  const img = document.createElement("img");
  img.src = job.image;
  cardImg.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const role = document.createElement("h5");
  role.className = "card-role";
  role.textContent = job.role;

  const companyName = document.createElement("p");
  companyName.className = "card-companyName";
  companyName.textContent = job.companyName;

  const experienceRequired = document.createElement("p");
  experienceRequired.className = "card-experienceRequired";
  experienceRequired.textContent = `Experience Required: ${job.experienceRequired}`;

  const employmentType = document.createElement("p");
  employmentType.className = "card-employmentType";
  employmentType.textContent = `Employment Type: ${job.employmentType}`;

  const packageCTC = document.createElement("p");
  packageCTC.className = "card-packageCTC";
  packageCTC.textContent = `Package CTC: ${job.packageCTC}`;

  const keySkills = document.createElement("p");
  keySkills.className = "card-keySkills";
  keySkills.textContent = `Key Skills: ${job.keySkills}`;

  const editLink = document.createElement("a");
  editLink.className = "card-link";
  editLink.href = "#";
  editLink.textContent = "Edit";
  editLink.setAttribute("data-id", job.id);

  const deleteButton = document.createElement("button");
  deleteButton.className = "card-button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("data-id", job.id);

  cardBody.appendChild(role);
  cardBody.appendChild(companyName);
  cardBody.appendChild(experienceRequired);
  cardBody.appendChild(employmentType);
  cardBody.appendChild(packageCTC);
  cardBody.appendChild(keySkills);
  cardBody.appendChild(editLink);
  cardBody.appendChild(deleteButton);

  card.appendChild(cardImg);
  card.appendChild(cardBody);

  return card;
}

// Function to fetch and display jobs on page load
async function displayJobs() {
  try {
    const response = await fetch(`${jobURL}?_page=${pageNumber}&_limit=5`);
    const jobs = await response.json();

    const dataListWrapper = document.getElementById("data-list-wrapper");
    dataListWrapper.innerHTML = "";

    jobs.forEach((job) => {
      const jobCard = createJobCard(job);
      dataListWrapper.appendChild(jobCard);
    });
  } catch (error) {
    console.error("Error fetching and displaying jobs:", error);
  }
}

window.addEventListener("load", displayJobs);

// Constants
const jobsPerPage = 5; // Number of jobs to display per page
let currentPage = 1; // Current page number

// Function to create a pagination button
function createPaginationButton(pageNumber) {
  const button = document.createElement("button");
  button.textContent = pageNumber;
  button.classList.add("pagination-button");
  button.setAttribute("data-testid", `pagination-button-${pageNumber}`);

  // Add a click event listener to handle pagination
  button.addEventListener("click", () => {
    currentPage = pageNumber;
    displayJobs();
  });

  return button;
}

// Function to update the pagination buttons
function updatePaginationButtons(totalJobs) {
  const paginationWrapper = document.getElementById("pagination-wrapper");
  paginationWrapper.innerHTML = "";

  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = createPaginationButton(i);
    paginationWrapper.appendChild(button);
  }
}

// Function to fetch and display jobs for the current page
async function displayJobs() {
  try {
    const response = await fetch(
      `${jobURL}?_page=${currentPage}&_limit=${jobsPerPage}`,
    );
    const jobs = await response.json();

    const dataListWrapper = document.getElementById("data-list-wrapper");
    dataListWrapper.innerHTML = ""; // Clear existing content

    jobs.forEach((job) => {
      const jobCard = createJobCard(job);
      dataListWrapper.appendChild(jobCard);
    });

    // Update pagination buttons when jobs are loaded
    updatePaginationButtons(50); // Assuming you have a total of 50 jobs initially
  } catch (error) {
    console.error("Error fetching and displaying jobs:", error);
  }
}

// Call the function to display jobs on page load
document.addEventListener("DOMContentLoaded", displayJobs);
