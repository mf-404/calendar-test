import React, { PropsWithChildren, useCallback, useState } from "react";
import { cn } from "../utils";

type State = {
  name: string;
  className: string;
};

enum STATE_NAME {
  DEFAULT = "default",
  FIRST = "first",
  SECOND = "second",
  LAST = "last",
}

const STATES: { [key in STATE_NAME]: State } = {
  [STATE_NAME.DEFAULT]: {
    name: STATE_NAME.DEFAULT,
    className: "hover:bg-black hover:text-white",
  },
  [STATE_NAME.FIRST]: {
    name: STATE_NAME.FIRST,
    className: "bg-black text-white",
  },
  [STATE_NAME.SECOND]: {
    name: STATE_NAME.SECOND,
    className: "bg-green-500 text-white",
  },
  [STATE_NAME.LAST]: {
    name: STATE_NAME.LAST,
    className: "bg-blue-500 text-white",
  },
};

function Slot({ children }: PropsWithChildren) {
  const [state, setState] = useState<State>(STATES.default);

  const onClick = useCallback(() => {
    switch (state.name) {
      case STATE_NAME.DEFAULT:
        setState(STATES.first);
        break;
      case STATE_NAME.FIRST:
        setState(STATES.second);
        break;
      case STATE_NAME.SECOND:
        setState(STATES.last);
        break;
      case STATE_NAME.LAST:
        setState(STATES.default);
        break;
    }
  }, [state]);

  return (
    <button
      className={cn(
        "bg-gray-100 rounded-lg text-center py-2 text-black",
        state.className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Slot;
