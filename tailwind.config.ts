import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
const flowbite = require("flowbite-react/tailwind");

const generateGrid = (size: number) => {
  const gridColumn: Record<string, string> = {};
  const gridTemplateColumns: Record<number, string> = {};
  const gridRow: Record<string, string> = {};
  const gridTemplateRows: Record<number, string> = {};
  const gridRowStart: Record<number, string> = {};
  const gridRowEnd: Record<number, string> = {};
  const gridColumnStart: Record<number, string> = {};
  const gridColumnEnd: Record<number, string> = {};
  for (let i = 1; i <= size; i++) {
    gridRow[`span-${i}`] = `span ${i} / span ${i}`;
    gridColumn[`span-${i}`] = `span ${i} / span ${i}`;
    gridTemplateColumns[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridTemplateRows[i] = `repeat(${i}, minmax(0, 1fr))`;
    gridRowStart[i] = `${i}`;
    gridRowEnd[i] = `${i}`;
    gridColumnStart[i] = `${i}`;
    gridColumnEnd[i] = `${i}`;
  }
  return {
    gridColumn,
    gridTemplateColumns,
    gridRow,
    gridTemplateRows,
    gridRowStart,
    gridRowEnd,
    gridColumnStart,
    gridColumnEnd,
  };
};

export default {
  content: ["./src/**/*.tsx", flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      ...generateGrid(50),
    },
  },
  plugins: [flowbite.plugin(),],
} satisfies Config;
