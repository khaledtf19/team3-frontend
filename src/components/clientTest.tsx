"use client";

import {
  decrement,
  increment,
  incrementByAmount,
} from "@/features/counter/counterSlice";
import { RootState } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const ClientTest = () => {
  return (
    <div className="flex flex-col gap-5">
      <TestRedux />
      <TestQuery />
    </div>
  );
};

export default ClientTest;

const TestRedux = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p>{count}</p>
      <button
        className="rounded-md border border-gray-400 p-2"
        onClick={() => dispatch(increment())}
      >
        increment +1
      </button>
    </div>
  );
};

const TestQuery = () => {
  const query = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
     return await axios.get<{message: string}>("/api/hello")
    },
  });

  if (query.isLoading) {
    return <div>Loading... </div>;
  }

  if (query.error || !query.data) {
    return <div>Error</div>;
  }

  return <div>{query.data.data.message}</div>;
};
