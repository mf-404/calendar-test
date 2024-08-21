import _ from "lodash";
import React from 'react';
import {SLOT_NUMBER} from "./Calendar";

function CalendarDayColumn() {
    const hours = _(_.times(Math.floor(Math.random() * SLOT_NUMBER), () => Math.floor(Math.random() * 24))).sortBy().map((hour, i) => hour);

    return (
        <div></div>
    );
}

export default CalendarDayColumn;