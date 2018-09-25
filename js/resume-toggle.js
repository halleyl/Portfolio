var toggleContainer = document.querySelector("#toggle")
var toggleButton = document.querySelector("#toggle img")
var toggleText = document.querySelector("#toggle p")
var currentStyle = document.querySelector("link:nth-of-type(6)")
var currentMainStyle = document.querySelector("link:nth-of-type(7)")

var styleChosen

// Check to see if a stylesheet was already chosen by user
if (localStorage.getItem("sheet") === "retro") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Make sure the correct stylesheet is in effect
  currentStyle.setAttribute("href", "styles/stylesheet.css")
  currentMainStyle.setAttribute("href", "styles/resume.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-2.png")
  // Update button text
  toggleText.innerHTML = "Go Pro &#8702;"
} else if (localStorage.getItem("sheet") === "profesh") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Log it for testing
  currentStyle.setAttribute("href", "styles/stylesheet-alt.css")
  currentMainStyle.setAttribute("href", "styles/resume-alt.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-1.png")
  // Update button text
  toggleText.innerHTML = "&#8678; Go Retro"
} else {
  // If no style is pre-selected, use retro
  localStorage.setItem("sheet", "retro")
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet", "retro")
  // Log it for testing
  currentStyle.setAttribute("href", "styles/stylesheet.css")
  currentMainStyle.setAttribute("href", "styles/resume.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-2.png")
  // Update button text
  toggleText.innerHTML = "Go Pro &#8702;"
}

toggleContainer.addEventListener("click", styleToggle, false)

// Toggle stylesheet, button & text when button is clicked
function styleToggle() {
  if (localStorage.getItem("sheet") === "retro") {
  // Set styleChosen variable to profesh sheet value
    localStorage.setItem("sheet", "profesh")
    // Set styleChosen variable to current sheet value
    styleChosen = localStorage.getItem("sheet")
    currentStyle.setAttribute("href", "styles/stylesheet-alt.css")
    currentMainStyle.setAttribute("href", "styles/resume-alt.css")
    // Make sure the correct toggle image is displayed
    toggleButton.setAttribute("src", "images/toggle-1.png")
    // Update button text
    toggleText.innerHTML = "&#8678; Go Retro"
  } else if (localStorage.getItem("sheet") === "profesh") {
    // Set styleChosen variable to retro sheet value
    localStorage.setItem("sheet", "retro")
    // Set styleChosen variable to current sheet value
    styleChosen = localStorage.getItem("sheet")
    currentStyle.setAttribute("href", "styles/stylesheet.css")
    currentMainStyle.setAttribute("href", "styles/resume.css")
    // Make sure the correct toggle image is displayed
    toggleButton.setAttribute("src", "images/toggle-2.png")
    // Update button text
    toggleText.innerHTML = "Go Pro &#8702;"
  }
}
