import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [fantigerCoin, setFantigerCoin] = useState(0);


  const CommonContext = {
    walletBalance,
    setWalletBalance,
    fantigerCoin,
    setFantigerCoin,
  };

  


  const { value } = props;

  return (
    <Context.Provider
      value={{
        walletBalance: walletBalance,
        fantigerCoin: fantigerCoin,
        setFantigerCoin: setFantigerCoin,
        setWalletBalance: setWalletBalance,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const { Consumer } = Context;

export { Context as CommonContext, Provider as CommonContextProvider } from "./commonContext";
