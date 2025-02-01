function dovalidate(){
    let firstname = document.forms['userform']['fname'].value;

    if(firstname == ''){
        alert('First Name is required');
        return false;
    }

    return true;
}