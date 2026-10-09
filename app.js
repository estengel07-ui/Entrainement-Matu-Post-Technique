const subjects = [
  {
    id: "fr",
    label: "Français",
    short: "FR",
    color: "#a45b52",
    pale: "#f7eae5",
    description: "Lire, comprendre et argumenter",
    topics: ["Compréhension écrite", "Langue", "Production écrite"],
    exercises: [
      {
        id: "fr-reading",
        topic: "Compréhension écrite",
        title: "Repérer un point de vue",
        kind: "choice",
        prompt: "Lis le texte, puis repère la justification avancée par l’autrice.",
        passage: "Dans un atelier, réparer un objet demande parfois plus de temps que d’en acheter un neuf. Pourtant, cette démarche permet de comprendre comment il fonctionne et d’éviter qu’il devienne un déchet trop tôt. Pour encourager la réparation, certaines communes mettent à disposition des outils et des conseils. Ce soutien ne supprime pas tous les obstacles, mais il rend le premier pas plus facile.",
        question: "Quelle raison l’autrice donne-t-elle pour encourager la réparation ?",
        options: [
          "Elle permet de comprendre l’objet et de retarder sa mise au rebut.",
          "Elle est toujours plus rapide que l’achat d’un objet neuf.",
          "Les communes remplacent gratuitement les appareils.",
          "Elle évite tout effort à la personne qui répare."
        ],
        answer: 0,
        explanation: "Le texte explique que réparer aide à comprendre comment l’objet fonctionne et évite qu’il devienne trop tôt un déchet. Il précise aussi que le soutien communal facilite le premier pas."
      },
      {
        id: "fr-facts",
        topic: "Compréhension écrite",
        title: "Repérer un fait dans un texte",
        kind: "choice",
        prompt: "Lis le texte et repère le fait explicitement indiqué.",
        passage: "L’atelier de quartier ouvre le mercredi de 13 h à 16 h. Les visiteurs peuvent apporter un petit appareil en panne. Une personne bénévole aide chacun à examiner l’objet; il n’est pas nécessaire de réserver.",
        question: "Quel jour et à quelles heures l’atelier est-il ouvert ?",
        options: ["Le mercredi, de 13 h à 16 h.", "Le lundi, de 9 h à 12 h.", "Chaque soir, de 16 h à 19 h.", "Le samedi, toute la journée."],
        answer: 0,
        explanation: "La première phrase précise explicitement que l’atelier ouvre le mercredi de 13 h à 16 h."
      },
      {
        id: "fr-reformulation",
        topic: "Compréhension écrite",
        title: "Reformuler une information",
        kind: "writing",
        prompt: "Lis le texte, puis reformule l’information demandée avec tes propres mots, sans en changer le sens.",
        passage: "Dans un atelier, réparer un objet demande parfois plus de temps que d’en acheter un neuf. Pourtant, cette démarche permet de comprendre comment il fonctionne et d’éviter qu’il devienne un déchet trop tôt. Pour encourager la réparation, certaines communes mettent à disposition des outils et des conseils. Ce soutien ne supprime pas tous les obstacles, mais il rend le premier pas plus facile.",
        question: "Explique en une ou deux phrases comment certaines communes facilitent la réparation.",
        criteria: ["Indique que des outils et des conseils sont mis à disposition.", "Reformule l’idée avec tes propres mots.", "Ne prétends pas que le soutien supprime toutes les difficultés."]
      },
      {
        id: "fr-vocabulary",
        topic: "Langue",
        title: "Choisir un synonyme dans son contexte",
        kind: "choice",
        prompt: "Dans le texte ci-dessous, quel synonyme de « obstacles » convient au contexte ?",
        passage: "La commune a installé un atelier de réparation ouvert à tous. Des bénévoles aident les habitantes et habitants à réparer de petits appareils. Le manque d’outils constituait auparavant un obstacle pour de nombreuses personnes; désormais, le matériel est disponible sur place.",
        question: "Quel mot peut remplacer « obstacle » dans ce texte ?",
        options: ["Difficulté", "Avantage", "Appareil", "Conseil"],
        answer: 0,
        explanation: "Dans ce contexte, un obstacle est une difficulté qui empêche ou complique une action."
      },
      {
        id: "fr-antonyms",
        topic: "Langue",
        title: "Trouver un antonyme",
        kind: "choice",
        prompt: "Choisis le contraire du mot en évidence en tenant compte du contexte.",
        passage: "Après le contrôle, la pièce est déclarée conforme. Le technicien remplace toutefois un élément provisoire par un composant prévu pour rester dans l’appareil.",
        question: "Quel est l’antonyme de « provisoire » dans ce texte ?",
        options: ["Définitif", "Minutieux", "Rapide", "Utile"],
        answer: 0,
        explanation: "« Provisoire » signifie temporaire; dans ce contexte, son antonyme est « définitif »."
      },
      {
        id: "fr-derivation",
        topic: "Langue",
        title: "Former un mot de la même famille",
        kind: "choice",
        prompt: "Dans le texte ci-dessous, quel nom de la même famille que « vérifier » convient ?",
        passage: "Avant le montage, la technicienne vérifie chaque mesure. Cette vérification évite une erreur d’assemblage.",
        question: "Quel nom dérivé du verbe « vérifier » apparaît dans le texte ?",
        options: ["vérification", "vérifiable", "vérifiée", "vérifieur"],
        answer: 0,
        explanation: "« Vérification » est un nom dérivé du verbe « vérifier » et figure dans le texte."
      },
      {
        id: "fr-agreement",
        topic: "Langue",
        title: "Accorder dans la phrase",
        kind: "choice",
        prompt: "Une seule proposition respecte les accords en genre et en nombre.",
        question: "Quelle phrase est correctement écrite ?",
        options: [
          "Les consignes que nous avons lues sont précises.",
          "Les consignes que nous avons lu sont précises.",
          "Les consignes que nous avons lues sont précis.",
          "Les consigne que nous avons lues sont précises."
        ],
        answer: 0,
        explanation: "« Consignes » est féminin pluriel; le participe passé « lues » s’accorde avec le COD « que », placé avant le verbe avoir. « Précises » s’accorde aussi avec « consignes »."
      },
      {
        id: "fr-homophones",
        topic: "Langue",
        title: "Distinguer deux homophones",
        kind: "choice",
        prompt: "Complète la phrase avec les homophones qui conviennent.",
        question: "Les appareils ___ prêts; chacun ___ vérifié son montage.",
        options: ["sont / a", "son / à", "sont / à", "son / a"],
        answer: 0,
        explanation: "« Sont » est le verbe être au pluriel (ils sont prêts). « A » est le verbe avoir qui forme ici le passé composé (a vérifié)."
      },
      {
        id: "fr-conjugation",
        topic: "Langue",
        title: "Accorder le verbe",
        kind: "choice",
        prompt: "Choisis la forme verbale qui s’accorde avec le sujet.",
        question: "Chaque semaine, les apprenties ___ leur travail avant de quitter l’atelier.",
        options: ["terminent", "termine", "termines", "terminer"],
        answer: 0,
        explanation: "Le sujet « les apprenties » est à la troisième personne du pluriel; le verbe au présent s’écrit « terminent »."
      },
      {
        id: "fr-writing",
        topic: "Production écrite",
        title: "Défendre un point de vue",
        kind: "writing",
        prompt: "Rédige un texte argumentatif d’environ 200 mots sur la question suivante. Présente clairement ton avis, développe au moins deux arguments et termine par une conclusion.",
        question: "Faut-il privilégier la réparation d’un appareil plutôt que son remplacement lorsqu’il tombe en panne ?",
        minWords: 180,
        maxWords: 220,
        criteria: ["Ta thèse répond clairement à la question.", "Chaque argument est expliqué et, si possible, illustré d’un exemple.", "Les connecteurs rendent le raisonnement facile à suivre.", "La conclusion reprend l’essentiel sans introduire un nouvel argument.", "Relis les accords, la ponctuation et l’orthographe."]
      }
    ]
  },
  {
    id: "de",
    label: "Allemand",
    short: "DE",
    color: "#54705d",
    pale: "#e9f0e8",
    description: "Verstehen, üben und formulieren",
    topics: ["Compréhension de texte", "Vocabulaire", "Grammaire", "Production de texte"],
    exercises: [
      {
        id: "de-reading",
        topic: "Compréhension de texte",
        title: "Eine kurze Nachricht verstehen",
        kind: "choice",
        prompt: "Lies den Text und beantworte die Frage.",
        passage: "Mira macht eine Ausbildung als Elektronikerin. In der Werkstatt prüft sie heute einen kleinen Motor. Zuerst liest sie den Arbeitsplan. Danach misst sie die Spannung und notiert die Ergebnisse. Wenn ein Wert nicht stimmt, fragt sie ihren Ausbilder. Am Nachmittag erklärt sie ihrer Kollegin, was sie herausgefunden hat.",
        question: "Was macht Mira zuerst?",
        options: ["Sie liest den Arbeitsplan.", "Sie erklärt die Ergebnisse.", "Sie fragt ihre Kollegin.", "Sie repariert ein Fahrrad."],
        answer: 0,
        explanation: "Im Text steht: « Zuerst liest sie den Arbeitsplan. »"
      },
      {
        id: "de-vocabulary",
        topic: "Vocabulaire",
        title: "Ein passendes Wort finden",
        kind: "choice",
        prompt: "Welches Wort passt in beide Sätze? Wähle die passenden Wörter aus der Liste.",
        question: "Mira misst die ___ des Motors. Danach notiert sie den richtigen ___.",
        options: ["Spannung / Messwert", "Fenster / Mantel", "Mittagessen / Bahnhof", "Straße / Tasche"],
        answer: 0,
        explanation: "« Spannung » désigne ici la grandeur électrique que Mira mesure; la valeur relevée est un « Messwert »."
      },
      {
        id: "de-opposites",
        topic: "Vocabulaire",
        title: "Ein Gegenteil im Kontext finden",
        kind: "choice",
        prompt: "Lies den Satz und wähle das passende Gegenteil.",
        question: "Der alte Motor ist **laut**. Das Gegenteil von « laut » ist …",
        options: ["leise", "schnell", "schwer", "neu"],
        answer: 0,
        explanation: "« Leise » est le contraire de « laut »."
      },
      {
        id: "de-grammar",
        topic: "Grammaire",
        title: "Den Satz richtig ergänzen",
        kind: "choice",
        prompt: "Ergänze den Satz mit dem passenden Artikel.",
        question: "Ich lege ___ Werkzeug auf den Tisch.",
        options: ["das", "der", "die", "den"],
        answer: 0,
        explanation: "« Werkzeug » est un nom neutre singulier. À l’accusatif, l’article reste « das »."
      },
      {
        id: "de-word-order",
        topic: "Grammaire",
        title: "Die Wörter richtig ordnen",
        kind: "choice",
        prompt: "Wähle den korrekt gebildeten Satz.",
        question: "Welche Wortstellung ist richtig?",
        options: ["Heute prüft Mira den Motor.", "Heute Mira prüft den Motor.", "Heute den Motor prüft Mira.", "Prüft heute den Motor Mira."],
        answer: 0,
        explanation: "Dans une proposition principale allemande, le verbe conjugué occupe la deuxième position : « Heute prüft Mira … »."
      },
      {
        id: "de-past",
        topic: "Grammaire",
        title: "Das Perfekt ergänzen",
        kind: "choice",
        prompt: "Ergänze den Satz mit der richtigen Verbform im Perfekt.",
        question: "Gestern ___ Mira die Spannung ___ . (messen)",
        options: ["hat / gemessen", "ist / gemessen", "hat / messen", "haben / gemessen"],
        answer: 0,
        explanation: "« Messen » forme ici le Perfekt avec « haben » et le participe passé « gemessen » : « hat gemessen »."
      },
      {
        id: "de-imperfect",
        topic: "Grammaire",
        title: "Ein Verb im Präteritum verstehen",
        kind: "choice",
        prompt: "Lies den Satz und wähle seine Bedeutung.",
        question: "« Früher war die Werkstatt kleiner. » Was bedeutet « war »?",
        options: ["La pièce était plus petite autrefois.", "La pièce sera plus petite demain.", "La pièce devient plus petite maintenant.", "La pièce n’a jamais existé."],
        answer: 0,
        explanation: "« War » est le Präteritum du verbe « sein » (être); la phrase décrit la situation passée."
      },
      {
        id: "de-open-question",
        topic: "Grammaire",
        title: "Vollständig auf eine Frage antworten",
        kind: "choice",
        prompt: "Wähle die vollständige und passende Antwort.",
        question: "Warum fragt Mira ihren Ausbilder?",
        options: ["Sie fragt ihn, weil ein Messwert nicht stimmt.", "Weil.", "Sie fragt gestern den Motor.", "Mira, der Ausbilder."],
        answer: 0,
        explanation: "Une réponse complète reprend l’information demandée et explique la raison : Mira pose la question parce qu’une valeur mesurée est incorrecte."
      },
      {
        id: "de-writing",
        topic: "Production de texte",
        title: "Eine kurze Nachricht schreiben",
        kind: "writing",
        prompt: "Wähle EIN Thema und schreibe einen zusammenhängenden Text von 60–80 Wörtern. Thema A: Berichte über eine Werkstattaufgabe und was du dabei gelernt hast. Thema B: Lies den Text und beschreibe Miras Aufgabe, ihre Messung und was sie bei einem falschen Messwert macht.",
        passage: "Mira arbeitet in einer Werkstatt. Zuerst liest sie den Arbeitsplan. Danach misst sie die Spannung des Motors und notiert den Messwert. Wenn der Messwert nicht stimmt, fragt sie ihren Ausbilder. Am Nachmittag erklärt sie ihrer Kollegin, was sie herausgefunden hat.",
        question: "Dein Text soll 3–4 Aspekte behandeln. Du kannst zum Beispiel eine E-Mail, einen Brief oder einen kurzen Artikel schreiben.",
        minWords: 60,
        maxWords: 80,
        criteria: ["Le texte répond aux deux consignes : décrire une tâche et expliquer un apprentissage.", "Utilise des phrases simples et compréhensibles.", "Vérifie la place du verbe et les articles.", "Compte entre 60 et 80 mots, puis relis ton texte."]
      }
    ]
  },
  {
    id: "math",
    label: "Mathématiques",
    short: "∑",
    color: "#57709c",
    pale: "#e9edf6",
    description: "Calculer, modéliser et raisonner",
    topics: ["Nombres et opérations", "Calcul littéral", "Fonctions et diagrammes", "Équations", "Lignes, surfaces et théorème de Pythagore", "Solides et diverses mesures"],
    exercises: [
      {
        id: "math-numbers",
        topic: "Nombres et opérations",
        title: "Additionner des fractions",
        kind: "choice",
        prompt: "Effectue le calcul et simplifie le résultat.",
        question: "3/4 + 1/8 = ?",
        options: ["7/8", "4/12", "1/2", "5/8"],
        answer: 0,
        explanation: "On écrit 3/4 avec le dénominateur 8 : 3/4 = 6/8. Donc 6/8 + 1/8 = 7/8."
      },
      {
        id: "math-fraction-subtraction",
        topic: "Nombres et opérations",
        title: "Soustraire des fractions",
        kind: "choice",
        prompt: "Réduis au même dénominateur, puis simplifie.",
        question: "5/6 − 1/4 = ?",
        options: ["7/12", "4/2", "1/2", "4/12"],
        answer: 0,
        explanation: "5/6 = 10/12 et 1/4 = 3/12. La différence est 10/12 − 3/12 = 7/12."
      },
      {
        id: "math-divisibility",
        topic: "Nombres et opérations",
        title: "Décomposer en facteurs premiers",
        kind: "choice",
        prompt: "Écris le nombre comme un produit de facteurs premiers.",
        question: "Quelle est la décomposition de 84 en facteurs premiers ?",
        options: ["2² × 3 × 7", "2 × 3 × 14", "2³ × 3 × 7", "4 × 21"],
        answer: 0,
        explanation: "84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7. La réponse s’exprime en facteurs premiers."
      },
      {
        id: "math-common-divisors",
        topic: "Nombres et opérations",
        title: "Trouver un diviseur commun",
        kind: "choice",
        prompt: "Recherche le plus grand diviseur commun des deux nombres.",
        question: "Quel est le PGDC de 24 et 36 ?",
        options: ["12", "6", "18", "72"],
        answer: 0,
        explanation: "Les diviseurs communs les plus grands sont obtenus avec les facteurs communs : 24 = 2³ × 3 et 36 = 2² × 3², donc PGDC = 2² × 3 = 12."
      },
      {
        id: "math-powers",
        topic: "Nombres et opérations",
        title: "Respecter les priorités",
        kind: "choice",
        prompt: "Effectue les opérations en respectant les parenthèses et les puissances.",
        question: "2³ + 4 × (5 − 2) = ?",
        options: ["20", "32", "36", "14"],
        answer: 0,
        explanation: "On calcule d’abord les parenthèses et la puissance : 8 + 4 × 3. Puis la multiplication : 8 + 12 = 20."
      },
      {
        id: "math-fractions",
        topic: "Nombres et opérations",
        title: "Multiplier des fractions",
        kind: "choice",
        prompt: "Effectue le produit et simplifie le résultat.",
        question: "4/9 × 3/8 = ?",
        options: ["1/6", "12/72 sans simplifier", "7/17", "3/8"],
        answer: 0,
        explanation: "(4 × 3) / (9 × 8) = 12/72. En divisant le numérateur et le dénominateur par 12, on obtient 1/6."
      },
      {
        id: "math-fraction-division",
        topic: "Nombres et opérations",
        title: "Diviser des fractions",
        kind: "choice",
        prompt: "Divise la première fraction par la seconde.",
        question: "2/3 ÷ 4/5 = ?",
        options: ["5/6", "8/15", "6/5", "2/15"],
        answer: 0,
        explanation: "Diviser par une fraction revient à multiplier par son inverse : 2/3 × 5/4 = 10/12 = 5/6."
      },
      {
        id: "math-literal",
        topic: "Calcul littéral",
        title: "Réduire une expression",
        kind: "choice",
        prompt: "Développe les parenthèses, puis rassemble les termes semblables.",
        question: "Quelle expression est égale à 3(2x − 4) + 5 ?",
        options: ["6x − 7", "6x − 12", "6x + 1", "5x − 7"],
        answer: 0,
        explanation: "3(2x − 4) + 5 = 6x − 12 + 5 = 6x − 7."
      },
      {
        id: "math-polynomials",
        topic: "Calcul littéral",
        title: "Multiplier des polynômes",
        kind: "choice",
        prompt: "Développe et réduis l’expression.",
        question: "(x + 2)(x + 3) = ?",
        options: ["x² + 5x + 6", "x² + 6", "2x + 5", "x² + 5x + 5"],
        answer: 0,
        explanation: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6."
      },
      {
        id: "math-functions",
        topic: "Fonctions et diagrammes",
        title: "Lire une relation",
        kind: "choice",
        prompt: "Une grandeur y dépend d’une valeur x. Voici quelques valeurs mesurées : pour x = 0, y = 1; pour x = 1, y = 3; pour x = 2, y = 5.",
        question: "Quelle formule correspond à ces valeurs ?",
        options: ["y = 2x + 1", "y = x + 2", "y = 3x + 1", "y = 2x"],
        answer: 0,
        explanation: "À chaque augmentation de 1 de x, y augmente de 2. La valeur initiale est 1 lorsque x = 0 : y = 2x + 1."
      },
      {
        id: "math-proportion",
        topic: "Fonctions et diagrammes",
        title: "Lire un diagramme",
        kind: "choice",
        prompt: "Lis les données du diagramme en barres.",
        chart: [
          { label: "Lundi", value: 12 },
          { label: "Mardi", value: 18 },
          { label: "Mercredi", value: 15 }
        ],
        question: "Combien de pièces ont été contrôlées au total ?",
        options: ["45", "36", "33", "54"],
        answer: 0,
        explanation: "On additionne les trois valeurs du diagramme : 12 + 18 + 15 = 45 pièces."
      },
      {
        id: "math-ratio",
        topic: "Fonctions et diagrammes",
        title: "Utiliser la proportionnalité",
        kind: "choice",
        prompt: "Un câble de 4,5 m coûte 31,50 CHF. Le prix est proportionnel à la longueur.",
        question: "Combien coûtent 7,2 m de ce câble ?",
        options: ["50,40 CHF", "44,10 CHF", "38,70 CHF", "63,00 CHF"],
        answer: 0,
        explanation: "Le prix au mètre est 31,50 ÷ 4,5 = 7 CHF. Pour 7,2 m : 7 × 7,2 = 50,40 CHF."
      },
      {
        id: "math-percent",
        topic: "Fonctions et diagrammes",
        title: "Calculer un pourcentage",
        kind: "choice",
        prompt: "Un outil coûte 80 CHF. Son prix baisse de 15 %.",
        question: "Quel est son nouveau prix ?",
        options: ["68 CHF", "65 CHF", "72 CHF", "15 CHF"],
        answer: 0,
        explanation: "15 % de 80 CHF = 0,15 × 80 = 12 CHF. Le nouveau prix est 80 − 12 = 68 CHF."
      },
      {
        id: "math-equations",
        topic: "Équations",
        title: "Résoudre une équation",
        kind: "choice",
        prompt: "Résous l’équation en isolant x.",
        question: "3(2x − 1) = 15",
        options: ["x = 3", "x = 2", "x = 8", "x = 6"],
        answer: 0,
        explanation: "On divise par 3 : 2x − 1 = 5. On ajoute 1 : 2x = 6, donc x = 3."
      },
      {
        id: "math-word-equation",
        topic: "Équations",
        title: "Traduire un problème en équation",
        kind: "choice",
        prompt: "Trois câbles de même longueur et un connecteur de 2 m ont une longueur totale de 14 m. On note x la longueur d’un câble.",
        question: "Quelle équation permet de trouver la longueur x d’un câble ?",
        options: ["3x + 2 = 14", "3 + 2x = 14", "3x = 14 + 2", "x + 3 + 2 = 14"],
        answer: 0,
        explanation: "Les trois câbles mesurent ensemble 3x mètres; en ajoutant le connecteur de 2 m, on obtient 14 m : 3x + 2 = 14."
      },
      {
        id: "math-pythagoras",
        topic: "Lignes, surfaces et théorème de Pythagore",
        title: "Trouver la longueur manquante",
        kind: "choice",
        prompt: "Un triangle rectangle a des côtés de l’angle droit de 6 cm et 8 cm.",
        question: "Quelle est la longueur de son hypoténuse ?",
        options: ["10 cm", "14 cm", "7 cm", "48 cm"],
        answer: 0,
        explanation: "D’après Pythagore, c² = 6² + 8² = 36 + 64 = 100. Comme une longueur est positive, c = 10 cm."
      },
      {
        id: "math-circle",
        topic: "Lignes, surfaces et théorème de Pythagore",
        title: "Calculer l’aire d’un disque",
        kind: "choice",
        prompt: "Un disque a un rayon de 5 cm. Utilise π ≈ 3,14.",
        question: "Quelle est son aire, au centième près ?",
        options: ["78,50 cm²", "31,40 cm²", "15,70 cm²", "25 cm²"],
        answer: 0,
        explanation: "L’aire d’un disque est πr². Ici, 3,14 × 5² = 3,14 × 25 = 78,50 cm²."
      },
      {
        id: "math-circumference",
        topic: "Lignes, surfaces et théorème de Pythagore",
        title: "Calculer un périmètre de cercle",
        kind: "choice",
        prompt: "Un cercle a un rayon de 3 cm. Utilise π ≈ 3,14.",
        question: "Quelle est sa circonférence, au dixième près ?",
        options: ["18,8 cm", "9,4 cm", "28,3 cm", "6,3 cm"],
        answer: 0,
        explanation: "La circonférence est 2πr, soit 2 × 3,14 × 3 = 18,84 cm, donc environ 18,8 cm."
      },
      {
        id: "math-area",
        topic: "Lignes, surfaces et théorème de Pythagore",
        title: "Retrouver une hauteur",
        kind: "choice",
        prompt: "Un triangle a une aire de 30 cm² et une base de 10 cm.",
        question: "Quelle est sa hauteur correspondante ?",
        options: ["6 cm", "3 cm", "12 cm", "60 cm"],
        answer: 0,
        explanation: "Aire = (base × hauteur) ÷ 2. Donc hauteur = (2 × 30) ÷ 10 = 6 cm."
      },
      {
        id: "math-measures",
        topic: "Solides et diverses mesures",
        title: "Calculer un volume",
        kind: "choice",
        prompt: "Un bac rectangulaire mesure 2,5 m de long, 1,2 m de large et 0,8 m de haut.",
        question: "Quel est son volume ?",
        options: ["2,4 m³", "4,5 m³", "24 m³", "1,2 m³"],
        answer: 0,
        explanation: "Le volume du pavé droit vaut longueur × largeur × hauteur : 2,5 × 1,2 × 0,8 = 2,4 m³."
      },
      {
        id: "math-units",
        topic: "Solides et diverses mesures",
        title: "Convertir une capacité",
        kind: "choice",
        prompt: "Convertis la mesure dans l’unité demandée.",
        question: "2,4 litres = ?",
        options: ["2 400 ml", "240 ml", "24 ml", "24 000 ml"],
        answer: 0,
        explanation: "Un litre contient 1 000 millilitres. Donc 2,4 × 1 000 = 2 400 ml."
      },
      {
        id: "math-mass-time",
        topic: "Solides et diverses mesures",
        title: "Convertir une masse et une durée",
        kind: "choice",
        prompt: "Effectue les deux conversions.",
        question: "3,5 kg = ___ g et 2 h 15 min = ___ min.",
        options: ["3 500 g et 135 min", "350 g et 215 min", "35 000 g et 125 min", "3 500 g et 215 min"],
        answer: 0,
        explanation: "1 kg = 1 000 g, donc 3,5 kg = 3 500 g. Deux heures valent 120 minutes, puis 120 + 15 = 135 minutes."
      },
      {
        id: "math-surface-cube",
        topic: "Solides et diverses mesures",
        title: "Calculer l’aire d’un cube",
        kind: "choice",
        prompt: "Un cube a des arêtes de 4 cm.",
        question: "Quelle est son aire totale ?",
        options: ["96 cm²", "64 cm²", "48 cm²", "16 cm²"],
        answer: 0,
        explanation: "Un cube a 6 faces carrées. L’aire d’une face vaut 4 × 4 = 16 cm²; l’aire totale est 6 × 16 = 96 cm²."
      }
    ]
  },
  {
    id: "en",
    label: "Anglais",
    short: "EN",
    color: "#ae7a3a",
    pale: "#f6eee1",
    description: "Read, understand and express yourself",
    topics: ["Reading · Multiple choice", "Reading · True, False or Not given", "Reading · Matching", "Writing · Email"],
    exercises: [
      {
        id: "en-reading",
        topic: "Reading · Multiple choice",
        title: "Read for the main idea",
        kind: "choice",
        prompt: "Read the short text and choose the best answer.",
        passage: "Every Thursday, Alex helps at a community workshop. People bring small household objects that no longer work. Alex does not repair everything alone: first, he asks the owner what happened. Then he checks the object with a volunteer who has more experience. Alex says the best part is learning how different things work.",
        question: "Why does Alex enjoy the workshop?",
        options: ["He learns how different objects work.", "He can take every object home.", "He works there every day.", "He never needs help."],
        answer: 0,
        explanation: "The final sentence says that Alex enjoys learning how different things work."
      },
      {
        id: "en-notice",
        topic: "Reading · Multiple choice",
        title: "Understand a short notice",
        kind: "choice",
        prompt: "Read the original notice and choose the correct explanation.",
        passage: "WORKSHOP NOTICE — Please return all borrowed tools to the front desk before 5 p.m. Tools left on the benches may be used by another group.",
        question: "What should people do before 5 p.m.?",
        options: ["Return borrowed tools to the front desk.", "Take the tools home for the night.", "Leave every tool on a bench.", "Borrow tools from another group."],
        answer: 0,
        explanation: "The notice asks visitors to return borrowed tools to the front desk before 5 p.m."
      },
      {
        id: "en-not-given",
        topic: "Reading · True, False or Not given",
        title: "Separate fact from assumption",
        kind: "choice",
        prompt: "Read the short text. Choose True, False, or Not given.",
        passage: "The college library opens at 8 a.m. on weekdays. Students can borrow up to five books at a time. The library has a quiet study room on the second floor.",
        question: "The library opens at 8 a.m. on Saturday.",
        options: ["True", "False", "Not given"],
        answer: 2,
        explanation: "The text gives the weekday opening time but says nothing about Saturday. Therefore, the information is not given."
      },
      {
        id: "en-matching",
        topic: "Reading · Matching",
        title: "Match a person to a place",
        kind: "choice",
        prompt: "Read the profile and the three original place descriptions.",
        passage: "A: The City Science Centre has hands-on exhibits about machines and space. B: Green Farm lets young children meet farm animals and has a small shop. C: The Old Harbour Museum shows how people lived and worked by the water.",
        question: "Lena studies physics and would like to see machines. Which place is the best match?",
        options: ["A — City Science Centre", "B — Green Farm", "C — Old Harbour Museum"],
        answer: 0,
        explanation: "The science centre explicitly offers exhibits about machines, matching Lena’s interest."
      },
      {
        id: "en-writing",
        topic: "Writing · Email",
        title: "Write an invitation email",
        kind: "writing",
        prompt: "Write an email to your English-speaking friend, Jamie, inviting them to the cinema. Explain why you would like to go, name a film you would like to see, give a brief summary of it, and say how you will travel there.",
        question: "Write 100–120 words. Greet Jamie and finish your email. This original practice prompt follows the broad email-writing format of the CEFF 2026 paper; it is not an official exam question.",
        minWords: 100,
        maxWords: 120,
        criteria: ["Greet Jamie and invite them to the cinema.", "Explain why you want to go and name a film.", "Give a brief summary of the film.", "Say how you will travel there.", "Check organisation, grammar, vocabulary, spelling and the 100–120 word target."]
      }
    ]
  }
];

