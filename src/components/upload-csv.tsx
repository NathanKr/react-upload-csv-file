import { FC, useRef, useState } from "react";

interface IProps {
  handleLinesSplited: (linesSplited: string[][]) => void;
}

const UploadCsv: FC<IProps> = ({ handleLinesSplited }) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [disabled, setDisabled] = useState(true);

  function getFile(): File | null {
    return fileRef.current?.files?.[0] ?? null;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const file = getFile();
          const reader = new FileReader();
          reader.onload = function (e) {
            const text = e.target!.result as string;
            const lines = text.split(/\r?\n/);
            const splited: string[][] = [];
            lines.forEach((line) => {
              splited.push(line.split(","));
            });
            handleLinesSplited(splited);
          };
          if (file) {
            reader.readAsText(file);
          }
        }}
      >
        <input
          onChange={() => setDisabled(getFile() == null)}
          ref={fileRef}
          type="file"
          accept=".csv"
        />
        <br />
        <input disabled={disabled} type="submit" value="Upload" />
      </form>
    </>
  );
};

export default UploadCsv;
