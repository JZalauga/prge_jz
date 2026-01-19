import { createHashRouter} from "react-router-dom";
import {Home, About, Services, Map, ListOfItems, NewUser} from './LazyImports';

const routes = createHashRouter
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
            path: '/new_user',
            element: <NewUser/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)

export default routes;