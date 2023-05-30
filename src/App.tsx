import { useState } from "react";
import "./App.css";
import UploadCsv from "./components/upload-csv";
import { getCol } from "./lib/utils";

function App() {
  const [linesSplited, setLinesSplited] = useState<string[][]>([]);
  const linesElem = linesSplited.map((l, i) => (
    <p key={i}>{JSON.stringify(l)}</p>
  ));

  const handleLinesSplited = (splitedLines: string[][]) => {
    setLinesSplited(splitedLines);
  };

  const firstCol = getCol(linesSplited,0);

  return (
    <>
      <h2>Upload csv file</h2>
      <UploadCsv handleLinesSplited={handleLinesSplited} />
      <h3>splited lines</h3>
      <output>{linesElem}</output>
      <h3>first col</h3>
      <output>{JSON.stringify(firstCol)}</output>

    </>
  );
}

export default App;
