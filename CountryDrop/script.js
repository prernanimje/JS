var countrystatecityinfo={
    India:{
        Maharashtra:{
            Nagpur:{
                Datta:[],
                madan:[],
            },
            Pune:{
                city:[],
                phos:[],
            },
        },
        Gujarat:{
            Ahmedabad:[],
            Surat:[],
        },
        Assam:{
            Guwahati:[]
        }
    },
    SriLanka:{
      Badulla:{
        haputale:[],
        passara:[],
      },
      kandy:{
        akurana:[],
      }
    }
}
window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city')
        selectHospital=document.getElementById('hospital'),

        selectState.disabled = true
        selectCity.disabled = true
        selectHospital.disabled= true

        for(let country in countrystatecityinfo){
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }
        selectCountry.onchange = (e) =>{ 
                selectState.disabled = false
                selectCity.disabled = true
                selectHospital.disabled= true
             for(let state in countrystatecityinfo[e.target.value]){
                selectState.options[selectState.options.length] = new Option(state, state)
         }
        }
        selectState.onchange = (e) =>{
            selectCity.disabled=false
            selectHospital.disabled=true
            for(let state in countrystatecityinfo[selectCountry.value][e.target.value]){
                selectCity.options[selectCity.options.length]=new Option(state,state)
            }
        }
        selectCity.onchange = (e) =>{
            selectCity.disabled= false
            selectHospital.disabled= true
            for(let city in countrystatecityinfo[selectCountry.value][e.target.value]){
                selectCity.options[selectCity.options.length]=new Option(city,city)
            }
        }
        selectHospital.onchange = (e) =>{
            selectHospital.disabled= false
            for(let hospital in countrystatecityinfo[selectCountry.value][selectState.value][e.target.value]){
                selectHospital.options[selectHospital.options.length]=new Option(hospital,hospital)
            }
        }
}