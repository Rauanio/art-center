// document.addEventListener('DOMContentLoaded', () => {
//   function updateComponent() {
//     const width = window.innerWidth;
//     const appElement = document.querySelector('.'); // Adjust selector as needed
//     const modalElement = document.querySelector('.modal');
//     const drawerElement = document.querySelector('.drawer');

//     console.log('App Element:', appElement);
//     console.log('Modal Element:', modalElement);
//     console.log('Drawer Element:', drawerElement);


//     if (appElement) {
//       if (width < 1440) {
//         appElement.classList.add('openModal');
//         appElement.classList.remove('openDrawer');
//         if (drawerElement) {
//           drawerElement.style.display = 'none';
//         }
//       } else {
//         appElement.classList.add('openDrawer');
//         appElement.classList.remove('openModal');
//         if (modalElement) {
//           modalElement.style.display = 'none';
//         }
//       }
//     }
//   }

//   const dr = document.querySelector('.openDrawer');

//   console.log(dr, 'DR ');

//   // Initial check
//   updateComponent();

//   // Listen for resize events
//   window.addEventListener('resize', updateComponent);
// });
