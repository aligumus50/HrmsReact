import React, { useEffect, useState } from "react";
import { Dropdown} from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";

export default function WorkTypeList() {
  const [workTypes, setWorkTypes] = useState([]);

  useEffect(() => {
    let workTypeService = new WorkTypeService();

    workTypeService.getall().then((result) => setWorkTypes(result.data.data));
  }, []);

  const options = workTypes.map((workType) => ({
    key: workType.id,
    text: workType.typeName,
    value: workType.id,
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
        text="Çalışma Tipi"
        options={options}
      ></Dropdown>
    </div>
  );
}
