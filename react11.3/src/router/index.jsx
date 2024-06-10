import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Cars from "../pages/cars/cars";
import SingleCar from "../pages/single-car/single-car";
import Main from "../pages/main/main"
import Brand from "../pages/brands/brand";
import Albums from "../pages/albums/albums"
import Comments from "../pages/comments/comments"
import Todos from "../pages/todos/todos"
import Photos from "../pages/photos/photos";
import Newproject from "../pages/newproject/newproject";
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Cars/>}/>
            <Route path="single-car/:id" element={<SingleCar/>}/>
            <Route path="brand" element={<Brand/>}/>
            <Route path="albums" element={<Albums/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="todos" element={<Todos/>}/>
            <Route path="photos" element={<Photos/>}/>
            <Route path="newproject" element={<Newproject/>}/>
            </Route>
             </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
