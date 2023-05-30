import { FC, useRef} from "react";

interface IProps{
    handleLinesSplited : (linesSplited : string[][]) => void
}

const UploadCsv : FC<IProps> = ({handleLinesSplited}) => {
    const fileRef = useRef<HTMLInputElement>(null);
    
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const file = fileRef.current!.files![0];
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
            reader.readAsText(file);
          }}
        >
          <input ref={fileRef} type="file" accept=".csv" />
          <br />
          <input type="submit" value="Upload" />
        </form>
        
      </>
    );
  }
  
export default UploadCsv;