const officialSources = [
  {
    title: "Allemand",
    links: [
      { text: "Examen 2026", file: "2026_Allemand.pdf" },
      { text: "Corrigé", file: "2026_Allemand_corrige.pdf" },
      { text: "Thèmes", file: "2025-2026_-_Themes_examen_admission_Allemand.pdf" }
    ]
  },
  {
    title: "Anglais",
    links: [
      { text: "Examen 2026", file: "2026_Anglais.pdf" },
      { text: "Corrigé", file: "2026_Anglais_corrige.pdf" },
      { text: "Exemple d’examen", file: "2025-2026_-_Exemple_examen_centralise_Anglais.pdf" },
      { text: "Solutions de l’exemple", file: "2025-2026_-_Exemple_examen_centralise_Anglais_corrige.pdf" }
    ]
  },
  {
    title: "Français",
    links: [
      { text: "Examen 2026", file: "2026_Francais.pdf" },
      { text: "Corrigé", file: "2026_Francais_corrige.pdf" },
      { text: "Thèmes", file: "2025-2026_-_Themes_examen_admission_Francais.pdf" }
    ]
  },
  {
    title: "Mathématiques",
    links: [
      { text: "Examen 2026", file: "2026_Maths.pdf" },
      { text: "Corrigé", file: "2026_Maths_corrige.pdf" },
      { text: "Thèmes", file: "2025-2026_-_Themes_examen_admission_Mathematiques.pdf" }
    ]
  }
];

