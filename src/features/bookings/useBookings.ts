import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../ui/Pagination";

export type TFilter = {
  field: string;
  value: string;
};

export type TSortBy = {
  field: string;
  direction: string;
};

export default function useBookings() {
  const queryClient = useQueryClient();

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

  //pagination 기준 filter
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    //변화를 줘도 바뀌지 않는 이유는 쿼리키값을 캐싱 풀지 않았기 때문임.
    //queryKey에 filter를 넣어서 url 변경시 마다 데이터를 가져오도록
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  //프리페칭
  const pageCount = Math.ceil(page / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page }),
    });
  return { isLoading, bookings, count: bookings?.count, error };
}
