import React from "react";
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Board from "../../components/atoms/Board";

export const LeadsComponent = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <Header /> */}
      <Board />
      
    </DndProvider>
  )
    
}