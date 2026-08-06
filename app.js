const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger",
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a",
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ✅ copyright auto year
  document.getElementById("copyright-year").textContent =
    new Date().getFullYear();
  const projects = [
    {
      title: "Student Management System",
      category: "fullstack",
      tech: "ASP.NET Framework / SQL Server",
      description:
        "This project is a comprehensive Student Management System designed for educational institutions. Built using the ASP.NET framework and SQL Server as the database, the system enables schools and colleges to efficiently manage student data.",
      imgSrc: "\\img\\Image1.jpg",
      videoSrc:
        "https://drive.google.com/drive/folders/1RAfzYfIAYisnHKyKlUNk6EclGBUy6RPm?usp=sharing",
      altText: "Student Management System",
    },
    // Add other project objects here in the same format
    {
      title: "Anime Streaming Website",
      category: "fullstack",
      tech: "HTML / CSS / Bootstrap / jQuery / JavaScript",
      description:
        "A dynamic anime streaming website that offers a smooth and engaging experience for anime lovers. Built with responsive design principles using Bootstrap, interactive features with jQuery, and JavaScript for a seamless user experience. Users can browse the latest anime, watch trailers, and keep track of their favorite shows.",
      imgSrc: "\\img\\animeProjet.png",
      videoSrc:
        "https://drive.google.com/file/d/1HHqroHP9AwzPzKqMeIDIYt50g6xMBLOk/view?usp=sharing",
      altText: "Project 3",
    },
    {
      title: "E-commerce smartphones Website",
      category: "fullstack",
      tech: "HTML / CSS / Bootstrap / jQuery / JavaScript",
      description:
        "A responsive e-commerce platform for smartphones, designed with an intuitive interface and modern design. The website features a product catalog, shopping cart, and smooth transitions for an enhanced user experience. Built using Bootstrap for responsive layouts, and jQuery/JavaScript for interactivity.",
      imgSrc: "\\img\\smatphoneProjet.png",
      videoSrc:
        "https://drive.google.com/file/d/1Yb29rbgcon0BusHzuV-aNYbwCypYVyy3/view?usp=sharing",
      altText: "Project 4",
    },
    {
      title: "Website pc store",
      category: "fullstack",
      tech: "Html / Css / Bootstrap / MySQL / PHP",
      description:
        "Welcome to PC Store, your go-to place for purchasing the best and latest desktop PCs. We offer a wide range of PCs for gaming, work, and everyday use, with competitive prices. Our system is powered by a robust MySQL database that manages product listings, inventory, and customer orders. Built using PHP, this site is fast, secure, and fully functional to help you shop with ease. Whether you’re a gamer, a developer, or just looking for a reliable PC, PC Store has something for everyone.",
      imgSrc: "\\img\\pcProjet.png",
      videoSrc:
        "https://drive.google.com/file/d/1nQ4T_1htRkvg8e5jdW_WUGCMVXQITZx4/view?usp=sharing",
      altText: "Project 5",
    },
    {
      title: "Book Store",
      category: "fullstack",
      tech: "Html / Css / jQuery / Nodejs / Mongodb:",
      description:
        "Discover a wide selection of books across different genres. Whether you're looking for the latest best-sellers, timeless classics, or educational books, we've got it all. Our website allows you to easily browse books, make purchases, and manage your orders. Built using Node.js, MongoDB, and jQuery, this website offers a fast and secure shopping experience.",
      imgSrc: "./img/Book.png",
      videoSrc:
        "https://drive.google.com/file/d/1SWUrgdrlKTYZKLivH9cvgJk0Hh9EPSIh/view?usp=sharing",
      altText: "Project 6",
    },
    {
      title: "Complaints Management",
      category: "fullstack",
      tech: "JavaScript / Html / Css / Bootstrap / LaravelSpatie / MySql",
      description:
        "This application allows users to submit and track the status of their claims through an intuitive web interface. It uses a Laravel backend to handle submissions, with authentication and user management via the <strong>Spatie</strong> package. Claim data is stored in a MySQL database, and the user interface is built with HTML, CSS, and Bootstrap, adding dynamic features with JavaScript.",
      imgSrc: "\\img\\Gestion_reclmation.png",
      videoSrc:
        "https://github.com/mrAymanLasfar/gestion-reclamation02-/tree/Yassine_Boubkeur_1",
      altText: "Project 7",
    },
    {
      title: "Absence management",
      category: "fullstack",
      tech: "Springboot / Java / MySQL / Reactjs",
      description:
        "This web application is designed to manage student absences efficiently through a modern and user-friendly interface. It allows administrators and teachers to record absences, manage permissions and justifications, and track student attendance in real time. The system also provides detailed reports and statistics to help monitor attendance trends. Built with a React.js frontend for a smooth user experience, a Spring Boot backend for robust business logic, and a MySQL database for secure data storage, this application ensures reliability, performance, and scalability.",
      imgSrc: "\\img\\Gestion_absences.png",
      videoSrc: "https://github.com/yassineboubkeur/projet_gestion_absences",
      altText: "Project 8",
    },
    {
      title: "Real estate sale",
      category: "fullstack",
      tech: "Nodejs / Reactjs / Talwind Css / MySQl",
      description:
        "This real estate web application allows users to publish, search, and explore properties available for sale or rent through an intuitive and modern interface. It features secure user authentication, advanced search and filtering options, and detailed property listings with images and descriptions. The application integrates Google Maps to display property locations and enhance the browsing experience. Built with a React.js frontend styled using Tailwind CSS, and a Node.js backend to handle business logic and data management, this platform delivers a fast, responsive, and scalable real estate solution.",
      imgSrc: "\\img\\Real_estate_sale.png",
      videoSrc: "https://github.com/yassineboubkeur/Real_estate_sale",
      altText: "Project 9",
    },
    {
      title: "Event management",
      category: "fullstack",
      tech: "Laravel / Reactjs / Talwind Css / MySQl",
      description:
        "This web application is designed for planning, organizing, and managing events efficiently. It allows organizers to create and manage events, handle participant registrations, and track attendance seamlessly. Participants can browse event details, register online, and receive confirmation notifications. Developed using Laravel for the backend and styled with Tailwind CSS for a modern and responsive user interface, this application provides a reliable and user-friendly event management solution.",
      imgSrc: "\\img\\event_management.png",
      videoSrc: "https://github.com/yassineboubkeur/gestion_evenments",
      altText: "Project 10",
    },
    {
      title: "Automated AWS Infrastructure Deployment",
      category: "devops",
      tech: "Cloud Computing / CI/CD / Kubernetes / Docker / AWS",
      description:
        "An automated cloud infrastructure deployment project that provisions AWS resources using Terraform, configures servers with Ansible, and deploys containerized applications through Docker. GitHub Actions was integrated to create a fully automated CI/CD pipeline, enabling infrastructure provisioning, server configuration, and application deployment on every Git push using Infrastructure as Code (IaC) and DevOps automation practices.",
      imgSrc: "\\img\\Automated AWS Infrastructure Deployment.jfif",
      videoSrc:
        "https://github.com/yassineboubkeur/devops-iac-terraform-ansible",
      altText: "Project 11",
    },
    {
      title: "Cloud-Native Application Deployment",
      category: "devops",
      tech: "CI/CD / Kubernetes / Docker / AWS / Node.js",
      description:
        "A cloud-native application deployment project that demonstrates the complete lifecycle of deploying a containerized Node.js (Express) API. The application was containerized using Docker, orchestrated with Kubernetes (Minikube), and deployed on an AWS EC2 instance. Kubernetes Deployments and Services (NodePort) were configured to expose the application, while AWS Security Groups and SSH Key Pairs ensured secure access, providing hands-on experience with container orchestration and cloud deployment.",
      imgSrc: "\\img\\Cloud-Native Application Deployment.jfif",
      videoSrc: "https://github.com/yassineboubkeur/devops-ci-cd-nodejs",
      altText: "Project 12",
    },
    {
      title: "Production-Style Microservices Platform",
      category: "devops",
      tech: "Cloud Computing / CI/CD / Kubernetes / Docker / Grafaqna / Prometheus / Helm / ArgoCD / GitHub Actions",
      description:
        "A production-ready microservices platform built with Kubernetes, Helm, ArgoCD, and GitHub Actions. The platform consists of multiple containerized services with PostgreSQL databases, automated CI/CD and GitOps workflows, canary and rolling deployments, Horizontal Pod Autoscaling (HPA), and monitoring with Prometheus and Grafana. The project demonstrates modern DevOps practices for building scalable, resilient, and highly available cloud-native applications with zero-downtime deployments.",
      imgSrc: "\\img\\Production-Style Microservices Platform.jfif",
      videoSrc: "https://github.com/yassineboubkeur/microservices-k8s-platform",
      altText: "Project 13",
    },
    {
      title: "Data Professional Survey Analysis Dashboard",
      category: "data-analyst",
      tech: "Power BI / Excel",
      description:
        "An interactive business intelligence dashboard built using Power BI to visualize survey data from data professionals worldwide. The project involves comprehensive data extraction, cleaning, and transformation using Power Query, followed by advanced data modeling and DAX calculations to drive key performance indicators (KPIs). The dashboard features geographic insights via a treemap, salary trends across various job titles, diversity in programming language adoption, and sentiment analysis regarding work-life balance and salary satisfaction. This solution provides actionable insights into the current landscape of the data industry, demonstrating strong data visualization.",
      imgSrc: "\\img\\Data Professional Survey Analysis Dashboard.jfif",
      videoSrc: "",
      altText: "Project 14",
    },
    {
      title: "Automated Sales Data ETL and Exploratory Analysis Pipeline",
      category: "data-analyst",
      tech: "Python / Pandas / NumPy / Matplotlib / Seaborn / Jupyter Notebook",
      description:
        "A robust data processing and exploratory analysis pipeline developed using Python, Pandas, and Matplotlib to analyze multi-month sales transaction data. The project implements an automated ETL (Extract, Transform, Load) workflow that iterates through directory structures to dynamically concatenate and merge numerous .csv files into a unified, comprehensive dataset (over 900,000 rows).",
      imgSrc:
        "\\img\\Automated Sales Data ETL and Exploratory Analysis Pipeline.jfif",
      videoSrc: "",
      altText: "Project 15",
    },
    {
      title: "URL Shortener Platform",
      category: "fullstack",
      tech: "Go / Next.js / PostgreSQL / Redis / Docker",
      description:
        "A modern, production-ready URL shortener platform that enables users to create, manage, and track shortened links with ease. Built with Go and Next.js using a clean architecture, it integrates PostgreSQL and Redis for high performance, JWT authentication for secure access, QR code generation, real-time analytics, and a complete DevOps workflow with Docker, CI/CD, monitoring, and automated testing to ensure scalability, reliability, and an excellent user experience.",
      imgSrc: "\\img\\URL Shortener Platform.png",
      videoSrc:
        "https://drive.google.com/file/d/15mSOKSHUfrZzQhs0BeUBqQcS0Mum11qR/view?usp=sharing",
      altText: "Project 16",
    },
  ];

  const projectsContainer = document.querySelector(".all-projects");
  const pages = document.querySelectorAll(".page");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentPage = 1;
  let currentCategory = "all";
  const projectsPerPage = 4;

  function getFilteredProjects() {
    if (currentCategory === "all") return projects;
    return projects.filter((p) => p.category === currentCategory);
  }

  function getTotalPages() {
    return Math.ceil(getFilteredProjects().length / projectsPerPage);
  }

  function displayProjects(page) {
    projectsContainer.innerHTML = "";
    const filtered = getFilteredProjects();
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const projectsToDisplay = filtered.slice(start, end);

    projectsToDisplay.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("project-item");
      projectItem.innerHTML = `
        <div class="project-info">
          <h1>${project.title}</h1>
          <h2>${project.tech}</h2>
          <p>${project.description}</p>
        </div>
        <div class="project-video">
          ${
            project.videoSrc
              ? `
          <a href="${project.videoSrc}" target="_blank">
            <img src="${project.imgSrc}" alt="${project.altText}" />
            <span class="video-link">Watch Project</span>
          </a>`
              : `
          <img src="${project.imgSrc}" alt="${project.altText}" />
          `
          }
        </div>
      `;
      projectsContainer.appendChild(projectItem);
    });
  }

  function updatePagination() {
    const totalPages = getTotalPages();
    pages.forEach((page) => {
      const pageNum = parseInt(page.dataset.page);
      if (pageNum <= totalPages) {
        page.style.display = "inline-block";
        if (pageNum === currentPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      } else {
        page.style.display = "none";
      }
    });
  }

  pages.forEach((page) => {
    page.addEventListener("click", () => {
      currentPage = parseInt(page.dataset.page);
      displayProjects(currentPage);
      updatePagination();
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayProjects(currentPage);
      updatePagination();
    }
  });

  nextButton.addEventListener("click", () => {
    const totalPages = getTotalPages();
    if (currentPage < totalPages) {
      currentPage++;
      displayProjects(currentPage);
      updatePagination();
    }
  });

  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      currentPage = 1;
      displayProjects(currentPage);
      updatePagination();
    });
  });

  displayProjects(currentPage);
  updatePagination();
});

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Vérifiez si un cookie de thème existe
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

// Appliquez le thème en fonction du cookie
const currentTheme = getCookie("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  themeToggle.textContent = "Light Mode";
} else {
  themeToggle.textContent = "Dark Mode";
}

// Basculer entre les thèmes et mettre à jour le cookie
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    document.cookie =
      "theme=dark; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    themeToggle.textContent = "Light Mode";
  } else {
    document.cookie =
      "theme=light; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    themeToggle.textContent = "Dark Mode";
  }
});
