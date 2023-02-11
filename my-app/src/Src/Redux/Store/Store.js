import {configugaration} from "@reduxjs/toolkit"
import { CounterSlice } from "../State/Counter/CounterSlice"



export default configugaration({ //json object

    reducer:{

        counter: CounterSlice

    }



})