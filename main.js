// Load Header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Reinitialize dropdowns after inserting the header
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(triggerEl => {
      new bootstrap.Dropdown(triggerEl);
    });

    // Optional: hover effect for large screens
    if (window.innerWidth >= 992) {
      document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseover', () => {
          const toggle = dropdown.querySelector('.dropdown-toggle');
          const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
          instance.show();
        });
        dropdown.addEventListener('mouseleave', () => {
          const toggle = dropdown.querySelector('.dropdown-toggle');
          const instance = bootstrap.Dropdown.getOrCreateInstance(toggle);
          instance.hide();
        });
      });
    }
  });

// Load Footer
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
  });


  



  
