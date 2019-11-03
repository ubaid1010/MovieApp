import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import MovieDetails from './screens/MovieDetails';
import Home from './screens/Home';
import Category from './screens/Category';
import Genre from './screens/Genre';
import Search from './screens/Search';
import Saved from './screens/Saved';
import NavBar from './components/NavBar';
import NotFound from './components/404';

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/category" component={Category} />
			<Route path="/category/:genrename/:id/:page" component={Genre} />
			<Route path="/saved" component={Saved} />
			<Route path="/movie/:id" component={MovieDetails} />
			<Route path="/search/:query" component={Search} />
			<Route component={NotFound} />

			<NavBar />
		</BrowserRouter>
	);
}

export default App;
