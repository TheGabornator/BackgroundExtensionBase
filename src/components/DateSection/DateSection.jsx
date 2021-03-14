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

export const DateSection = () => {
  const now = new Date();
  const [date, setDate] = useState(now);
  const hour = date.getHours().toString().padStart(2, 0);
  const minute = date.getMinutes().toString().padStart(2, 0);
  const dayOfWeek = days[date.getDay()];
  const day = now.getDate();
  const month = months[date.getMonth()];

  useEffect(() => {
    let timeout;
    let animationFrameId;

    const run = () => {
      timeout = setTimeout(() => {
        animationFrameId = requestAnimationFrame(run);
        setDate(new Date());
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
        <span className="Date">{`${dayOfWeek}, ${month} ${day}`}</span>
      </Card>
    </section>
  );
};
