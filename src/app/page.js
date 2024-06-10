"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const yesItems = Array(
  "yes. dammit.",
  "You bet! It's our signature feature.",
  "Of course, it's a new kind of open-door policy.",
  "yes. park in the rear. watch for homeless.",
  "yes, this dang gate!",
  "Yes, because who needs security anyway?",
  "Sure thing, it's part of the charm.",
  "Yes, it's always in style.",
  "yes, of course, wouldn't have it any other way.",
  "Naturally, it's our way of welcoming everyone.",
  "Yes, because a working gate is just too mainstream.",
  "yes. it's fixed. tell your friends.");

const noItems = Array(
  "no. it's fixed. relax, brah",
  "nah, you're good. just do not park in Alicia's spot.",
  "Absolutely not, we prefer things to be in perfect condition.",
  "No, because we enjoy fixing things immediately.",
  "No, forgetaboutit. It's fixed.",
  "Nope, everything's always pristine around here.",
  "No, it's always working like a charm.",
  "No, we don't like to keep people waiting.",
  "No, we wouldn't dream of having a broken gate."
);

const array = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }];

export default function Home() {
  const [randomText, setRandomText] = useState([]);
  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
      const randomizeArray = [...array].sort(() => 0.5 - Math.random());
      setRandomArray(randomizeArray.slice(0, 3));
  }, []);

  return (
    <div>
            {randomArray.map((s, id) => (
                <div key={id}>
                    <h2>{s.name}</h2>
                </div>
            ))}
        </div>
  );
}
