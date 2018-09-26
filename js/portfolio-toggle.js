// Set variables for toggle elements
var toggleContainer = document.querySelector("#toggle")
var toggleButton = document.querySelector("#toggle img")
var toggleText = document.querySelector("#toggle p")
var currentStyle = document.querySelector("link:last-of-type")
var currentMainStyle = document.querySelector("link:nth-of-type(6)")

// Empty var for currently chosen site style
var styleChosen

// Add tooltip for hover over toggle
toggleContainer.addEventListener("mouseover", tooltip, false)
toggleContainer.addEventListener("mouseout", tipOff, false)

// Set variables for tooltip elements
var ttBox = document.createElement("div")
var ttText = document.createTextNode("Click the toggle to change the site's style!")

// When the toggle is moused over, create & display the tooltip
function tooltip() {
  ttBox.setAttribute("id", "tooltip")
  ttBox.appendChild(ttText)
  toggleContainer.appendChild(ttBox)
}

// When the toggle is moused out, remove the tooltip
function tipOff() {
  toggleContainer.removeChild(ttBox)
  ttBox.removeChild(ttText)
}

// Check to see if a stylesheet was already chosen by user
if (localStorage.getItem("sheet") === "retro") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Make sure the correct stylesheet is in effect
  currentStyle.setAttribute("href", "styles/stylesheet.css")
  currentMainStyle.setAttribute("href", "styles/portfolio.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-2.png")
  // Update button text
  toggleText.innerHTML = "Go Pro &#8702;"
} else if (localStorage.getItem("sheet") === "profesh") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Log it for testing
  currentStyle.setAttribute("href", "styles/stylesheet-alt.css")
  currentMainStyle.setAttribute("href", "styles/portfolio-alt.css")
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
  currentMainStyle.setAttribute("href", "styles/portfolio.css")
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
    currentMainStyle.setAttribute("href", "styles/portfolio-alt.css")
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
    currentMainStyle.setAttribute("href", "styles/portfolio.css")
    // Make sure the correct toggle image is displayed
    toggleButton.setAttribute("src", "images/toggle-2.png")
    // Update button text
    toggleText.innerHTML = "Go Pro &#8702;"
  }
}
