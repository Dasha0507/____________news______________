import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NewsFeed from "./pages/NewsFeed";


export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <NewsFeed/>
            </Route>            
        </Switch>
    )
}