import "./watchList.scss";
// import { useState } from "react";

import DataTable from "../../components/dataTable/DataTable";

import { GridColDef } from "@mui/x-data-grid";
import { watchlistItems } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "asset", headerName: "Asset", width: 150 },
  { field: "ticker", headerName: "Ticker", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
  { field: "units", headerName: "Units", width: 150 },
  { field: "avg_open", headerName: "Avg open", width: 150 },
  { field: "p_l", headerName: "p_l", width: 150 },
  { field: "p_l_percent", headerName: "p_l %", width: 150 },
  { field: "value", headerName: "Value", width: 150 },
  { field: "short", headerName: "Short", width: 150 },
];

export const WatchList = () => {
  // const [open, setOpen] = useState(false);
  return (
    <div className="watchList">
      <div className="info">
        <h1>Watchlist</h1>
        {/* <button onClick={()=>setOpen(true)}>Add New Product</button> */}
      </div>
      <DataTable slug="assets" columns={columns} rows={watchlistItems} />
      {/* {open && <Add slug="product" columns={columns} setOpen={setOpen}/>} */}
    </div>
  );
};

export default WatchList;
