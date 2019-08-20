import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PODHeader from "./PODHeader";
import PODContent from "./PODContent";
import { getPOD } from "./../../tools/nasa-api";
import { keyBindForFocus } from "./../../tools/helpers";

const PODPage = () => {
  const [date, setDate] = React.useState(new Date());
  const [podData, setpodData] = React.useState([]);
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
    setpodData([]);
  }, [date]);
  const updateDate = async () => {
    let newpodData = await getPOD(date);
    // console.log("new image array", newpodData);
    newpodData.length === 0 ? setIsEmptyResult(true) : setIsEmptyResult(false);
    setpodData(newpodData);
  };
  return (
    <>
      <PODHeader />
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

      <PODContent podData={podData} />
    </>
  );
};

export default PODPage;
