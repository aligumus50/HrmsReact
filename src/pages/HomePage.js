import React from "react";
import { Dropdown } from "semantic-ui-react";
import CityDropList from "../pages/CityDropList";
export default function HomePage() {
  const friendOptions = [
    { key: 0, text: "YAZILIM GELİŞTİRİCİ", value: 1 },
    { key: 1, text: "YAZILIM DESTEK UZMANI", value: 2 },
    { key: 2, text: "YAZILIM MÜHENDİSİ", value: 3 },
    { key: 3, text: "VERİ TABANI UZMANI", value: 4 },
    { key: 4, text: "İŞ ZEKASI UZMANI", value: 5 },
    { key: 5, text: "İŞ ZEKASI UZMAN", value: 7 },
    { key: 6, text: "FRONT END DEVELOPER", value: 8 },
  ];

  console.log(friendOptions)
  return (
    <div>
      <Dropdown
        placeholder="Select Friend"
        fluid
        selection
        options={friendOptions}
      />

      <CityDropList></CityDropList>
    </div>
  );
}
