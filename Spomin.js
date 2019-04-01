

var prva; //prva izbrana karta
var druga; //druga izbrana karta
var ujemanje = 0;
var napake = 0;
var izbraneKarte = 0;
var hrbetKarte = "skull.jpg"; //ko se karti ne ujemata
var cas;

//POLJE SLIK
var poljeSlik = ["image_part_001.jpg",
                "image_part_001.jpg",
                "image_part_002.jpg",
                "image_part_002.jpg",
                "image_part_003.jpg",
                "image_part_003.jpg",
                "image_part_004.jpg",
                "image_part_004.jpg",
                "image_part_005.jpg",
                "image_part_005.jpg",
                "image_part_006.jpg",
                "image_part_006.jpg"] ;


// 2 FUNKCIJI - TIMERJA ENA ZA ZAČETEK IN ENA ZA KONEC
// ČAS ZAČNE TEČI KO OBRNEMO SLIKE, KO SE SLIKI NE UJEMATA IN JE NASTAVLJEN NA 500MS


function zacetniTimer()
{
    cas = setInterval (control, 500);
}

function koncniTimer ()
{
    clearInterval (cas);
}

function clicks (index)
{
    if (izbraneKarte == 0) 
    {
        prva = index;
        document.images[index].src=poljeSlik[index];
        izbraneKarte=1;
    }
    else
    {
        izbraneKarte = 2;
        druga = index;
        document.images[index].src=poljeSlik[index];
        zacetniTimer();
    }
}

function control ()
{
    koncniTimer();

    if (poljeSlik[prva]==poljeSlik[druga])
    {
        ujemanje++;
        izbraneKarte = 0;
    }
    else if (poljeSlik[prva] !== poljeSlik[druga])
    {
        document.images[prva].src=hrbetKarte;
        document.images[druga].src=hrbetKarte;
        izbraneKarte = 0;
        napake++;
        window.localStorage.setItem("Napake", napake);
    }

    if (ujemanje == poljeSlik.length/2)
    {
        alert("Uspesno ste zakljucili igro! \nStevilo nepravilnih poskusov: "+napake);
    }
}

function randomiziraj()
{
    for (var flips = 0; flips < 100; flips++)
    {
        var i = Math.floor(Math.random()* poljeSlik.length);
        var j = Math.floor(Math.random()* poljeSlik.length);
        var temp = poljeSlik[i];
        poljeSlik[i]=poljeSlik[j];
        poljeSlik[j] = temp;


    }
   
}



function imeIgralca() {
   
    var imeIgralca = document.getElementById("imeIgralca").value;
    window.localStorage.setItem('Ime', +new imeIgralca);
    }

function izpisi (){
    document.getElementById("izpis").innerHTML = "Igralec " + localStorage.getItem("Ime") +" se je zmotil "+ localStorage.getItem("Napake")+" krat";
}
   


    