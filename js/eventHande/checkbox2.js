let nam = document.getElementById('name')
let showName = document.getElementById('show-name')

nam.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {

        showName.innerText = `Your Name is = ${event.target.value}`

        event.target.value = ''
        
    }
})

let skills = document.getElementsByName('skills')

let checkedSkills = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', function (event) {
        if (event.target.checked) {
            checkedSkills.push(event.target.value)
            

        } else {

            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind, 1)
        }
    })
})

