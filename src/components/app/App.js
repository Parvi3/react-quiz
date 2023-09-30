import { useState } from 'react';
import questions from '../questions/questions';
import Game from '../game/game';
import Result from '../result/result';
import './index.scss';

function App() {
	const [step, setStep] = useState(0);
	const question = questions[step];
	const [correct, setCorrect] = useState(0);

	const onClickVariant = (index) => {
		setStep(step + 1);

		if (index === question.correct) {
			setCorrect(correct + 1);
		}
	};

	return (
		<div className="App">
			{
				step !== questions.length ? (
					<Game step={step} question={question} onClickVariant={onClickVariant} />
				) : (
					<Result correct={correct} />)
			}
		</div>
	);
}

export default App;
