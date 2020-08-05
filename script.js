var themeDots = document.getElementsByClassName('theme-dot');
var themeStyle = document.getElementById('theme-style');

let theme = localStorage.getItem('theme');
if(theme == null) {
    setTheme('light');
}

else {
    setTheme(theme);
}

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        themeStyle.href = `default.css`;
    }

    if (mode == 'blue') {
        themeStyle.href = `blue.css`;
    }

    if (mode == 'green') {
        themeStyle.href = `green.css`;
    }

    if (mode == 'purple') {
        themeStyle.href = `purple.css`;
    }

    localStorage.setItem('theme', mode);
}


