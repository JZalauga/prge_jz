import { createBrowserRouter } from "react-router-dom";
import {Home, About, Services, Map, ListOfItems} from './LazyImports';

const routes = createBrowserRouter
(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
                {
            path: '/map',
            element: <Map/>
        },
                {
            path: '/services',
            element: <Services/>
        },
                {
            path: '/list',
            element: <ListOfItems/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)

export default routes;