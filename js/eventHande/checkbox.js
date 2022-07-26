let nam = document.getElementById('name');

nam.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('show-name').innerHTML = `Your Name is ${event.target.value}`
        event.target.value = ''
    }
})



let skills = document.getElementsByName('skills');

[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        console.log(event.target.checked);
    })
})