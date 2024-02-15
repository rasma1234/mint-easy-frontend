import "./stockOrder.scss";
import { instance } from "../../axiosInstance";
import { useAuthStateContext } from "../../contexts/AuthStateContext";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateCSRFToken } from "../../axiosInstance";
import axios from "axios";
import { useEffect } from "react";

type StockOrderData = {
  day_trading: boolean;
  long_term_invest: boolean;
  symbol: string;
  buy: boolean;
  sell: boolean;
  open_price: number;
  close_price: number;
  quantity: number;
  amount: number;
  stop_loss: number;
  take_profit: number;
  user_id: number;
};

type StockOrderProps = {
  slug: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  initialData?: StockOrderData;
};

export const StockOrder: React.FC<StockOrderProps> = (props) => {
  const { userId, msg, setMsg } = useAuthStateContext();

  const [formData, setFormData] = useState<StockOrderData>({
    day_trading: false,
    long_term_invest: true,
    symbol: "",
    buy: true,
    sell: false,
    open_price: 0,
    close_price: 0,
    quantity: 0,
    amount: 0,
    stop_loss: 0,
    take_profit: 0,
    user_id: userId,

    ...props.initialData, // Merge with initialData from props
  });

  const [stockPrice, setStockPrice] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [profitLossData, setProfitLossData] = useState<any[]>([]);
  console.log("Profit/loss data:", profitLossData);

  // set the initial state of the errors
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({
    day_trading: null,
    long_term_invest: null,
    symbol: null,
    buy: null,
    open_price: null,
    close_price: null,
    quantity: null,
    amount: null,
    stop_loss: null,
    take_profit: null,
    user_id: null,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      updateCSRFToken();
      console.log("formdata", formData);
      console.log(userId);

      instance
        .put(`/data/stock-orders/${userId}/`, formData)
        .then((response) => {
          console.log(formData);
          console.log(userId);
          console.log(response);
          if (response.data && response.data.message) {
            setMsg(response.data.message);
            console.log(msg);
          }
        })
        .catch((error) => {
          setErrors(error.response.data);
        });
    },
    onSuccess: async () => {
      try {
        // Run the request in line 45 of the Investing component
        const profitLossResponse = await instance.get(
          `/data/stock-order/${userId}/profit-loss/`,
        );
        console.log("Profit/Loss data:", profitLossResponse.data);
        setProfitLossData(profitLossResponse.data);
      } catch (error) {
        console.error("Error fetching profit/loss data:", error);
      }
      // Clear the form data
      setFormData({
        day_trading: false,
        long_term_invest: true,
        symbol: "",
        buy: true,
        sell: false,
        open_price: 0,
        close_price: 0,
        quantity: 0,
        amount: 0,
        stop_loss: 0,
        take_profit: 0,
        user_id: userId,
        ...props.initialData,
      });

      setStockPrice(null);
      setTotalPrice(null);

      props.setOpen(false);
    },
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: null });
  };

  const handleCloseModal = () => {
    props.setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await mutation.mutateAsync();
    } catch (error: any) {
      if (error instanceof Error) {
        setErrors(
          error.message
            ? { symbol: error.message }
            : { symbol: "An error occurred" },
        );
      }
    }
  };

  useEffect(() => {
    const fetchStockPrice = async () => {
      try {
        const response = await axios.get(
          `https://backend.mint-easy.de/data/api/stock-prices/?symbol=${formData.symbol}`,
        );
        console.log(response);
        const fetchedStockPrice = response.data.current_price;
        setStockPrice(fetchedStockPrice);
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };

    if (formData.symbol.trim() !== "") {
      fetchStockPrice();
    }
  }, [formData.symbol]);

  useEffect(() => {
    if (stockPrice !== null && formData.quantity !== null) {
      const calculatedTotalPrice = stockPrice * formData.quantity;
      setTotalPrice(calculatedTotalPrice);
    }
  }, [stockPrice, formData.quantity]);

  return (
    <div className={`stockOrder ${props.isOpen ? "open" : ""}`}>
      <div className="modal">
        <h1>ORDER</h1>
        <span className="close" onClick={handleCloseModal}>
          x
        </span>

        <form onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="symbol">Symbol</label>
            <input
              type="text"
              name="symbol"
              id="symbol"
              value={formData.symbol}
              onChange={(e) => handleInputChange(e, "symbol")}
            />
            {errors.symbol && <div className="error">{errors.symbol}</div>}
          </div>

          <div className="item">
            <label htmlFor="open_price">Current Price</label>
            <input
              type="text"
              name="open_price"
              id="open_price"
              value={stockPrice !== null ? stockPrice.toFixed(2) : ""}
              readOnly
            />
            {/* {errors.open_price && <div className="error">{errors.open_price}</div>} */}
          </div>

          <div className="item">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={formData.quantity}
              onChange={(e) => handleInputChange(e, "quantity")}
            />
            {errors.quantity && <div className="error">{errors.quantity}</div>}
          </div>

          <div className="item">
            <label htmlFor="amount">Total Price</label>
            <input
              type="text"
              name="amount"
              id="amount"
              value={totalPrice !== null ? totalPrice.toFixed(2) : ""}
              readOnly
            />
          </div>

          <div className="item">
            <label htmlFor="stop_loss"></label>
            <input
              type="hidden"
              name="stop_loss"
              id="stop_loss"
              value={formData.stop_loss}
              onChange={(e) => handleInputChange(e, "stop_loss")}
            />
            {errors.stop_loss && (
              <div className="error">{errors.stop_loss}</div>
            )}
          </div>

          <div className="item">
            <label htmlFor="take_profit"></label>
            <input
              type="hidden"
              name="take_profit"
              id="take_profit"
              value={formData.take_profit}
              onChange={(e) => handleInputChange(e, "take_profit")}
            />
            {errors.take_profit && (
              <div className="error">{errors.take_profit}</div>
            )}
          </div>

          <div className="item">
            <label htmlFor="user_id"></label>
            <input
              type="hidden"
              name="user_id"
              id="user_id"
              value={formData.user_id}
              onChange={(e) => handleInputChange(e, "user_id")}
            />
            {errors.user_id && <div className="error">{errors.user_id}</div>}

            <div className="item">
              <label htmlFor="buy"></label>
              <input
                type="hidden"
                name="buy"
                id="buy"
                defaultChecked={formData.buy}
                value={formData.buy.toString()}
                onChange={(e) => handleInputChange(e, "buy")}
              />
              {errors.buy && <div className="error">{errors.buy}</div>}
            </div>
          </div>

          <button type="submit" className="orderBtn">Order</button>
        </form>
      </div>
    </div>
  );
};

export default StockOrder;
