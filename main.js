document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu code (only runs if elements exist)
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        menu.addEventListener('click', event => {
            if (event.target.tagName === 'A') {
                hamburger.classList.remove('active');
                menu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }


    // Select all thumbnails
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    thumbnails.forEach(function(thumbnail) {
        // Get the number from the ID (e.g. '1' from 'galleryThumbnail1')
        const num = thumbnail.id.replace('galleryThumbnail', '');
        const grid = document.getElementById('galleryGrid' + num);
        if (grid) {
            thumbnail.addEventListener('click', function() {
                thumbnail.style.display = 'none';
                grid.style.display = 'grid';
            });
            // Optional: click grid to close and show thumbnail again
            grid.addEventListener('click', function() {
                grid.style.display = 'none';
                thumbnail.style.display = 'block';
            });
        }
    });

   const uiuxBtn = document.getElementById('uiuxBtn');
    const frontendBtn = document.getElementById('frontendBtn');
    const uiuxIcons = document.querySelector('.uiux-icons');
    const frontendIcons = document.querySelector('.frontend-icons');

    if (uiuxBtn && frontendBtn && uiuxIcons && frontendIcons) {
        uiuxBtn.addEventListener('click', function() {
            uiuxIcons.style.display = 'grid';
            frontendIcons.style.display = 'none';
            uiuxBtn.classList.add('active');
            frontendBtn.classList.remove('active');
        });
        frontendBtn.addEventListener('click', function() {
            frontendIcons.style.display = 'grid';
            uiuxIcons.style.display = 'none';
            frontendBtn.classList.add('active');
            uiuxBtn.classList.remove('active');
        });
    }

  const sections = [
    { id: "aboutme", linkId: "aboutmeLink" },
    { id: "projects", linkId: "projectsLink" },
    { id: "tools", linkId: "contactmeLink" }
  ];

  function onScroll() {
    const scrollY = window.scrollY + 150; // offset to trigger slightly earlier

    sections.forEach(({ id, linkId }) => {
      const section = document.getElementById(id);
      const link = document.getElementById(linkId);

      if (!section || !link) return;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("load", onScroll);

});
