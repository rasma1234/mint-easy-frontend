import React, { useEffect, useState } from "react";
import "./userStatus.scss";
import { useAuthStateContext } from "../../contexts/AuthStateContext";
import { instance, updateCSRFToken } from "../../axiosInstance";
import { useMutation } from "@tanstack/react-query";

// component of user status used in Trading page

type UserStatusProps = {
  name?: string;
  user_id?: number;
  initialSum?: number;
  profit_loss?: number;
  balance?: number;
};

const UserStatus: React.FC<UserStatusProps> = (props) => {
  const { initialSum = 0, profit_loss = 0 } = props; // Default values to 0 if undefined otherwise
  const { userId, username } = useAuthStateContext();
  const [data, setData] = useState({
    initialSum, // initial investment - 100000$
    currentSum: initialSum - profit_loss, // calculates the value of the investment
    balance: 0, // available funds
    stock_amount: 0, // invested funds
    profit_loss: 0, // profit/loss
  });

  const mutation = useMutation({
    // React Query mutation
    mutationFn: async () => {
      // async function
      updateCSRFToken();
      const response = await instance.get(`/data/account-balances/${userId}/`);

      setData((prevData) => ({
        ...prevData,
        initialSum: 100000,
        currentSum: prevData.initialSum + response.data.profit_loss,
        balance: response.data.balance,
        stock_amount: response.data.stock_amount,
        profit_loss: response.data.profit_loss,
      }));
    },
  });

  useEffect(() => {
    // will run when the component mounts
    console.log("use effect running");
    mutation.mutate();
  }, [mutation]);

  const formatNumberWithSeparator = (number: number | undefined): string => {
    // function to format number with comma separator
    if (number !== undefined) {
      return number.toLocaleString();
    }
    return "";
  };

  const isProfit: boolean = data.profit_loss > 0;

  return (
    <div className="userStatus">
      <div className="topRow">
        <div className="boxInfo boxName">
          <div className="name">Hello {username}</div>
          Your investment value is{" "}
          <div className="number">
            {formatNumberWithSeparator(data.currentSum)}$
          </div>
        </div>
      </div>

      <div className="bottomRow">
        <div className="boxInfo boxAvailable">
          Your available funds
          <div className="number">
            {formatNumberWithSeparator(data.balance)}$
          </div>
        </div>
        <div className="boxInfo boxInvested">
          You invested
          <div className="number">
            {formatNumberWithSeparator(data.stock_amount)}$
          </div>
        </div>
        {/* |        conditional formatting for profit/loss */}
        <div className={`boxInfo boxProfitLoss ${isProfit ? "green" : "red"}`}>
          Your profit/loss
          <div className="number">
            {formatNumberWithSeparator(data.profit_loss)}$
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
