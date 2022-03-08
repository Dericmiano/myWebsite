console.log("its workin");
let theme = localStorage.getItem('theme')
if (theme == null){
    setTheme('light')
}else {
    setTheme(theme)
}
let themDots = document.getElementsByClassName('theme-dot')
for (var i = 0; themDots.length > i;i++){
    themDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
        
    })
}
function setTheme(mode) {
    if (mode == 'light'){
        document.getElementById('them-style').href='default.css'
    }
    if (mode == 'green'){
        document.getElementById('them-style').href='green.css'
    }
    if (mode == 'blue'){
        document.getElementById('them-style').href='blue.css'
    }
    if (mode == 'purple'){
        document.getElementById('them-style').href='purple.css'
    }
    localStorage.setItem('theme',mode)
}