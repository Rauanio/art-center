document.querySelectorAll('.rolling-svg').forEach(element => {
    const svg = element.querySelector('svg');
    if (svg) {
      const svgHTML = svg.outerHTML;
      element.innerHTML = '';
  
      const wrapper = document.createElement('div');
      wrapper.classList.add('rolling__svg-wrapper');
  
      for (let i = 0; i < 2; i++) {
        const block = document.createElement('div');
        block.classList.add('rolling__svg-block');
        block.innerHTML = svgHTML;
        wrapper.appendChild(block);
      }
  
      element.appendChild(wrapper);
    }
  });
  