import React from "react";
import { Container } from "./Container";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const DraApp = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Container />
      </DndProvider>
    </div>
  );
};

export default DraApp;
