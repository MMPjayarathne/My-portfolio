// script.js
/*function smoothScroll(target) {
    const headerHeight = document.getElementById("header").offsetHeight;
    const element = document.querySelector(target);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerHeight;
  
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navbar ul li a.nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetSection = link.getAttribute("href");
        smoothScroll(targetSection);
      });
    });
  });
*/
  function myFunction(hiddenDiv) {
    
    var x = document.getElementById(hiddenDiv);
    console.log(x)
    if (x.style.display === "none") {
     
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function downloadFile(filename) {
    // Construct the file path for the download
    const filePath = `../My portfolio/assets/files/${filename}`;
  
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = filePath;
  
    // Set the download attribute to force download the file with the specified name
    link.download = filename;
  
    // Append the link to the body and click it programmatically
    document.body.appendChild(link);
    link.click();
  
    // Remove the link from the body
    document.body.removeChild(link);
  }
  
  function viewFile(filename) {
    // Construct the file path for the view
    const filePath = `../My portfolio/assets/files/${filename}`;
  
    // Open the file in a new window or tab
    window.open(filePath, '_blank');
  }
  
  

