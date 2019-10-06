function toggleContent(evt, content = "") {
  var i, tabContent, tabLinks;
  // Get all elements with class="tabContent" and hide them
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all elements with class="tabLinks" and remove the class "active"
  tabLinks = document.getElementsByClassName("tabLinks");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  if (document.getElementById(content) !== "about") {
    document.getElementById("about").style.display = "none";
  }
  document.getElementById(content).style.display = "block";
  evt.currentTarget.className += " active";
}
