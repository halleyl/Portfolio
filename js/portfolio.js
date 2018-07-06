let slides = [
  {
    title: "Florida Energy Systems Consortium",
    screenshot: "images/fesc.jpg",
    text: "Assignment for UW Certificate program. Redesign and reorganization of <a href='http://floridaenergy.ufl.edu/' target='_blank'>existing website</a>, incorportating clear information architecture and good user flow.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
          <li>Vue.js framework</li>
          <li>Google Charts API</li>`,
    thumbId: "fesc",
    colorThumb: "images/thumb-fesc.jpg",
    bwThumb: "images/bw-fesc.jpg"
  },{
    title: "Winter Wear Warehouse",
    screenshot: "images/www.jpg",
    text: "Assignment for UW Certificate program. Create simple eCommerce website based on graphic mockups.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>`,
    thumbId: "www",
    colorThumb: "images/thumb-www.jpg",
    bwThumb: "images/bw-www.jpg"
 },{
    title: "Adventure Game",
    screenshot: "images/adventure.jpg",
    text: "Assignment for UW Certificate program.",
    list: `<li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>`,
    thumbId: "adv",
    colorThumb: "images/thumb-adv.jpg",
    bwThumb: "images/bw-adv.jpg"
  },{
    title: "Straight to the Point Archery",
    screenshot: "images/stp.jpg",
    text: "Group project for UW Certificate program.",
    list: `<li>HTML5</li>
          <li>CSS3</li>`,
    thumbId: "stp",
    colorThumb: "images/thumb-stp.jpg",
    bwThumb: "images/bw-stp.jpg"
  },{
    title: "Technical Feasibility Review",
    screenshot: "images/tfr.jpg",
    text: "Assignment for UW Certificate program.",
    list: `<li>Markdown</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>`,
    thumbId: "tfr",
    colorThumb: "images/thumb-tfr.jpg",
    bwThumb: "images/bw-tfr.jpg"
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

  // Remove active state from any active thumbnails
  var inactiveThumb = document.getElementsByClassName("thumbact")[0]

  if(inactiveThumb) {
    inactiveThumb.setAttribute("class","thumb")
  }

  // Set active thumbnail image
  var activeThumb = document.getElementById(slides[x].thumbId)
  activeThumb.setAttribute("class","thumbact")
}