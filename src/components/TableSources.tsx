import { RiShareBoxFill } from "react-icons/ri";
import TCell from "./TCell";

export default function TableSources({sources}: { sources: string[] }) {
  return (
    <TCell name="sources">
      {sources.map((source, id) => (
        <a
          key={id}
          href={source}
          target="_blank"
          className="flex items-center justify-center gap-x-2 w-fit"
        >
          {id + 1}
          <RiShareBoxFill className="dark:text-text text-background" />
        </a>
      ))}
    </TCell>
  );
}
