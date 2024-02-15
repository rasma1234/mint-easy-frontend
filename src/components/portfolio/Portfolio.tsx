import React, { useEffect, useState, useRef } from "react";
import protobuf from "protobufjs";
import "./portfolio.scss";

/**
 * decode the binary data of webstock string, set the current state, and loop through the data
 */

export const Portfolio: React.FC = () => {
  const [stockData, setStockData] = useState<any[]>([]);
  const stockSymbolsRef = useRef(["MSFT", "TSLA", "AAPL", "AMZN"]);

  useEffect(() => {
    const ws = new WebSocket("wss://streamer.finance.yahoo.com");

    protobuf.load("/YPricingData.proto", (error, root) => {
      if (error) {
        console.error("Error loading protobuf:", error);
        return;
      }

      const Yaticker = root?.lookupType("yaticker");

      ws.onopen = () => {
        console.log("connected");
        ws.send(
          JSON.stringify({
            subscribe: stockSymbolsRef.current,
          }),
        );
      };

      ws.onclose = () => {
        console.log("disconnected");
      };

      ws.onmessage = (event) => {
        try {
          const messageData = event.data;
          const next: any = Yaticker?.decode(
            new Uint8Array(
              atob(messageData)
                .split("")
                .map((c) => c.charCodeAt(0)),
            ),
          );

          setStockData((prevData) => {
            console.log("next", next);
            const existingIndex = prevData.findIndex(
              (item) => item.id === next?.id,
            );
            if (existingIndex === -1) {
              return [...prevData, next];
            } else {
              prevData[existingIndex] = next;
              return [...prevData];
            }
          });
          console.log(
            "stockSymbolsRef.current.length",
            stockSymbolsRef.current.length,
          );
          console.log("stockData.length", stockData.length);
          console.log("stockData", stockData);
          // Check if lengths are equal and close the connection
          if (stockSymbolsRef.current.length === stockData.length) {
            ws.close();
          }
        } catch (decodeError) {
          console.error("Error decoding message:", decodeError);
        }
      };
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      {stockData && (
        <div>
          <h2>Current Data:</h2>
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
