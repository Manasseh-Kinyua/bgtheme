let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
}else {
    setTheme(theme);
};

for(let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log("Theme option clicked: ", mode)
        setTheme(mode)
    });
};

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'red') {
        document.getElementById('theme-style').href = 'red.css'
    }

    if(mode == 'pink') {
        document.getElementById('theme-style').href = 'pink.css'
    }

    localStorage.setItem('theme', mode)
};