//import {useState} from "react";
import DessertsList from "./components/DessertsList";
import ListItems from "./components/ListItems";
import Form from "./components/Form";
import FeedBack from "./components/FeedBack";
import FormValidate from "./components/FormValidate";
import "./App.css";
import "./Form.css";
import { ThemeProvider, useTheme } from "./components/ThemeChanger";
import Switch from "./switch";

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

const Title = ({children}) => {
  const {theme} = useTheme();
  return(
    <h1 
      style={{ color: theme ==="light"? "black":"white", textAlign: "center"}}
    >
      {children}
    </h1>
  )
}

function App(){
  const {theme} = useTheme();
  return(
    <div className= "App"
      style={{ backgroundColor: theme === "light"? "white":"black", }}
    >
      <Title>Pizza Mania 🍕</Title>
      <Switch />
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

function Root(){
  return(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}

export default Root;

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
