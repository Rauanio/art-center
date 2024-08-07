window.addEventListener('DOMContentLoaded', () => {
  const openDrawerButtons = document.querySelectorAll('.openDrawer');
  const drawer = document.querySelector('.drawer');
  const drawerOverlay = document.querySelector('.drawer__overlay');
  const drawerContent = document.querySelector('.drawer__content');
  const drawerIcon = document.querySelector('.drawer__content-header');

  let startY = 0;
  let currentY = 0;
  let isDragging = false;
  const isDrawer = window.innerWidth < 1440;
  console.log(isDrawer, 'Inner Width');

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
    drawer.classList.add('drawer__show');
    document.body.classList.add('no-scroll');
    drawerContent.style.transform = 'translateY(0%)';
  };

  const onCloseDrawer = () => {
    drawer.classList.remove('drawer__show');
    document.body.classList.remove('no-scroll');
    drawerContent.style.transform = 'translateY(100%)';
  };

  const onStartDragging = (e) => {
    isDragging = true;
    startY = e.clientY || e.touches?.[0].clientY;
    console.log(e.touches);
    drawerContent.style.transition = 'none';
    document.body.style.userSelect = 'none';
  };

  const onDragging = (e) => {
    if (!isDragging) return;

    currentY = (e.clientY || e.touches[0].clientY) - startY;

    if (currentY > 0) {
      drawerContent.style.transform = `translateY(${currentY}px)`;
    }
  };

  const onStopDragging = () => {
    if (!isDragging) return;
    isDragging = false;
    drawerContent.style.transition = '';

    if (currentY > 100) {
      onCloseDrawer();
    } else {
      drawerContent.style.transform = 'translateY(0)';
    }

    document.body.style.userSelect = '';
  };

  document.addEventListener('mouseup', onStopDragging);
  document.addEventListener('mousemove', onDragging);
  drawerIcon?.addEventListener('mousedown', onStartDragging);

  document.addEventListener('touchend', onStopDragging);
  document.addEventListener('touchmove', onDragging);
  drawerIcon?.addEventListener('touchstart', onStartDragging);

  if (isDrawer) {
    openDrawerButtons.forEach((openButton) => {
      openButton.addEventListener('click', onOpenDrawer);
    });
  }

  drawerOverlay?.addEventListener('click', onCloseDrawer);
});
