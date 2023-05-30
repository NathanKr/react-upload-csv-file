import { useRef, useState } from "react";
import "./App.css";

function App() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<string[]>([]);
  const linesElem = lines.map((l, i) => <p key={i}>{l}</p>);

  return (
    <>
      <h2>Upload file</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const file = fileRef.current!.files![0];
          const reader = new FileReader();
          reader.onload = function (e) {
            const text = e.target!.result as string;
            const lines = text.split(/\r?\n/);
            setLines(lines);
          };
          reader.readAsText(file);
        }}
      >
        <input ref={fileRef} type="file" accept=".csv" />
        <br />
        <input type="submit" value="Upload" />
      </form>
      <h3>lines</h3>
      <output>{linesElem}</output>
    </>
  );
}

export default App;
