import React from "react";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";



//create your first component
const Home = () => {
	const data = [
		{
			img: "https://picsum.photos/200/200?random=1",
			title: "Title",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			buttonText: "Learn More"
		},
		{
			img: "https://picsum.photos/200/200?random=2",
			title: "Title",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			buttonText: "Learn More"
		},
		{
			img: "https://picsum.photos/200/200?random=3",
			title: "Title",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			buttonText: "Learn More"
		},
		{
			img: "https://picsum.photos/200/200?random=4",
			title: "Title",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			buttonText: "Learn More"
		}
	]
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="d-flex justify-content-between">
				{data.map((item, index) => {
					return (
						<Card key={index} img={item.img} title={item.title} description={item.description} buttonText={item.buttonText} />
					)
				})}
			</div>
			<Footer />


		</>
	);
};

export default Home;
