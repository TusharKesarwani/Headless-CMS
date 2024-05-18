import React from "react";
import CreateEntity from "./components/CreateEntity";
import AddEntry from "./components/AddEntry";
import EntityList from "./components/EntityList";

function App() {
  return (
    <div>
      <h1>Headless CMS</h1>
      <CreateEntity />
      <AddEntry />
      <EntityList />
    </div>
  );
}

export default App;
