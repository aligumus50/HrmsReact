import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import WorkTimeService from "../services/workTimeService";

export default function WorkTimeDropList() {
  const [workTimes, setWorkTimes] = useState([]);

  useEffect(() => {
    let workTimesService = new WorkTimeService();

    workTimesService.getAll().then((result) => setWorkTimes(result.data.data));
  }, []);

  const options = workTimes.map((worktime) => ({
    key: worktime.id,
    text: worktime.timeTypeName,
    value: worktime.id,
  }));
  return (
    <div>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        search
        text="Çalışma Zamanı"
        options={options}
      ></Dropdown>
    </div>
  );
}
