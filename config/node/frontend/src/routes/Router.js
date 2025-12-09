import { createHashRouter, HashRouter } from "react-router-dom";
import {Home, About, Services, Map, ListOfItems} from './LazyImports';

const routes = createHashRouter
(
    [
        {
            path: '/prge_jz/',
            element: <Home/>
        },
        {
            path: '/prge_jz/about',
            element: <About/>
        },
                {
            path: '/prge_jz/map',
            element: <Map/>
        },
                {
            path: '/prge_jz/services',
            element: <Services/>
        },
                {
            path: '/prge_jz/list',
            element: <ListOfItems/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)

export default routes;