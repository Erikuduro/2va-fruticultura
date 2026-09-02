import { CropData } from '../types';

export const abacaxiData: CropData = {
  content: `ABACAXI — Guia de Revisão Rápida

1. Panorama da cultura e importância econômica
Pertence à família Bromeliaceae. O Brasil é o 3º maior produtor mundial, mas é exportador marginal, pois consome quase tudo o que produz (mercado interno). O estado do Pará lidera a produção, e a Paraíba tem a maior produtividade. 
A variedade de exportação é a Smooth Cayenne; no Brasil domina a Pérola.

2. Origem, botânica e morfologia
O abacaxi originou-se na América do Sul. A planta é herbácea perene. 
- Folha de referência para indução e análise foliar: Folha D (a mais nova fisiologicamente ativa, a 45° do eixo).

2.4 Estrutura reprodutiva e Formação da Sorose
O fruto é um fruto composto/múltiplo chamado sorose (fusão dos frutilhos em espiral). Ocorre sem fecundação (partenocarpia). A coroa é uma estrutura exclusiva do abacaxi.

2.5 Estruturas de propagação vegetativa
Ordem de vigor: Rebentão > Filhote-rebentão > Filhote > Coroa.
Ordem de uniformidade: Coroa > Filhote > Filhote-rebentão > Rebentão.

3. Fisiologia — Metabolismo CAM
O abacaxizeiro possui Metabolismo Ácido das Crassuláceas (CAM).
- À noite: Estômatos abertos. Absorve CO2 e fixa via PEPcase formando ácido málico.
- De dia: Estômatos fechados (evita transpiração). O malato é quebrado, liberando CO2 interno fixado pela Rubisco no Ciclo de Calvin.
Vantagem: altíssima eficiência hídrica. Desvantagem: crescimento mais lento.

4. Ciclo de Vida
- Fase 1 (Vegetativa): 8 a 12 meses.
- Fase 2 (Reprodutiva): 5 a 6 meses.
- Fase 3 (Mudas / Ceva): Após colheita.
A indução floral artificial antecipa e uniformiza a colheita.

5. Exigências edafoclimáticas
Floração natural requer dias curtos e noites mais frias. 
Solo: Exige excelente drenagem (sensível a encharcamento). Cultivo em camalhões é indicado para solos pesados. Tolerante a pH ácido.
A deficiência de Magnésio gera clorose na porção exposta ao sol das folhas velhas.

7. Sistemas de Plantio
O plantio em fileira dupla é o mais vantajoso: permite maior densidade, melhor sustentação mútua (evita tombamento) e menor queimadura solar. Não consorciar com cucurbitáceas!

10. Indução Floral Artificial
Realizada para antecipar e uniformizar a floração. Usam-se produtos como carbureto de cálcio (libera acetileno) ou etefom (libera etileno). Aplicação deve ser feita estritamente à noite, quando os estômatos estão abertos.

12. Distúrbios fisiológicos
- Queimadura solar: Proteção mecânica é necessária.
- Fasciação: Fruto achatado com múltiplas coroas (descartar planta).
- "Verde-maduro": Excesso de Nitrogênio gera casca verde com polpa já madura.

13. Colheita e pós-colheita
O abacaxi é NÃO-CLIMATÉRICO. Não acumula amido na planta, logo, a doçura do fruto se define unicamente pelo momento da colheita. Fruto colhido verde nunca ficará doce.

14. Beneficiamento
- Chilling injury (Escurecimento interno): Ocorre quando refrigerado prolongadamente e depois reaquecido. Causado pela oxidação de compostos fenólicos devido à ruptura de membranas. Prevenção: nutrição rica em Potássio (K).

17. Segundo ciclo (Soca)
Cultivo a partir do rebentão, ciclo rápido (6-7 meses), menor custo, mas produz frutos significativamente menores (~1,0 a 1,2 kg).`,
  quiz: [
    {
      id: "a1",
      text: "O metabolismo CAM do abacaxizeiro tem como principal característica e vantagem, respectivamente:",
      options: [
        "A) Estômatos abertos de dia para máxima fotossíntese; alto vigor vegetativo.",
        "B) Abertura estomática noturna com fixação inicial de CO2 por PEPcase; extrema eficiência no uso da água e tolerância à seca.",
        "C) Acúmulo de ácido cítrico durante o dia; capacidade de tolerar solos encharcados.",
        "D) Fotossíntese independente da luz solar; ciclo de vida acelerado."
      ],
      correctAnswerIndex: 1,
      explanation: "O CAM inverte a abertura dos estômatos para a noite, minimizando a transpiração. O carbono é armazenado como ácido málico e processado de dia de portas fechadas."
    },
    {
      id: "a2",
      text: "Qual estrutura de propagação vegetativa do abacaxizeiro apresenta o maior vigor fisiológico, mas a menor uniformidade no campo?",
      options: [
        "A) Filhote",
        "B) Coroa",
        "C) Rebentão",
        "D) Filhote-rebentão"
      ],
      correctAnswerIndex: 2,
      explanation: "O rebentão (surge da base do caule) usa as reservas diretas da matriz, sendo vigoroso, porém emerge em épocas não sincronizadas, resultando em menor uniformidade."
    },
    {
      id: "a3",
      text: "Em relação ao sistema de plantio, por que o plantio em 'fileira dupla' é amplamente superior à fileira simples no abacaxizeiro?",
      options: [
        "A) Porque elimina a necessidade de controle de pragas de solo.",
        "B) Porque permite densidades maiores, melhor distribuição de luz e garante melhor sustentação mútua, reduzindo o tombamento pelo peso do fruto.",
        "C) Porque inviabiliza o cultivo de soca, permitindo focar 100% no fruto principal.",
        "D) Porque dispensa totalmente a irrigação no Nordeste."
      ],
      correctAnswerIndex: 1,
      explanation: "A proximidade entre as plantas na fileira dupla faz com que elas se apoiem mutuamente, reduzindo o tombamento dos frutos, além de otimizar a densidade da lavoura."
    },
    {
      id: "a4",
      text: "Qual é o principal objetivo técnico e comercial da prática de Indução Floral Artificial (forçamento da floração)?",
      options: [
        "A) Aumentar a vida útil do pomar para 5 anos consecutivos.",
        "B) Induzir o aparecimento de múltiplas coroas no mesmo fruto.",
        "C) Promover a polinização cruzada com auxílio do carbureto de cálcio.",
        "D) Antecipar e uniformizar a colheita, evitando a desuniformidade típica da indução climática natural."
      ],
      correctAnswerIndex: 3,
      explanation: "A floração natural é desuniforme e ocorre no inverno. A indução artificial concentra a floração e colheita na janela que mais convém ao produtor."
    },
    {
      id: "a5",
      text: "Qual horário é tecnicamente exigido para a aplicação dos agentes indutores de floração (etefom ou carbureto) no abacaxizeiro, e por quê?",
      options: [
        "A) Ao meio-dia, sob sol intenso, para secar rapidamente a calda.",
        "B) No período da noite (20h às 05h), porque as plantas CAM mantêm os estômatos totalmente abertos neste turno, maximizando a absorção.",
        "C) No fim da tarde, pois a chuva é menos provável e os estômatos estão fechados.",
        "D) No início da manhã (6h às 8h), para aproveitar o orvalho natural do funil foliar."
      ],
      correctAnswerIndex: 1,
      explanation: "Produtos indutores florais em abacaxi precisam entrar nas folhas e interagir. A abertura estomática noturna do CAM favorece a captação do gás gerado pela reação."
    },
    {
      id: "a6",
      text: "O abacaxi é fisiologicamente classificado como um fruto não-climatérico. Qual implicação prática direta isso tem na colheita?",
      options: [
        "A) O fruto deve ser colhido verde para suportar o transporte, atingindo a maturação na câmara de etileno.",
        "B) Como não acumula reservas de amido, a doçura e a qualidade do fruto não evoluem após ele ser cortado da planta, devendo ser colhido no ponto exato.",
        "C) Ele sofre um pico intenso de respiração no transporte marítimo.",
        "D) Ele continua acumulando água através da coroa mesmo fora do solo."
      ],
      correctAnswerIndex: 1,
      explanation: "O abacaxi carece de amido para hidrolisar em açúcar após colhido; se colhido verde e sem sabor, ele jamais ficará doce."
    },
    {
      id: "a7",
      text: "A principal folha de referência para diagnóstico fisiológico, nutricional (análise foliar) e ponto de indução do abacaxi é chamada de:",
      options: [
        "A) Folha A (a mais velha da saia basal).",
        "B) Folha D (a folha fisiologicamente adulta mais nova e ativa, inclinada a 45°).",
        "C) Folha Z (folha apical recém expandida).",
        "D) Coroa foliar do fruto."
      ],
      correctAnswerIndex: 1,
      explanation: "A Folha 'D' é a folha mais longa recentemente amadurecida, considerada padrão para todas as amostragens do abacaxizeiro."
    },
    {
      id: "a8",
      text: "O distúrbio fisiológico pós-colheita mais grave do abacaxizeiro, caracterizado pelo 'Escurecimento Interno', ocorre frequentemente devido a:",
      options: [
        "A) Dano por frio (chilling injury) após armazenamento refrigerado e subsequente reaquecimento ambiental.",
        "B) Exposição excessiva ao etileno no transporte.",
        "C) Infecção por mosca-das-frutas durante a maturação natural.",
        "D) Aplicação inadequada de calcário antes da colheita."
      ],
      correctAnswerIndex: 0,
      explanation: "O 'chilling injury' ocorre ao colocar em frio prolongado (~10C) e reaquecer; as membranas celulares rompem, as enzimas fenoloxidases entram em contato com substratos e escurecem a polpa."
    },
    {
      id: "a9",
      text: "O abacaxizeiro comercial exige qual característica pedológica (de solo) como fator crítico, cuja falha ocasiona rápida asfixia radicular?",
      options: [
        "A) Altíssimo teor de alumínio trocável.",
        "B) Textura estritamente argilosa e inundável.",
        "C) Excelente drenagem e permeabilidade, sendo letal o encharcamento.",
        "D) pH estritamente alcalino (acima de 7,5)."
      ],
      correctAnswerIndex: 2,
      explanation: "O sistema radicular raso e frágil morre de asfixia e apodrece por fungos muito rápido (dias) sob encharcamento de solo."
    },
    {
      id: "a10",
      text: "Ao final da floração, a união compacta em espiral de 100 a 200 frutilhos dá origem ao fruto que consumimos, que é tecnicamente chamado de:",
      options: [
        "A) Drupa.",
        "B) Baga simples.",
        "C) Síconio.",
        "D) Sorose (inflorescência ou fruto composto)."
      ],
      correctAnswerIndex: 3,
      explanation: "O abacaxi é uma sorose, onde centenas de flores fundem-se em um único eixo central dando origem a um fruto composto."
    },
    {
      id: "a11",
      text: "O Brasil é um dos maiores produtores de abacaxi do mundo, mas tem um papel marginal na exportação. Qual a principal causa relacionada à variedade cultivada?",
      options: [
        "A) A variedade Pérola (mais cultivada no Brasil) não é a preferida no mercado internacional, que exige a Smooth Cayenne.",
        "B) As variedades brasileiras não possuem coroa, inviabilizando o comércio externo.",
        "C) O Brasil cultiva apenas abacaxis ornamentais impróprios para consumo.",
        "D) A Smooth Cayenne brasileira desenvolveu espinhos gigantes, barrando a colheita."
      ],
      correctAnswerIndex: 0,
      explanation: "O mercado internacional consome a Smooth Cayenne, enquanto o mercado e o plantio brasileiro são amplamente dominados pela Pérola."
    },
    {
      id: "a12",
      text: "Em qual época do ano ocorre a maior valorização histórica do preço do abacaxi no Brasil?",
      options: [
        "A) Primeiro trimestre (verão chuvoso).",
        "B) Segundo semestre (época junina/inverno), devido à menor oferta natural e festas tradicionais.",
        "C) Apenas no mês de abril.",
        "D) O preço do abacaxi é tabelado e não oscila."
      ],
      correctAnswerIndex: 1,
      explanation: "O segundo semestre coincide com a menor oferta natural de frutos e aumento de demanda tradicional, elevando os preços."
    },
    {
      id: "a13",
      text: "Qual é a origem provável do abacaxizeiro cultivado (Ananas comosus)?",
      options: [
        "A) Sudeste Asiático (Tailândia/Filipinas).",
        "B) América do Sul (com forte protagonismo do Brasil e vizinhos).",
        "C) Costa do Marfim (África).",
        "D) América Central (Costa Rica)."
      ],
      correctAnswerIndex: 1,
      explanation: "A origem é sul-americana, e o ancestral silvestre mais próximo (Ananas ananassoides) é encontrado nativamente no Brasil."
    },
    {
      id: "a14",
      text: "O caule do abacaxizeiro é curto, grosso e repleto de folhas. Na filotaxia do abacaxi, a disposição das folhas forma uma 'canaleta' ou 'funil'. Qual a vantagem fisiológica disso?",
      options: [
        "A) Acelera o amadurecimento ao aquecer o tronco.",
        "B) Canaliza água de chuva e orvalho diretamente para a base e axilas, onde existem raízes adventícias para absorção.",
        "C) Protege a fruta dos raios solares UV.",
        "D) Impede a fixação de lagartas desfolhadoras."
      ],
      correctAnswerIndex: 1,
      explanation: "O formato de calha das folhas e a inserção em espiral atuam como um sistema natural de coleta e captação de água ('irrigação localizada')."
    },
    {
      id: "a15",
      text: "Qual destas adaptações fisiológicas complementa o metabolismo CAM e torna o abacaxi uma planta xerófita (resistente à seca)?",
      options: [
        "A) Alta densidade estomática na face superior.",
        "B) Ausência de cutícula foliar.",
        "C) Presença de parênquima aquífero (hidrênquima) para armazenar água interna e tricomas reflexivos.",
        "D) Folhas decíduas (caem no inverno)."
      ],
      correctAnswerIndex: 2,
      explanation: "A cutícula espessa, os tricomas e o hidrênquima atuam fisicamente para minimizar perda de água e armazenar reservas."
    },
    {
      id: "a16",
      text: "A janela climática que induz naturalmente o florescimento do abacaxizeiro (indesejável comercialmente) depende da combinação de quais fatores?",
      options: [
        "A) Dias longos e chuva abundante.",
        "B) Dias curtos e temperaturas noturnas mais baixas (frio).",
        "C) Estresse hídrico severo e calor acima de 35°C.",
        "D) Solo encharcado e falta de magnésio."
      ],
      correctAnswerIndex: 1,
      explanation: "O estímulo natural (que o produtor tenta antecipar) ocorre no inverno (dias curtos e noites de ~22°C)."
    },
    {
      id: "a17",
      text: "Sobre as exigências de solo do abacaxi, além da boa drenagem, qual característica química da cultura é um diferencial frente a outras fruteiras?",
      options: [
        "A) Exige solos alcalinos, pH acima de 8,0.",
        "B) É extremamente intolerante a alumínio e solos ácidos.",
        "C) Tem boa tolerância a solos ácidos.",
        "D) Exige excesso de nitrogênio para floração natural."
      ],
      correctAnswerIndex: 2,
      explanation: "Diferente de muitas culturas, o abacaxizeiro tolera bem solos ácidos, embora calagem seja recomendada com base em análise."
    },
    {
      id: "a18",
      text: "Em folhas VELHAS de abacaxizeiro, nota-se uma clorose (amarelecimento) APENAS na parte da folha exposta diretamente ao sol. Este é um sintoma visual clássico e cobrado em prova de deficiência de qual nutriente?",
      options: [
        "A) Boro (B)",
        "B) Fósforo (P)",
        "C) Magnésio (Mg)",
        "D) Cálcio (Ca)"
      ],
      correctAnswerIndex: 2,
      explanation: "A deficiência de magnésio é inconfundível por exibir clorose na porção da folha velha que recebe sol direto (fotorredução de clorofila sem Mg)."
    },
    {
      id: "a19",
      text: "Na produção de mudas multiplicadas por 'seccionamento do talo' de matrizes, qual regra biológica é essencial para o pedaço de talo germinar?",
      options: [
        "A) Precisam ser congelados por 2 dias.",
        "B) Cada fração (corte ou disco) precisa conter pelo menos uma gema lateral viável e ser plantada voltada para cima.",
        "C) Deve-se plantar invertido para a raiz buscar água rápida.",
        "D) Precisa ter pedaços de raiz adventícia acoplada."
      ],
      correctAnswerIndex: 1,
      explanation: "Sem gema não há brotação. Plantar de cabeça para baixo gasta energia da muda tentando 'virar' no solo."
    },
    {
      id: "a20",
      text: "É sumariamente PROIBIDO o consórcio do abacaxi com qual família de plantas, e por que motivo?",
      options: [
        "A) Leguminosas, pois fixam excesso de nitrogênio tóxico.",
        "B) Gramíneas, por asfixiarem o abacaxi.",
        "C) Cucurbitáceas (abóbora, melancia), pois são fontes primárias de multiplicação de viroses e pulgões.",
        "D) Cítricos, pois atraem nematoides formadores de galha."
      ],
      correctAnswerIndex: 2,
      explanation: "Cucurbitáceas hospedam pulgões vetores de mosaicos e outros vírus nocivos e são contraindicadas perto de bromeliáceas e mamoeiros."
    },
    {
      id: "a21",
      text: "Na exigência nutricional do abacaxi, a ordem dos macronutrientes do mais exigido ao menos exigido é:",
      options: [
        "A) N > K > Ca > Mg > P > S",
        "B) Potássio (K) > Nitrogênio (N) > Cálcio (Ca) > Magnésio (Mg) > Enxofre (S) > Fósforo (P)",
        "C) Ca > P > N > K > Mg > S",
        "D) P > N > K > Mg > Ca > S"
      ],
      correctAnswerIndex: 1,
      explanation: "O potássio (K) é o macronutriente mais extraído e vital para a qualidade do fruto, seguido do Nitrogênio."
    },
    {
      id: "a22",
      text: "Qual é o principal papel fisiológico do Potássio (K) na qualidade do abacaxi e na pós-colheita?",
      options: [
        "A) Ele induz a emissão de rebentões na primeira fase.",
        "B) Intensifica acidez, sólidos solúveis, tamanho, cor, e eleva o teor de ácido ascórbico que protege contra o escurecimento interno.",
        "C) Torna o fruto não-climatérico.",
        "D) Favorece a fasciação das coroas."
      ],
      correctAnswerIndex: 1,
      explanation: "K eleva o ácido ascórbico no fruto, o qual atua como inibidor das enzimas oxidativas que causam chilling injury (escurecimento interno)."
    },
    {
      id: "a23",
      text: "Regra fundamental de época de adubação nitrogenada e potássica no abacaxizeiro: Qual o limite máximo de tempo para aplicar a última cobertura antes da indução floral?",
      options: [
        "A) Pode aplicar até o dia da colheita.",
        "B) Aplicar logo após a emergência da inflorescência.",
        "C) Até no máximo 30 dias antes do tratamento de indução floral.",
        "D) Aplicar durante a chuva da floração."
      ],
      correctAnswerIndex: 2,
      explanation: "Se aplicada com menos de 30 dias de antecedência, o nutriente não dá tempo de ser absorvido e convertido em reservas vitais antes da planta mudar a 'chave' pro modo reprodutivo."
    },
    {
      id: "a24",
      text: "A irrigação do abacaxi é essencial em secas, porém o uso de aspersão convencional tem desvantagens fitossanitárias e de indução. Qual método é mais caro, porém mais eficiente e não molha roseta foliar?",
      options: [
        "A) Pivô central.",
        "B) Irrigação por sulco.",
        "C) Microaspersão.",
        "D) Gotejamento."
      ],
      correctAnswerIndex: 3,
      explanation: "O gotejamento localiza a água na raiz, evita desperdício e não molha a área foliar, prevenindo podridões de Phytophthora na base."
    },
    {
      id: "a25",
      text: "Após aplicar o etefom para indução floral, quais as recomendações quanto a chuva e irrigação?",
      options: [
        "A) Irrigar intensamente por aspersão 1 hora depois para ativar o gás.",
        "B) Um período de 24 a 48 horas sem chuva ou irrigação aspersão para não lavar o produto da folha.",
        "C) É indiferente, o produto é absorvido em 5 minutos.",
        "D) Molhar a terra apenas via gotejamento excessivo."
      ],
      correctAnswerIndex: 1,
      explanation: "Lavar o produto antes dele penetrar a cutícula zera a eficiência. Exige-se 1 a 2 dias secos."
    },
    {
      id: "a26",
      text: "O que é o distúrbio 'Fasciação' e o que se deve fazer com a planta que o apresenta?",
      options: [
        "A) Mancha na casca por sol; deve ser colhido antes.",
        "B) O fruto cresce achatado (leque) geralmente com múltiplas coroas. Não serve para mercado e a planta não deve ser usada como matriz de muda.",
        "C) É a podridão da base por encharcamento; aplicar fungicida.",
        "D) É o amadurecimento com a casca verde; aumentar o K."
      ],
      correctAnswerIndex: 1,
      explanation: "Fasciação pode ter causa clonal/genética. Produz um 'monstro' de várias coroas sem valor comercial, devendo ser descartado da propagação."
    },
    {
      id: "a27",
      text: "A anomalia do abacaxi 'Verde-maduro' (jaunâtre), onde a casca fica verde mas a polpa passa do ponto de madura, está ligada ao excesso de qual elemento nutricional?",
      options: [
        "A) Nitrogênio.",
        "B) Fósforo.",
        "C) Enxofre.",
        "D) Cálcio."
      ],
      correctAnswerIndex: 0,
      explanation: "Nitrogênio em excesso no final do ciclo deixa a planta e casca super vegetativas/verdes, mascarando a maturação interna real do fruto."
    },
    {
      id: "a28",
      text: "Durante a colheita da cultivar Pérola, pratica-se a 'sangria'. O que significa e para que serve?",
      options: [
        "A) Furar o pedúnculo para escorrer látex.",
        "B) Cortar a coroa para não espetar os transportadores.",
        "C) O corte preserva 2 a 4 filhotes (mudas) presos ao pedúnculo que servirão como 'embalagem/proteção' natural do fruto no transporte.",
        "D) Raspar as escamas pontiagudas das folhas basais."
      ],
      correctAnswerIndex: 2,
      explanation: "A cv. Pérola dá muitos filhotes. Eles são deixados no 'toco' do corte para atuar como para-choques/almofadas entre um abacaxi e outro no caminhão."
    },
    {
      id: "a29",
      text: "O segundo ciclo de colheita na mesma área de abacaxizeiro é chamado de Soca. Qual é a estrutura vegetal que permite a soca e uma de suas desvantagens?",
      options: [
        "A) Filhote pendurado; ciclo é maior (20 meses).",
        "B) Rebentão basal que é deixado crescer; produz frutos de peso significativamente menor (~1kg).",
        "C) Coroa que cai e enraíza; alta incidência de broca.",
        "D) Caule subterrâneo; frutos nascem achatados."
      ],
      correctAnswerIndex: 1,
      explanation: "A soca usa os rebentões deixados pós-colheita 1. É barato e rápido, mas o fruto fica bem menor. Rende lucro se cair na janela de entressafra."
    },
    {
      id: "a30",
      text: "No padrão internacional Codex Alimentarius, o requisito mínimo de maturação química exigido para o abacaxi de comércio é:",
      options: [
        "A) Teor mínimo de 8 °Brix.",
        "B) Acidez titulável inferior a 0,5%.",
        "C) Teor mínimo de 12 °Brix.",
        "D) Mais de 20 °Brix obrigatório."
      ],
      correctAnswerIndex: 2,
      explanation: "A norma Codex Stan 182-183 define as classes do abacaxi exigindo um Brix mínimo basal de 12 graus para venda global."
    }
  ]
};
