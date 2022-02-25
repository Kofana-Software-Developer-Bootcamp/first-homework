
//Input ile alınan verileri diziye eklemek için öncelikle boş array ve obje oluşturduk. 
const myData = [];
let myObjects = {};


//Butona tanımladığımız onclick metodu ile çalışacak fonksiyonu oluşturduk.
function pushData(){

    //Inputtan girilen verileri value ile alıyoruz.
    let userNames = document.querySelector('#names').value;
    let userMail = document.querySelector('#mail').value;
    let userSchool = document.querySelector('#okul').value;
    let userFaculty = document.querySelector('#bolum').value;
    let userAge = document.querySelector('#age').value;
    let cities = document.querySelector('#cities').value;

    //Alınan verileri burada boş objeye aktarıyoruz. 
    myObjects.userNames = userNames;
    myObjects.userMail = userMail;
    myObjects.userSchool = userSchool;
    myObjects.userFaculty = userFaculty;
    myObjects.userAge = userAge;
    myObjects.cities = cities;
    
    //Oluşturduğumuz objeyi diziye aktarıyoruz.
    myData.push(myObjects);
    
    //Local Storage ile dizimize eklediğimiz objeleri tarayıcı üzerinde kaydederiz.
    localStorage.setItem("Persons", JSON.stringify(myData));
    let storedNames = JSON.parse(localStorage.getItem("Persons"));
    
    //Dizinin elemanlarını ekrana yazdırmak için for döngüsünü kullandık.
    for(let i =0; i<myData.length; i++){
        console.log(`Kayıtlı Kişi  Adı ve Soyadı:${myData[i].userNames}  Mail Adresi:${myData[i].userMail} Okulu:${myData[i].userSchool} Bölümü:${myData[i].userFaculty} Yaşı:${myData[i].userAge} Şehri:${myData[i].cities}`);
    }
}

