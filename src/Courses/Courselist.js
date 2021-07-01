import { v4 as uuidv4 } from "uuid";
export const Courselist = [
  {
    id: uuidv4(),
    title: "Course1",
    price: "10000",
    imageLink: process.env.PUBLIC_URL + "/course1.jpg",
  },
  {
    id: uuidv4(),
    title: "Course2",
    price: "10000",
    imageLink: process.env.PUBLIC_URL + "/course2.jpg",
  },
  {
    id: uuidv4(),
    title: "Course3",
    price: "10000",
    imageLink: process.env.PUBLIC_URL + "/course3.jpg",
  },
  {
    id: uuidv4(),
    title: "Course4",
    price: "10000",
    imageLink: process.env.PUBLIC_URL + "/course4.jpg",
  },
];
