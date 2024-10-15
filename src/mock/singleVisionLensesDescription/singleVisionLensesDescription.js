const singleVisionLenses = [
    {
        generalDescription: "     Mają 1 docelową moc i są najpopularniejszym rozwiązaniem dla osób, które potrzebują korekty wady wzroku.",
        comparisonOfThicknessReductionLevelsP1: "  Jeżeli moc soczewki z uwzględnieniem wartości astygmatyzmu jest większa niż +/- 3,00 dpt, można się zastanowić nad wyborem szkieł z odpowiednim stopniem redukcji grubości. Index 1,5 jest podstawowy.",
        comparisonOfThicknessReductionLevelsP2: "  Jest to ważne nie tylko ze względu na estetykę, ale również jest przydatne w kwestii dbania o zdrowie wzroku. Przy podstawowej grubości szkła o mocy powyżej 3 się zawęża pole, gdzie mamy docelową moc, przez grubość szkła bliżej brzegu są już inne moce.",
        comparisonOfThicknessReductionLevelsP3: "  Poniższe schematy są jedynie do celów poglądowych."
    },
]
const headersTexts= [
    {
        lensesMaterial: "Materiały soczewek okularowych",
        specialMaterials: "Specyficzne materiały soczewek plastikowych",
        comparisonOfThicknessReductionLevelsHeader: "Porównanie stopni redukcji grubości",
        lensesConstructions: "Konstrukcje soczewek jednoogniskowych",
        lensesCoatings: "Powłoki na szkłach okularowych oraz inne uszlachetnienia"
    }
]
const coatingsOnLensesAndOtherEnhancements = [
    {
        coatings1p: "  Obecnie prawie każde soczewki okularowe mają tzw. antyrefleks. Jest to powłoka na soczewce, która powoduje,że są bardziej przejrzyste. Na życzenie klienta można zastosować soczewki bez niej, jednak wiąże się to z obniżeniem komfortu w patrzeniu przez takie okulary. Oprócz tego, nie będzie wtedy możliwości redukcji grubości, ponieważ soczewka jest wtedy gęstsza i powłoka antyrefleksyjna pozwala nadrobić przejrzystośc tej soczewki.",
        coatings2p: "  Można podzielić wszystkie powłoki na podstawowe (z zielonym odbiciem szczątkowym) lub śliskie (bardziej odporne na zarysowania, łatwiej się czyszczą i mniej przyciągają kurz). Każdy producent szkieł ma takie uszlachetnienia dostępne. O ile śliskie powłoki są bardziej popularne istnieje również możliwość doboru bardziej specyficznej, która będzie wspierała narząd wzroku w rutynie danej osoby. ",
        coatings3p: "  Szczególnym przypadkiem takiego uszlachetnienia jest filtr światła niebieskiego. Jest to specjalna ochrona przed nadmiernie oddziaływaniem promienia UVA, UVB i HEV, emitowanym przez słońce oraz sztuczne źródła światła. Może ono powodować między innymi zakłócenie cyklu snu. Ta ochrona może być w powłoce (wtedy blokowane jest do 40% światła niebieskiego) lub wbudowane w masę soczewki (wtedy blokuje do 80% danej wiązki światła). Warto wziąć pod uwagę, że takie soczewki zmieniają kolory w bardziej ciepłe i im więcej światła niebieskiego odcina soczewka tym będzie bardziej żółta. ",
        coatings4p: "  Zapraszamy do zapoznania się ze szczegółowymi charakterystykami powłok antyrefleksyjnych poszczególnych producentów szkieł:",
        coatings5p: "  Kolejnym dosyć popularnym rozwiązaniem są soczewki fotochromatyczne. Są to szkła, które się przyciemniają od natężenia promienia UV w powietrzu. Jest do dobre rozwiązanie mn. dla osób, które mają nadwraźliwość na światło. ",
        coatings6p: "  Warto wziąć pod uwagę, że takie soczewki przyciemnią się nawet w pochmurny dzień, a w samochodzie nie przyciemnią się do stopnia przeciwsłonecznej soczewki (szyba w samochodzie według najnowszych standardów ma filtr UV). Jeżeli poszukują Państwo okularów do samochodu warto rozważyć oprawkę z nakładkami przeciwsłonecznymi, w nich soczewki są przyciemnione na stałe na poziomie 85% i najczęściej mają polaryzację. Można skorzystać też ze specjalnych patentów przez które soczewka reaguje na światło widzialne w każdych warunkach, dostępnych tylko u niektórych producentów.",
        coatings7p: "  Essilor, Shamir i JZO wykorzystują technologię oprawcowaną przez firmę Transitions, firmy Rodenstock i HOYA mają własną technologię. Jednak każdy producent oferuje szkła najnowszej generacji, które szybciej się przyciemnieją i szybciej się odbarwiają. Oprócz tego istnieją fotochromatyczne soczewki z polaryzacją lub takie, które przyciemniają się w samochodzie do stopnia zabarwienia przeciwsłonecznych, jednak trzeba pamiętać, że są one wstępnie zabarwione około 30%.",
        },
]

