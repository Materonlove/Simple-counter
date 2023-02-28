import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";


import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application
let tiempoSegundos = 0
let decenaSeconds = 0
let centenaSeconds = 0
let milSeconds = 0
let dosSeconds = 0
let tresSeconds = 0

setInterval(() => {
            tiempoSegundos = tiempoSegundos + 1

            switch (true) {
                case tiempoSegundos > 9:
                    tiempoSegundos = 0
                    decenaSeconds++
                    break;
                case decenaSeconds > 5:
                    decenaSeconds = 0
                    centenaSeconds++
                    break;

                case tiempoSegundos > 9:
                    tiempoSegundos = 0
                    milSeconds++
                    break;
                case decenaSeconds > 5:
                    decenaSeconds = 0
                    dosSeconds++
                    break;

                case decenaSeconds > 5:
                    decenaSeconds = 0
                    tresSeconds++
                    break;



                default:
                    break
            }

            ReactDOM.render( < SecondsCounter centenaSeconds = {
                    centenaSeconds
                }
                decenaSeconds = {
                    decenaSeconds
                }
                milSeconds = {
                    milSeconds
                }
                dosSeconds = {
                    dosSeconds
                }
                tresSeconds = {
                    tresSeconds
                }
                seconds = {
                    tiempoSegundos
                }


                

                />, document.querySelector("#app"));

            }, 100)