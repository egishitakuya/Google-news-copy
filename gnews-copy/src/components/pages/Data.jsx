import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { DefaultLayout } from "../templetes/DefaultLayout";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", type: "number", width: 140 },
  { field: "birthday", headerName: "Birthday", type: "date", width: 180 },
  { field: "isAdmin", headerName: "Is admin?", type: "boolean", width: 180 },
];

const data = [
  { id: 1, name: "1st", age: 10, birthday: "2020-01-01", isAdmin: false },
  { id: 2, name: "2nd", age: 20, birthday: "2020-02-02", isAdmin: true },
  { id: 3, name: "3rd", age: 30, birthday: "2020-03-03", isAdmin: false },
];

export const Data = () => {
  const [rows, setRows] = useState(data);

  // 行の追加
  const onClickAddValue = () => {
    const id =
      rows.length === 0
        ? 1
        : Math.max(...rows.map((v) => v.id)) +
          1; /* 配列内のオブジェクトidの最大値を求めて+1 */
    const newValue = {
      id: id,
      name: "4th",
      age: 40,
      birthday: "2020-04-04",
      isAdmin: true,
    };
    setRows([...rows, newValue]);
  };
  return (
    <DefaultLayout>
      <Box
        component="div"
        sx={{ p: 2, textAlign: "right" }}
      >
        <Button onClick={onClickAddValue} variant="contained">
          新規作成
        </Button>
      </Box>
      <DataGrid columns={columns} rows={rows} autoHeight />
    </DefaultLayout>
  );
};
