import { IProjeto } from "../Interfaces/IProjeto";

export const projetos: IProjeto[] = [
    {
      titulo: "Favorite Seu Pet",
      descricao:
        "This is the frontend of the Favorite Seu Pet application, a simple and intuitive platform where users can favorite their preferred animals, search for them through a search field, and filter animals by category. The goal is to create a seamless experience for people looking to organize and manage their favorites Pets efficiently.",
      imagens: ["./images/Projeto1/pagina1.png", "images/Projeto1/pagina2.png"],
      linguagens: ["React", "Typescript", "Sass"],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/favorite_seu_pet",
      texto: `
    <p style="line-height: 1.6;">This is the Favorite Seu Pet application, a simple and intuitive platform where users can favorite their preferred animals, search for them through a search field, and filter animals by category. The goal is to create a seamless experience for people looking to organize and manage their favorites Pets efficiently.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>User-friendly UI:</strong> A clean and modern interface designed for easy navigation and interaction.</li>
        <li><strong>Animal Favoriting:</strong> Users can easily favorite animals, keeping track of their favorites effortlessly.</li>
        <li><strong>Search Functionality:</strong> A search field allows users to quickly find specific animals.</li>
        <li><strong>Category Filtering:</strong> Users can filter animals based on categories for better organization.</li>
        <li><strong>Responsive Design:</strong> Fully optimized for both desktop and mobile devices, ensuring a smooth user experience.</li>
    </ul>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>React.js:</strong> For building dynamic and interactive user interfaces.</li>
        <li><strong>TypeScript:</strong> To enhance the robustness and maintainability of the codebase.</li>
        <li><strong>Sass:</strong> For writing scalable and modular styles with enhanced features over traditional CSS.</li>
    </ul>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Contributions are welcome! Feel free to submit issues or pull requests to enhance the UI/UX and functionality of the application.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Github</h2>
    <p style="line-height: 1.6;"><a href="https://github.com/rafael200021/favorite_seu_pet" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/favorite_seu_pet</a></p>
`,
    },
    {
      titulo: "Memorização de Flashcard",
      descricao:
        "I created this application to help me study languages and improve my React skills. The goal is to make language learning more interactive and efficient while also building a useful project in React.",
      imagens: [
        "./images/Projeto2/pagina1.png",
        "images/Projeto2/pagina2.png",
        "images/Projeto2/pagina3.png",
        "images/Projeto2/pagina4.png",
      ],
      linguagens: ["React", "Typescript", "Tailwind CSS", "daisyUI"],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/memorizacao-flashcard-app",
      texto: `
    <p style="line-height: 1.6;">I created this application to help me study languages and improve my React skills. The goal is to make language learning more interactive and efficient while also building a useful project in React.</p>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Interactive Learning:</strong> A user-friendly interface for studying different languages.</li>
        <li><strong>Customizable Flashcards:</strong> Users can create, edit, and organize flashcards to enhance memorization.</li>
        <li><strong>Responsive Design:</strong> The app is fully responsive and works seamlessly across all devices.</li>
        <li><strong>Theming with daisyUI:</strong> The app includes a customizable and visually appealing UI, thanks to daisyUI.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>React.js:</strong> For building the interactive user interface.</li>
        <li><strong>TypeScript:</strong> For adding type safety and improving the maintainability of the codebase.</li>
        <li><strong>Tailwind CSS:</strong> For flexible and responsive styling.</li>
        <li><strong>daisyUI:</strong> To provide pre-styled components and themes for a better user experience.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Feel free to submit issues or pull requests if you would like to contribute to the project.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Github</h2>
    <p style="line-height: 1.6;"><a href="https://github.com/rafael200021/memorizacao-flashcard-app" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/memorizacao-flashcard-app</a></p>
`,
    },
    {
      titulo: "Memorizacao de FlashCard API",
      descricao:
        "This project provides a REST API for the Memorizacao FlashCard App. The API is designed to handle flashcard data and facilitate the memorization process through a structured and scalable backend.",
      imagens: ["./images/Projeto3/pagina1.png"],
      linguagens: ["Node.js", "Express", "Sequelize"],
      tipo: "Back-End",
      link: "https://github.com/rafael200021/memorizacao-flashcard-api",
      texto: `
    <p style="line-height: 1.6;">This project provides a REST API for the Memorizacao FlashCard App. The API is designed to handle flashcard data and facilitate the memorization process through a structured and scalable backend.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>RESTful API:</strong> Provides endpoints for creating, reading, updating, and deleting flashcards.</li>
        <li><strong>Flashcard Management:</strong> Allows users to manage flashcards, including categories and tags.</li>
    </ul>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Node.js:</strong> For building the server-side logic and handling requests.</li>
        <li><strong>Express.js:</strong> For creating the RESTful routes and managing API logic.</li>
        <li><strong>Sequelize:</strong> As an ORM to interact with the database and handle models and migrations.</li>
    </ul>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Feel free to contribute by submitting issues or pull requests to improve functionality or add new features to the API.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Github</h2>
    <p style="line-height: 1.6;"><a href="https://github.com/rafael200021/memorizacao-flashcard-api" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/memorizacao-flashcard-api</a></p>

    `,
    },
    {
      titulo: "Coin Converter",
      descricao:
        "This is the Coin Converter project. A simple and intuitive application to convert currencies between different countries. The application allows users to select a base currency, enter an amount, and choose a target currency to view the exchange rate and the converted value.",
      texto: `
    <p style="line-height: 1.6;">This is the Coin Converter project. A simple and intuitive application to convert currencies between different countries. The application allows users to select a base currency, enter an amount, and choose a target currency to view the exchange rate and the converted value.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>User-friendly UI:</strong> A clean, responsive, and interactive interface for easy currency conversion.</li>
        <li><strong>Conversion Details:</strong> Displays the converted value.</li>
        <li><strong>Search Functionality:</strong> Allows users to quickly select currencies from various countries for conversion.</li>
        <li><strong>Data:</strong> Fetches and displays up-to-date exchange rate information using API requests.</li>
        <li><strong>Mobile-Friendly:</strong> Fully responsive design for both desktop and mobile views.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Next.js:</strong> For server-side rendering, static site generation, and optimized performance.</li>
        <li><strong>React.js:</strong> For building dynamic and interactive user interfaces.</li>
        <li><strong>Tailwind:</strong> For fast, efficient, and customizable styling.</li>
        <li><strong>Axios:</strong> For making API requests to fetch exchange rates.</li>
        <li><strong>API:</strong> To retrieve exchange rate data, we use the <a href="https://freecurrencyapi.com/" target="_blank" style="color: #4A90E2;">https://freecurrencyapi.com/</a>.</li>
    </ul>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Feel free to submit issues and pull requests to improve the frontend and functionality.</p>
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Github</h2>
    <p style="line-height: 1.6;"><a href="https://github.com/rafael200021/coin_converter" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/coin_converter</a></p>

    `,
      imagens: ["./images/Projeto4/pagina1.png"],
      linguagens: ["Next.js", "React.js", "Tailwind", "Axios", "API"],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/memorizacao-flashcard-api",
    },
    {
      titulo: "Wheater App",
      descricao:
        "This is the Weather App project. A simple and intuitive application to check the weather for a specific location. The application allows users to search for a location and view the weather conditions, including wind, UV index, and atmospheric pressure.",
      texto: `
<p style="line-height: 1.6; color: #555;">This is the Weather App project. A simple and intuitive application to check the weather for a specific location. The application allows users to search for a location and view the weather conditions, including wind, UV index, and atmospheric pressure.</p>

<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Features</h2>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li><strong>User-friendly UI:</strong> A clean, responsive, and interactive interface for checking weather details.</li>
    <li><strong>Weather Details:</strong> Displays weather conditions like temperature, wind speed, UV index, and atmospheric pressure for selected locations.</li>
    <li><strong>Search Functionality:</strong> Allows users to search for any location to get the latest weather updates.</li>
    <li><strong>Real-Time Data:</strong> Fetches and displays up-to-date weather information using API requests.</li>
    <li><strong>Mobile-Friendly:</strong> Fully responsive design for both desktop and mobile views.</li>
</ul>

<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Tech Stack</h2>
<ul style="list-style-type: disc; margin-left: 20px;">
    <li><strong>Next.js:</strong> For server-side rendering, static site generation, and optimized performance.</li>
    <li><strong>React.js:</strong> For building dynamic and interactive user interfaces.</li>
    <li><strong>Tailwind:</strong> For fast, efficient, and customizable styling.</li>
    <li><strong>Axios:</strong> For making API requests to fetch weather data.</li>
    <li><strong>Magic UI:</strong> For implementing advanced and elegant UI components.</li>
    <li><strong>API:</strong> For getting weather information, the <a href="https://www.weatherapi.com/" style="color: #4A90E2;">WeatherAPI</a> was used.</li>
</ul>

<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Contributing</h2>
<p style="line-height: 1.6; color: #555;">Feel free to submit issues and pull requests to improve the frontend.</p>

<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Github</h2>
<p style="line-height: 1.6;"><a href="https://github.com/rafael200021/weather_app" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/weather_app</a></p>
`,
      imagens: [
        "./images/Projeto5/pagina1.png",
        "./images/Projeto5/pagina2.png",
      ],
      linguagens: [
        "Next.js",
        "React.js",
        "Tailwind",
        "Axios",
        "Magic UI",
        "API",
      ],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/memorizacao-flashcard-api",
    },
    {
      titulo: "Daily Project Frontend",
      descricao:
        "This is the frontend of the Daily Projects project, a Kanban-style project management tool. The frontend allows users to visually manage their tasks using a drag-and-drop interface, create boards, workspaces, and lists, and collaborate on task organization.",
      texto: `
    <p style="line-height: 1.6;">This is the frontend of the Daily Projects project, a Kanban-style project management tool. The frontend allows users to visually manage their tasks using a drag-and-drop interface, create boards, workspaces, and lists, and collaborate on task organization.</p>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>User-friendly UI:</strong> A responsive and interactive interface for managing tasks.</li>
        <li><strong>Drag & Drop:</strong> Move cards between lists easily to manage task progress.</li>
        <li><strong>Card Creation:</strong> Add, edit, and delete cards with task details such as descriptions and due dates.</li>
        <li><strong>Board Customization:</strong> Create custom boards for different projects.</li>
        <li><strong>Mobile-Friendly:</strong> Fully responsive design for both desktop and mobile views.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Next.js:</strong> For server-side rendering, static site generation, and optimized performance.</li>
        <li><strong>React.js:</strong> For building the user interface.</li>
        <li><strong>Tailwind:</strong> For fast and customizable styling.</li>
        <li><strong>Axios:</strong> For making API requests to the backend.</li>
        <li><strong>PrimeReact:</strong> For implementing advanced components.</li>
        <li><strong>Recoil:</strong> For managing global state in React apps.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Feel free to submit issues and pull requests to improve the frontend.</p>
<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Github</h2>
<p style="line-height: 1.6;"><a href="https://github.com/rafael200021/daily_projects_frontend" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/daily_projects_frontend</a></p>
`,
      imagens: [
        "./images/Projeto6/pagina1.png",
        "./images/Projeto6/pagina2.png",
        "./images/Projeto6/pagina3.png",
        "./images/Projeto6/pagina4.png",
        "./images/Projeto6/pagina5.png",
        "./images/Projeto6/pagina6.png",
        "./images/Projeto6/pagina7.png",
        "./images/Projeto6/pagina8.png",
    
      ],
      linguagens: [
        "Next.js",
        "React.js",
        "Tailwind",
        "Axios",
        "PrimeReact",
        "Recoil",
      ],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/memorizacao-flashcard-api",
    },
    {
      titulo: "Daily Project Backend",
      descricao:
        "This is the backend for the Daily Projects project. It provides the API and business logic for managing boards, lists, and tasks. The backend handles user authentication, task creation, and database management for the frontend.",
      texto:  `
      <p style="line-height: 1.6;">This is the backend for the Daily Projects project. It provides the API and business logic for managing boards, lists, and tasks. The backend handles user authentication, task creation, and database management for the frontend.</p>
      
      <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
      <ul style="list-style-type: disc; margin-left: 20px;">
          <li><strong>RESTful API:</strong> Provides endpoints for managing cards, workspaces, boards, and users.</li>
          <li><strong>JWT Authentication:</strong> Secure authentication system for user login.</li>
          <li><strong>CRUD Operations:</strong> Create, read, update, and delete cards, workspaces, lists, and boards.</li>
          <li><strong>Database Management:</strong> Store all cards and user data in MariaDB.</li>
      </ul>
  
      <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
      <ul style="list-style-type: disc; margin-left: 20px;">
          <li><strong>C#:</strong> Language for building the application.</li>
          <li><strong>.NET Core:</strong> Web framework for handling API and services.</li>
          <li><strong>MariaDB:</strong> Database for storing user and card data.</li>
          <li><strong>Entity Framework Core:</strong> ORM library for MariaDB.</li>
          <li><strong>JWT:</strong> For secure user authentication and authorization.</li>
      </ul>
  
      <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
      <p style="line-height: 1.6;">Feel free to open issues or submit pull requests to improve the backend.</p>
<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Github</h2>
<p style="line-height: 1.6;"><a href="https://github.com/rafael200021/daily_projects_backend" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/daily_projects_backend</a></p>
`,
      imagens: [
        "./images/Projeto7/pagina1.png",
      ],
      linguagens: [
        "C#",
        ".NET Core",
        "MariaDB",
        "Entity Framework Core",
        "JWT",
      ],
      tipo: "Back-End",
      link: "https://github.com/rafael200021/daily_projects_backend",
    },
    {
      titulo: "Daily Log Frontend",
      descricao:
        "This is the frontend of the Daily Logs project. An intuitive application where users can log daily activities, save them, and create templates for repetitive tasks. The goal is to provide a seamless experience for tracking daily progress and organizing tasks efficiently.",
      texto:  `
    <p style="line-height: 1.6;">This is the frontend of the Daily Logs project. An intuitive application where users can log daily activities, save them, and create templates for repetitive tasks. The goal is to provide a seamless experience for tracking daily progress and organizing tasks efficiently.</p>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>User-friendly UI:</strong> Clean, modern, and interactive interface for logging and managing daily tasks.</li>
        <li><strong>Log Creation:</strong> Easily create daily logs with a simple and intuitive form.</li>
        <li><strong>Template Creation:</strong> Users can create templates for recurring logs, speeding up their workflow.</li>
        <li><strong>Real-Time Data:</strong> Provides instant feedback when logs are created, edited, or deleted.</li>
        <li><strong>Mobile-Friendly:</strong> Fully responsive design that works on both desktop and mobile devices.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Next.js:</strong> For server-side rendering, static site generation, and optimized performance.</li>
        <li><strong>React.js:</strong> For building dynamic and interactive user interfaces.</li>
        <li><strong>Tailwind:</strong> For efficient, customizable, and responsive styling.</li>
        <li><strong>Axios:</strong> To handle API requests for fetching and sending log data.</li>
        <li><strong>Shadcn:</strong> For UI components that are simple, fast, and highly customizable.</li>
        <li><strong>Lucide Icons:</strong> For beautiful and lightweight icons to enhance the UI experience.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Feel free to contribute by submitting issues or pull requests to improve the UI/UX and functionality.</p>
<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Github</h2>
<p style="line-height: 1.6;"><a href="https://github.com/rafael200021/daily_logs_frontend" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/daily_logs_frontend</a></p>
`,
      imagens: [
        "./images/Projeto8/pagina1.png",
        "./images/Projeto8/pagina2.png",
        "./images/Projeto8/pagina3.png",
        "./images/Projeto8/pagina4.png",
        "./images/Projeto8/pagina5.png",
        "./images/Projeto8/pagina6.png",
        "./images/Projeto8/pagina7.png",
        "./images/Projeto8/pagina8.png",
      ],
      linguagens: [
        "Next.js",
        "React.js",
        "Tailwind",
        "Axios",
        "Shadcn",
        "Lucide Icons",
      ],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/daily_logs_frontend",
    },
    {
      titulo: "Daily Log Backend",
      descricao:
        "This is the backend of the Daily Logs project. A robust system designed to store and manage daily logs and templates securely. The backend handles all requests from the frontend, including saving logs, fetching data, and managing templates, ensuring data persistence and scalability.",
      texto:  `
    <p style="line-height: 1.6;">This is the backend of the Daily Logs project. A robust system designed to store and manage daily logs and templates securely. The backend handles all requests from the frontend, including saving logs, fetching data, and managing templates, ensuring data persistence and scalability.</p>
    
    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Log Management:</strong> Handles the creation, editing, and deletion of daily logs efficiently.</li>
        <li><strong>Template Management:</strong> Supports template creation for recurring logs to save time and effort.</li>
        <li><strong>Secure Data Handling:</strong> Implements robust data security and validation to protect user data.</li>
        <li><strong>Database Management:</strong> Uses relational database architecture for optimal data storage and retrieval.</li>
        <li><strong>API Integration:</strong> Provides well-structured APIs to interact with the frontend in real-time.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Tech Stack</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>C#:</strong> For backend logic and handling requests efficiently.</li>
        <li><strong>.NET Core:</strong> For building scalable and high-performance backend services.</li>
        <li><strong>Entity Framework:</strong> For object-relational mapping (ORM) to simplify database interactions.</li>
        <li><strong>MariaDB:</strong> For reliable and scalable database storage.</li>
    </ul>

    <h2 style="font-weight:bold; font-size:20px; margin-top: 10px;margin-bottom: 10px;">Contributing</h2>
    <p style="line-height: 1.6;">Contributions are welcome for enhancing performance, adding new features, or improving code structure. Feel free to submit pull requests.</p>
<h2 style="font-weight: bold; font-size: 20px; margin-top: 10px; margin-bottom: 10px;">Github</h2>
<p style="line-height: 1.6;"><a href="https://github.com/rafael200021/daily_logs_backend" target="_blank" style="color: #4A90E2;">https://github.com/rafael200021/daily_logs_backend</a></p>
`,
      imagens: [
        "./images/Projeto9/pagina1.png",
      ],
      linguagens: [
        "Next.js",
        "React.js",
        "Tailwind",
        "Axios",
        "Shadcn",
        "Lucide Icons",
      ],
      tipo: "Front-End",
      link: "https://github.com/rafael200021/daily_logs_frontend",
    },
  ];
