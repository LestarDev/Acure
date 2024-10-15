import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import { SetPageType } from "../../types/PageType"
import "./Regulamin.css"

const Regulamin = ({setPage}:{
    setPage: SetPageType
}) => {

    return <div>
        <NavBar setPage={setPage} />
        <h1>Regulamin</h1>

        <p>Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych osobowych przez MODERNITY CLOUD  SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, ul. al. Józefa Piłsudskiego 17 / 4, 35-074 Rzeszów, NIP: 5170425445, REGON: 522108510 (dalej „Administrator”).</p>
        
        <ol type="I">
            <li>
                Definicje
                <ol>
                    <li>Administrator - MODERNITYCLOUD SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, która przetwarza dane osobowe użytkowników w ramach prowadzonej działalności gospodarczej.</li>
                    <li>Użytkownik - każda osoba fizyczna odwiedzająca stronę internetową Administratora lub korzystająca z usług świadczonych przez Administratora za pośrednictwem sklepu internetowego.
                    </li>
                    <li>Dane osobowe - wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej w rozumieniu przepisów RODO.</li>
                    <li>RODO - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych.
                    </li>
                    <li>Pliki cookies to informacje cyfrowe, w szczególności pliki tekstowe, które są przechowywane na urządzeniach końcowych użytkowników, takich jak komputer, telefon, tablet czy smartfon, i przesyłane przez strony internetowe lub usługi.
                    </li>
                </ol>
            </li>
            <li>
                Przetwarzanie danych osobowych
                <ol>
                    <li>
                        Cel przetwarzania danych
                        <ul>
                            <li>Realizacja umowy: przetwarzanie danych osobowych jest niezbędne do wykonania umowy zawartej między Użytkownikiem a Administratorem, w tym realizacji zamówień w sklepie internetowym.</li>
                            <li>Marketing bezpośredni: dane osobowe mogą być przetwarzane w celu prowadzenia działań marketingowych za zgodą Użytkownika, np. wysyłki newslettera. (art. 6 ust. 1 lit. f RODO)
                            </li>
                            <li>Obsługa zapytań i reklamacji: przetwarzanie danych osobowych w celu odpowiedzi na zapytania, obsługi reklamacji i innych wniosków zgłaszanych przez Użytkowników.</li>
                            <li>Obowiązki prawne: przetwarzanie danych w celu spełnienia obowiązków wynikających z przepisów prawa, w tym przepisów podatkowych i księgowych.
                            </li>
                            <li>Prawnie uzasadniony interes: przetwarzanie danych w celu dochodzenia roszczeń lub obrony przed roszczeniami oraz w celach analitycznych i statystycznych.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Rodzaje przetwarzanych danych
                        <ul>
                            <li>Dane identyfikacyjne: imię, nazwisko, adres zamieszkania, numer telefonu, adres e-mail.
                            </li>
                            <li>Dane transakcyjne: informacje o zamówieniach, historia zakupów, dane dotyczące płatności.
                            </li>
                            <li>Dane techniczne: adres IP, dane o przeglądarce internetowej, typ urządzenia, dane o aktywności na stronie internetowej.
                            </li>
                            <li>Dane zawarte w plikach cookies: pliki cookies mogą zawierać informacje o preferencjach Użytkownika oraz jego aktywności na stronie.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Podstawa prawna przetwarzania danych
                        <ul>
                            <li>Zgoda Użytkownika (art. 6 ust. 1 lit. a RODO) – w zakresie, w jakim przetwarzanie odbywa się na podstawie zgody (np. zapisanie się na newsletter).</li>
                            <li>Wykonanie umowy (art. 6 ust. 1 lit. b RODO) – przetwarzanie jest niezbędne do realizacji umowy, której stroną jest Użytkownik.
                            </li>
                            <li>Obowiązki prawne (art. 6 ust. 1 lit. c RODO) – przetwarzanie danych w celu spełnienia obowiązków prawnych ciążących na Administratorze.
                            </li>
                            <li>rawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO) – przetwarzanie danych w celach związanych z bezpieczeństwem, analityką, dochodzeniem roszczeń i marketingiem bezpośrednim.</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>
                Przetwarzanie danych płatniczych
                <ul>
                    <li>Dane dotyczące płatności: Dane płatnicze, takie jak numer karty kredytowej lub informacje o koncie PayPal, są przetwarzane przez zewnętrznych dostawców usług płatniczych. Administrator nie przechowuje pełnych danych płatniczych, a jedynie informacje niezbędne do realizacji płatności i obsługi ewentualnych zwrotów lub reklamacji.
                    </li>
                    <li>Bezpieczeństwo danych płatniczych: Współpracujemy wyłącznie z dostawcami usług płatniczych, którzy spełniają wymagania PCI DSS (Standard Bezpieczeństwa Danych w Branży Kart Płatniczych), aby zapewnić najwyższy poziom ochrony danych płatniczych.
                    </li>
                </ul>
            </li>
            <li>
                Bezpieczeństwo danych
                <ul>
                    <li>Środki ochrony: Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed nieuprawnionym dostępem, utratą, zmianą lub zniszczeniem. Do takich środków należą szyfrowanie danych, firewalle, kontrola dostępu oraz regularne audyty bezpieczeństwa.
                    </li>
                </ul>
            </li>
            <li>
                Profilowanie i zautomatyzowane podejmowanie decyzji
                <ul>
                    <li>Profilowanie: Administrator może stosować profilowanie w celu dostosowywania ofert i treści do indywidualnych preferencji Użytkowników. Profilowanie odbywa się na podstawie danych takich jak historia zakupów, aktywność na stronie internetowej, oraz inne dane dotyczące interakcji Użytkownika z usługami Administratora.
                    </li>
                    <li>Zautomatyzowane podejmowanie decyzji: W niektórych przypadkach Administrator może stosować zautomatyzowane systemy podejmowania decyzji, np. w celu zaproponowania spersonalizowanych ofert. Użytkownik ma prawo do wniesienia sprzeciwu wobec takiego przetwarzania oraz do uzyskania wyjaśnień dotyczących podejmowanych decyzji.
                    </li>
                </ul>
            </li>
            <li>
                Udostępnianie danych osobowych
                <ol>
                    <li>
                        Odbiorcy danych
                        <ul>
                            <li>Podmioty przetwarzające: dane osobowe mogą być przekazywane firmom świadczącym usługi na rzecz Administratora, takim jak dostawcy usług IT, firmy kurierskie, dostawcy usług płatniczych, w zakresie niezbędnym do realizacji umowy.
                            </li>
                            <li>Organy publiczne: dane osobowe mogą być udostępniane organom publicznym, jeżeli wynika to z obowiązujących przepisów prawa.</li>
                        </ul>
                    </li>
                    <li>
                        Przekazywanie danych do państw trzecich
                        <ul>
                            <li>Dane osobowe mogą być przekazywane do państw trzecich (poza Europejski Obszar Gospodarczy) wyłącznie na podstawie odpowiednich zabezpieczeń zgodnych z RODO, takich jak decyzje Komisji Europejskiej stwierdzające odpowiedni stopień ochrony lub standardowe klauzule ochrony danych.
                            </li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>
                Okres przechowywania danych
                <ul>
                    <li>Dane przetwarzane na podstawie zgody: Przechowywane są do czasu wycofania zgody.</li>
                    <li>Dane przetwarzane na podstawie umowy: Przechowywane przez okres niezbędny do realizacji umowy oraz rozpatrzenia ewentualnych roszczeń (do momentu przedawnienia roszczeń).
                    </li>
                    <li>Dane przetwarzane na podstawie obowiązku prawnego: Przechowywane przez okres wymagany przepisami prawa (np. przepisy księgowe, podatkowe).
                    </li>
                </ul>
            </li>
            <li>
                Prawa Użytkownika
                <ol>
                    <li>Prawo dostępu do danych osobowych – Użytkownik ma prawo uzyskać informacje, czy jego dane są przetwarzane oraz w jakim zakresie.</li>
                    <li>Prawo do sprostowania danych – Użytkownik ma prawo żądać poprawienia nieprawidłowych lub niekompletnych danych.</li>
                    <li>Prawo do usunięcia danych – Użytkownik może żądać usunięcia swoich danych, jeśli przetwarzanie nie jest już niezbędne do realizacji celów, dla których zostały zebrane.</li>
                    <li>Prawo do ograniczenia przetwarzania – Użytkownik może zażądać ograniczenia przetwarzania w określonych przypadkach.</li>
                    <li>Prawo do przenoszenia danych – Użytkownik ma prawo do otrzymania swoich danych osobowych w formacie umożliwiającym ich przeniesienie do innego administratora.</li>
                    <li>Prawo do sprzeciwu wobec przetwarzania danych – Użytkownik ma prawo do wniesienia sprzeciwu wobec przetwarzania danych na podstawie prawnie uzasadnionego interesu Administratora.</li>
                    <li>Prawo do wycofania zgody – Użytkownik ma prawo do wycofania zgody na przetwarzanie danych w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.</li>
                    <li>Prawo do wniesienia skargi – Użytkownik ma prawo wnieść skargę do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych), jeśli uzna, że przetwarzanie danych narusza przepisy RODO.</li>
                </ol>                
            </li>
            <li>
                Pliki Cookies
                <ol>
                    <li>
                        Wykorzystanie plików cookies
                        <ul>
                            <li>Strona internetowa Administratora wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania, personalizacji treści, analizy ruchu oraz do celów marketingowych.
                            </li>
                            <li>Pliki cookies mogą być również stosowane przez podmioty współpracujące z Administratorem, takie jak dostawcy narzędzi analitycznych i marketingowych.</li>
                        </ul>
                    </li>
                    <li>
                        Rodzaje plików cookies
                        <ul>
                            <li>Sesyjne: pliki tymczasowe, które są usuwane po zakończeniu sesji przeglądarki.</li>
                            <li>Stałe: pliki przechowywane na urządzeniu Użytkownika przez określony czas lub do momentu ich usunięcia przez Użytkownika.</li>
                            <li>Analityczne: pliki używane do analizy zachowań użytkowników na stronie internetowej.</li>
                            <li>Marketingowe: pliki wykorzystywane do dostosowywania reklam do preferencji Użytkownika.</li>
                        </ul>
                    </li>
                    <li>
                        Zarządzanie plikami cookies
                        <ul>
                            <li>Użytkownik może zarządzać plikami cookies za pomocą ustawień przeglądarki internetowej, w tym zablokować ich stosowanie.</li>
                            <li>Ograniczenie stosowania plików cookies może wpłynąć na funkcjonalność strony internetowej.</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>
                Aktualizacje Polityki Prywatności
                <ul>
                    <li>Zmiany w Polityce Prywatności: Administrator zastrzega sobie prawo do dokonywania zmian w Polityce Prywatności, które będą publikowane na tej stronie. Korzystanie z serwisu po wprowadzeniu zmian oznacza akceptację nowej Polityki Prywatności.</li>
                    <li>Informowanie o zmianach: W przypadku istotnych zmian w Polityce Prywatności Użytkownicy zostaną poinformowani drogą mailową lub poprzez wyraźne komunikaty na stronie internetowej.</li>
                </ul>
            </li>
        </ol>

        <Footer setPage={setPage} />

    </div>
}

export default Regulamin