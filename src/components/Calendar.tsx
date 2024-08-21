import React, { useCallback, useMemo, useState } from "react";
import dayjs from "dayjs";
import _ from "lodash";
import Icons from "./Icons";
import "dayjs/locale/fr";

dayjs.locale("fr");

export const SLOT_NUMBER = 10;

function Calendar() {
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState(dayjs());

  const dates = useMemo(() => {
    return _.fill(Array(7), null).map((_, i) =>
      startDate.clone().add(i * page, "day"),
    );
  }, [startDate, page]);

  const prev = useCallback(() => {
    setStartDate((prevState) => prevState.add(-7, "day"));
    setPage((prevState) => prevState - 1);
  }, []);

  const next = useCallback(() => {
    setStartDate((prevState) => prevState.add(7, "day"));
    setPage((prevState) => prevState + 1);
  }, []);

  const prevDisabled = useMemo(() => page === 1, [page]);

  return (
    <div className={"grid grid-cols-[auto_1fr_auto] gap-4 max-w-6xl"}>
      <button
        onClick={prev}
        disabled={prevDisabled}
        className={"disabled:opacity-50"}
      >
        <Icons.ChevronLeft width={28} />
      </button>
      <div className={"grid grid-cols-7 gap-4"}>
        {dates.map((date) => (
          <div key={date.unix().toString()}>
            <p className={"text-center"}>
              <span>{date.format("ddd")}</span>
              <br />
              <span className={"font-bold"}>{date.format("D MMM")}</span>
            </p>
          </div>
        ))}
      </div>
      <button onClick={next}>
        <Icons.ChevronRight width={28} />
      </button>
    </div>
  );
}

export default Calendar;
