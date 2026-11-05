import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {

    const skippedAnswers =
        userAnswers.filter(answer => answer === null);

    const correctAnswers =
        userAnswers.filter((answer, index) =>
            answer === QUESTIONS[index].answers[0]
        );

    const skippedCount = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );

    const correctCount = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );

    const wrongCount = 100 - skippedCount - correctCount;

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="The logo for Quiz is over message" />
            <h2>당신의 점수는??</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedCount}%</span>
                    <span className='text'>스킵한 비율</span>
                </p>
                <p>
                    <span className='number'>{correctCount}%</span>
                    <span className='text'>맞춘 비율</span>
                </p>
                <p>
                    <span className='number'>{wrongCount}%</span>
                    <span className='text'>틀린 비율</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer';

                    if (answer === null) {
                        cssClass += ' skipped';
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct';
                    } else {
                        cssClass += ' wrong';
                    }

                    return (
                        <li key={`answer-${index}`}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? 'Skipped'}</p>
                        </li>
                    );
                })}

            </ol>
        </div>
    );
}