const examFilesBase = "https://www.ceff.ch/fileadmin/telechargement/ceff/Matu_pro/Donnees_examens/";
const progressKey = "cap-mpt-progress-v1";
const lastExerciseKey = "cap-mpt-last-exercise-v1";
const progress = new Set(JSON.parse(localStorage.getItem(progressKey) || "[]"));
let activeSubject = "all";
let activeTopic = "Tous les thèmes";
let activeExercise = localStorage.getItem(lastExerciseKey);
let writingText = "";
let checked = false;
let criteriaVisible = false;

const subjectNav = document.querySelector("#subject-nav");
const subjectCards = document.querySelector("#subject-cards");
const topicFilters = document.querySelector("#topic-filters");
const exerciseList = document.querySelector("#exercise-list");
const exercisePanel = document.querySelector("#exercise-panel");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function getSubject(id) {
  return subjects.find((subject) => subject.id === id);
}

function getVisibleExercises() {
  const selectedSubjects = activeSubject === "all" ? subjects : [getSubject(activeSubject)];
  return selectedSubjects.flatMap((subject) =>
    subject.exercises
      .filter((exercise) => activeTopic === "Tous les thèmes" || exercise.topic === activeTopic)
      .map((exercise) => ({ ...exercise, subject }))
  );
}

