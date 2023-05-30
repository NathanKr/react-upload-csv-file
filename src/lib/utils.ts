export function getCol(splitedLines: string[][] , colIndexZeoBased : number) : string[]{
    return splitedLines.map(line => line[colIndexZeoBased])
} 