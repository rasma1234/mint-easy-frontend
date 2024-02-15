import "./investing.scss";
import News from "../../components/news/News";
import { StockGenerator } from "../../components/stockGenerator/StockGenerator"; // import { TextBox } from "../../components/textBox/TextBox";
import StockOrder from "../../components/stockOrder/StockOrder";
import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useEffect } from "react";
import instance from "../../axiosInstance";
import { useAuthStateContext } from "../../contexts/AuthStateContext";

const Investing = () => {
  const columns: GridColDef[] = [
    { field: "symbol", headerName: "Symbol", width: 100 },
    { field: "amount", headerName: "Amount", type: "number", width: 100 },
    { field: "start_date", headerName: "Start Date", width: 180 },
    { field: "end_date", headerName: "End Date", width: 180 },
    {
      field: "long_term_invest",
      headerName: "Long Term Invest",
      type: "boolean",
      width: 150,
    },
    {
      field: "day_trading",
      headerName: "Day Trading",
      type: "boolean",
      width: 120,
    },

    {
      field: "open_price",
      headerName: "Open Price",
      type: "number",
      width: 120,
    },
    { field: "quantity", headerName: "Quantity", type: "number", width: 100 },
    {
      field: "profit_loss",
      headerName: "Profit Loss",
      type: "number",
      width: 120,
    },
    { field: "stop_loss", headerName: "Stop Loss", type: "number", width: 120 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profitLossData, setProfitLossData] = useState<any[]>([]);
  console.log("Profit/loss data:", profitLossData);
  const { userId } = useAuthStateContext();

  useEffect(() => {
    const fetchProfitLossData = async () => {
      try {
        const profitLossResponse = await instance.get(
          `/data/stock-order/${userId}/profit-loss/`,
        );
        setProfitLossData(profitLossResponse.data);
        console.log("Profit/loss data:", profitLossData);
      } catch (error) {
        console.error("Error fetching profit/loss data:", error);
      }
    };

    fetchProfitLossData();
  }, [userId]);

  return (
    <div className="investing">
      <div
        className="box box13
            "
      >
        <StockGenerator />
      </div>

      <div className="box box11">
        <button onClick={() => setIsModalOpen(true)}>order</button>
        <StockOrder
          slug="order"
          isOpen={isModalOpen}
          setOpen={setIsModalOpen}
        />
        {/* temporary static data as place holder */}
        <DataTable
          columns={columns}
          rows={[
            {
              id: 1,
              symbol: "AAPL",
              amount: 100,
              day_trading: false,
              end_date: "2024-12-31",
              long_term_invest: true,
              open_price: 150,
              profit_loss: 50,
              quantity: 5,
              start_date: "2022-01-01",
              stop_loss: 140,
            },
            {
              id: 2,
              symbol: "GOOGL",
              amount: 200,
              day_trading: true,
              end_date: "2024-12-31",
              long_term_invest: false,
              open_price: 2000,
              profit_loss: -100,
              quantity: 2,
              start_date: "2022-01-01",
              stop_loss: 1900,
            },
            {
              id: 3,
              symbol: "MSFT",
              amount: 150,
              day_trading: false,
              end_date: "2024-12-31",
              long_term_invest: true,
              open_price: 300,
              profit_loss: 75,
              quantity: 3,
              start_date: "2022-01-01",
              stop_loss: 280,
            },
          ]}
          slug="orders"
        />
      </div>

      <div className="box box12">
        <News interval={50000} />
      </div>
    </div>
  );
};

export default Investing;
