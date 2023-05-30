import { useState } from "react";
import "./App.css";
import UploadCsv from "./components/upload-csv";

function App() {
  const [linesSplited, setLinesSplited] = useState<string[][]>([]);
  const linesElem = linesSplited.map((l, i) => (
    <p key={i}>{JSON.stringify(l)}</p>
  ));

  const handleLinesSplited = (_linesSplited: string[][]) => {
    setLinesSplited(_linesSplited);
  };

  return (
    <>
      <h2>Upload file</h2>
      <UploadCsv handleLinesSplited={handleLinesSplited} />
      <h3>splited lines</h3>
      <output>{linesElem}</output>
    </>
  );
}

export default App;
