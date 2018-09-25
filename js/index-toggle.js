var toggleContainer = document.querySelector("#toggle")
var toggleButton = document.querySelector("#toggle img")
var toggleText = document.querySelector("#toggle p")
var currentStyle = document.querySelector("link:last-of-type")

var styleChosen

// Check to see if a stylesheet was already chosen by user
if (localStorage.getItem("sheet") === "retro") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Log it for testing
  console.log("Already had a style chosen: " + styleChosen)
  // Make sure the correct stylesheet is in effect
  currentStyle.setAttribute("href", "styles/index.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-2.png")
  // Update button text
  toggleText.innerHTML = "Go Pro &#8702;"
} else if (localStorage.getItem("sheet") === "profesh") {
  // Set styleChosen variable to current sheet value
  styleChosen = localStorage.getItem("sheet")
  // Log it for testing
  console.log("Already had a style chosen: " + styleChosen)
  // Make sure the correct stylesheet is in effect
  currentStyle.setAttribute("href", "styles/index-alt.css")
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
  console.log("Added new style choice: " + styleChosen)
  // Make sure the correct stylesheet is in effect
  currentStyle.setAttribute("href", "styles/index.css")
  // Make sure the correct toggle image is displayed
  toggleButton.setAttribute("src", "images/toggle-2.png")
  // Update button text
  toggleText.innerHTML = "Go Pro &#8702;"
}

toggleContainer.addEventListener("mouseover", tooltip, false)

function tooltip() {
  // TODO: set up a tooltip
}

toggleContainer.addEventListener("click", styleToggle, false)

// Toggle stylesheet, button & text when button is clicked
function styleToggle() {
  if (localStorage.getItem("sheet") === "retro") {
  // Set styleChosen variable to profesh sheet value
    localStorage.setItem("sheet", "profesh")
    // Set styleChosen variable to current sheet value
    styleChosen = localStorage.getItem("sheet")
    // Log it for testing
    console.log("Changed style choice: " + styleChosen)
    currentStyle.setAttribute("href", "styles/index-alt.css")
    // Make sure the correct toggle image is displayed
    toggleButton.setAttribute("src", "images/toggle-1.png")
    // Update button text
    toggleText.innerHTML = "&#8678; Go Retro"
  } else if (localStorage.getItem("sheet") === "profesh") {
    // Set styleChosen variable to retro sheet value
    localStorage.setItem("sheet", "retro")
    // Set styleChosen variable to current sheet value
    styleChosen = localStorage.getItem("sheet")
    // Log it for testing
    console.log("Changed style choice: " + styleChosen)
    currentStyle.setAttribute("href", "styles/index.css")
    // Make sure the correct toggle image is displayed
    toggleButton.setAttribute("src", "images/toggle-2.png")
    // Update button text
    toggleText.innerHTML = "Go Pro &#8702;"
  }
}
