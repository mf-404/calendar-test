import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import _ from "lodash";
import { SLOT_NUMBER } from "./Calendar";

type CalendarDayColumnProps = {
  date: Dayjs;
};

function CalendarDayColumn({ date }: CalendarDayColumnProps) {
  const slots = useMemo(() => {
    return _.chain(_.times(_.random(0, SLOT_NUMBER), () => _.random(8, 19)))
      .uniq()
      .sortBy()
      .map((hour) => {
        let slot = date.clone();
        slot = slot.set("hours", hour);

        slot = slot.set("minutes", _.random() ? 30 : 0);

        return { start: slot, end: slot.add(30, "minutes") };
      })
      .value();
  }, [date]);

  return (
    <div>
      <p className={"text-center"}>
        <span>{date.format("ddd")}</span>
        <br />
        <span className={"font-bold"}>{date.format("D MMM")}</span>
      </p>
      <div className={"flex flex-col gap-2 mt-2"}>
        {slots.map((slot) => (
          <button
            className={
              "bg-gray-100 hover:bg-black hover:text-white rounded-lg text-center py-2 text-black"
            }
            key={slot.start.unix().toString()}
          >
            {slot.start.format("HH:mm")}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalendarDayColumn;
