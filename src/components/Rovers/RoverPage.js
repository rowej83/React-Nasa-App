import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RoverDetailFactory from "./RoverDetailFactory";
import RoverHeader from "./RoverHeader";

import { getImagesByDate } from "./../../tools/nasa-api";
import { keyBindForFocus } from "./../../tools/helpers";

const RoverPage = () => {
  const [date, setDate] = React.useState(new Date());
  const [imageArray, setImageArray] = React.useState([]);
  const [isEmptyResult, setIsEmptyResult] = React.useState();
  const [isInitialLoad, setIsInitialLoad] = React.useState(true);
  const datePickerRef = React.useRef();

  React.useEffect(() => {
    document.addEventListener("keydown", keyBindForFocus);
    return () => {
      document.removeEventListener("keydown", keyBindForFocus);
    };
  });
  React.useEffect(() => {
    if (isInitialLoad !== true) {
      updateDate();
    }
    setImageArray([]);
  }, [date]);
  const updateDate = async () => {
    let newImageArray = await getImagesByDate(date);
    console.log("new image array", newImageArray);
    newImageArray.length === 0
      ? setIsEmptyResult(true)
      : setIsEmptyResult(false);
    setImageArray(newImageArray);
  };
  return (
    <>
      <RoverHeader />
      <DatePicker
        ref={ref => (datePickerRef.current = ref)}
        className="datepicker"
        selected={date}
        maxDate={new Date()}
        withPortal
        showYearDropdown
        showMonthDropdown
        dateFormatCalendar="MMMM"
        scrollableYearDropdown
        yearDropdownItemNumber={15}
        onChange={async newDate => {
          setDate(newDate);
          setIsInitialLoad(false);
        }}
      />
      {isEmptyResult === true && (
        <p className="empty-result">
          No images available for the chosen date. Please try again.
        </p>
      )}

      <RoverDetailFactory imageArray={imageArray} name={"Curiosity"} />
      <RoverDetailFactory imageArray={imageArray} name={"Spirit"} />
      <RoverDetailFactory imageArray={imageArray} name={"Opportunity"} />
    </>
  );
};

export default RoverPage;
