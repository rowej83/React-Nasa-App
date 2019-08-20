export const keyBindForFocus = e => {
  switch (e.keyCode) {
    case 68:
      e.preventDefault();
      document.getElementsByClassName("datepicker")[0].focus();
      break;
    case 27:
      break;
    case 123:
      break;
    default:
      e.preventDefault();
      break;
  }
};
