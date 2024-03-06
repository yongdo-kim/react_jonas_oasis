import { useSearchParams } from "react-router-dom";
import Select from "./Select";

type SortyByProps = {
  options: { value: string; label: string }[];
};

export default function SortBy({ options }: SortyByProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      value={sortBy}
      onChange={(value) => handleChange(value)}
    />
  );
}
