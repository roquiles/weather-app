import { useState } from "react";
import { WiDaySunny } from "react-icons/wi";

export function MainContainer() {
  return (
    <section>
      <h2>Tuesday</h2>
      <p>19 Abr 2022</p>
      <p>Porto Alegre, BR</p>
      <WiDaySunny />
      <p>29°C</p>
      <p>Sunny</p>
    </section>
  );
}
