// create the object
const poll = new Map(); 

// set up the data with key-value pair, 0 is the initial value
poll.set('React', 0);
poll.set('Vue', 0);
poll.set('Angular', 0);
poll.set('Svelte', 0);
poll.set('Other', 0); 

// console.log(poll);

function submitForm(e) {
    //prevent the default submit behavior
    e.preventDefault(); 

    //choose the selected option
    const selectedOption = document.querySelector("input[name= 'poll-option']:checked");

    // console.log(selectedOption);

    if (!selectedOption) {
        alert('Please select an option');
        return; 
    }

    // 'selectedOption.value' represent the names of the chosen option, which is the key of the poll object, with the key we get it's value and we put the value inside 'voteCount'. 
    let voteCount = poll.get(selectedOption.value);
    // reset the poll object with key and it's value with one score
    poll.set(selectedOption.value, voteCount + 1); 
    console.log(poll);

    displayResults();

    // disable form fields after submit
    document
        .getElementById('poll-form')
        .querySelectorAll('input,button')
        .forEach(function (el) {
            el.setAttribute('disabled', true)
        })
}

function displayResults() {
    const results = document.getElementById('results');

    // to begin with, we wanna nothing 
    results.innerHTML = '';

    // the selectedOptionValue is the key of the poll object, and voteCount is it's value 
    for (let [selectedOptionValue , voteCount] of poll) {
        const optionElement = document.createElement('div'); 
        // set up CSS with bootstrap
        optionElement.classList.add(
            'border-bottom',
            'p-2',
            'd-flex',
            'justify-content-between'
        );
        optionElement.innerHTML = `<strong>${selectedOptionValue}: </strong> ${voteCount} votes`;

        results.appendChild(optionElement);
    }
}

document.getElementById('poll-form').addEventListener('submit', submitForm); 