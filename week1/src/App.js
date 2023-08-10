//import {useState} from "react";
import DessertsList from "./components/DessertsList";
import ListItems from "./components/ListItems";
import Form from "./components/Form";
import FeedBack from "./components/FeedBack";
import FormValidate from "./components/FormValidate";
import "./App.css";
import "./Form.css";
const dessert = [
  {
    name: "Hot Chocolate",
    calories: 450,
    desc: "made by milk and chocolate",
    price: "$15"
  },
  {
    name: "Ice Cream",
    calories: 300,
    desc: "this is made of differnet flavours like orange,mango,guaua..",
    price: "$8"
  },
  {
    name: "Gulab Jamun",
    calories: 550,
    desc: "This is typical Indian dessert and people enjoy this all over India",
    price: "$5",
  },
  {
    name: "Gajar ka Hawla",
    calories: 750,
    desc: "This made of carrots, milk and a lot of sugar & this is one of the best dessert ",
    price: "$7"
  }
];



function App(){
  return(
    <div className= "App">
      <h1>Menu of dessert</h1>
      <ListItems data={dessert} />
      <hr /> <br />
      <h1>List of Low Calories dessert</h1>
      <DessertsList data={dessert} />
      <hr />
      <Form />
      <FeedBack /> <br /> <hr />
      <FormValidate />
    </div>
  )
}

export default App;

// function App() {
//   // State to track whether to show low-calorie desserts or not
//   const [showLowCalories, setShowLowCalories] = useState(false);

//   // Handler to toggle the display of low-calorie desserts
//   const handleClick = () => {
//     setShowLowCalories(!showLowCalories);
//   };

//   return (
//     <div className="App">
//       <h1>Menu of dessert</h1>
//       <button onClick={handleClick}>
//         {showLowCalories ? "Show All Desserts" : "Low Calories Items"}
//       </button>

//       {showLowCalories ? (
//         <>
//           <h1>List of Low Calories dessert</h1>
//           <DessertsList data={dessert} />
//         </>
//       ) : (
//         <ListItems data={dessert} />
//       )}

//       <hr />
//       <br />
//     </div>
//   );
// }

// export default App;
