import { useState } from "react";

const ActiveColumn = () => {
  const [activeColumn, setActiveColumn] = useState(null);
  const onCellEnter = event => {
    setActiveColumn(event.target.dataset.column);
  }
  const onTableLeave = event => {
    setActiveColumn(null);
  };
  return [activeColumn, onCellEnter, onTableLeave];
};

const BorderRadius = () => {
  const [borderRadius, setBorderRadius] = useState(0);
  const onBorderRadius = event => {
    setBorderRadius(parseInt(event.target.value));
  };
  return [borderRadius, onBorderRadius];
};
const DisplayLength = () => {
  const [displayLength, setDisplayLength] = useState(50);
  const onDisplayLength = event => {
    setDisplayLength(parseInt(event.target.value));
  };
  return [displayLength, onDisplayLength];
};

const Gutters = () => {
  const [gutters, setGutters] = useState(0);
  const onGutters = event => {
    setGutters(parseInt(event.target.value));
  };
  return [gutters, onGutters];
};

const ThemeChoice = (defaultChoice) => {
  const [themeChoice, setThemeChoice] = useState(defaultChoice);
  const onThemeChoice = event => {
    setThemeChoice(event.target.value);
  };
  return [themeChoice, onThemeChoice]
};
  
const RowHeight = () => {
  const [rowHeight, setRowHeight] = useState(50);
  const onRowHeight = event => {
    setRowHeight(parseInt(event.target.value));
  };
  return [rowHeight, onRowHeight];
};

const TransitionTime = () => {
  const [transitionTime, setTransitionTime] = useState(0);
  const onTransitionTime = event => {
    setTransitionTime(parseInt(event.target.value));
  };
  return [transitionTime, onTransitionTime];
};

export {
  ActiveColumn,
  BorderRadius,
  DisplayLength,
  Gutters,
  ThemeChoice,
  RowHeight,
  TransitionTime,
}
