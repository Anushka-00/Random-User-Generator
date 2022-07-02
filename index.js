//generate details on window load
window.onload = generatePerson()
let button = document.getElementById('generator')
button.addEventListener("click",generatePerson)

//Integrate Api to generate details
function generatePerson(){
    //fetch all details expect login details
    fetch('https://randomuser.me/api/?exc=login')
    .then(response => response.json())
    .then(data=>{
    let person = data['results'][0]

    //image
    let image = person['picture']['large']

    //name
    let title = person['name']['title']
    let f_name = person['name']['first']
    let l_name = person['name']['last']
    
    //age
    let age = person['dob']['age']
    
    //store date of birth as an array
    let DOB= person['dob']['date'].split('T')[0].split('-')
    
    //gender
    let gender = person['gender']
    gender = gender[0].toUpperCase() + gender.substring(1)
    
    //location
    let location = person['location']

    //contact
    let mobileNo = person['cell']
    let phoneNo = person['phone']

    
    //email
    let email = person['email']

    //nationality
    nat_codes = {
        'AU':'Australia',
        'BR':'Brazil',
        'CA':'Canada',
        'CH':'Switzerland',
        'DE':'Germany',
        'DK':'Denmark',
        'ES':'Spain',
        'FI':'Finland',
        'FR':'France',
        'GB':'United Kingdom of Great Britain and Northern Ireland',
        'IE':'Ireland',
        'IR':'Islamic Republic of Iran',
        'NO':'Norway',
        'NL':'Netherlands',
        'NZ':'New Zealand',
        'TR':'Turkey',
        'US':'United States of America'
    }
    let nationality = nat_codes[person['nat']]

    //set all variables
    document.getElementById('personImage').src = image
    document.getElementById('personName').innerHTML = title +' '+f_name+' '+l_name
    document.getElementById('personGender').innerHTML = gender
    document.getElementById('personAge').innerHTML = DOB[2]+'/'+DOB[1]+'/'+DOB[0]+' ( '+age+' years old )'
    document.getElementById('personLocation').innerHTML = location['street']['number']+","+location['street']['name']+","+location['city']+","+location['state']+","+location['postcode']
    document.getElementById('personNationality').innerHTML = nationality
    document.getElementById('personMobile').innerHTML = mobileNo
    document.getElementById('personPhone').innerHTML = phoneNo
    document.getElementById('personEmail').innerHTML = email

    })
}
