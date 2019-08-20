export const keyBindForFocus = e => {
  switch (e.keyCode) {
    case 68:
      e.preventDefault();
      document.getElementsByClassName("datepicker")[0].focus();
      break;
    case 27:
      break;
    case 37:
      break;
    case 38:
      break;
    case 39:
      break;
    case 40:
      break;
    case 123:
      break;
    default:
      e.preventDefault();
      break;
  }
};
