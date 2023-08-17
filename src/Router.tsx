import { createBrowserRouter } from "react-router-dom";
import { Animal } from "./components/Animal";
import { Animals } from "./components/Animals";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: "/animals",
        element: <Animals></Animals>
    },
    {
        path: "/animal/:id",
        element: <Animal></Animal>
    }
    
]);