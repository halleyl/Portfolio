let slides = [
  {
    title: "Florida Energy Systems Consortium",
    screenshot: "images/fesc.jpg",
    text: "I was tasked with redesigning and reorganizing an <a href='http://floridaenergy.ufl.edu/' target='_blank'>existing website</a>, incorportating clear information architecture, responsivity and intuitive user flow. I designed the Home, Education, and Industry pages, as well as an Energy Data sub-page using Google Charts API.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>Vue.js framework</li>
          <li>Google Charts API</li>`,
    thumbId: "fesc",
    project: "https://halleyl.github.io/florida-energy/",
    repo: "https://github.com/halleyl/florida-energy/tree/gh-pages"
  },{
    title: "Winter Wear Warehouse",
    screenshot: "images/www.jpg",
    text: "I created a simple, responsive e-commerce website layout based on provided graphic mockups for <a href='https://github.com/halleyl/html200-ecommerce-project/raw/master/images/mock-1100px.png' target='_blank'>desktop</a> and <a href='https://github.com/halleyl/html200-ecommerce-project/raw/master/images/mock-320px.png' target='_blank'>mobile</a> displays. I incorporated a JavaScript 'Add to Cart' button, which reports the number of products and shopping cart total to the console.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "www",
    project: "https://halleyl.github.io/html200-ecommerce-project/",
    repo: "https://github.com/halleyl/html200-ecommerce-project/tree/gh-pages"
 },{
    title: "Adventure Game",
    screenshot: "images/adventure.jpg",
    text: "For this project, I designed a Battleship style game with the hidden &lsquo;prize&rsquo; at a randomized location. I used conditional statements to ensure that the prize is not located in the starting square, to notify the user when they try to move outside of the grid, and to let them know when they've won.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "adv",
    project: "https://halleyl.github.io/adventure/",
    repo: "https://github.com/halleyl/adventure"
  },{
    title: "Straight to the Point Archery",
    screenshot: "images/stp.jpg",
    text: "I collaborated with three classmates who were new to HTML and CSS, to design a website for a fictional archery school. I was responsible for the site's About and Instructors pages, as well as the footer layout.",
    list: `<li>HTML5</li>
          <li>CSS3</li>`,
    thumbId: "stp",
    project: "https://halleyl.github.io/stp-archery/about.html",
    repo: "https://github.com/halleyl/stp-archery/tree/gh-pages"
  },{
    title: "Technical Feasibility Review",
    screenshot: "images/tfr.jpg",
    text: "I was presented with 3 potential design choices, and asked to evaluate the time needed to complete them, their feasibility as design choices, and how I would go about accomplishing the task on a high level. I chose to include links to simple proof-of-concept pages which I created to demonstrate viability. An industry professional used my document as an example of best practices in technical feasiblity reporting.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "tfr",
    project: "https://github.com/halleyl/tech-feas/blob/gh-pages/technical-feasibility-review.pdf",
    repo: "https://github.com/halleyl/tech-feas"
  },{
    title: "Barefoot Yoga Email",
    screenshot: "images/email1.jpg",
    text: "I created this email layout in Photoshop and coded it in MailChimp for distribution to wholesale customers.",
    list: `<li>HTML5</li>
          <li>CSS3</li>`,
    thumbId: "em1",
    project: "https://raw.githubusercontent.com/halleyl/portfolio/gh-pages/images/email1-full.jpg",
    repo: "https://raw.githubusercontent.com/halleyl/portfolio/gh-pages/images/email1-full.jpg"
  },{
    title: "Barefoot Yoga Email",
    screenshot: "images/email2.jpg",
    text: "I created this email layout in Photoshop and coded it in MailChimp for distribution to retail clothing customers.",
    list: `<li>HTML5</li>
          <li>CSS3</li>`,
    thumbId: "em2",
    project: "https://raw.githubusercontent.com/halleyl/portfolio/gh-pages/images/email2-full.jpg",
    repo: "https://raw.githubusercontent.com/halleyl/portfolio/gh-pages/images/email2-full.jpg"
  },{
    title: "Borkcode",
    screenshot: "images/bork.jpg",
    text: "I designed and developed a prototype website for a service that locates the owners of lost dogs. Using Vue.js, each dog can be looked up with a unique ID which will populate their information. JavaScript conditionals ensure that entry errors are handled and communicated. (Note: To test this site, please enter a Dog ID number between 1-5 on the landing page.)",
    list: `<li>Logo design</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Vue.js</li>`,
    thumbId: "bork",
    project: "https://borkcode.com/",
    repo: "https://github.com/halleyl/borkcode"
  },{
    title: "Parallax Animation",
    screenshot: "images/stroll.jpg",
    text: "I used CSS and Javascript to create a side-scrolling parallax animation with user interactions, allowing our dog hero to go for a stroll in the countryside. The animations can be controlled with the simple slide-out control panel or with keyboard shortcuts. CSS image preloads keep everything rendering smoothly.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "stroll",
    project: "https://halleyl.github.io/animation/",
    repo: "https://github.com/halleyl/animation"
  },{
    title: "Voult Consulting Group",
    screenshot: "images/voult.jpg",
    text: "I designed and developed a prototype website for a consulting group. Using mobile first design and progressive enhancement, this website scales responsively. A simple hamburger menu is available on smaller screens for easy navigation. The index page includes parallax scrolling backgrounds, and the clients page displays a Bootstrap carousel component.",
    list: `<li>Logo design</li>
          <li>Sketch</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>`,
    thumbId: "voult",
    project: "https://halleyl.github.io/voult/",
    repo: "https://github.com/halleyl/voult"
  }
]

function drawSlide(x) {
  // Load project image
  var image = document.getElementById("projPic")
  image.src = slides[x].screenshot
  image.alt = slides[x].title
  // Load project title
  var title = document.getElementById("projName")
  title.innerHTML = slides[x].title
  // Load project description
  var desc = document.getElementById("projDesc")
  desc.innerHTML = slides[x].text
  // Load project list of skills
  var skills = document.getElementById("skillList")
  skills.innerHTML = slides[x].list
  // Load link to project
  var project = document.getElementById("projLink")
  project.href = slides[x].project
  // Load link to project (for main image)
  var imageLink = document.getElementById("imgLink")
  imageLink.href = slides[x].project
  // Load link to repo
  var repo = document.getElementsByClassName("repoLink")
  repo[0].href = slides[x].repo

  // Remove active state from any active thumbnails
  var inactiveThumb = document.getElementsByClassName("thumbact")[0]

  if(inactiveThumb) {
    inactiveThumb.setAttribute("class","thumb")
  }
  
  // Remove Repo link for thumbs where it doesn't apply
  
  var noRepo = document.getElementsByClassName("repoLink")
  
  if(x == 5 || x == 6) {
    noRepo[0].classList.add("hide")
    // console.log(noRepo.classList)
  } else if(noRepo[0].classList.contains("hide")) {
    noRepo[0].classList.remove("hide")
  }

  // Set active thumbnail image
  var activeThumb = document.getElementById(slides[x].thumbId)
  activeThumb.setAttribute("class","thumbact")
}