window.onresize = function(){ location.reload(); }

function table_row_enter(e) {
    if (window.innerWidth < 768) {
        return;
    } else {
        document.getElementsByClassName(e.className.split(" ")[0])[1].style.display = "table-row";
    }
}
function table_row_leave(e) {
    if (window.innerWidth < 768) {
        return;
    } else {
        if (e.focused) {
            return;
        } else {
            document.getElementsByClassName(e.className.split(" ")[0])[1].style.display = "none";
        }
    }
}

function open_up(e) {
    if (window.innerWidth < 768) {
        var x = e.getElementsByTagName("td");
        for (var i = 1; i < x.length; i++) {
            x[i].style.display = "block";
        }
        var y = e.getElementsByClassName("first")[0];
        y.style.backgroundColor = "#709775";
        y.style.color = "#FFFFFF";
    } else {
        e.focused = true;
        var x = document.getElementsByClassName(e.className.split(" ")[0])[1];
        x.style.display = "table-row";
        e.style.backgroundColor = "#709775";
        e.style.color = "#FFFFFF";
        var y = e.getElementsByClassName("first")[0];
        y.style.backgroundColor = "#709775";
        y.style.color = "#FFFFFF";
    }
}
function close_up(e) {
    if (window.innerWidth < 768) {
        var x = e.getElementsByTagName("td");
        for (var i = 1; i < x.length; i++) {
            x[i].style.display = "none";
        }
        var y = e.getElementsByClassName("first")[0];
        y.style.backgroundColor = "";
        y.style.color = "";
    } else {
        e.focused = false;
        var x = document.getElementsByClassName(e.className.split(" ")[0])[1];
        x.style.display = "none";
        e.style.backgroundColor = "";
        e.style.color = "";
        var y = e.getElementsByClassName("first")[0];
        y.style.backgroundColor = "";
        y.style.color = "";
    }
}

function expand_button(e) {
    if (window.innerWidth < 768) {
        return;
    } else {
        if (document.table_expanded) {
            var x = document.getElementsByTagName("tr")
            for (var i = 1; i < x.length; i++) {
                if (x[i].className.split(" ")[1] == "keep") {
                    close_up(x[i]);
                }
            }
            document.table_expanded = false;
            e.innerHTML = "[expand]";
        } else {
            var x = document.getElementsByTagName("tr");
            for (var i = 1; i < x.length; i++) {
                if (x[i].className.split(" ")[1] == "keep") {
                    open_up(x[i]);
                }
            }
            document.table_expanded = true;
            e.innerHTML = "[shrink]";
        }
    }
}

function open_img(e) {
    e.getElementsByClassName("desc")[0].style.display = "block";
}
function close_img(e) {
    e.getElementsByClassName("desc")[0].style.display = "none";
}
function gallery_img_enter(e) {
    e.getElementsByClassName("desc")[0].style.display = "block";
}
function gallery_img_leave(e) {
    e.getElementsByClassName("desc")[0].style.display = "none";
}