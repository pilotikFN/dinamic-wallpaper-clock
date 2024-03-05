import React, { useEffect, useState } from "react";

const monthsName = [
   "января",
   "февраля",
   "марта",
   "апреля",
   "мая",
   "июня",
   "июля",
   "августа",
   "сентября",
   "октября",
   "ноября",
   "декабря",
];

const DigitalClock = () => {
   const [time, setTime] = useState(new Date());
   const [offsetY, setOffsetY] = useState(-130);

   const updateTime = () => {
      setTime(new Date());
   };

   const formatTime = () => {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const meridiem = hours >= 12 ? "PM" : "AM";

      return `${padZero(hours)}:${padZero(minutes)}`
   };

   const formatDate = () => {
      const day = time.getDate();
      const month = monthsName[time.getMonth()];
      const year = time.getFullYear();

      return `${day} ${month} ${year}`;
   };

   const padZero = (num) => {
      return (num < 10 ? "0" : "") + num;
   };

   useEffect(() => {
      const intervalId = setInterval(updateTime, 1000);

      return () => {
         clearInterval(intervalId);
      };
   }, []);

   return (
      <div style={{
         transform: `translateY(${offsetY}px)`
      }} className="clock-container">
         <div className="clock">
            <span>{formatTime()}</span>
         </div>
         <div className="date">
            <span>{formatDate()}</span>
         </div>
      </div>
   );
};

export default DigitalClock;
