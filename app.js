const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
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
      tech: "Springboot / Java / MySQL / Reactjs",
      description:
        "This web application is designed to manage student absences efficiently through a modern and user-friendly interface. It allows administrators and teachers to record absences, manage permissions and justifications, and track student attendance in real time. The system also provides detailed reports and statistics to help monitor attendance trends. Built with a React.js frontend for a smooth user experience, a Spring Boot backend for robust business logic, and a MySQL database for secure data storage, this application ensures reliability, performance, and scalability.",
      imgSrc: "\\img\\Gestion_absences.png",
      videoSrc: "https://github.com/yassineboubkeur/projet_gestion_absences", 
      altText: "Project 8",
    },
    {
      title: "Real estate sale",
      tech: "Nodejs / Reactjs / Talwind Css / MySQl",
      description:
        "This real estate web application allows users to publish, search, and explore properties available for sale or rent through an intuitive and modern interface. It features secure user authentication, advanced search and filtering options, and detailed property listings with images and descriptions. The application integrates Google Maps to display property locations and enhance the browsing experience. Built with a React.js frontend styled using Tailwind CSS, and a Node.js backend to handle business logic and data management, this platform delivers a fast, responsive, and scalable real estate solution.",
      imgSrc: "\\img\\Real_estate_sale.png",
      videoSrc: "https://github.com/yassineboubkeur/Real_estate_sale", 
      altText: "Project 9",
    },
    {
      title: "Event management",
      tech: "Laravel / Reactjs / Talwind Css / MySQl",
      description:
        "This web application is designed for planning, organizing, and managing events efficiently. It allows organizers to create and manage events, handle participant registrations, and track attendance seamlessly. Participants can browse event details, register online, and receive confirmation notifications. Developed using Laravel for the backend and styled with Tailwind CSS for a modern and responsive user interface, this application provides a reliable and user-friendly event management solution.",
      imgSrc: "\\img\\event_management.png",
      videoSrc: "https://github.com/yassineboubkeur/gestion_evenments", 
      altText: "Project 10",
    },
  ];

  const projectsContainer = document.querySelector(".all-projects");
  const pages = document.querySelectorAll(".page");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentPage = 1;
  const projectsPerPage = 4;

  // Function to display projects
  function displayProjects(page) {
    projectsContainer.innerHTML = "";
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const projectsToDisplay = projects.slice(start, end);

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
         <a href="${project.videoSrc}" target="_blank">
          <img src="${project.imgSrc}" alt="${project.altText}" />
          <span class="video-link">Watch Project</span>
         </a>
        </div>
      `;
      projectsContainer.appendChild(projectItem);
    });
  }

  // Function to update the active page in the pagination
  function updatePagination() {
    pages.forEach((page) => {
      if (parseInt(page.dataset.page) === currentPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });
  }

  // Add event listeners to pagination buttons
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
    if (currentPage < pages.length) {
      currentPage++;
      displayProjects(currentPage);
      updatePagination();
    }
  });

  // Initial display
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

