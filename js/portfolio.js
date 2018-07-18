let slides = [
  {
    title: "Florida Energy Systems Consortium",
    screenshot: "images/fesc.jpg",
    text: "Assignment for UW Certificate program. Redesign and reorganization of <a href='http://floridaenergy.ufl.edu/' target='_blank'>existing website</a>, incorportating clear information architecture, responsivity and intuitive user flow. I designed the Home, Education, and Industry pages, as well as an Energy Data sub-page using Google Charts API.",
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
    text: "Assignment for UW Certificate program. Create simple, responsive eCommerce website layout based on provided graphic mockups for <a href='https://github.com/halleyl/html200-ecommerce-project/blob/master/images/mock-1100px.png' target='_blank'>desktop</a> and <a href='https://github.com/halleyl/html200-ecommerce-project/blob/master/images/mock-320px.png' target='_blank'>mobile</a> displays.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "www",
    project: "https://halleyl.github.io/html200-ecommerce-project/",
    repo: "https://github.com/halleyl/html200-ecommerce-project/tree/gh-pages"
 },{
    title: "Adventure Game",
    screenshot: "images/adventure.jpg",
    text: "Assignment for UW Certificate program. Create a Battleship style game with the hidden &lsquo;prize&rsquo; at a randomized location.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "adv",
    project: "https://halleyl.github.io/adventure/",
    repo: "https://github.com/halleyl/adventure"
  },{
    title: "Straight to the Point Archery",
    screenshot: "images/stp.jpg",
    text: "Group project for UW Certificate program. Design a website for a fictional archery school in collaboration with 3 classmates. I was responsible for the site's About and Instructors pages, as well as  header and footer layouts.",
    list: `<li>HTML5</li>
          <li>CSS3</li>`,
    thumbId: "stp",
    project: "https://halleyl.github.io/stp-archery/",
    repo: "https://github.com/halleyl/stp-archery/tree/gh-pages"
  },{
    title: "Technical Feasibility Review",
    screenshot: "images/tfr.jpg",
    text: "Assignment for UW Certificate program. We were presented with 3 potential design choices, and were asked to evaluate the time needed to complete them, their feasibility as design choices, and how we would go about accomplishing the task on a high level. I included links to simple proof-of-concept pages that I created to demonstrate viability.",
    list: `<li>Markdown</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>`,
    thumbId: "tfr",
    project: "https://github.com/halleyl/tech-feas/blob/gh-pages/technical-feasibility-review.pdf",
    repo: "https://github.com/halleyl/tech-feas"
  },{
    title: "Barefoot Yoga Email",
    screenshot: "images/email1.jpg",
    text: "Marketing email for Barefoot Yoga Company. I created this email layout in Photoshop and coded it in MailChimp for distribution to wholesale customers.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>Photoshop</li>`,
    thumbId: "em1",
    project: "https://github.com/halleyl/portfolio/blob/gh-pages/images/email1-full.jpg",
    repo: "https://github.com/halleyl/portfolio/blob/gh-pages/images/email1-full.jpg"
  },{
    title: "Barefoot Yoga Email",
    screenshot: "images/email2.jpg",
    text: "Marketing email for Barefoot Yoga Company. I created this email layout in Photoshop and coded it in MailChimp for distribution to retail clothing customers.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>Photoshop</li>`,
    thumbId: "em2",
    project: "https://github.com/halleyl/portfolio/blob/gh-pages/images/email2-full.jpg",
    repo: "https://github.com/halleyl/portfolio/blob/gh-pages/images/email2-full.jpg"
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
  // Load link to repo
  var repo = document.getElementById("repoLink")
  repo.href = slides[x].repo

  // Remove active state from any active thumbnails
  var inactiveThumb = document.getElementsByClassName("thumbact")[0]

  if(inactiveThumb) {
    inactiveThumb.setAttribute("class","thumb")
  }
  
  // Remove Repo link for thumbs where it doesn't apply
  
  var noRepo = document.getElementById("repoLink")
  
  if(x == 5 || x == 6) {
    noRepo.classList.add("hide")
    // console.log(noRepo.classList)
  } else if(noRepo.classList.contains("hide")) {
    noRepo.classList.remove("hide")
  }

  // Set active thumbnail image
  var activeThumb = document.getElementById(slides[x].thumbId)
  activeThumb.setAttribute("class","thumbact")
}