const materialDescription = [
    {
       header: "Soczewki plastikowe (organiczne)",
       descriptionP1: "  Szkła z tego materiału są lżejsze, odporniejsze na stłuczenie. Ze względu na to zyskały dużą popularność.",
       descriptionP2: "Jest dostępna największa ilość różnych konstrukcji soczewek, uszlachetnień.",
       descriptionP3: "  Minusem jest mniejsza odporność na zarysowania. Między innymi przez to warto się zastanowić nad powłoką antyrefleksyjną, dodatkowym utwardzeniem."
    },
    {
        header: "Soczewki szklane (mineralne)",
        descriptionP1: "  Szkła z tego materiału rzadko są wykorzystywane. Najczęściej są wybierane ze względu na osobiste preferencje." ,
        descriptionP2: "Niemniej jednak w sytuacji, gdy ktoś pracuje np. przy wysokiej temperaturze (w takich warunkach powłoka antyrefleksyjna jest narażona na pęknięcie) lub przy dużym zapyleniu (w tej sytuacji okulary ze szkłąmi plastikowymi są narażone na szybkie zarysowanie się)." ,
        },
    {
        header: "1,53 Trivex",
        descriptionP1: "  Jest to bardzo odporny materiał.",
        descriptionP2: "  Najczęściej soczewki okularowe tego typu wykorzystuje się w oprawkach typu patent (bez obramowania), na żyłce lub w okurach dla dzieci.",
        descriptionP3: "Jest to możliwe tylko w przypadku stosunkowo niewielkich mocy."
    },
    {
        header: "1,59 Policarbon/Poliwęglan",
        descriptionP1: "  Ten materiał jest miękki i podąża za wibracjami soczewki przy uderzeniu.",
        descriptionP2: "  Ze względu na to często  wykorzystuje się je w okularach na żyłce oraz w okularach dla dzieci i młodzieży. Są też cieńsze i lżejsze.",
        descriptionP3:"  Jednak warto uważać na czyszczenie takich szkieł: przy kontakcie z alkocholem soczewka pęka."
    },
    {
        header: "Sferyczna",
        descriptionP1: "  Jest to najbardziej rozpowszechniona konstrukcja soczewek okularowych.",
        descriptionP2:  "  Takie soczewki istnieją w różnych stopniach redukcji grubości, jest możliwość dodania różnych uszlachetnień."
    },
    {
        header: "Asferyczna",
        descriptionP1: "  Są to szkła bardziej wypłaszczone, co powoduje, że są lżejsze i lepiej wyglądają w cieńskich oprawkach nawet o większej mocy.",
        descriptionP2: "  Zwykle stosuje się takie soczewki przy większych mocach szkieł, ponieważ dana konstrukcja pozwala na poszerzenie pola widzenia."
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    singleVisionLenses,
    headersTexts,
    coatingsOnLensesAndOtherEnhancements,
    materialDescription,
};