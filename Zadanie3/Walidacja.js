function check()
{
    wynik = true;
    
    obj = document.getElementById('imie').value;
    var imię = new RegExp('^[a-zA-ZłŁóżŻźŹąĄćĆĘęśŚ]{2,100}$');
    result =  imię.test(obj);
    if(result == false || obj==null)
    {
        document.getElementById('imie-blad').innerHTML = "Nieprawidłowo wprowadzone imię";
        wynik = false;
    }
    else {
        document.getElementById('imie-blad').innerHTML = "";
    }

    /*NAZWISKO*/
    obj = document.getElementById('nazwisko').value;
    var Nazwisko = new RegExp('^[a-zA-ZłŁóżŻźŹąĄćĆĘęśŚ]{2,100}$');
    result =  Nazwisko.test(obj);
    if(result === false || obj===null)
    {
        document.getElementById('nazwisko-blad').innerHTML = "Nieprawidłowo wprowadzone nazwisko";
        wynik = false;
    }
    else {
        document.getElementById('nazwisko-blad').innerHTML = "";
    }

    /*ULICA*/
    obj = document.getElementById('ulica').value;
    var ulica = new RegExp('^[a-zA-ZłŁóżŻźŹąĄćĆĘęśŚ]{2,100}$');
    result =  ulica.test(obj);
    if(result === false || obj===null)
    {
        document.getElementByName('ulica-blad').innerHTML = "Nieprawidłowo wprowadzona ulica";
        wynik = false;
    }
    else {
        document.getElementByName('ulica-blad').innerHTML = "";
    }

    /*NUMER DOMU*/
    obj = document.getElementByName('nr domu').value;
    var housenum =  new RegExp('^[0-9]{1,4}[a-z]{0,2}$','i');
    result =  housenum.test(obj);
    if(result === false || obj===null)
    {
        document.getElementByName('nr-dom-blad').innerHTML = "Nieprawidłowy numer domu";
        wynik = false;
    }
    else {
        document.getElementByName('nr-dom-blad').innerHTML = "";
    }

    /*NUMER MIESZKANIA*/
    obj = document.getElementByName('nr mieszkania').value;
    var f_num = new RegExp('^[0-9]{0,4}$');
    result =  f_num.test(obj);
    if(result === false)
    {
        document.getElementByName('nr-miesz-blad').innerHTML = "Nieprawidłowo wprowadzony numer mieszkania";
        wynik = false;
    }
    else {
        document.getElementByName('nr-miesz-blad').innerHTML = "";
    }



    /*KOD POCZTOWY*/
    obj=document.getElementByName('kod pocztowy').value;
    var kod_pocztowy = new RegExp('^[0-9]{2}-[0-9]{3}$');

    result =  kod_pocztowy.test(obj);
    if(result === false || obj===null)
    {
        document.getElementByName('kod-blad').innerHTML = "Nieprawidłowy kod pocztowy";
        wynik =  false;
    }
    else {
        document.getElementByName('kod-blad').innerHTML = "";
    }


    
    obj = document.getElementByName('miasto').value;
    var miasto = new RegExp('^[a-ząęćźżółś/-]{1,100}$','i');
    result =  miasto.test(obj);
    if(result === false || obj===null )
    {
        document.getElementById('miasto-blad').innerHTML = "Nieprawidłowe miasto";
        wynik = false;
    }
    else {
        document.getElementByName('miasto-blad').innerHTML = "";
    }

    
    var obj1 = document.getElementById('b_day').value;
    var obj2 = document.getElementById('b_year').value;
    var birthday = new RegExp('(^[12]{1}[0-9]{1}$)|(^[3]{1}[01]{1})|(^[1-9]{1}$)');
    var birthday_year = new RegExp('(^[1]{1}[9]{1}[0-9]{2}$)|(^[2]{1}[0]{1}[0]{1}[0-9]{1}$)|(^[2]{1}[0]{1}[1]{1}[0-7]{1}$)');
    result1 = birthday.test(obj1);
    result2 = birthday_year.test(obj2);

    if(result1 === false || result2 === false )
    {
        document.getElementById('data-urodz-blad').innerHTML = "Neprawidlowa data urodzenia";
        wynik = false;
    }
    else {
        document.getElementById('data-urodz-blad').innerHTML = "";
    }

    
    obj = document.getElementById('p_number').value;
    var tel = new RegExp('^[1-9]{1}[0-9]{8}$');
    result =  tel.test(obj);
    if(result === false || obj===null)
    {
        document.getElementById('tel-blad').innerHTML = "Nieprawidłowy numer tel";
        wynik = false;
    }
    else {
        document.getElementById('tel-blad').innerHTML = "";
    }

    return wynik;
}
