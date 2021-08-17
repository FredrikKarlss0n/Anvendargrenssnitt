// Plockar data ur formuläret
function handleForm(form) {
    //plockar ut element enligt id för utskrift
    const output = document.getElementById('output')
    //plockar värden ur fälten mha id-attributet
    const fEmail = document.getElementById('email').value
    const fPassword = document.getElementById('password').value
    const fAddress = document.getElementById('address').value
    const fCity = document.getElementById('city').value
    const fPostcode = document.getElementById('postcode').value
    const fCountry = document.getElementById('country').value
    const fCheck = document.getElementById('check').value
  
    //template literals med backticks `
    console.log(`${fEmail} ${fPassword} ${fAddress} ${fCity} ${fPostcode} ${fCountry} ${fCheck}`)
    //blandat variablar och teckensträngar
    //console.log(fEmail + ' ' + fTextarea)
  
    //sparar formulär data och html-element i variabel
    let formOutput = `

      <div class="alert alert-primary" role="alert">
          <ul>
              <li>Email: ${fEmail}</li>
              <li>Password: ${fPassword}</li>
              <li>
          </ul>
      </div>`
    //Skriver ut data i output element med innerHTML
    output.innerHTML = formOutput

  }