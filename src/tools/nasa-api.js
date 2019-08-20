import axios from "axios";

export const getPOD = async date => {
  let formattedDate = formatDate(date);
  console.log(formattedDate);
  const url = `https://api.nasa.gov/planetary/apod?api_key=bEPIDRSEzdMO1hmGmvdxNs0EmyNKRLndqaKc5uMZ&date=${formattedDate}`;

  const result = await axios.get(url);
  console.log(result.data);
  return result.data;
};

export const getImagesByDate = async date => {
  let formattedDate = formatDate(date);
  console.log(formattedDate);

  const urlArray = [
    `https://api.nasa.gov/mars-photos/api/v1/rovers/Opportunity/photos?earth_date=${formattedDate}&api_key=bEPIDRSEzdMO1hmGmvdxNs0EmyNKRLndqaKc5uMZ&page=1`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=bEPIDRSEzdMO1hmGmvdxNs0EmyNKRLndqaKc5uMZ&page=1`,
    `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${formattedDate}&api_key=bEPIDRSEzdMO1hmGmvdxNs0EmyNKRLndqaKc5uMZ&page=1`
  ];
  let finalResult = [];

  await axios
    .all([
      axios.get(urlArray[0]),
      axios.get(urlArray[1]),
      axios.get(urlArray[2])
    ])
    .then(
      axios.spread(function(opp, curi, spirit) {
        console.log("oops", opp.data.photos);
        console.log("curi", curi.data.photos);
        console.log("spirit", spirit.data.photos);

        finalResult.push.apply(finalResult, opp.data.photos);
        finalResult.push.apply(finalResult, curi.data.photos);
        finalResult.push.apply(finalResult, spirit.data.photos);
      })
    );

  return finalResult;
};

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
