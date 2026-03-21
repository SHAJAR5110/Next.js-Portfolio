"use client";
import React, { useState, useEffect } from "react";

const achievementsList = [
  {
    metric: "Projects Delivered",
    value: 58,
    postfix: "+",
  },
  {
    metric: "Programming Languages",
    value: 8,
    postfix: "",
  },
  {
    metric: "Certifications & Awards",
    value: 7,
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const [displayValues, setDisplayValues] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = achievementsList.map((achievement, index) => {
      let current = 0;
      const target = achievement.value;
      const increment = Math.ceil(target / 50);

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setDisplayValues((prev) => {
          const newValues = [...prev];
          newValues[index] = current;
          return newValues;
        });
      }, 50);

      return interval;
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.postfix === "+" && index === 0 && displayValues[index]}
                {achievement.postfix === "+" && index === 0 && "+"}
                {index === 1 && displayValues[index]}
                {index === 2 && displayValues[index]}
                {achievement.postfix === "+" && index === 2 && "+"}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
