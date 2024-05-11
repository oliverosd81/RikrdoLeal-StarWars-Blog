import React from "react";
import "../../styles/home.css";
import Main from "../component/main";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>STAR WARS APP</h1>
		<div>
			<Main />
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
