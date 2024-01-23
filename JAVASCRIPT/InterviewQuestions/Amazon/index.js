// Round 1. Amazon 23-01-2024

1;
var q = 10;
let p = 20;

{
  var q = 30;
  let p = 40;
}
console.log(q, p);

// 30 20  due to block scope

// 2; question
let a = [0, 1, 2];
let b = "0,1,2";
let c = "0, 1, 2";
let d = [];
let e = "";

console.log(c);
console.log(a);
console.log(d, a[0]);
console.log(d);
console.log(a == b); // true
console.log(a == c); // true
console.log("Q 4", a[0] == d); //false
console.log(a[0] == e); // false
console.log(d == e); //true
console.log(b == c); // false
console.log(a[0] == false); //false
console.log(a[0] === false); //true

var test1 = "thisislinewithspaces";
var test2 = "this is line with spaces"; // test2[4]

// 3. Primitiatad e Types in JS//

// boolean, string, let, var, const,number, flo
// 1, 1.0, "someValue", true

// nuber, float, string, boolean

// 4. Arrow function
// sum();
{
  /* due to hosting show error */
}

sum1();

const sum = (a, b) => {
  return a + b;
};

function sum1(a, b) {
  return a + b;
}

// 5. Build a React application that displays real-time weather data for various cities.

// Features:

// Weather Display: Show temperature, humidity, and weatherForcast for a selected city.
// City Selector: Drop down menu for users to choose different cities. [Delhi, Mumbai, Hyderabad, Chennai]
// Unit Toggle: Switch between Celsius and Fahrenheit.
// API Integration: Fetch weather data using a weather API
// Api endpoint: “www.amazon.com/weatherInfo”
// Request Model: {
//    city: String
// }
// Response Model: {
//     temperature: String
//     humidity: String,
//     weatherForcast: String
// }

// Fahrenheit = (Celsius × 9/5) + 32

// import React, {useState} from 'react';

// const App =()=> {

//     const [open, setOpen] = useState(false);
//     const [temp, setTemp] = useState('')
//     const [humidity, setHumidity] = useState('')
//     const [weatherForcast, setWeatherForcast] = useState('')

//     const cites =  [Delhi, Mumbai, Hyderabad, Chennai]

//     const getWeather = (wheatherReqObj)=> {

//     const result = fetch(www.amazon.com/weatherInfo, wheatherReqObj);

//         result.then((data)=> {
//             data.json.string
//         })

//         const {} =   res
//     }

//     const handlegetWeatherData = (data)=> {

//         const wheatherReqObj = {
//             city: data
//         }
//        getWeather(wheatherReqObj)
//     }

//     const test = useCallback(fun, [cities])

//     return (

//         <div>

//             <button onClick={()=> setOpen(!open)}>cites</button>
//             {
//                 open && (
//                   <div>
//                   {
//                    <ul>
//                       cites.map((item, index)=> {

//                           return (

//                     <li key={index} onClick={()=> handlegetWeatherData(item.cites)}>{item.cites} </li>

//                           )

//                       </ul>  }

//                       )
//                   }

//                 </div>

//                 )
//             }

//         </div>
//         <div>

//             <h1> Temp: {weatherForcast?.temp}

//         </div>
//
//         )
// }
