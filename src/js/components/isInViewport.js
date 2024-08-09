export function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  const top = rect.top + offset;
  const left = rect.left + offset;
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const belowViewport = 0;
  const verticalInView =
    top <= windowHeight && top + rect.height >= belowViewport;
  const horizontalInView =
    left <= windowWidth && left + rect.width >= belowViewport;
  return verticalInView && horizontalInView;
}
