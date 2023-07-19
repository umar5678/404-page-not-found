let darkMode = localStorage.getItem('darkMode')


var themeBtn = document.querySelector('#themeBtn')

const enableDarkMode = () => {
    document.body.classList.add("dark-mode")

    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
    document.body.classList.remove("dark-mode")

    localStorage.setItem("darkMode", null)
}

if(darkMode === "enabled"){
    enableDarkMode()
}


themeBtn.addEventListener('click', () => {
    
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled"){
        enableDarkMode()
    }else {
        disableDarkMode()
    }
})