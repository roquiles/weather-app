import { ChangeLocationDiv } from "./styles";
import { FaAngleRight } from "react-icons/fa";
import React, { useState } from "react";
import { useForecast } from "../../hooks/useForecast";

export function ChangeLocationButton() {
  const { changeCity } = useForecast();
  const [cityName, setCityName] = useState("");

  function handleChangeCity(e: React.KeyboardEvent) {
    if (e.code === "Enter") {
      changeCity(cityName);
    }
  }

  return (
    <ChangeLocationDiv>
      <input
        type="text"
        placeholder="City name"
        onKeyUp={(e) => handleChangeCity(e)}
        onChange={(e) => setCityName(e.target.value)}
      ></input>
      <button type="submit" onClick={() => changeCity(cityName)}>
        <FaAngleRight />
      </button>
    </ChangeLocationDiv>
  );
}
