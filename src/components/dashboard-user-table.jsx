import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "role",
    headerName: "Role",
    type: "string",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", role: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", role: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", role: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", role: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", role: null },
  { id: 6, lastName: "Melisandre", firstName: null, role: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", role: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", role: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", role: 65 },
];

const DashboardUserTable = () => {
  return (
    <div style={{ height: 371, width: "100%" }}>
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

export default DashboardUserTable;
