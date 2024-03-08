import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";

export type TFilter = {
  field: string;
  value: string;
};

export type TSortBy = {
  field: string;
  direction: string;
};

export default function useBookings() {
  const [searchParams] = useSearchParams();

  //status 기준 filter
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? { field: "status", value: "all" }
      : { field: "status", value: filterValue };

  //sort 기준 filter
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  console.log("sortBy", sortBy);

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    //변화를 줘도 바뀌지 않는 이유는 쿼리키값을 캐싱 풀지 않았기 때문임.
    //queryKey에 filter를 넣어서 url 변경시 마다 데이터를 가져오도록
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
}
