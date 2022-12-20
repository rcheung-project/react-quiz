import React, { useState } from 'react';

export default function App() {
	const qArray = [
		{	 
			ask: 'Which animal can be found in the Commonwealth coat of arms?',
			ansArray: [
				{ choice: 'Eagle', userAns: false },
				{ choice: 'Emu', userAns: true },
				{ choice: 'Dolphin', userAns: false },
				{ choice: 'Koala', userAns: false },
			],
		},
		{ 
			ask: 'How many legs does a spider have?',
			ansArray: [
				{ choice: '8', userAns: true },
				{ choice: '12', userAns: false },
				{ choice: '6', userAns: false },
				{ choice: '7', userAns: false },
			]
		},
		{	 
			ask: 'What is the capital of Australia?',
			ansArray: [
				{ choice: 'Sydney', userAns: false },
				{ choice: 'Canberra', userAns: true },
				{ choice: 'Tasmania', userAns: false },
				{ choice: 'Melbourne', userAns: false },
			],
		},
		{	 
			ask: 'Which animal is an Australian icon?',
			ansArray: [
				{ choice: 'Emu', userAns: false },
				{ choice: 'horse', userAns: false },
				{ choice: 'Kangaroo', userAns: true },
				{ choice: 'Swan', userAns: false },
			],			
		},
	];

	const [qNow, setqNow] = useState(0);
	const [score, setScore] = useState(0);
	const [btnClick, setBtnClick] = useState(true);
	const [ttlClick, setTtlClick] = useState(0);
	const [counter, setCounter] = React.useState(12);
	
	React.useEffect(() => {
	  const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
	  return () => clearInterval(timer); 
	}, [counter]);

	const handleUserClick = (userAns) => { 
		if (btnClick) {			
			if (userAns) {
				setScore(score + 1);
			}
			setTtlClick(ttlClick + 1);
			const qNext = qNow + 1;
			if (qNext < qArray.length) {
				setqNow(qNext);
			} else {
				setBtnClick(false);
			}
		}
	};

	if (counter === 0 && ttlClick < '4' ) {
        return ( 
            <div className='container'> 
           		<div className='sec-s'>
            		Sorry, time's up. Total score is {score} out of {qArray.length}.
        		</div>
    	</div> 
		)
    };

	return (
        <div className='container'> 
			<span class="timer">{counter}s left</span>      
            <div className='sec-q'>
                <div className='sec-q-text'>
                    <span>Question {qNow + 1}</span>
                </div>
            <div className='sec-q-text'>{qArray[qNow].ask}</div>
        	</div>
        	<div className='sec-a'>
          	  	{qArray[qNow].ansArray.map((ansArray) => (
           	 		<button onClick={() => handleUserClick(ansArray.userAns)}>{ansArray.choice}</button>
          	  	))}
        	</div><br></br>
			<div className='sec-s'>
            	Total score is {score} out of {qArray.length}
        	</div>
        </div>
	);
};
