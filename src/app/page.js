"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

const yesItems = Array(
  { text:  "yes. dammit."},
  { text:  "yes. wow really destroyed that thing."},
  { text:  "You bet! It's our signature feature."},
  { text:  "Of course, it's a new kind of open-door policy."},
  { text:  "yes. park in the rear. watch for homeless."},
  { text:  "yes, this dang gate!"},
  { text:  "Yes, because who needs security anyway?"},
  { text:  "Sure thing, it's part of the charm."},
  { text:  "Yes, it's always in style."},
  { text:  "yes, of course, wouldn't have it any other way."},
  { text:  "Naturally, it's our way of welcoming everyone."},
  { text:  "Yes, because a working gate is just too mainstream."}
);

const noItems = Array(
  { text: "nah, you're good. just do not park in Alicia's spot."},
  { text: "Absolutely not, we prefer things to be in perfect condition."},
  { text: "No, because we enjoy fixing things immediately."},
  { text: "Nope, everything's always pristine around here."},
  { text: "No, it's always working like a charm."},
  { text: "No, we don't like to keep people waiting."},
  { text: "No, we wouldn't dream of having a broken gate."}
);

export default function Home() {
  const [randomArray, setRandomArray] = useState([]);

  useEffect(() => {
      const randomizeArray = [...yesItems].sort(() => 0.5 - Math.random());
      setRandomArray(randomizeArray.slice(0, 1));
  }, []);

  return (
    <main>
      <p className="notice">refresh for more info</p>
      <section class="hero">
      {randomArray.map((s, id) => (
            <div key={id}>
                <h1>{s.text}</h1>
            </div>
        ))}
    </section>
    </main>
  );
}
