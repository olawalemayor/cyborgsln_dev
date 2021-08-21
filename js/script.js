var toggleicon = document.getElementById('mobile-nav-icon');
var mobmenu = document.getElementById('topnav');

toggleicon.addEventListener('click', function() {
    mobmenu.classList.toggle('nav-toggle');
    if (mobmenu.className == 'topnav nav-toggle') {
        toggleicon.innerText = 'x';
    } else {
        toggleicon.innerText = '≡';
    }
});

var sidebarmenu = document.getElementById('sidebar-text-alt');
var mobsidebar = document.getElementById('sidebar');

sidebarmenu.addEventListener('click', function() {
    mobsidebar.classList.toggle('show-sidebar');
    if (mobsidebar.className == 'sidebar show-sidebar') {
        sidebarmenu.innerText = 'HIDE MENU';
    } else {
        sidebarmenu.innerHTML = 'WHAT WE DO<small style="color:red">  tap here</small>';
    }
});