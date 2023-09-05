import { useEffect, useState } from "react";
import "../styles/datamap.css";
export default function DataMap() {
  const API_KEY = "at_ctO2eRIOKqngH76pckaAryVwtR2SE";
  const [IP_ADDRESS, setIP_ADDRESS] = useState();
  const [data, setData] = useState({});
  setData;
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        const ip = response.ip;
        setIP_ADDRESS(ip);
      }
    };
    xhr.open("GET", "https://api.ipify.org?format=json", true);
    xhr.send();

    console.log("Esta es la ip = " + IP_ADDRESS);
    if (IP_ADDRESS) {
      const URL_API_COUNTRY_CITY_VPN = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress=${IP_ADDRESS}`;
      console.log(URL_API_COUNTRY_CITY_VPN);
      fetch(URL_API_COUNTRY_CITY_VPN)
        .then((resp) => resp.json())
        .then((datajson) => {
          console.log(datajson);

          setData({
            country: datajson.location.country,
            city: datajson.location.city,
            timezone: datajson.location.timezone,
            isp: datajson.isp,
          });
        });
    }
  }, [IP_ADDRESS]);

  return (
    <div className="data-div">
      <ul type="none">
        <li>
          Ip Address
          <div>
            <span>{IP_ADDRESS}</span>
          </div>
        </li>

        <li>
          Location
          <div>
            <span>Country : {data.country} </span>
            <span>City : {data.city}</span>
          </div>
        </li>

        <li>
          Timezone
          <div>
            <span>{data.timezone}</span>
          </div>
        </li>
        <li>
          ISP
          <div>
            <span>{data.isp}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
