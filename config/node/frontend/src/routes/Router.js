import { createHashRouter} from "react-router-dom";
import {Home, Services, Map, ListOfCemeteries, NewCemetery, Cemetery, Worker, Client} from './LazyImports';

const routes = createHashRouter
(
    [
        {
            path: '/',
            element: <Home/>
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
            path: '/cemeteries',
            element: <Cemetery/>
        },
        {
            path: '/workers',
            element: <Worker/>
        
        },
        {
            path: '/clients',
            element: <Client/>
        },
        {
            path: '/cemeteries/cmeteries_list',
            element: <ListOfCemeteries/>
        },
        {
            path: '/cemeteries/new_cemetery',
            element: <NewCemetery/>
        },
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)

export default routes;