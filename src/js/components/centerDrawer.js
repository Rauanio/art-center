const openCenterDrawerButtons = document.querySelectorAll('#openCenterDrawer');
const centerDrawer = document.querySelectorAll('.center__drawer');
const centerDrawerOverlay = document.querySelectorAll(
  '.center__drawer-overlay'
);
const centerDrawerContent = document.querySelectorAll(
  '.center__drawer-content'
);
const centerDrawerIcon = document.querySelectorAll('.center__drawer-header');

let startY = 0;
let currentY = 0;
let isDragging = false;
// const isDrawer = window.innerWidth < 1440;

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
