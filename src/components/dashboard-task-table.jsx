import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "Title", headerName: "Title", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  {
    field: "Deadline",
    headerName: "Deadline",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, Title: "Snow", description: "Jon", Deadline: 35 },
  { id: 2, Title: "Lannister", description: "Cersei", Deadline: 42 },
  { id: 3, Title: "Lannister", description: "Jaime", Deadline: 45 },
  { id: 4, Title: "Stark", description: "Arya", Deadline: 16 },
  { id: 5, Title: "Targaryen", description: "Daenerys", Deadline: null },
  { id: 6, Title: "Melisandre", description: null, Deadline: 150 },
  { id: 7, Title: "Clifford", description: "Ferrara", Deadline: 44 },
  { id: 8, Title: "Frances", description: "Rossini", Deadline: 36 },
  { id: 9, Title: "Roxie", description: "Harvey", Deadline: 65 },
];

const DashboardTaskTable = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DashboardTaskTable;
