import { CropData } from '../types';

export const maracujaData: CropData = {
  content: `MARACUJÁ — Guia de Revisão Rápida

1. Panorama da cultura e importância econômica
O maracujazeiro pertence à família Passifloraceae, gênero Passiflora. O Brasil é o maior produtor mundial de maracujá, seguido por Peru, Equador e Colômbia — mas o Brasil consome quase tudo o que produz internamente; exportação de maracujá praticamente não existe no perfil brasileiro devido à vida de prateleira curtíssima. A produção brasileira está concentrada na região Nordeste (73%), sendo a Bahia o maior estado produtor.

É uma cultura de agricultura familiar por excelência, com retorno econômico rápido (6 a 10 meses após o plantio). O "problema" é a vida útil curta do pomar: comercialmente manejado como cultura anual (vida útil de 3 a 4 anos no máximo, ou 1 a 1,5 ano em regiões quentes) devido ao acúmulo de problemas fitossanitários (viroses, fusariose).

2. Botânica: a planta, a flor e o fruto
O maracujazeiro é uma trepadeira lenhosa, perene e vigorosa.
- Caule: seção quadrangular.
- Folhas: alternas, com glândulas visíveis no pecíolo.
- Gavinhas: filamentos para fixação.
- Sistema radicular: superficial (60% das raízes até 30 cm), mas exige solo profundo.

2.2 A flor
Classificação botânica: flor pentâmera (5 sépalas, 5 pétalas, 5 estames) e possui 3 estigmas. 
A corona protege a região do néctar. O ovário é muito ovulado, gerando de 200 a 300 sementes por fruto.

3. Espécies e variedades
- Passiflora edulis f. flavicarpa (Maracujá-amarelo/azedo): espécie mais cultivada, preferida pela indústria.
- Passiflora alata (Maracujá-doce): consumida in natura.

4. Biologia floral e polinização
4.1 Autoincompatibilidade: O maracujá-amarelo não consegue ser fecundado pelo seu próprio pólen. Exige pólen de plantas geneticamente diferentes.
4.2 Antese: Inicia entre meio-dia a 13h e completa em uma hora. A flor fecha às 18h.

4.4 Os polinizadores
- Mamangava (Xylocopa): principal e mais eficiente polinizador.
- Abelha arapuá (Trigona spinipes): ineficiente, considerada praga ("rouba" néctar por fora).

4.7 Polinização artificial: Recomendada para todos os produtores, eleva o vingamento de 35-40% para 85-95%. Feita no período da tarde, percorrendo sempre o mesmo lado da fileira.

5. Exigências climáticas e edáficas
Temperatura ótima: 23-25°C.
Fotoperíodo: fator crítico (mínimo 11 horas de luz por dia) para emitir botões florais.
Solo: profundo (> 60 cm), bem drenado, textura média. Não tolera encharcamento.

7. Sistemas de condução
- Espaldeira vertical (cerca): Sistema mais usado e econômico. Orientação recomendada: norte-sul.
- Latada (caramanchão): Maior produtividade/área, porém custo alto e dificuldade de pulverização.

8. Poda
A frutificação ocorre apenas em ramos novos.
- Poda de formação: Elimina brotos laterais até o fio de arame, seguido de desponte para emissão de dois cordões laterais.
- Gavinhas devem ser cortadas rentes para não estrangularem os ramos.

13. Doenças fúngicas e bacterianas
13.1 Fusariose x Podridão do colo
- Fusariose: lesão em toda a circunferência do colo, casca solta fácil, vasos avermelhados/vinho, morte rápida.
- Podridão do colo (Phytophthora): lesão parcial, casca aderida firme, sem coloração vinho, favorecida por solo encharcado.

14. Vírus e fitoplasmas
- Endurecimento dos frutos (CABMV/PWV): Virose mais importante, transmitida por pulgões. Frutos deformados, pequenos e duros.
- Pinta-verde / Definhamento precoce: Transmitida pelo Ácaro plano (Brevipalpus).
- Meleira: É do mamão, não confundir!

16. Colheita
O maracujá é um fruto climatérico, continuando o amadurecimento após colhido. Para mercado fresco colhe-se com pedúnculo (30% amarelo); para indústria colhe-se totalmente maduro (frutos caídos). Ponto ideal entre 50 a 63 dias após a antese.`,
  quiz: [
    {
      id: "m1",
      text: "A cultura comercial do maracujazeiro amarelo é considerada quase anual em algumas regiões devido a qual fator principal?",
      options: [
        "A) Baixa rentabilidade e ciclo longo de frutificação.",
        "B) Acúmulo de problemas fitossanitários, como viroses e fusariose, que reduzem a vida útil.",
        "C) Esgotamento natural do sistema radicular profundo após a primeira colheita.",
        "D) Exigência de erradicação obrigatória pelo Ministério da Agricultura após 18 meses."
      ],
      correctAnswerIndex: 1,
      explanation: "A vida útil econômica do pomar é curta (1 a 4 anos) por causa da suscetibilidade a problemas fitossanitários progressivos (CABMV, fusariose), forçando a renovação."
    },
    {
      id: "m2",
      text: "Qual é a característica botânica floral do maracujá-amarelo e a estrutura responsável por proteger o néctar?",
      options: [
        "A) Flor hexâmera, com 1 estigma; protegida pelo cálice.",
        "B) Flor pentâmera, com 3 estigmas; protegida pela corona de filamentos.",
        "C) Flor andromonóica, sem estigmas; protegida pelas gavinhas.",
        "D) Flor hermafrodita elongata, com 5 estigmas; protegida pela corola."
      ],
      correctAnswerIndex: 1,
      explanation: "O maracujazeiro possui flor pentâmera com 3 estigmas e uma corona de filamentos vistosos que circundam o centro e protegem o néctar."
    },
    {
      id: "m3",
      text: "Por que não se deve formar um pomar de maracujá comercial plantando-se sementes vindas de uma única planta (matriz)?",
      options: [
        "A) Devido ao risco elevado de disseminação do vírus da meleira.",
        "B) Porque o maracujá é autocompatível e irá gerar frutos sem sementes.",
        "C) Porque o maracujá-amarelo possui autoincompatibilidade genética, exigindo polinização cruzada com plantas diferentes para haver vingamento.",
        "D) Porque a germinação das sementes será nula sem a quebra de dormência."
      ],
      correctAnswerIndex: 2,
      explanation: "A planta apresenta autoincompatibilidade, não conseguindo fecundar a si própria ou parentes muito próximos, resultando em produção quase nula sem diversidade genética."
    },
    {
      id: "m4",
      text: "No que se refere à polinização do maracujazeiro-amarelo, é CORRETO afirmar:",
      options: [
        "A) A polinização ocorre principalmente pelo vento, devido ao pólen leve.",
        "B) A abelha arapuá (Trigona spinipes) é a polinizadora mais eficiente da cultura.",
        "C) A antese ocorre de manhã, facilitando a polinização por abelhas melíferas.",
        "D) A mamangava (Xylocopa) é o principal polinizador, e a polinização manual é amplamente recomendada para elevar o vingamento a 85-95%."
      ],
      correctAnswerIndex: 3,
      explanation: "O pólen é pesado e viscoso (inviabilizando ação do vento). A mamangava é a polinizadora mais eficiente, e a polinização artificial complementa aumentando drasticamente a produção."
    },
    {
      id: "m5",
      text: "Qual fator climático é limitante para o florescimento (emissão de botões florais) do maracujazeiro?",
      options: [
        "A) Temperaturas abaixo de 10°C.",
        "B) Umidade relativa inferior a 40%.",
        "C) Fotoperíodo com menos de 11 horas de luz por dia.",
        "D) Precipitação acima de 2.000 mm anuais."
      ],
      correctAnswerIndex: 2,
      explanation: "A planta exige um mínimo de 11 horas de luz diárias para emitir botões florais. Dias mais curtos que isso interrompem a floração."
    },
    {
      id: "m6",
      text: "No campo, qual método prático permite diferenciar o ataque de Fusariose da Podridão do Colo?",
      options: [
        "A) O teste do látex: na fusariose exuda látex translúcido.",
        "B) Ao raspar a casca no colo, a fusariose apresenta lesão em toda a circunferência e vasos avermelhados (vinho), enquanto a podridão tem lesão parcial com casca aderida.",
        "C) A podridão do colo causa murcha imediata em 2 dias, enquanto a fusariose é extremamente lenta.",
        "D) Observar as folhas: a fusariose causa mosaico amarelo brilhante, enquanto a podridão causa bolhas e galhas nas folhas."
      ],
      correctAnswerIndex: 1,
      explanation: "Fusariose = casca solta, circunferencial, vasos vermelhos/vinho. Podridão = casca firme e aderida, lesão parcial, associada a solo encharcado."
    },
    {
      id: "m7",
      text: "Em relação à poda do maracujazeiro, é INCORRETO afirmar:",
      options: [
        "A) A poda de formação inicial consiste em eliminar brotos laterais, mantendo haste única até o arame.",
        "B) As gavinhas devem ser preservadas pois auxiliam na nutrição foliar da planta.",
        "C) A frutificação ocorre exclusivamente em ramos novos.",
        "D) O desponte é realizado após a planta ultrapassar o arame, para forçar a emissão dos cordões laterais."
      ],
      correctAnswerIndex: 1,
      explanation: "As gavinhas devem ser retiradas (cortadas, não puxadas), pois causam entrelaçamento excessivo e podem 'estrangular' ramos produtivos ou principais."
    },
    {
      id: "m8",
      text: "Qual o sistema de condução mais econômico, funcional e utilizado em larga escala para o maracujá?",
      options: [
        "A) Latada (caramanchão).",
        "B) Espaldeira vertical com linhas orientadas no sentido norte-sul.",
        "C) Cultivo rasteiro sem suportes artificiais.",
        "D) Cultivo consorciado com fruteiras perenes altas."
      ],
      correctAnswerIndex: 1,
      explanation: "A espaldeira vertical é a mais viável comercialmente. A orientação norte-sul garante exposição solar em ambos os lados da fileira."
    },
    {
      id: "m9",
      text: "A principal virose que afeta a cultura do maracujá no Brasil, provocando frutos duros, deformados e de baixo valor, é transmitida de que forma?",
      options: [
        "A) Vírus do Endurecimento dos Frutos (CABMV), transmitido por pulgões.",
        "B) Vírus da Meleira, transmitido por ferramentas contaminadas.",
        "C) Vírus da Pinta-Verde, transmitido por moscas-das-frutas.",
        "D) Vírus do Mosaico, transmitido por sementes e nematóides."
      ],
      correctAnswerIndex: 0,
      explanation: "O endurecimento dos frutos (CABMV/PWV) é transmitido de forma não-persistente por pulgões e atinge severamente os pomares."
    },
    {
      id: "m10",
      text: "Fisiologicamente, como o abacaxi e o maracujá se diferenciam em relação à maturação na pós-colheita?",
      options: [
        "A) Ambos são frutos não-climatéricos.",
        "B) O maracujá é climatérico (continua amadurecendo pós-colheita), e o abacaxi é não-climatérico (não evolui e não acumula açúcar após colhido).",
        "C) O maracujá acumula amido pós-colheita, enquanto o abacaxi acumula etileno.",
        "D) O maracujá não produz etileno e não amadurece após cair da planta."
      ],
      correctAnswerIndex: 1,
      explanation: "O maracujá possui pico respiratório e de etileno (climatérico), podendo ser colhido verde-maduro. O abacaxi não é climatérico e não amadurece mais depois de cortado da planta."
    },
    {
      id: "m11",
      text: "O Brasil consome quase tudo o que produz de maracujá. A exportação é praticamente inexistente no perfil brasileiro devido a qual fator estrutural?",
      options: [
        "A) Embargos fitossanitários devido à mosca-das-frutas.",
        "B) Fruta tem vida de prateleira curtíssima (perecível) e o mercado interno já paga bem.",
        "C) Ausência de cultivares adaptadas ao padrão europeu de doçura.",
        "D) Baixa produtividade por hectare que impede a formação de lotes."
      ],
      correctAnswerIndex: 1,
      explanation: "A vida útil muito curta do maracujá (alguns dias em temperatura ambiente) inviabiliza a logística complexa de exportação, e o mercado interno já absorve a produção."
    },
    {
      id: "m12",
      text: "O Nordeste concentra a maior parte da produção nacional de maracujá (cerca de 73%). Como se comporta a oferta de maracujá no Nordeste ao longo do ano?",
      options: [
        "A) Há uma entressafra rigorosa e completa de maio a agosto.",
        "B) Oferta regular de fevereiro a agosto, com escassez em setembro, dezembro e janeiro (meses quentes de alta demanda).",
        "C) Produção exclusiva no inverno devido à exigência de dias curtos.",
        "D) Oferta estabilizada 100% o ano todo sem picos de preço."
      ],
      correctAnswerIndex: 1,
      explanation: "No Nordeste, a oferta é boa/regular de fev a ago, mas escassa nos meses mais quentes (setembro, dezembro, janeiro) quando a procura por suco aumenta, elevando os preços."
    },
    {
      id: "m13",
      text: "Sobre as folhas do maracujazeiro, qual estrutura anatômica está presente e atrai formigas e insetos para uma função de defesa indireta?",
      options: [
        "A) Gavinhas florais.",
        "B) Tricomas absorventes de água.",
        "C) Glândulas secretoras de substância açucarada (nectários extraflorais), sobretudo no pecíolo.",
        "D) Estômatos gigantes no limbo."
      ],
      correctAnswerIndex: 2,
      explanation: "As folhas possuem glândulas visíveis no pecíolo que secretam substância açucarada, atraindo formigas e outros insetos para defesa contra herbívoros."
    },
    {
      id: "m14",
      text: "Qual é a relação anatômica que define um MAIOR rendimento em suco no fruto do maracujá?",
      options: [
        "A) Casca muito espessa e baixo número de sementes.",
        "B) Casca fina e o maior número de sementes fecundadas, pois cada semente é envolta pelo arilo que contém o suco.",
        "C) Ausência total de sementes (partenocarpia).",
        "D) Frutos 'chocalhos' que balançam sementes secas."
      ],
      correctAnswerIndex: 1,
      explanation: "O suco fica no arilo (bolsa que envolve cada semente). Quanto mais sementes fecundadas e mais fina a casca (epicarpo+mesocarpo), maior o rendimento de suco."
    },
    {
      id: "m15",
      text: "Diferente do maracujá-amarelo (Passiflora edulis f. flavicarpa), qual a característica e destino do maracujá-doce (Passiflora alata)?",
      options: [
        "A) É usado estritamente para extração de pectina.",
        "B) Possui acidez baixa, formato alongado (lembrando mamão pequeno) e é consumido in natura como fruta fresca.",
        "C) É a espécie mais vigorosa e ácida, base da indústria de suco concentrado.",
        "D) É completamente autoincompatível e exige 15 horas de fotoperíodo."
      ],
      correctAnswerIndex: 1,
      explanation: "O maracujá-doce (P. alata) tem baixa acidez (Brix alto) e é consumido como fruta de mesa, diferente do amarelo que vai para suco."
    },
    {
      id: "m16",
      text: "O processo de abertura da flor do maracujá-amarelo é chamado de antese. Qual é o horário em que isso ocorre tipicamente?",
      options: [
        "A) Durante a noite, polinizada por morcegos.",
        "B) No início da manhã (06h às 08h).",
        "C) Por volta do meio-dia a 13h, permanecendo aberta até as 18h.",
        "D) Fica aberta ininterruptamente por 3 dias."
      ],
      correctAnswerIndex: 2,
      explanation: "A antese do maracujá-amarelo começa entre 12h-13h e a flor fecha às 18h. Se não for fecundada, cai."
    },
    {
      id: "m17",
      text: "Após a abertura da flor, o que acontece fisicamente com os estiletes do maracujá-amarelo para permitir a polinização pela mamangava?",
      options: [
        "A) Eles caem no solo.",
        "B) Eles se curvam para baixo ao longo de uma hora, ficando na posição receptiva ideal para tocar o dorso do inseto.",
        "C) Eles se fundem ao ovário criando a carpeloidia.",
        "D) Eles secretam látex para repelir a arapuá."
      ],
      correctAnswerIndex: 1,
      explanation: "A maioria das flores (~71%) apresenta curvatura total dos estiletes para baixo, atingindo máxima receptividade e tocando as costas da mamangava."
    },
    {
      id: "m18",
      text: "A abelha arapuá (Trigona spinipes) visita a flor do maracujá. Agronomicamente, ela é considerada:",
      options: [
        "A) A polinizadora primária em dias nublados.",
        "B) Uma praga, pois rouba néctar perfurando a base da flor por fora e raspa pólen, não polinizando e afastando a mamangava.",
        "C) Um inseto neutro, sem benefício nem dano.",
        "D) Essencial para a polinização cruzada de flores sem curvatura."
      ],
      correctAnswerIndex: 1,
      explanation: "A arapuá é praga: destrói o botão floral, rouba pólen e néctar sem polinizar, o que tira a atratividade da flor para as mamangavas."
    },
    {
      id: "m19",
      text: "Como as chuvas intensas e prolongadas durante o período de floração (à tarde) afetam o maracujazeiro?",
      options: [
        "A) Aumentam o vingamento, lavando toxinas dos estigmas.",
        "B) Prejudicam a polinização, pois a umidade faz o grão de pólen 'estourar' (diferença osmótica), lava os grãos recém-depositados e inibe o voo dos insetos.",
        "C) Induzem a quebra da autoincompatibilidade.",
        "D) Substituem a necessidade de irrigação durante 2 anos."
      ],
      correctAnswerIndex: 1,
      explanation: "Chuva intensa destrói os grãos de pólen (rompimento osmótico), lava os estigmas e paralisa o voo das mamangavas."
    },
    {
      id: "m20",
      text: "Ao fazer a própria semente por seleção massal, recomenda-se a fermentação da semente (2 a 6 dias em vidro). Qual é o objetivo prático dessa fermentação?",
      options: [
        "A) Quebrar a dormência do frio.",
        "B) Induzir resistência ao fungo Fusarium.",
        "C) Facilitar a separação da mucilagem (arilo viscoso) que envolve a semente.",
        "D) Esterilizar a semente contra o CABMV."
      ],
      correctAnswerIndex: 2,
      explanation: "A fermentação degrada a mucilagem gelatinosa, permitindo que a semente seja lavada e seca limpa."
    },
    {
      id: "m21",
      text: "Para contornar o grave problema de morte prematura das plantas por patógenos de solo (Fusarium), qual método de propagação vegetativa pode ser utilizado comercialmente?",
      options: [
        "A) Estaquia de raízes.",
        "B) Enxertia (garfagem em fenda cheia) sobre porta-enxertos rústicos tolerantes a doenças de solo.",
        "C) Mergulhia apical.",
        "D) Alporquia de gavinhas."
      ],
      correctAnswerIndex: 1,
      explanation: "A enxertia usando porta-enxertos tolerantes/resistentes a patógenos de solo é a forma mais direta de fugir da fusariose e podridão do colo."
    },
    {
      id: "m22",
      text: "Qual é a orientação geográfica recomendada para o plantio das linhas de maracujazeiro em espaldeira vertical, e por quê?",
      options: [
        "A) Leste-Oeste, para sombrear a planta e evitar queima do fruto.",
        "B) Sentido Norte-Sul, garantindo que o sol incida em ambos os lados da fileira ao longo do dia (manhã e tarde), essencial para florescimento e arejamento.",
        "C) Nordeste-Sudoeste, acompanhando os ventos alísios.",
        "D) O sentido não afeta culturas trepadeiras."
      ],
      correctAnswerIndex: 1,
      explanation: "O sentido Norte-Sul expõe o lado leste de manhã e o lado oeste à tarde, uniformizando a fotossíntese e os botões florais."
    },
    {
      id: "m23",
      text: "A poda de renovação (rebaixamento da 'cortina') do maracujazeiro só deve ser recomendada e executada em qual situação?",
      options: [
        "A) Em pomares que estejam severamente infectados pelo vírus do endurecimento dos frutos.",
        "B) Em pomares sanitariamente saudáveis que, por algum motivo, reduziram produção. Nunca em pomares doentes com CABMV ou fusariose.",
        "C) A cada 6 meses, obrigatoriamente.",
        "D) Quando o fruto apresenta mancha-chocolate."
      ],
      correctAnswerIndex: 1,
      explanation: "Poda de renovação em plantas com virose ou doenças sistêmicas só acelera a morte. O pomar deve estar sanitariamente saudável para rebrotar."
    },
    {
      id: "m24",
      text: "Qual é a ordem de exigência dos macronutrientes do maracujazeiro (do mais para o menos absorvido)?",
      options: [
        "A) N > P > K > Ca > Mg",
        "B) K > N > Ca > Mg > S > P",
        "C) N > K > Ca > S > P > Mg",
        "D) Ca > N > K > P > S > Mg"
      ],
      correctAnswerIndex: 2,
      explanation: "No maracujá, a ordem é Nitrogênio, Potássio, Cálcio, Enxofre, Fósforo e Magnésio (N > K > Ca > S > P > Mg)."
    },
    {
      id: "m25",
      text: "Para a realização correta da diagnose foliar no maracujazeiro, qual folha deve ser amostrada?",
      options: [
        "A) A 1ª folha apical recém-aberta.",
        "B) A 4ª folha (com pecíolo) a partir da ponta de ramos medianos sem frutos e não podados.",
        "C) Folhas velhas da base tocando o solo.",
        "D) A folha imediatamente ao lado do fruto maduro."
      ],
      correctAnswerIndex: 1,
      explanation: "A amostragem padrão exige a 4ª folha a partir do ápice do ramo."
    },
    {
      id: "m26",
      text: "Nutrientes imóveis na planta (como Cálcio, Boro e Zinco) manifestam seus sintomas de deficiência visual primeiramente em qual parte da planta?",
      options: [
        "A) Nas folhas velhas, pois a planta drena o nutriente das novas.",
        "B) Nas raízes apenas.",
        "C) Nas folhas novas (brotos e pontas), pois a planta não consegue remobilizar os estoques das folhas velhas para os drenos novos.",
        "D) Nos frutos maduros que caem."
      ],
      correctAnswerIndex: 2,
      explanation: "Regra prática de fisiologia: nutrientes imóveis faltam nos tecidos em formação (folhas novas), enquanto os móveis (como N e K) faltam nas folhas velhas."
    },
    {
      id: "m27",
      text: "Duas lagartas desfolhadoras são pragas-chave do maracujazeiro: a Dione juno juno e a Agraulis vanillae vanillae. Qual a diferença comportamental básica entre elas?",
      options: [
        "A) Ambas são noturnas e vivem no solo.",
        "B) Dione juno juno é gregária (vivem juntas e arrasam ramos rapidamente) e raspa casca; Agraulis é solitária.",
        "C) Dione ataca apenas o fruto; Agraulis ataca apenas as gavinhas.",
        "D) Agraulis transmite o vírus do endurecimento dos frutos."
      ],
      correctAnswerIndex: 1,
      explanation: "Dione juno juno é gregária, defolhando massivamente. Agraulis é solitária. Ambas são borboletas/lagartas de Lepidoptera."
    },
    {
      id: "m28",
      text: "No manejo da praga 'Mosca do botão floral' (Dasiops sp.), qual o sintoma direto e a gravidade de ataques severos?",
      options: [
        "A) Perfura o tronco gerando serragem.",
        "B) Transmite a bactéria Ralstonia.",
        "C) Faz postura no botão floral, causando queda de até 100% da florada.",
        "D) Mela o fruto por fora com látex pegajoso."
      ],
      correctAnswerIndex: 2,
      explanation: "Essas moscas depositam ovos nos botões florais jovens. A larva destrói a estrutura reprodutiva por dentro e o botão cai, podendo zerar a florada."
    },
    {
      id: "m29",
      text: "Qual destas viroses/doenças é transmitida pelo ácaro plano (Brevipalpus) e NÃO por pulgão ou inseto sugador?",
      options: [
        "A) Mosaico amarelo.",
        "B) Endurecimento dos frutos (CABMV).",
        "C) Pinta-verde / Definhamento precoce.",
        "D) Murcha bacteriana."
      ],
      correctAnswerIndex: 2,
      explanation: "O vírus da Pinta-Verde (PFGSV) tem como vetor o ácaro Brevipalpus phoenicis, exigindo acaricidas, diferente do CABMV que é por pulgões."
    },
    {
      id: "m30",
      text: "Ao colher maracujá para a indústria de suco em época de queda de preço, um erro comum é colher os frutos verdes pelo peso. Qual a consequência técnica desse erro?",
      options: [
        "A) O fruto rende suco com mais de 20 °Brix.",
        "B) Frutos verdes não completam a maturação e a indústria recebe lotes com sólidos solúveis abaixo do mínimo aceitável (< 11 °Brix), prejudicando o rendimento.",
        "C) A acidez some totalmente, deixando o suco insípido.",
        "D) O fruto passa por um surto forçado de etileno que fermenta o suco."
      ],
      correctAnswerIndex: 1,
      explanation: "Enganar no peso com frutos verdes para indústria resulta em matéria-prima com baixo Brix, pois a maturação ideal de indústria (rendimento de sólidos solúveis pleno) é quando o fruto já caiu maduro no chão."
    }
  ]
};
