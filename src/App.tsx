import { useState } from "react";
import "./App.css";
const API_BASE_URL = import.meta.env.VITE_API_URL;

type Joke = {
	id: number;
	question: string;
	answer: string;
};

function App() {
	const [joke, setJoke] = useState("Clique pour voir !");
	const [jokeById, setJokeById] = useState("");
	const [showAll, setShowAll] = useState(false);
	const [allJokes, setAllJokes] = useState<Joke[]>([]);

	const fetchRandomJoke = async () => {
		try {
			const res = await fetch(`${API_BASE_URL}/jokes/random`);
			const data = await res.json();
			if (data?.question && data?.answer) {
				setJoke(`${data.question} ${data.answer}`);
			} else {
				setJoke("Aucune blague trouvée.");
			}
			console.log(`${API_BASE_URL}/jokes/random`);
		} catch (error) {
			setJoke("Erreur lors de la récupération de la blague.");
			console.info(error);
		}
	};

	const fetchJokeById = async (id: number) => {
		try {
			const res = await fetch(`${API_BASE_URL}/jokes/${id}`);
			const data = await res.json();
			if (data?.question && data?.answer) {
				setJokeById(`${data.question} ${data.answer}`);
			} else {
				setJokeById("Aucune blague trouvée.");
			}
		} catch (error) {
			setJoke("Erreur lors de la récupération de la blague.");
			console.info(error);
		}
	};

	const fetchAllJokes = async () => {
		try {
			const res = await fetch(`${API_BASE_URL}/jokes`);
			const data: Joke[] = await res.json();
			setAllJokes(data);
			setShowAll(true);
			window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
		} catch (error) {
			console.error("Erreur lors de la récupération des blagues :", error);
		}
	};

	const backToTop = () => {
		setShowAll(false);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<main className="home">
			<h1>Bienvenue chez Carambar & Co</h1>
			<section className="random-joke-container">
				<button type="button" onClick={fetchRandomJoke}>
					Ta best Joke de Maintenant{" "}
				</button>
				<p className="joke">{joke}</p>
			</section>

			<section className="id-joke-container">
				<h2>Coup de chance ? Clique pour voir !</h2>
				{allJokes.length === 0 ? (
					<p>Pas de blague en stock ...</p>
				) : (
					<div className="buttons">
						{allJokes.map((j) => (
							<button
								type="button"
								key={j.id}
								onClick={() => fetchJokeById(j.id)}
							>
								{j.id}
							</button>
						))}
					</div>
				)}

				{jokeById && <p className="joke">{jokeById}</p>}
			</section>
			<section className="all-jokes-container">
				{!showAll ? (
					<button type="button" onClick={fetchAllJokes}>
						Voir toutes les blagues
					</button>
				) : (
					<button type="button" onClick={backToTop}>
						Revenir en haut
					</button>
				)}
				{showAll && (
					<ul>
						{allJokes.map((j, index) => (
							<li key={j.id || index}>{j.question} Réponse : {j.answer}</li>
						))}
					</ul>
				)}
			</section>
		</main>
	);
}

export default App;
