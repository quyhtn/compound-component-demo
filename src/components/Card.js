import { createContext, useContext } from "react";
const CardContext = createContext();

export default function Card({ children }) {
  return <CardContext.Provider value={{}}>{children}</CardContext.Provider>;
}

export function Heading({ children }) {
  const context = useContext(CardContext);
  if (!context) {
    return <p>I want to be inside the Card component</p>;
  }
  return <h2>{children}</h2>;
}

Card.Heading = Heading;
