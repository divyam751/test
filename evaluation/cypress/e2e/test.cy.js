import data from "../../submissionData.json";

// const data = [
//   {
//     submission_link: "http://localhost:8080",
//     id: "shanti-local",
//     json_server_link: `http://localhost:9090/`,
//   },
// ];

let mock = {
  jobs: [
    {
      id: 1,
      role: "Mobile App Developer",
      companyName: "space x",
      experienceRequired: 4,
      location: "Los Angeles",
      packageCTC: 14,
      employmentType: "Full Time, Permanent",
      keySkills: ["React Native", "iOS", "Android", "Cross-Platform"],
      image: "./server-files/images/spacex.png",
    },
    {
      id: 2,
      role: "Back-End Developer",
      companyName: "CryptoTech Solutions",
      experienceRequired: 5,
      location: "Mumbai",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: ["Node.js", "Express", "MongoDB", "REST API"],
      image: "./server-files/images/CryptoTechSolutions.jpg",
    },
    {
      id: 3,
      role: "DevOps Engineer",
      companyName: "DataInsights",
      experienceRequired: 4,
      location: "Vancouver",
      packageCTC: 12,
      employmentType: "Full Time, Permanent",
      keySkills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"],
      image: "./server-files/images/DataInsights.jpg",
    },
    {
      id: 4,
      role: "QA Tester",
      companyName: "tesla",
      experienceRequired: 3,
      location: "Paris",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: ["Manual Testing", "Automation Testing", "Test Planning"],
      image: "./server-files/images/tesla.png",
    },
    {
      id: 5,
      role: "Full-Stack Developer",
      companyName: "github",
      experienceRequired: 5,
      location: "Toronto",
      packageCTC: 15,
      employmentType: "Full Time, Permanent",
      keySkills: ["React", "Node.js", "SQL", "RESTful APIs"],
      image: "./server-files/images/github.png",
    },
    {
      id: 6,
      role: "Machine Learning Engineer",
      companyName: "InnovateTech Solutions",
      experienceRequired: 4,
      location: "Beijing",
      packageCTC: 17,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "TensorFlow", "NLP", "Data Mining"],
      image: "./server-files/images/InnovateTechSolutions.png",
    },
    {
      id: 7,
      role: "Security Tester",
      companyName: "Microsoft",
      experienceRequired: 3,
      location: "Zurich",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Penetration Testing",
        "Vulnerability Analysis",
        "Network Security",
      ],
      image: "./server-files/images/Microsoft.png",
    },
    {
      id: 8,
      role: "Blockchain Developer",
      companyName: "Google",
      experienceRequired: 2,
      location: "Hong Kong",
      packageCTC: 11,
      employmentType: "Full Time, Permanent",
      keySkills: ["Smart Contracts", "Decentralized Applications", "Solidity"],
      image: "./server-files/images/Google.png",
    },
    {
      id: 9,
      role: "Software Developer",
      companyName: "TechCo Solutions",
      experienceRequired: 2,
      location: "Bangalore",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: ["Java", "Spring", "SQL", "REST API"],
      image: "./server-files/images/TechCoSolutions.png",
    },
    {
      id: 10,
      role: "Front-End Developer",
      companyName: "WebDev Corp",
      experienceRequired: 3,
      location: "San Francisco",
      packageCTC: 12,
      employmentType: "Full Time, Permanent",
      keySkills: ["HTML", "CSS", "JavaScript", "React"],
      image: "./server-files/images/WebDevCorp.png",
    },
    {
      id: 11,
      role: "Mobile App Developer",
      companyName: "AppTech Innovations",
      experienceRequired: 4,
      location: "New York",
      packageCTC: 15,
      employmentType: "Full Time, Permanent",
      keySkills: ["iOS", "Android", "Swift", "Kotlin"],
      image: "./server-files/images/AppTechInnovations.jpg",
    },
    {
      id: 12,
      role: "Back-End Developer",
      companyName: "DataSys Solutions",
      experienceRequired: 5,
      location: "London",
      packageCTC: 14,
      employmentType: "Full Time, Permanent",
      keySkills: ["Node.js", "Express", "MongoDB", "REST API"],
      image: "./server-files/images/DataSysSolutions.png",
    },
    {
      id: 13,
      role: "DevOps Engineer",
      companyName: "CloudOps Tech",
      experienceRequired: 3,
      location: "Toronto",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: ["Docker", "Kubernetes", "CI/CD", "AWS"],
      image: "./server-files/images/CloudOpsTech.png",
    },
    {
      id: 14,
      role: "QA Tester",
      companyName: "TestMaster Solutions",
      experienceRequired: 2,
      location: "Berlin",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["Manual Testing", "Automation Testing", "Test Design"],
      image: "./server-files/images/TestMasterSolutions.jpg",
    },
    {
      id: 15,
      role: "Full-Stack Developer",
      companyName: "CodeCraft Studios",
      experienceRequired: 4,
      location: "Sydney",
      packageCTC: 10.5,
      employmentType: "Full Time, Permanent",
      keySkills: ["React", "Node.js", "MongoDB", "REST API"],
      image: "./server-files/images/CodeCraftStudios.jpg",
    },
    {
      id: 16,
      role: "Machine Learning Engineer",
      companyName: "AI Innovators",
      experienceRequired: 3,
      location: "Tokyo",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "TensorFlow", "Data Science", "ML Algorithms"],
      image: "./server-files/images/AIInnovators.jpg",
    },
    {
      id: 17,
      role: "Security Tester",
      companyName: "SecureTech Labs",
      experienceRequired: 4,
      location: "Singapore",
      packageCTC: 6,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Ethical Hacking",
        "Penetration Testing",
        "Security Auditing",
      ],
      image: "./server-files/images/SecureTechLabs.jpg",
    },
    {
      id: 18,
      role: "Blockchain Developer",
      companyName: "CryptoTech Solutions",
      experienceRequired: 2,
      location: "Seoul",
      packageCTC: 7,
      employmentType: "Full Time, Permanent",
      keySkills: ["Solidity", "Smart Contracts", "Distributed Ledger"],
      image: "./server-files/images/CryptoTechSolutions.jpg",
    },
    {
      id: 19,
      role: "Software Developer",
      companyName: "InnovateTech Solutions",
      experienceRequired: 3,
      location: "Austin",
      packageCTC: 8,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "Java", "Databases", "APIs"],
      image: "./server-files/images/InnovateTechSolutions.png",
    },
    {
      id: 20,
      role: "Front-End Developer",
      companyName: "WebWizards",
      experienceRequired: 2,
      location: "Seattle",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      image: "./server-files/images/WebWizards.jpg",
    },
    {
      id: 21,
      role: "Mobile App Developer",
      companyName: "Appify Solutions",
      experienceRequired: 4,
      location: "Los Angeles",
      packageCTC: 14,
      employmentType: "Full Time, Permanent",
      keySkills: ["React Native", "iOS", "Android", "UI/UX"],
      image: "./server-files/images/AppifySolutions.png",
    },
    {
      id: 22,
      role: "Back-End Developer",
      companyName: "DataInsights",
      experienceRequired: 5,
      location: "Mumbai",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: ["Java", "Spring Boot", "Microservices", "SQL"],
      image: "./server-files/images/DataInsights.jpg",
    },
    {
      id: 23,
      role: "DevOps Engineer",
      companyName: "CloudOps Innovations",
      experienceRequired: 4,
      location: "Vancouver",
      packageCTC: 4,
      employmentType: "Full Time, Permanent",
      keySkills: ["AWS", "Docker", "CI/CD", "Infrastructure as Code"],
      image: "./server-files/images/CloudOpsInnovations.png",
    },
    {
      id: 24,
      role: "QA Tester",
      companyName: "TestTech Solutions",
      experienceRequired: 3,
      location: "Paris",
      packageCTC: 2,
      employmentType: "Full Time, Permanent",
      keySkills: ["Automation Testing", "Selenium", "Test Frameworks"],
      image: "./server-files/images/TestTechSolutions.jpg",
    },
    {
      id: 25,
      role: "Full-Stack Developer",
      companyName: "AgileSoft",
      experienceRequired: 5,
      location: "Toronto",
      packageCTC: 5,
      employmentType: "Full Time, Permanent",
      keySkills: ["Angular", "Node.js", "MongoDB", "RESTful APIs"],
      image: "./server-files/images/AgileSoft.jpg",
    },
    {
      id: 26,
      role: "Machine Learning Engineer",
      companyName: "Google",
      experienceRequired: 4,
      location: "Pune",
      packageCTC: 17,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "TensorFlow", "NLP", "Data Mining"],
      image: "./server-files/images/Google.png",
    },
    {
      id: 27,
      role: "Security Tester",
      companyName: "Microsoft",
      experienceRequired: 3,
      location: "Mumbai",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
      ],
      image: "./server-files/images/Microsoft.png",
    },
    {
      id: 28,
      role: "Blockchain Developer",
      companyName: "capgemini",
      experienceRequired: 2,
      location: "Channai",
      packageCTC: 11,
      employmentType: "Full Time, Permanent",
      keySkills: ["Ethereum", "Smart Contracts", "DApp Development"],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 29,
      role: "Software Developer",
      companyName: "infosys",
      experienceRequired: 3,
      location: "Pune",
      packageCTC: 6,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "JavaScript", "Databases", "REST API"],
      image: "./server-files/images/infosys.png",
    },
    {
      id: 30,
      role: "Front-End Developer",
      companyName: "amdocs",
      experienceRequired: 2,
      location: "Tokyo",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["HTML", "CSS", "React", "Responsive Design"],
      image: "./server-files/images/amdocs.jpg",
    },
    {
      id: 31,
      role: "Mobile App Developer",
      companyName: "tesla",
      experienceRequired: 4,
      location: "San Francisco",
      packageCTC: 4,
      employmentType: "Full Time, Permanent",
      keySkills: ["Flutter", "iOS", "Android", "API Integration"],
      image: "./server-files/images/tesla.png",
    },
    {
      id: 32,
      role: "Back-End Developer",
      companyName: "adobe",
      experienceRequired: 5,
      location: "Toronto",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: ["Node.js", "Express", "MongoDB", "RESTful APIs"],
      image: "./server-files/images/adobe.png",
    },
    {
      id: 33,
      role: "DevOps Engineer",
      companyName: "space x",
      experienceRequired: 4,
      location: "Seattle",
      packageCTC: 6.9,
      employmentType: "Full Time, Permanent",
      keySkills: ["Kubernetes", "AWS", "CI/CD", "Infrastructure Automation"],
      image: "./server-files/images/spacex.png",
    },
    {
      id: 34,
      role: "QA Tester",
      companyName: "github",
      experienceRequired: 3,
      location: "London",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: ["Manual Testing", "Automation Testing", "Test Planning"],
      image: "./server-files/images/github.png",
    },
    {
      id: 35,
      role: "Full-Stack Developer",
      companyName: "Google",
      experienceRequired: 5,
      location: "New York",
      packageCTC: 7.5,
      employmentType: "Full Time, Permanent",
      keySkills: ["React", "Node.js", "SQL", "RESTful APIs"],
      image: "./server-files/images/Google.png",
    },
    {
      id: 36,
      role: "Machine Learning Engineer",
      companyName: "capgemini",
      experienceRequired: 4,
      location: "Paris",
      packageCTC: 17,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Python",
        "TensorFlow",
        "Computer Vision",
        "Machine Learning Algorithms",
      ],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 37,
      role: "Security Tester",
      companyName: "infosys",
      experienceRequired: 3,
      location: "Sydney",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Penetration Testing",
        "Vulnerability Analysis",
        "Security Assessment",
      ],
      image: "./server-files/images/infosys.png",
    },
    {
      id: 38,
      role: "Blockchain Developer",
      companyName: "adobe",
      experienceRequired: 2,
      location: "Singapore",
      packageCTC: 11,
      employmentType: "Full Time, Permanent",
      keySkills: ["Smart Contracts", "Decentralized Applications", "Solidity"],
      image: "./server-files/images/adobe.png",
    },
    {
      id: 39,
      role: "Software Developer",
      companyName: "amdocs",
      experienceRequired: 3,
      location: "Bangalore",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: ["Java", "Spring", "REST API", "Database"],
      image: "./server-files/images/amdocs.jpg",
    },
    {
      id: 40,
      role: "Front-End Developer",
      companyName: "WebWizards",
      experienceRequired: 2,
      location: "San Francisco",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      image: "./server-files/images/WebWizards.jpg",
    },
    {
      id: 41,
      role: "Mobile App Developer",
      companyName: "CloudOps Innovations",
      experienceRequired: 4,
      location: "New York",
      packageCTC: 13,
      employmentType: "Full Time, Permanent",
      keySkills: ["React Native", "iOS", "Android", "UI/UX"],
      image: "./server-files/images/CloudOpsInnovations.png",
    },
    {
      id: 42,
      role: "Back-End Developer",
      companyName: "Microsoft",
      experienceRequired: 5,
      location: "London",
      packageCTC: 12,
      employmentType: "Full Time, Permanent",
      keySkills: ["Node.js", "Express", "MongoDB", "API Development"],
      image: "./server-files/images/Microsoft.png",
    },
    {
      id: 43,
      role: "DevOps Engineer",
      companyName: "infosys",
      experienceRequired: 3,
      location: "Toronto",
      packageCTC: 11,
      employmentType: "Full Time, Permanent",
      keySkills: ["AWS", "Docker", "CI/CD", "Infrastructure Automation"],
      image: "./server-files/images/infosys.png",
    },
    {
      id: 44,
      role: "QA Tester",
      companyName: "capgemini",
      experienceRequired: 2,
      location: "Berlin",
      packageCTC: 8,
      employmentType: "Full Time, Permanent",
      keySkills: ["Manual Testing", "Automation Testing", "Bug Tracking"],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 45,
      role: "Full-Stack Developer",
      companyName: "capgemini",
      experienceRequired: 4,
      location: "Sydney",
      packageCTC: 14,
      employmentType: "Full Time, Permanent",
      keySkills: ["React", "Node.js", "SQL", "RESTful APIs"],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 46,
      role: "Machine Learning Engineer",
      companyName: "SecureTech Labs",
      experienceRequired: 3,
      location: "Tokyo",
      packageCTC: 15,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "TensorFlow", "Natural Language Processing"],
      image: "./server-files/images/SecureTechLabs.jpg",
    },
    {
      id: 47,
      role: "Security Tester",
      companyName: "capgemini",
      experienceRequired: 4,
      location: "Singapore",
      packageCTC: 12,
      employmentType: "Full Time, Permanent",
      keySkills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Auditing",
      ],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 48,
      role: "Blockchain Developer",
      companyName: "capgemini",
      experienceRequired: 2,
      location: "Seoul",
      packageCTC: 10,
      employmentType: "Full Time, Permanent",
      keySkills: ["Ethereum", "Smart Contracts", "Decentralized Applications"],
      image: "./server-files/images/capgemini.png",
    },
    {
      id: 49,
      role: "Software Developer",
      companyName: "AgileSoft",
      experienceRequired: 3,
      location: "Austin",
      packageCTC: 11,
      employmentType: "Full Time, Permanent",
      keySkills: ["Python", "Java", "Database", "REST API"],
      image: "./server-files/images/AgileSoft.jpg",
    },
    {
      id: 50,
      role: "Front-End Developer",
      companyName: "WebDev Corp",
      experienceRequired: 2,
      location: "Seattle",
      packageCTC: 9,
      employmentType: "Full Time, Permanent",
      keySkills: ["HTML", "CSS", "JavaScript", "React"],
      image: "./server-files/images/WebDevCorp.png",
    },
  ],
};

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Assignment", function () {
    let acc_score = 1;
    beforeEach(() => {
      cy.clearCookies();
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }
      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    });
    it("Shows the correct initial data", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      const numOfJobs = 5;
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(".card-list").children().should("have.length", numOfJobs);
      cy.get(cards)
        .should("have.length", numOfJobs)
        .first()
        .should("contain", mock.jobs[0].role);
      cy.get(cards)
        .eq(Math.ceil(numOfJobs / 2))
        .should("contain", mock.jobs[Math.ceil(numOfJobs / 2)].role);
      cy.get(cards)
        .should("have.length", numOfJobs)
        .last()
        .should("contain", mock.jobs[numOfJobs - 1].role);
      cy.then(() => {
        acc_score += 3;
      });
    }); // 3
    it("Able to add new jobs", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.intercept("POST", "**/jobs**").as("postRequest");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      let data = {
        role: "React Developer",
        companyName: "Airtel",
        experienceRequired: 4,
        location: "Banglore",
        packageCTC: 7,
        employmentType: "Full Time, Permanent",
        keySkills: ["HTML", "CSS", "ReactNativ", "JavaScript"],
        image:
          "https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo-white-text-vertical.jpg",
      };
      cy.get("#job-role").type(data.role);
      cy.get("#job-image").type(data.image);
      cy.get("#job-companyName").type(data.companyName);
      cy.get("#job-experienceRequired").type(data.experienceRequired);
      cy.get("#job-employmentType").type(data.employmentType);
      cy.get("#job-packageCTC").type(data.packageCTC);
      cy.get("#job-keySkills").type("HTML,CSS,ReactNativ,JavaScript");
      cy.get("#add-job").should("be.visible").click();
      cy.wait("@postRequest");
      cy.wait("@getJobs");
      cy.wait(1000);

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500);

      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list").children().first().contains("React Developer");
      cy.get(".card-list").children().first().contains("Airtel");

      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Check by adding a new job the pagination button should increased", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.intercept("POST", "**/jobs**").as("postRequest");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      let data = {
        role: "React Developer",
        companyName: "Airtel",
        experienceRequired: 4,
        location: "Banglore",
        packageCTC: 7,
        employmentType: "Full Time, Permanent",
        keySkills: ["HTML", "CSS", "ReactNativ", "JavaScript"],
        image: "https://s3",
      };
      cy.get("#job-role").type(data.role);
      cy.get("#job-image").type(data.image);
      cy.get("#job-companyName").type(data.companyName);
      cy.get("#job-experienceRequired").type(data.experienceRequired);
      cy.get("#job-employmentType").type(data.employmentType);
      cy.get("#job-packageCTC").type(data.packageCTC);
      cy.get("#job-keySkills").type("HTML,CSS,ReactNativ,JavaScript");
      cy.get("#add-job").should("be.visible").click();
      cy.wait("@postRequest");
      cy.wait("@getJobs");
      cy.wait(1000);

      cy.get("#pagination-wrapper").children().should("have.length", 11);
      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500);

      cy.get(".card-list").children().should("have.length", 1);
      cy.get(".card-list").children().first().contains("React Developer");
      cy.get(".card-list").children().first().contains("Airtel");

      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Able to delete a jobs", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.intercept("DELETE", "**/jobs/**").as("deleteRequest");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get(".card-list").children().first().find(".card-button").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait("@deleteRequest");
      cy.wait("@getJobs");
      cy.wait(1000);
      cy.get(".card-list").children().should("have.length", 5);
      cy.get(cards).first().should("contain", "CryptoTech Solutions");
      cy.get(cards).last().should("contain", "Machine Learning Engineer");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit all fields of the jobs", () => {
      cy.intercept("PATCH", `**/jobs/**`).as("patchedJob");
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).last().find(".card-link").click();
      cy.wait(1000);
      cy.get("#update-job-role").clear().type("Block-chain developer");
      cy.get("#update-job-image")
        .clear()
        .type(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAsMDXctjhYL4CLOxejaKtF3S3NVtV0LPEA&usqp=CAU"
        );
      cy.get("#update-job-companyName").type("TCS");
      cy.get("#update-job-experienceRequired").clear().type(2.5);
      cy.get("#update-job-employmentType").clear().type("Full Time, Permanent");
      cy.get("#update-job-packageCTC").clear().type("5.5");
      cy.get("#update-job-keySkills").clear().type("C,C++,JAVA,MySQL");
      cy.get("#update-job").should("be.visible").click();
      cy.wait("@patchedJob");
      cy.wait("@getJobs");
      cy.wait(1000);
      cy.get(cards).last().contains("TCS");
      cy.get(cards).last().contains(2.5);
      cy.get(cards).last().contains("Full Time, Permanent");
      cy.get(cards).last().contains(5.5);
      cy.get(cards).last().contains("MySQL");
      cy.get(cards).last().contains("JAVA");
      cy.get(cards).last().contains("C");
      cy.get(cards).last().contains("C++");
      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to edit the package", () => {
      cy.intercept("PATCH", `**/jobs/**`).as("patchedJob");
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get(cards).first().find(".card-link").click();
      //add condition in problem statement
      cy.wait(1000);
      cy.get("#update-package-job-package").clear().type(6.9);
      cy.get("#update-package-job").click();
      cy.wait("@patchedJob");
      cy.wait("@getJobs");
      cy.wait(1000);
      cy.get(cards).first().contains(6.9);
      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Low-to-high Sorts as expected", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500).then(() => {
        let arr = [];
        cy.get(cards)
          .each(($el) => {
            arr.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            const isSorted = arr.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("high-to-low Sorts as expected", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-high-to-low").click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Filters as expected", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#filter-Google").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500).then(() => {
        let arr = [];
        cy.get(cards)
          .each((el) => {
            arr.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            const is = arr.reduce(
              (n, item) => n !== false && item === "Google"
            );
            expect(!!is).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-Microsoft").click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each((el) => {
            arr2.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isKidsroom = arr2.reduce(
              (n, item) => n !== false && item === "Microsoft"
            );
            expect(!!isKidsroom).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-capgemini").click();
      cy.wait(500).then(() => {
        let arr3 = [];
        cy.get(cards)
          .each((el) => {
            arr3.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            //console.log(arr3, arr3.length);
            const isLivingRoom = arr3.reduce(
              (n, item) => n !== false && item === "capgemini"
            );
            expect(!!isLivingRoom).to.be.true;
            expect(arr3.length).to.be.greaterThan(0);
          });
      });
      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Low-to-high Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-low-to-high").click();
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 10);
        let arr = [];
        cy.get(cards)
          .each(($el) => {
            arr.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            // console.log(arr, arr.length);
            const isSorted = arr.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            // console.log(arr, arr.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item >= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("high-to-low Sorts as expected with pagination", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      const cards = ".data-list-wrapper .card-list .card";
      cy.get("#sort-high-to-low").click();
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 10);
        let arr2 = [];
        cy.get(cards)
          .each(($el) => {
            arr2.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isSorted = arr2.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        let arr3 = [];
        cy.get(cards)
          .each(($el) => {
            arr3.push(+$el.find(".card-packageCTC").text());
          })
          .then(() => {
            const isSorted = arr3.reduce(
              (n, item) => n !== false && item <= n && item
            );
            expect(!!isSorted).to.be.true;
            expect(arr3.length).to.be.greaterThan(0);
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("Filters as expected with pagination", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      cy.get("#filter-Google").click();
      const cards = ".data-list-wrapper .card-list .card";
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 1);
        let arr = [];
        cy.get(cards)
          .each((el) => {
            arr.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            const is = arr.reduce(
              (n, item) => n !== false && item === "Google"
            );
            expect(!!is).to.be.true;
            expect(arr.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-Microsoft").click();
      cy.wait(500).then((res) => {
        cy.get("#pagination-wrapper").children().should("have.length", 1);
        let arr2 = [];
        cy.get(cards)
          .each((el) => {
            arr2.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            //console.log(arr2, arr2.length);
            const isKidsroom = arr2.reduce(
              (n, item) => n !== false && item === "Microsoft"
            );
            expect(!!isKidsroom).to.be.true;
            expect(arr2.length).to.be.greaterThan(0);
          });
      });

      cy.get("#filter-capgemini").click();
      cy.wait(500).then(() => {
        cy.get("#pagination-wrapper").children().should("have.length", 2);
        let arr3 = [];
        cy.get(cards)
          .each((el) => {
            arr3.push(el.find(".card-companyName").text().trim());
          })
          .then(() => {
            //console.log(arr3, arr3.length);
            const isLivingRoom = arr3.reduce(
              (n, item) => n !== false && item === "capgemini"
            );
            expect(!!isLivingRoom).to.be.true;
            expect(arr3.length).to.be.greaterThan(0);

            cy.get("#pagination-wrapper").children().last().click();
            cy.wait(500).then(()=>{
              cy.get(".card-list").children().should("have.length", 1);
              cy.get(".card-list").children().first().contains("Blockchain Developer");
              cy.get(".card-list").children().first().contains("capgemini");

            })
          });
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); // 1
    it("check for pagination functionality", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#pagination-wrapper").children().should("have.length", 10);
      cy.get("#pagination-wrapper").children().last().click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 5);
        cy.get(".card-list")
          .children()
          .first()
          .contains("Machine Learning Engineer");
        cy.get(".card-list").children().first().contains("SecureTech Labs");
        cy.get(".card-list").children().last().contains("Front-End Developer");
        cy.get(".card-list").children().last().contains("WebDev Corp");
      });

      cy.then(() => {
        acc_score += 2;
      });
    }); //2
    it("Able to search by role", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#search-by-select").select("role");
      cy.get("#search-by-input").clear().type("Back-End Developer");
      cy.get("#search-by-button").click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 5);
        cy.get(".card-list").children().first().contains("Back-End Developer");
        cy.get(".card-list")
          .children()
          .first()
          .contains("CryptoTech Solutions");
        cy.get(".card-list").children().last().contains("Back-End Developer");
        cy.get(".card-list").children().last().contains("Microsoft");
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it("Able to search by the company name", () => {
      cy.intercept("GET", "**/jobs**").as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs");
      cy.get("#search-by-select").select("companyName");
      cy.get("#search-by-input").clear().type("tesla");
      cy.get("#search-by-button").click();
      cy.wait(500).then(() => {
        cy.get(".card-list").children().should("have.length", 2);
        cy.get(".card-list").children().first().contains("QA Tester");
        cy.get(".card-list").children().first().contains("tesla");
        cy.get(".card-list").children().last().contains("Mobile App Developer");
        cy.get(".card-list").children().last().contains("tesla");
      });

      cy.then(() => {
        acc_score += 1;
      });
    }); //1

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
