import DessertsList from "./components/DessertsList";
const dessert = [
  {
    name: "Hot Chocolate",
    calories: 450
  },
  {
    name: "Ice Cream",
    calories: 300,
  },
  {
    name: "Gulab Jamun",
    calories: 550,
  },
  {
    name: "Gajar ka Hawla",
    calories: 750,
  }
];

function App(){
  return(
    <div>
      <h1>List of Low Calories dessert</h1>
      <DessertsList data={dessert} />
    </div>
  )
}

export default App;