function saveProgress() {
  localStorage.setItem(progressKey, JSON.stringify([...progress]));
  updateProgress();
  renderSubjectCards();
}

function updateProgress() {
  const total = subjects.reduce((count, subject) => count + subject.exercises.length, 0);
  const done = progress.size;
  const percent = total ? Math.round((done / total) * 100) : 0;
  document.querySelector("#progress-count").textContent = `${done} sur ${total} exercices terminés`;
  document.querySelector("#progress-percent").textContent = `${percent} %`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  const progressBar = document.querySelector(".progress-track");
  progressBar.setAttribute("aria-valuemax", String(total));
  progressBar.setAttribute("aria-valuenow", String(done));
}

function renderNavigation() {
  subjectNav.innerHTML = subjects.map((subject) => `
    <button class="nav-subject ${activeSubject === subject.id ? "active" : ""}" type="button" data-subject="${subject.id}" aria-pressed="${activeSubject === subject.id}">
      <span class="nav-icon">${escapeHTML(subject.short)}</span><span class="nav-name">${escapeHTML(subject.label)}</span><span class="nav-count">${subject.exercises.length.toString().padStart(2, "0")}</span>
    </button>`).join("");
  subjectNav.querySelectorAll("[data-subject]").forEach((button) => button.addEventListener("click", () => selectSubject(button.dataset.subject)));
}

