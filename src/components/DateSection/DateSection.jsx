import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const now = new Date();

export const DateSection = () => {
  const [date, setDate] = useState(now);
  const hour = date.getHours().toString().padStart(2, 0);
  const minute = date.getMinutes().toString().padStart(2, 0);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  useEffect(() => {
    let timeout;
    let animationFrameId;

    const run = () => {
      timeout = setTimeout(() => {
        animationFrameId = requestAnimationFrame(run);
        setDate(now);
      }, 1000);
    };
    run();

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="DateSection">
      <Card>
        <span className="Clock">{`${hour}:${minute}`}</span>
        <span className="Date">{`${day}, ${month} ${minute}`}</span>
      </Card>
    </section>
  );
};
