import { isInViewport } from './isInViewport';

document.addEventListener('DOMContentLoaded', () => {
  const openCenterDrawerButtons =
    document.querySelectorAll('#openCenterDrawer');
  const centerDrawer = document.querySelectorAll('.center__drawer');
  const centerDrawerOverlay = document.querySelectorAll(
    '.center__drawer-overlay'
  );
  const centerDrawerContent = document.querySelectorAll(
    '.center__drawer-content'
  );
  const centerDrawerIcon = document.querySelectorAll('.center__drawer-header');
  const drawerItems = document.querySelectorAll('.center__drawer-item');
  const drawerTriggerTitle = document.querySelector('.category__drawer-title');
  const header = document.querySelector('.header');
  const pageCategoryBlocks = document.querySelectorAll('.page__category-block');

  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  let headerHeight = header.getBoundingClientRect().height;

  // window.addEventListener('DOMContentLoaded', () => {
  //   const drawer = document.querySelector('.drawer');
  //   if (drawer) {
  //     console.log('Drawer found, adding transition class.');
  //     drawer.classList.add('drawer--transition');
  //   } else {
  //     console.error('Drawer not found.');
  //   }
  // });

  const onOpenDrawer = () => {
    centerDrawer.forEach((drawer) => {
      drawer.classList.add('center__drawer-show');
    });
    document.body.classList.add('no-scroll');
    centerDrawerContent.forEach((content) => {
      content.style.transform = 'translateY(0%)';
    });
  };

  const onCloseDrawer = () => {
    centerDrawer.forEach((drawer) => {
      drawer.classList.remove('center__drawer-show');
    });
    document.body.classList.remove('no-scroll');
    centerDrawerContent.forEach((content) => {
      content.style.transform = 'translateY(100%)';
    });
  };

  const onStartDragging = (e) => {
    isDragging = true;
    console.log(e.touches);
    startY = e.clientY || e.touches?.[0].clientY;
    centerDrawerContent.forEach((content) => {
      content.style.transition = 'none';
    });
    document.body.style.userSelect = 'none';
  };

  const onDragging = (e) => {
    if (!isDragging) return;

    currentY = (e.clientY || e.touches[0].clientY) - startY;

    if (currentY > 0) {
      centerDrawerContent.forEach((content) => {
        content.style.transform = `translateY(${currentY}px)`;
      });
    }
  };

  const onStopDragging = () => {
    if (!isDragging) return;
    isDragging = false;

    centerDrawerContent.forEach((content) => {
      content.style.transition = '';
    });

    if (currentY > 100) {
      onCloseDrawer();
    } else {
      centerDrawerContent.forEach((content) => {
        content.style.transform = 'translateY(0)';
      });
    }

    document.body.style.userSelect = '';
  };

  const onItemClicked = (e) => {
    e.preventDefault();

    const clickedItemName = e.currentTarget.getAttribute('data-name');
    const targetElement = document.getElementById(clickedItemName);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }

    drawerTriggerTitle.textContent = clickedItemName;
    onCloseDrawer();
  };

  window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      // Hide all the openCenterDrawer buttons
      openCenterDrawerButtons.forEach((button) => {
        button.style.transform = 'translateY(100%)';
        button.style.opacity = '0';
        button.style.pointerEvents = 'none';
      });
    } else {
      // Show the buttons when not at the bottom of the page
      openCenterDrawerButtons.forEach((button) => {
        button.style.transform = 'translateY(0)';
        button.style.opacity = '1';
        button.style.pointerEvents = 'auto';
      });

      // Continue updating the drawer trigger title
      pageCategoryBlocks.forEach((category) => {
        if (isInViewport(category, -headerHeight)) {
          const categoryId = category.getAttribute('id');

          if (drawerTriggerTitle) {
            drawerTriggerTitle.textContent = categoryId;
          }
        }
      });
    }
  });

  document.addEventListener('mouseup', onStopDragging);
  document.addEventListener('mousemove', onDragging);
  centerDrawerIcon?.forEach((icon) => {
    icon.addEventListener('mousedown', onStartDragging);
  });

  document.addEventListener('touchend', onStopDragging);
  document.addEventListener('touchmove', onDragging);
  centerDrawerIcon?.forEach((icon) => {
    icon.addEventListener('touchstart', onStartDragging);
  });

  openCenterDrawerButtons.forEach((openBtn) => {
    openBtn.addEventListener('click', onOpenDrawer);
  });

  centerDrawerOverlay?.forEach((overlay) => {
    overlay.addEventListener('click', onCloseDrawer);
  });

  if (drawerTriggerTitle) {
    drawerItems.forEach((item) => {
      item.addEventListener('click', onItemClicked);
    });
  }
});
