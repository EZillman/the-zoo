import { createBrowserRouter } from "react-router-dom";
import { Animal } from "./components/Animal";
import { Animals } from "./components/Animals";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Animals></Animals>
    },
    {
        path: "/animal/:id",
        element: <Animal></Animal>
    }
    
]);