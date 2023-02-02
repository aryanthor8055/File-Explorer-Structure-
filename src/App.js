import NavbarComponent from "./components/Navbar";
import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
import "./App.css";
import explorer from "./data/folderData"

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <NavbarComponent />
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
