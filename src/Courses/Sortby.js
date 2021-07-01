import { v4 as uuidv4 } from "uuid";

export const Sortby = [
  {
    id: uuidv4(),
    title: "Sort By",
    value: null,
  },
  {
    id: uuidv4(),
    title: "Newest",
    value: "new",
  },
  {
    id: uuidv4(),
    title: "Price(low to high)",
    value: "lth",
  },
  {
    id: uuidv4(),
    title: "Price(high to low)",
    value: "htl",
  },
  {
    id: uuidv4(),
    title: "Name A-Z",
    value: "atz",
  },
  {
    id: uuidv4(),
    title: "Name Z-A",
    value: "zta",
  },
];
