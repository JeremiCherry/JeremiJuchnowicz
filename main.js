function tablet_open_menu(){
    document.getElementById("tablet_menu").innerHTML=`<table id='open_menu_tablet'>
                <tr>
                    <td><a href='#gallery'>Ranking</a></td>
                    <td><a href='#formularz'>Pytanie</a></td>
                    <td><a href='#media'>Film</a></td>
                    <td><a href='#mapa'>Mapa</a></td>
                    <td><button onclick="tablet_clean()">X zamknij</button></td>
                </tr>
            </table>`

}

function tablet_clean(){
    document.getElementById("tablet_menu").innerHTML=`<div class="menu_button">
                <button onclick="tablet_open_menu()">Menu</button>
            </div>`
}
 function telefon_open_menu(){
     document.getElementById("telefon_menu").innerHTML=`<table id='open_menu_tablet'>
                     <tr><td><a href='#gallery'>Ranking</a></td></tr>
                    <tr><td><a href='#formularz'>Pytanie</a></td></tr>
                    <tr><td><a href='#media'>Film</a></td></tr>
                    <tr><td><a href='#mapa'>Mapa</a></td></tr>
                    <tr><td><button id="tablet_zamknij" onclick="telefon_clean()">X zamknij</button></td></tr>
                </tr>
            </table>`

 }
function telefon_clean(){
    document.getElementById("telefon_menu").innerHTML=`<div class="menu_button">
                <button onclick="telefon_open_menu()">Menu</button>
            </div>`
}
const mechs=[
    {   
        nazwa:"Pegasus",
        manufaktura:"HORUS",
        ksiazka:"<a href='https://massif-press.itch.io/corebook-pdf-free'>Core</a>",
        opis:"- śmieszna sprawa. Widzisz w tym momencie  ta broń technicznie nie istnieje. Strzelasz do nich z pistoletu ktory nie jest prawdziwy, a jednak jest! Nie martw się RA już taki jest. Po prostu wiedz że jeśli istnieje w którymś momencie, stworzyliśmy ją. To przyczynowość, a przyczynowość to -", 
        img: "pegasus.png"
    },
    {
        nazwa:"Atlas",
        manufaktura:"SSC",
        ksiazka:"<a href='https://massif-press.itch.io/the-long-rim'>Long Rim</a>",
        opis:`The time has come to an end
Yeah -- this is what nature planned

Being tracked by a starving beast
Looking for its daily feast
A predator on the verge of death
Close to its last breath
Getting close to its last breath

(Rules of Nature)

And they run when the sun comes up
With their lives on the line
(Alive)
For a while
(No choice)
Gotta follow the laws of the wild
(Alive)
With their lives on the line
(No choice)
Out here only the strong survive

What's done is done
Survived to see another day
The dance of life
The hunter and the agile prey
No guarantee
Of which of them will succeed
Strong or weak

(yell)

Rules of Nature
Rules of Nature`,
img: "atlas.png"
    },

    {
        nazwa:"Lich",
        manufaktura:"HORUS",
        ksiazka:"<a href='https://massif-press.itch.io/the-long-rim'>Long Rim</a>",
        opis:"Czy czujesz że ogranicza cię czas? Czy chcesz naprawić błędy swojej przyszłości? Czy boisz się śmierci? Ten mech własnie pojawił się w twoim garażu a data produkcji wskazuje na następny tydzień nie wiesz czemu ale czujesz że jest on w stanie rozwiązać wszytskie twoje problemy. Drink Deep and Descend",
        img:"lich.png",
    },
    {
        nazwa:"Tokugawa",
        manufaktura:"Harrison Armory",
        ksiazka:"<a href='https://massif-press.itch.io/corebook-pdf-free'>Core</a>",
        opis:"Pamiętaj puki całkowicie nie przepalisz reaktora to wszytsko będzie okej. Dopóki twój mech nie wybucha grzej ten reaktor ile wlezie. Niech świat zapłonie!",
        img:"tokugawa.png",
    },
    {
        nazwa:"Death's Head",
        manufaktura:"SSC",
        ksiazka:"<a href='https://massif-press.itch.io/corebook-pdf-free'>Core</a>",
        opis:"Nie lubisz bliskiego kontaktu? Wolisz trzymać sie na dystans? Jeśli tak jest to mech dla ciebie. Stworzony w jednym zadaniu. Strzelać daleko. Strezlać celnie. Strzelać mocno.",
        img:"dh.png",
    },
    {
        nazwa:"Blackbeard",
        manufaktura:"IPS-N",
        ksiazka:"<a href='https://massif-press.itch.io/corebook-pdf-free'>Core</a>",
        opis:"Blackbeard to ostateczne przeciwieństwo ostatniego mecha. Blackbeard chce być blisko. A dlczego? Widzisz ten miecz? No właśnie. A jeśli kiedyś ci się znudzi prowadzenie mecha zawsze masz SEKHMET",
        img:"blackbeard.png"
    },
    {
        nazwa:"Swallowtail",
        manufaktura:"SSC",
        ksiazka:"<a href='https://massif-press.itch.io/corebook-pdf-free'>Core</a>",
        opis:"Ukryj się gdzieś w krzaku nie będzie to trudne jesteś niewidzialny. Teraz jedyne co musisz robić to przesyłać dane twojej drużynie. Ciągłe skany, nieustające symulacje. Wiesz gdzie są wrogowie, wiesz jakie są ich słabe punkty. To tylko kwestia czasu zanim zginą",
        img:"swallowtail.png"
    }


        
        
]
let current=6
function print_mech(){
    document.getElementById("numer").innerText = "Numer " + (current+1)
    document.getElementById("nazwa").innerText=mechs[current].nazwa
    document.getElementById("manufaktura").innerText=mechs[current].manufaktura
    document.getElementById("ksiazka").innerHTML=mechs[current].ksiazka
    document.getElementById("opinia").innerText=mechs[current].opis
    document.getElementById("photo").src="media/"+mechs[current].img
}

    
function prev(){
    current++
    if(current>6) current=0
    print_mech(current)

}
function next(){
    current--
    if(current<0) current=6
    print_mech(current)

}
print_mech()
