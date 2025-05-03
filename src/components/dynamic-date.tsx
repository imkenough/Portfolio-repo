"use client";

import { useEffect, useState } from "react";

export function DynamicDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setDate(currentDate);
    };

    updateDate();
    // Update the date every minute
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return <>{date}</>;
}
