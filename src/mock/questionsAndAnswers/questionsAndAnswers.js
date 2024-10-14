const questionAndAnswersTexts = [
    {
        question:"Co oznacza gwarancja recepty?",
        answer:"W przypadku, gdy okulary zostały zrobione na podstawie recepty od naszego specjalisty, istnieje możliwość weryfikacji dobranych mocy szkieł w ciągu 2 tygodni od momentu odbioru okularów. \n" +
            "\n" +
            "Jeżeli po weryfikacji zostanie dobrana inna korekta, wymienimy szkła na nowe. \n" +
            "\n" +
            "Najczęściej potrzeba weryfikacji dobranej korekty występuję w sytuacji, gdy wykryto nie skorygowany dotychczas astygmatyzm lub została zwiększona jego wartość w porównaniu do wcześniejszych okularach.",
    },
    {
        question:"Czy koniecznie trzeba mieć receptę, żeby zamówić okulary?",
        answer:"Nie.\n" +
            "\n" +
            "Możemy podjąć próbę odczytania mocy soczewek z poprzednich okularów i na ich podstawie wykonać nowe. Również jest możliwość zrobienia okularów o dowolnej mocy na życzenie.\n" +
            "\n" +
            "Uwaga! Nie możemy gwarantować pełnego komfortu w nowych okularach w takiej sytuacji. Sugerujemy zbadać się u naszego specjalisty w celu weryfikacji aktualności korekty wady wzroku.",
    },
    {
        question:"Ile się czeka na okulary?",
        answer:"Czas oczekiwania zależy od rodzaju szkieł, które zostaną wybrane.\n" +
            "  \n" +
            "Na okulary ze standardowymi szkłami czas oczekiwania wynosi do 5 dni roboczych. \n" +
            "\n" +
            "Ze szkłami jednoogniskowymi indywidualnymi - od 10 do 12 dni roboczych. \n" +
            "\n" +
            "Z dwuogniskowymi - do 14 dni roboczych. \n" +
            "\n" +
            "Z progresywnymi, biurowymi (półprogresywnymi), relaksacyjnymi - od 10 do 14 dni roboczych. ",
    },
    {
        question:"Co będzie jeżeli się nie przyzwyczaję do okularów progresywnych?",
        answer:"W tej sytuacji prosimy o niezwłoczny kontakt z optykiem, w którym one zostały zrobione w celu ustalenia przyczyny braku komfortu.\n" +
            "\n" +
            "Istnieje tzw gwarancja adaptacji - jest to okres czasu (od 1 do 6 miesięcy w zależności od producenta) w ciągu którego możemy dokonać pewnych zmian w szkłach lub wymienić progresywne na dwuogniskowe, 2 pary jednoogniskowych lub znaleźć inne rozwiązanie. \n" +
            "\n" +
            "Uwaga! Często dla osiągnięcia komfortu w takich okularach jest potrzebna drobna regulacja oprawy. Sugerujemy przed rezygnacją z noszenia okularów podejść do optyka w celu jej dokonania.",
    },
    {
        question:"Czy istnieje możliwość zbadania wzroku u dzieci?",
        answer:"W naszych salonach niestety takiej możliwości nie ma.\n" +
            "  \n" +
            "Przez to, że narząd wzroku u osób młodych może się adaptować do każdej odległości występuje możliwość zakropienia oczu. W celu zrobienia takiego badania trzeba się zwrócić do okulisty.\n" +
            "\n" +
            "Warto również poprosić lekarza o sugestię w kwestii doboru szkieł oraz częstotliwości wizyty na badanie wzroku. Ze względu na to, że osobom młodym moce dosyć często się zmieniają.\n" +
            "\n" +
            "Nie korygowanie wady wzroku może zaszkodzić zdrowiu oczu.",
    },
    {
        question:"Ile kosztują szkła progresywne?",
        answer:"Cena szkieł progresywnych jest mocno uzależniona od stopnia zaawansowania konstrukcji soczewki, niezbędnego stopnia redukcji grubości oraz innych uszlachetnień.\n" +
            "\n" +
            "Połączenie kilku mocy w jednej soczewce powoduje wystąpienie stref zamglenia w dolnych bocznych częściach soczewki. Im bardziej zaawansowana jest konstrukcja szkła tym będą one mniejsze i będize więcej pola z mocą do odległości pośredniej i czytania. \n" +
            "\n" +
            "Cena pary szkieł o podstawowych parametrach to 519 zł. przy zakupie kompletnej pary okularów (oprawa + szkła). W celu dobrania odpowiednich szkieł zapraszamy do naszego salonu. \n" +
            "\n" +
            "Jeżeli planują Państwo wizytę u lekarza okulisty warto poprosić specjalistę o sugestię w kwestii doboru odpowiedniej konstrukcji szkła, która pozwoli dostosować okulary do swojego trybu życia (progresywne, biurowe, jednoogniskowe, relaksacyjne i t.d.)",
    },
    {
        question:"Czy są dostępne okulary do komputera?",
        answer:"Gotowych tzw “zerówek” nie mamy w ofercie.\n" +
            "  \n" +
            "Takie okulary można jak najbardziej zrobić, wtedy koszt będzie zależał od wybranej oprawy.\n" +
            "\n" +
            "Warto wziąć pod uwagę, że okulary ze szkłami z powłoką antyrefleksyjną o aktualnej mocy mogą być również stosowane do pracy przy monitorach ekranowych. Dodatkową opcją do większego stopnia ochrony oczu jest filtr światła niebieskiego. Może on być w miasie szkła (wtedy blokuje do 80% tej wiązki światła) lub w powłoce (wtedy blokuje do 40% światła niebieskiego). Zachęcamy do odwiedzenia stron internetowych producentów szkieł aby się zapoznać z dostępnymi rozwiązaniami w tej kwestii.\n" +
            "\n" +
            "Ważne! Soczewki z filtrem są delikatnie zabarwione i mogą zmieniać kolory. \n" +
            "\n" +
            "Jeżeli doświadczają Państwo dyskomfort przy pracy z blizka, męczenie się, poczucie piasku w oczach lub bul warto się zastanowić nad zbadaniem wzroku. Ze względu na specyfikę pracy współczesnego człowieka mięśnie oka mogą być zbyt mocno napięte co może spowodować tzw spazm akomodacuyjny. W tej sytuacji często są polecane szkła z dodatkiem +0,25/+0,50 dptr. Przed podjeciem decyzji o zakupie takich okularów trzeba koniecznie się zkonsultować ze specjalistą.\n" +
            "\n" +
            "Jeżeli na co dzień są  stosowane okulary progresywne ze względu na konstrukcję mogą być mniej efektywny przy ciągłej pracy przy monitorze stacjonarnym. W tym przypadku warto się zastanowić nad zakupem okularów biurowych (półprogresywnych).",
    },
    {
        question:"Jakie okulary wybrać do samochodu?",
        answer:"Przeciwsłoneczne okulary warto wybrać z powłoką polaryzacyjną.\n" +
            "\n" +
            "Ważne! Dyskomfort w trakcie jazdy autem zwłaszcza wieczorem może być spowodowane nieskorygowaną wadą wzroku. Są to specyficzne warunki, wymagające maksymalnego skupienia się i nawet niewielka wada może być mocno odczuwana. Sugerujemy zbadać wzrok przed zakupem okularów.\n" +
            "\n" +
            "Ze względu na powłokę można zastosować szkła ze standardowym antyrefleksem lub bardziej zaawansowanym, przeznaczonym do jazdy autem (jednak nie jest to konieczność). Warto również się zastanowić nad oprawką z nakładką przeciwsłoneczną. \n" +
            "\n" +
            "Niektóre oprawki tego typu mają kilka nakładek w zestawie: ciemne z powłoką polaryzacyjną i zółte do jazdy autem w nocy lub zmroku.",
    },
    {
        question:"Jak się przygotować do badania wzroku?",
        answer:"Wziąć poprzednie okulary i receptę\n" +
            "\n" +
            "Wziąć wszystkie koperty od szkieł i certyfikaty (do soczewek indywidualnych: progresywne, biurowe, relaksacyjne, dwuogniskowe, jednoogniskowe)\n" +
            "\n" +
            "Jeżeli na co dzień są stosowane soczewki kontaktowe warto w tym dniu założyć okulary korekcyjne, jeżeli takiej możliwości nie ma, prosimy wziąć ze sobą pudełko z płynem i przyjść 20 minut wcześniej w celu ściągnięcia soczewek przed badaniem.",
    },
    {
        question:"Czy można naprawić okulary?",
        answer:"Pewne uszkodzenia możemy naprawić. W celu ustalenia czy w danym przypadku jesteśmy w stanie pomóc prosimy o kontakt z nami: przesłanie zdjęcia uszkodzenie MMSem lub przez media społecznościowe.\n" +
            "\n" +
            "Nie ma możliwości polerowania rys na szkłach. Nie naprawiamy oprawek typu patent (bez obramowania). \n" +
            "\n" +
            "Regulacja okularów zakupionych nie w naszym salonie optycznym jest wykonywana na odpowiedzialność klienta.",
    },
    {
        question:"Czym jest antyrefleks?",
        answer:"Jest to powłoka na soczewkach okularowych, która robi je bardziej przyjżyste. Każdy producvent szkieł ma w ofercie takie szkła\n" +
            "\n" +
            "Istnieje wiele rodzajów takiech powłok: standardowe, śliskie (bardziej odporne na zarysowania), do jazdy autem (jeszcze bardziej podbijające kontrast widzenia), mniej widoczne na soczewce, nie widoczne na zgjęciach i przy pracy z kamerą.\n",
    },
    {
        question:"Czy można wymienić szkłą w swoich okularach?",
        answer:"Wymiana szkieł do własnej oprawy jest możliwa. Prosimy o pokazanie oprawki w celu ustalenia czy jest możliwa wymiana szkieł w danej oprawce. \n" +
            "\n" +
            "Równeż informujemy, że montaż do prawy własnej odbywa się na odpowiedzialność klienta. \n" +
            "\n" +
            "Nie możemy zrobić szkieł do oprawki typu patent zakupionej nie w naszym salonie.",
    },


]

export default questionAndAnswersTexts;
