import React from "react";
import faqData from "./data.json";
import Accordion from "./components/Accordion";
import Card, { Heading } from "./components/Card";

export default function App() {
  return (
    <>
      <Card>
        <Heading>heading of card component</Heading>
      </Card>
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        <Accordion.Frame>
          {faqData.map((item) => {
            console.log(item);
            return (
              <Accordion.Item key={item.id}>
                <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
                <Accordion.Body>{item.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion.Frame>
      </Accordion>
    </>
  );
}
