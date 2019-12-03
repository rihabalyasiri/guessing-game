let guessGameObject = {
    rounds: 0,
    counter: 0,
    randomNumber: 0,

    getRounds() {
        const roundsOptions = document.querySelector('.block-block');
        const customInput = document.getElementById('custom-input');
        roundsOptions.addEventListener('click', (e) => {
            if (e.target.value === 'custom') {
                customInput.style.display = "block";
                customInput.addEventListener('change', () => {
                    this.rounds = customInput.value;
                });
            } else {
                this.rounds = e.target.value;
            }
        });
    },

    getRandomNumber() {
        let randomNumber = parseInt((Math.random() * 100) + 1);
        this.randomNumber = randomNumber;
    },

    play() {
        const guessBlock = document.querySelector('.guess-block');
        const roundsOptions = document.querySelector('.block-block');
        const roundsCounter = document.getElementById('rounds-counter');
        let guessCounter = document.getElementById('guessCounter');
        let guessRounds = document.getElementById('guessRounds');
        const output = document.getElementById('output');
        const finalResult = document.getElementById('finalResult');
        guessBlock.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.value === 'guess') {
                this.counter += 1;
                let guessInput = document.getElementById('guess-input').value;
                roundsOptions.style.display = "none";
                roundsCounter.style.display = "block";

                if (this.counter <= this.rounds) {
                    guessCounter.innerHTML = this.counter;
                    guessRounds.innerHTML = `/ ${this.rounds}`;
                    if (this.counter == this.rounds) {
                        if (guessInput != this.randomNumber) {
                            finalResult.classList.add('loser');
                            finalResult.innerHTML += `you lost play again`
                            return;
                        }
                    }
                    if (guessInput < this.randomNumber) {
                        output.innerHTML += `${this.counter}. you need to guess higher than ${guessInput}, try again.. <br><br>`;
                    } else if (guessInput > this.randomNumber) {
                        output.innerHTML += `${this.counter}. you need to guess lower than ${guessInput}, try again.. <br><br>`;
                    } else if (guessInput == this.randomNumber) {
                        finalResult.classList.add('winner');
                        finalResult.innerHTML += `you got it in ${this.counter} times I am ${this.randomNumber}`
                    }

                }

            } else if (e.target.value === 'reset') {
                window.location.reload();
            }
        });
    }
}

guessGameObject.getRounds()
guessGameObject.getRandomNumber()
guessGameObject.play()

