import React from 'react'
import "./index.css"
import Input from './input'
import { useState } from 'react';

export default function Index() {
    const form = document.querySelector("form")
    const [nameValue, setInputValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [telValue, setTelValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [cityValue, setCityValue] = useState('');
    const [locationValue, setLocationValue] = useState('');
    const [numValue, setNumValue] = useState('');
    function getValue(e){
        setInputValue(e.target.value);
    }
    function getEmailValue(e){
        setEmailValue(e.target.value)
    }
    function getTelValue(e){
        setTelValue(e.target.value)
    }
    function getCountryValue(e){
        setCountryValue(e.target.value)
    }
    function getCityValue(e){
        setCityValue(e.target.value)
    }
    function getLocationValue(e){
        setLocationValue(e.target.value)
    }
    function getNumValue(e){
        setNumValue(e.target.value)
    }
    function reset(){
        setInputValue('');
        setEmailValue('')
        setTelValue('')
        setCountryValue('')
        setCityValue('')
        setLocationValue('')
        setNumValue('')
    }
    function hendleClick(){
        if(validate()){
            form.reset()
            reset()
        }
    }
    const error = document.querySelector(".error")
    const errorEmail = document.querySelector(".errorEmail")
    const errorPhone = document.querySelector(".errorPhone")
    const errorCountry = document.querySelector(".errorCountry")
    const errorCity = document.querySelector(".errorCity")
    const errorLocation = document.querySelector(".errorLocation")
    const errorNum = document.querySelector(".errorNum")

    const phoneRegex = /^\+?([0-9]{1,4})?[-.\s]?([(][0-9]{1,6}[)])?[-.\s]?([0-9]{1,10})$/;

    const validatePhoneNumber = (phoneNumber) => {
        return phoneRegex.test(phoneNumber);
      };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    function validate(){
        if(!nameValue){ 
            error.style.display = "block"
            return false
        }else{
            error.style.display = "none"
        }
        if(!emailValue){ 
            errorEmail.style.display = "block"
            return false
        }else{
            errorEmail.style.display = "none"
        }
        if(!telValue){ 
            errorPhone.style.display = "block"
            return false
        }else{
            errorPhone.style.display = "none"
        }
        if(!validatePhoneNumber(telValue)){ 
            errorPhone.innerText = "Phone is incorrect"
            errorPhone.style.display = "block"
            return false
        }else{
            errorPhone.innerText = "Phone number input empty"
            errorPhone.style.display = "none"
        }
        if(!countryValue){ 
            errorCountry.style.display = "block"
            return false
        }else{
            errorCountry.style.display = "none"
        }
        if(!cityValue){ 
            errorCity.style.display = "block"
            errorCity.style.textAlign = "right"
            errorCity.style.width = "702px"
            return false
        }else{
            errorCity.style.display = "none"
        }
        if(!locationValue){ 
            errorLocation.style.display = "block"
            return false
        }else{
            errorLocation.style.display = "none"
        }
        if(!numValue){ 
            errorNum.style.display = "block"
            return false
        }else{
            errorNum.style.display = "none"
        }
        if(!validateEmail(emailValue)){ 
            errorEmail.innerText = "Email is incorrect"
            errorEmail.style.display = "block"
            return false
        }else{
            errorEmail.style.display = "none"
            errorEmail.innerText = "Email input empty"
        }
        if(!Number(numValue)){ 
            errorNum.innerText = "The characters must be in number***"
            errorNum.style.display = "block"
            return false
        }else{
            errorNum.style.display = "none"
            errorNum.innerText = "Number input empty"
        }
        return true
    }

  return (
    <>
      <form>
        <h2>Kompaniya ma’lumotlari</h2>
        <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        <div className="inputs">
            <div className="img">
                <img src="" alt="" />
            </div>
            <Input value={nameValue} onChange={getValue} text="Kompaniya nomi" placeholder="Kompaniya nomi"></Input>
            <span className='error'>Name input empty***</span>
            <Input value={emailValue} onChange={getEmailValue} text="Email" placeholder="Email"></Input>
            <span className='errorEmail'>Email input empty***</span>
            <Input value={telValue} onChange={getTelValue} text="Telefon raqami" placeholder="UZ +998"></Input>
            <span className='errorPhone'>Phone number input empty***</span>
            <div className="links">
                <label>
                    <span>Linklar</span>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.1175 3.2025C10.2375 3.435 10.3575 3.6525 10.485 3.8775C11.055 4.8975 11.5575 5.775 11.235 6.9525C11.1075 7.4625 10.485 7.7025 9.63 8.0025C9.01667 8.14736 8.4589 8.46795 8.025 8.925C7.73131 9.36112 7.54844 9.86229 7.49225 10.3851C7.43605 10.9078 7.50822 11.4364 7.7025 11.925C7.845 12.48 7.9275 12.825 7.7775 13.05C7.6275 13.275 7.665 13.185 7.2675 13.2375C6.82034 13.2655 6.38542 13.3949 5.99561 13.6158C5.60581 13.8367 5.27134 14.1433 5.0175 14.5125C4.58473 15.1405 4.34253 15.8801 4.32 16.6425C3.46018 15.2464 3.00333 13.6396 3 12C3.00078 9.94059 3.70782 7.94374 5.00313 6.3427C6.29843 4.74165 8.10365 3.63326 10.1175 3.2025ZM5.9325 18.63C5.8125 17.7825 5.625 16.2525 6.225 15.45C6.36189 15.2366 6.55064 15.0614 6.77361 14.9407C6.99657 14.8201 7.24649 14.7579 7.5 14.76C7.79796 14.7419 8.08789 14.6562 8.34779 14.5093C8.60769 14.3625 8.83073 14.1584 9 13.9125C9.19129 13.5568 9.30128 13.1631 9.32203 12.7597C9.34278 12.3564 9.27378 11.9535 9.12 11.58C8.925 10.83 8.82 10.3275 9.195 9.825C9.48069 9.64672 9.79171 9.5127 10.1175 9.4275C11.07 9.105 12.3675 8.6775 12.6975 7.2975C13.1175 5.55 12.3975 4.2975 11.76 3.135L11.7225 3H12C13.6973 3 15.36 3.4845 16.7925 4.395C16.0038 5.61577 15.0554 6.7256 13.9725 7.695C12.9375 8.6325 13.695 9.7125 14.1975 10.425C14.4716 10.7189 14.6839 11.0648 14.8218 11.4423C14.9596 11.8198 15.0202 12.2211 15 12.6225C14.9459 12.8316 14.9464 13.0511 15.0016 13.2599C15.0568 13.4688 15.1647 13.6599 15.315 13.815C15.5422 13.9683 15.8051 14.0606 16.0783 14.0829C16.3515 14.1052 16.6259 14.0569 16.875 13.9425C17.055 13.8915 17.2372 13.854 17.4225 13.83C17.505 14.115 17.3475 14.3475 16.6725 14.97C15.9975 15.5925 15.105 16.4325 15.375 17.775C15.4707 18.1611 15.6472 18.5225 15.8928 18.8354C16.1384 19.1482 16.4476 19.4054 16.8 19.59C15.1366 20.6519 13.1686 21.1335 11.2028 20.9599C9.23706 20.7862 7.38398 19.967 5.9325 18.63ZM18.0825 18.63L17.79 18.4425C17.265 18.1275 16.9425 17.9025 16.86 17.49C16.7775 17.0775 17.0475 16.7025 17.715 16.08C18.3825 15.4575 19.3125 14.58 18.8175 13.2525C18.36 12.045 17.1 12.3525 16.53 12.5025C16.5123 11.4293 16.1226 10.3954 15.4275 9.5775C15.2397 9.35221 15.0879 9.09922 14.9775 8.8275C16.1278 7.7976 17.1365 6.61985 17.9775 5.325C18.9152 6.15905 19.6673 7.18074 20.1851 8.32392C20.7029 9.4671 20.9749 10.7063 20.9834 11.9612C20.9919 13.2162 20.7367 14.4589 20.2344 15.609C19.7321 16.7591 18.9939 17.7908 18.0675 18.6375L18.0825 18.63Z" fill="#2A2941"/>
                            </svg>
                        </li>
                        <li >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16.3748 3.24984C17.5342 3.25331 18.6451 3.71539 19.4648 4.53517C20.2846 5.35495 20.7467 6.46582 20.7502 7.62516V16.3748C20.7467 17.5342 20.2846 18.6451 19.4648 19.4648C18.6451 20.2846 17.5342 20.7467 16.3748 20.7502H7.62516C6.46582 20.7467 5.35495 20.2846 4.53517 19.4648C3.71539 18.6451 3.25331 17.5342 3.24984 16.3748V7.62516C3.25331 6.46582 3.71539 5.35495 4.53517 4.53517C5.35495 3.71539 6.46582 3.25331 7.62516 3.24984H16.3748ZM16.3748 1.5H7.62516C4.25625 1.5 1.5 4.25625 1.5 7.62516V16.3748C1.5 19.7437 4.25625 22.5 7.62516 22.5H16.3748C19.7437 22.5 22.5 19.7437 22.5 16.3748V7.62516C22.5 4.25625 19.7437 1.5 16.3748 1.5Z" fill="#2A2941"/>
                                <path d="M17.6873 7.62516C17.4278 7.62516 17.174 7.54818 16.9582 7.40396C16.7423 7.25974 16.5741 7.05476 16.4748 6.81493C16.3754 6.5751 16.3494 6.3112 16.4001 6.0566C16.4507 5.802 16.5757 5.56814 16.7593 5.38458C16.9428 5.20102 17.1767 5.07602 17.4313 5.02538C17.6859 4.97473 17.9498 5.00073 18.1896 5.10007C18.4294 5.19941 18.6344 5.36763 18.7786 5.58347C18.9229 5.79931 18.9998 6.05307 18.9998 6.31266C19.0002 6.48512 18.9665 6.65596 18.9007 6.81537C18.8349 6.97477 18.7382 7.11961 18.6163 7.24156C18.4943 7.36351 18.3495 7.46018 18.1901 7.526C18.0306 7.59183 17.8598 7.62553 17.6873 7.62516ZM12 8.49984C12.6923 8.49984 13.369 8.70513 13.9446 9.08973C14.5202 9.47433 14.9688 10.021 15.2337 10.6605C15.4986 11.3001 15.568 12.0039 15.4329 12.6828C15.2978 13.3618 14.9645 13.9855 14.475 14.475C13.9855 14.9645 13.3618 15.2978 12.6828 15.4329C12.0039 15.568 11.3001 15.4986 10.6606 15.2337C10.021 14.9688 9.47433 14.5202 9.08973 13.9446C8.70513 13.369 8.49985 12.6923 8.49985 12C8.50084 11.072 8.86992 10.1823 9.52611 9.52611C10.1823 8.86992 11.072 8.50084 12 8.49984ZM12 6.75C10.9617 6.75 9.94662 7.05791 9.08326 7.63478C8.2199 8.21166 7.54699 9.0316 7.14963 9.99091C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55347 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9466 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8504C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0384 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75Z" fill="#2A2941"/>
                            </svg>
                        </li>
                        <li >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#2A2941"/>
                            </svg>
                        </li>
                        <li >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_0_121)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4.00014 10.4605 4.44451 8.95364 5.27979 7.66038C6.11506 6.36712 7.30576 5.34234 8.70901 4.70901C10.1123 4.07568 11.6684 3.8607 13.1908 4.08987C14.7132 4.31904 16.1372 4.98262 17.2918 6.00099C18.4464 7.01936 19.2826 8.34926 19.7002 9.83111C20.1177 11.313 20.0988 12.8838 19.6457 14.3552C19.1926 15.8265 18.3246 17.1359 17.1458 18.1262C15.967 19.1165 14.5275 19.7456 13 19.938V14H15C15.2652 14 15.5196 13.8946 15.7071 13.7071C15.8946 13.5196 16 13.2652 16 13C16 12.7348 15.8946 12.4804 15.7071 12.2929C15.5196 12.1054 15.2652 12 15 12H13V10C13 9.73478 13.1054 9.48043 13.2929 9.29289C13.4804 9.10536 13.7348 9 14 9H14.5C14.7652 9 15.0196 8.89464 15.2071 8.70711C15.3946 8.51957 15.5 8.26522 15.5 8C15.5 7.73478 15.3946 7.48043 15.2071 7.29289C15.0196 7.10536 14.7652 7 14.5 7H14C13.2044 7 12.4413 7.31607 11.8787 7.87868C11.3161 8.44129 11 9.20435 11 10V12H9C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13C8 13.2652 8.10536 13.5196 8.29289 13.7071C8.48043 13.8946 8.73478 14 9 14H11V19.938C9.0667 19.6942 7.28882 18.7533 6 17.2917C4.71119 15.8302 4.00003 13.9486 4 12ZM12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" fill="#2A2941"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_0_121">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M16 22.027V19.157C16.0375 18.6802 15.9731 18.2008 15.811 17.7508C15.6489 17.3008 15.3929 16.8904 15.06 16.547C18.2 16.197 21.5 15.007 21.5 9.547C21.4997 8.15083 20.9627 6.8082 20 5.797C20.4559 4.57551 20.4236 3.22535 19.91 2.027C19.91 2.027 18.73 1.677 16 3.507C13.708 2.88582 11.292 2.88582 9 3.507C6.27 1.677 5.09 2.027 5.09 2.027C4.57638 3.22535 4.54414 4.57551 5 5.797C4.03013 6.8157 3.49252 8.17046 3.5 9.577C3.5 14.997 6.8 16.187 9.94 16.577C9.611 16.917 9.35726 17.3224 9.19531 17.7669C9.03335 18.2114 8.96681 18.6851 9 19.157V22.027" stroke="#2A2941" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9 20.027C6 21 3.5 20.027 2 17.027" stroke="#2A2941" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                    </ul>
                </label>
            </div>
            <div className="location">
                <Input value={countryValue} onChange={getCountryValue}  text="Davlat" placeholder="Davlat"></Input>
                <Input value={cityValue} onChange={getCityValue} text="Shahar" placeholder="Shahar"></Input>
                <div className="errors">
                    <span className='errorCountry'>Country input empty***</span>
                    <span className='errorCity'>City input empty***</span>
                </div>
            </div>
            <Input value={locationValue} onChange={getLocationValue} text="Yashash joyi" placeholder="Joy"></Input>
            <span className='errorLocation'>Location input empty***</span>
            <Input value={numValue} onChange={getNumValue} text="Hodimlar soni" placeholder="Hodimlar soni"></Input>
            <span className='errorNum'>Employees input empty***</span>
            <label>
                <span>Izoh</span>
                <textarea name="" id="" cols="30" rows="10" placeholder='Kompaniya haqida izoh qoldiring'></textarea>
            </label>
        </div>
        <div className="buttons">
            <button type='button' onClick={() =>{
                reset()
                form.reset()
            }}>Ortga</button>
            <button type='button' onClick={hendleClick} className='next'>Keyingisi</button>
        </div>
      </form>
    </>
  )
}
