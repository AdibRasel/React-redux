// import {configugaration} from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { CounterSlice } from "../State/Counter/CounterSlice"



export default configureStore({ //json object

    reducer:{

        counter: CounterSlice

    }



})


