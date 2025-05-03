import nameList from "./data/names.js";
import toDoList from "./data/toDo.js";
import purposesList from "./data/purposes.js";

const getRandomValue = (array) =>
  array?.length !== 0 ? array[Math.floor(Math.random() * array.length)] : null;

const printPersonWithWorkAndPurpose = () => {
  const person = getRandomValue(nameList);
  const toDo = getRandomValue(toDoList);
  const purpose = getRandomValue(purposesList);
  if (!person || !toDo || !purpose) return console.log("Invalid data");
  console.log(`Hi ${person}! Today, you should: ${toDo}`);
  console.log(`Because: ${purpose}`);
};

for (let i = 0; i <= 10; i++) {
  printPersonWithWorkAndPurpose();
}
