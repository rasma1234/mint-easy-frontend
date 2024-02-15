// Define the get_stock function
import protobuf from "protobufjs";
/**
 * decode the binary data of webstock string, set the current state, and loop through the data
 */

export const get_stock = (stocks: String[], setStockData: any, ws: any) => {
  protobuf.load("/YPricingData.proto", (error, root) => {
    if (error) {
      console.error("Error loading protobuf:", error);
      return;
    }
    // get the Yaticker type from the protobuf
    const Yaticker = root?.lookupType("yaticker");

    ws.onopen = () => {
      console.log("connected");
      ws.send(
        JSON.stringify({
          subscribe: stocks,
        }),
      );
    };

    ws.onclose = () => {
      console.log("disconnected");
    };
    ws.onmessage = (event: any) => {
      try {
        const messageData = event.data;
        // decode the binary data, set the current state, and loop through the data
        const next: any = Yaticker?.decode(
          new Uint8Array(
            atob(messageData)
              .split("")
              .map((c) => c.charCodeAt(0)),
          ),
        );

        setStockData((prevData: any) => {
          let exists = false;
          const updatedData = prevData.map((item: any) => {
            if (item.id === next?.id) {
              exists = true;
              return next;
            }
            return item;
          });

          if (!exists) {
            return [...updatedData, next];
          }

          return updatedData;
        });
      } catch (decodeError) {
        console.error("Error decoding message:", decodeError);
      }
    };
  });
};