function renderSubjectCards() {
  subjectCards.innerHTML = subjects.map((subject) => {
    const completed = subject.exercises.filter((exercise) => progress.has(exercise.id)).length;
    const remaining = subject.exercises.length - completed;
    const status = remaining ? `${remaining} exercice${remaining === 1 ? "" : "s"} restant${remaining === 1 ? "" : "s"}` : "Tous les exercices terminés";
    return `
    <button type="button" class="subject-card ${activeSubject === subject.id ? "selected" : ""}" style="--subject-color:${subject.color};--subject-pale:${subject.pale}" data-subject="${subject.id}" aria-pressed="${activeSubject === subject.id}">
      <span class="subject-card-top"><span class="subject-card-icon">${escapeHTML(subject.short)}</span><span class="subject-card-arrow" aria-hidden="true">↗</span></span>
      <strong>${escapeHTML(subject.label)}</strong><small>${subject.topics.length} chapitres · ${status}</small>
    </button>`;
  }).join("");
  subjectCards.querySelectorAll("[data-subject]").forEach((button) => button.addEventListener("click", () => selectSubject(button.dataset.subject)));
}

function selectSubject(id) {
  activeSubject = id;
  activeTopic = "Tous les thèmes";
  activeExercise = null;
  writingText = "";
  checked = false;
  criteriaVisible = false;
  render();
  document.querySelector("#practice-title").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderTopicFilters() {
  const selectedSubjects = activeSubject === "all" ? subjects : [getSubject(activeSubject)];
  const topics = [...new Set(selectedSubjects.flatMap((subject) => subject.topics))];
  const labels = ["Tous les thèmes", ...topics];
  topicFilters.innerHTML = labels.map((topic) => `
    <button class="filter-chip ${activeTopic === topic ? "active" : ""}" type="button" data-topic="${escapeHTML(topic)}" aria-pressed="${activeTopic === topic}">${escapeHTML(topic)}</button>`).join("");
  topicFilters.querySelectorAll("[data-topic]").forEach((button) => button.addEventListener("click", () => {
    activeTopic = button.dataset.topic;
    activeExercise = null;
    writingText = "";
    checked = false;
    criteriaVisible = false;
    render();
  }));
}

function renderExerciseList() {
  const visible = getVisibleExercises();
  document.querySelector("#exercise-total").textContent = `${visible.length} activité${visible.length === 1 ? "" : "s"}`;
  document.querySelector("#library-title").textContent = activeSubject === "all" ? "Toutes les matières" : getSubject(activeSubject).label;
  if (!visible.length) {
    exerciseList.innerHTML = `<p class="empty-list">Aucun exercice dans ce thème pour le moment.</p>`;
    return;
  }
  exerciseList.innerHTML = visible.map((exercise, index) => `
    <button class="exercise-row ${activeExercise === exercise.id ? "active" : ""} ${progress.has(exercise.id) ? "done" : ""}" type="button" data-exercise="${exercise.id}" aria-current="${activeExercise === exercise.id ? "true" : "false"}">
      <span class="row-index">${progress.has(exercise.id) ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="row-copy"><strong>${escapeHTML(exercise.title)}</strong><small>${escapeHTML(exercise.subject.label)} · ${escapeHTML(exercise.topic)}</small></span>
      <span class="row-arrow" aria-hidden="true">›</span>
    </button>`).join("");
  exerciseList.querySelectorAll("[data-exercise]").forEach((button) => button.addEventListener("click", () => {
    activeExercise = button.dataset.exercise;
    localStorage.setItem(lastExerciseKey, activeExercise);
    writingText = "";
    checked = false;
    criteriaVisible = false;
    render();
    if (window.matchMedia("(max-width: 760px)").matches) {
      exercisePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }));
}

function resumeExercise() {
  const allExercises = subjects.flatMap((subject) => subject.exercises.map((exercise) => ({ ...exercise, subject })));
  const last = allExercises.find((exercise) => exercise.id === localStorage.getItem(lastExerciseKey));
  const exercise = last && !progress.has(last.id)
    ? last
    : allExercises.find((item) => !progress.has(item.id)) || last || allExercises[0];
  if (!exercise) return;
  activeSubject = exercise.subject.id;
  activeTopic = "Tous les thèmes";
  activeExercise = exercise.id;
  writingText = "";
  checked = false;
  criteriaVisible = false;
  render();
  exercisePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderExercisePanel() {
  const exercise = getVisibleExercises().find((item) => item.id === activeExercise);
  if (!exercise) {
    exercisePanel.innerHTML = `
      <div class="exercise-panel-empty"><h3>Aucun exercice sélectionné</h3><p>Choisis un exercice dans la bibliothèque pour afficher son énoncé et les outils de réponse.</p></div>`;
    return;
  }
  const { subject } = exercise;
  const passage = exercise.passage ? `<div class="passage"><div class="passage-label">TEXTE</div>${escapeHTML(exercise.passage)}</div>` : "";
  const chart = exercise.chart ? `<figure class="practice-chart" aria-label="Diagramme en barres du nombre de pièces contrôlées par jour">
    ${exercise.chart.map((item) => `<div class="chart-row"><span>${escapeHTML(item.label)}</span><div class="chart-track"><span style="width:${(item.value / Math.max(...exercise.chart.map((entry) => entry.value))) * 100}%"></span></div><strong>${item.value}</strong></div>`).join("")}
    <figcaption>Nombre de pièces contrôlées · source : données de l’exercice</figcaption>
  </figure>` : "";
  const completionTag = progress.has(exercise.id) ? `<span class="exercise-tag done-tag">Terminé ✓</span>` : "";
  let answerMarkup = "";
  if (exercise.kind === "choice") {
    answerMarkup = `<div class="answer-options" role="radiogroup" aria-label="${escapeHTML(exercise.question)}">
      ${exercise.options.map((option, index) => `<label class="answer-option"><input type="radio" name="answer" value="${index}" ${checked && selectedAnswer() === index ? "checked" : ""}>${escapeHTML(option)}</label>`).join("")}
    </div>
    <div class="exercise-actions"><button class="primary-button" id="check-answer" type="button">Vérifier ma réponse</button></div>
    ${checked ? renderFeedback(exercise) : ""}`;
  } else {
    const count = countWords(writingText);
    const range = exercise.minWords ? `Objectif : ${exercise.minWords}–${exercise.maxWords} mots` : "Le texte est enregistré dans ce navigateur uniquement pendant cette visite.";
    const rangeClass = exercise.minWords && count >= exercise.minWords && count <= exercise.maxWords ? "in-range" : "";
    answerMarkup = `<textarea class="writing-input" id="writing-answer" placeholder="Écris ton texte ici…" aria-label="${escapeHTML(exercise.question)}">${escapeHTML(writingText)}</textarea>
      <div class="writing-meta"><span>${range}</span><span class="${rangeClass}" id="word-count">${count} mot${count === 1 ? "" : "s"}</span></div>
      <div class="exercise-actions"><button class="secondary-button" id="show-criteria" type="button">${criteriaVisible ? "Masquer les repères" : "Afficher les repères de relecture"}</button><button class="primary-button" id="finish-writing" type="button">${progress.has(exercise.id) ? "Exercice terminé ✓" : "J’ai terminé ma rédaction"}</button></div>
      ${criteriaVisible ? `<div class="criteria"><strong>Repères d’auto-évaluation</strong><ul>${exercise.criteria.map((criterion) => `<li>${escapeHTML(criterion)}</li>`).join("")}</ul>${exercise.minWords ? `<p>${count < exercise.minWords ? `Il te manque ${exercise.minWords - count} mots pour atteindre le bas de la fourchette.` : count > exercise.maxWords ? `Tu dépasses la fourchette de ${count - exercise.maxWords} mots.` : "Tu es dans la fourchette visée."} Le site ne note pas le contenu de ta rédaction.</p>` : "<p>Le site ne note pas le contenu de ta rédaction.</p>"}</div>` : ""}`;
  }

  exercisePanel.innerHTML = `
    <div class="exercise-header">
      <div class="exercise-subject" style="--subject-color:${subject.color};--subject-pale:${subject.pale}"><span class="mini-subject-icon">${escapeHTML(subject.short)}</span>${escapeHTML(subject.label)} <span aria-hidden="true">·</span> ${escapeHTML(exercise.topic)}</div>
      <div class="exercise-badges">${completionTag}<span class="exercise-tag">${exercise.kind === "writing" ? "Production" : "Exercice corrigé"}</span></div>
    </div>
    <div class="exercise-content">
      <div class="overline">EXERCICE ORIGINAL · ${escapeHTML(subject.short)}</div>
      <h3>${escapeHTML(exercise.title)}</h3><p>${escapeHTML(exercise.prompt)}</p>${passage}${chart}
      <div class="question">${escapeHTML(exercise.question)}</div>${answerMarkup}
    </div>`;

  if (exercise.kind === "choice") {
    exercisePanel.querySelectorAll('input[name="answer"]').forEach((input) => input.addEventListener("change", () => {
      checked = false;
      exercisePanel.querySelector(".feedback")?.remove();
    }));
    exercisePanel.querySelector("#check-answer").addEventListener("click", () => {
      const selected = exercisePanel.querySelector('input[name="answer"]:checked');
      if (!selected) {
        exercisePanel.querySelector(".feedback")?.remove();
        exercisePanel.querySelector(".exercise-actions").insertAdjacentHTML("afterend", `<div class="feedback incorrect" role="status"><strong>Choisis une réponse.</strong>Tu pourras ensuite vérifier ton raisonnement.</div>`);
        return;
      }
      checked = true;
      if (Number(selected.value) === exercise.answer) {
        progress.add(exercise.id);
        saveProgress();
      }
      renderExercisePanel();
      renderExerciseList();
    });
  } else {
    const textarea = exercisePanel.querySelector("#writing-answer");
    textarea.addEventListener("input", () => {
      writingText = textarea.value;
      const countElement = exercisePanel.querySelector("#word-count");
      const countNow = countWords(writingText);
      countElement.textContent = `${countNow} mot${countNow === 1 ? "" : "s"}`;
      countElement.classList.toggle("in-range", Boolean(exercise.minWords && countNow >= exercise.minWords && countNow <= exercise.maxWords));
    });
    exercisePanel.querySelector("#show-criteria").addEventListener("click", () => {
      criteriaVisible = !criteriaVisible;
      renderExercisePanel();
    });
    exercisePanel.querySelector("#finish-writing").addEventListener("click", () => {
      progress.add(exercise.id);
      saveProgress();
      renderExercisePanel();
      renderExerciseList();
    });
  }
}

function selectedAnswer() {
  const selected = exercisePanel.querySelector('input[name="answer"]:checked');
  return selected ? Number(selected.value) : null;
}

function renderFeedback(exercise) {
  const selected = selectedAnswer();
  if (selected === null) return "";
  const correct = selected === exercise.answer;
  if (!correct) return `<div class="feedback incorrect" role="status"><strong>Pas tout à fait.</strong>${escapeHTML(exercise.explanation)} Essaie une autre réponse.</div>`;
  return `<div class="feedback" role="status"><strong>Bonne réponse !</strong>${escapeHTML(exercise.explanation)}</div>`;
}

function countWords(value) {
  const trimmed = value.trim();
  return trimmed ? trimmed.split(/\s+/u).length : 0;
}

function renderSources() {
  document.querySelector("#source-links").innerHTML = officialSources.map((source) => `
    <article class="source-card"><h3>${escapeHTML(source.title)} <span aria-hidden="true">↗</span></h3><div class="source-card-links">
      ${source.links.map((link) => `<a href="${examFilesBase}${encodeURIComponent(link.file).replaceAll("%2F", "/")}">${escapeHTML(link.text)} ↗</a>`).join("")}
    </div></article>`).join("");
}

function render() {
  const subject = getSubject(activeSubject);
  document.querySelector("#crumb-subject").textContent = activeSubject === "all" ? "TOUTES LES MATIÈRES" : subject.label.toLocaleUpperCase("fr");
  renderNavigation();
  renderSubjectCards();
  renderTopicFilters();
  renderExerciseList();
  renderExercisePanel();
  updateProgress();
}

function initializeApp() {
  document.querySelector("#resume-button").addEventListener("click", resumeExercise);
  document.querySelector("#home-link").addEventListener("click", (event) => {
    event.preventDefault();
    activeSubject = "all";
    activeTopic = "Tous les thèmes";
    activeExercise = null;
    writingText = "";
    checked = false;
    criteriaVisible = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  renderSources();
  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp, { once: true });
} else {
  initializeApp();
}
