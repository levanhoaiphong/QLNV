function Validation() {
    this.kiemTraRong = function (value, selectorError, name) {
        if (value.trim() != '') {
            getEle(selectorError).style.display = "none";
            getEle(selectorError).innerHTML = "";
            return true;
        }
        getEle(selectorError).style.display = "block";
        getEle(selectorError).innerHTML = name + " không được rỗng";
        getEle(selectorError).style.padding = "5px"
        return false;
    };
    this.kiemTraEmail = function (value, selectorError, name) {
        var reGex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (reGex.test(value)) {
            getEle(selectorError).style.display = "none";
            getEle(selectorError).innerHTML = "";
            return true;
        }
        getEle(selectorError).style.display = "block";
        getEle(selectorError).innerHTML = name + " email không đúng";
        getEle(selectorError).style.padding = "5px"
        return false;
    }

    this.kiemTraDoDai = function (value, selectorError, minLength, maxLength, name) {
        if (value.length < minLength || value.length < maxLength) {
            getEle(selectorError).style.display = 'block';
            getEle(selectorError).innerHTML = `${name} từ ${minLength} đến ${maxLength}`;
            return false;
        }
        getEle(selectorError).style.display = 'none';
        getEle(selectorError).innerHTML = '';
        return true;
    }
}

function getEle(ele) {
    return document.getElementById(ele);
}
