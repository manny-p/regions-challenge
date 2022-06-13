import { useState } from "react";
import Hero from "@/ui/hero";

import Town from "./town";

export default function Locations({ list }) {
  const [query, setQuery] = useState("");

  const hero = list[0];
  const towns = list.slice(1, list.length);

  return (
    <>
      <Hero {...hero} />

      <div className="flex items-center flex-wrap md:flex-nowrap gap-8 my-8">
        {towns.map((town) => (
          <Town key={town.location}{...town} />
        ))}
      </div>
    </>
  );
}
