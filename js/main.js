// #1
ex1Text = document.querySelector(`.ex1-text`)
onButton = document.querySelector(`.on`)
offButton = document.querySelector(`.off`)

ex1Text.innerText = `1 - 3 - 5`

onButton.addEventListener('click', () => {
    ex1Text.innerText = `2 - 4 - 6`
})

offButton.addEventListener('click', () => {
    ex1Text.innerText = `1 - 3 - 5`
})


// #2
ex2Text = document.querySelector(`.ex2-text`);
plusButton = document.querySelector(`.plus`)
minusButton = document.querySelector(`.minus`)

let ex2_counter = 0;
ex2Text.innerText = ex2_counter;

plusButton.addEventListener('click', () => {
    ex2_counter++;
    ex2Text.innerText = ex2_counter;
})

minusButton.addEventListener('click', () => {
    ex2_counter--;
    ex2Text.innerText = ex2_counter;
})

// #3
ex3Text = document.querySelector(`.ex3-text`);
ex3Text.innerText = `over`;

ex3Text.addEventListener('mouseover', () => {
    ex3Text.innerText = `out`;
})
ex3Text.addEventListener('mouseout', () => {
    ex3Text.innerText = `over`;
})

// #4
ex4Text = document.querySelector(`.ex4-text`);

ex4Text.addEventListener('click', ()=> {
    if (ex4Text.classList.contains(`black-text`))
    {
        ex4Text.classList.add('white-text')
        ex4Text.classList.remove('black-text')
    }
    else
    {
        ex4Text.classList.remove('white-text')
        ex4Text.classList.add('black-text')
    }
    console.log('click')
})

ex4Text.addEventListener('dblclick', ()=> {
    if (ex4Text.classList.contains(`black-bg`))
    {
        ex4Text.classList.add('white-bg')
        ex4Text.classList.remove('black-bg')
    }
    else
    {
        ex4Text.classList.remove('white-bg')
        ex4Text.classList.add('black-bg')
    }
})
