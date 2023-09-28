const Consonants = {
    sanskrit: "Vyanjan",
    letters: [
        {
            glyph:"क",
            name: "ka"
        },
        {
            glyph:"ख",
            name: "kha"
        },
        {
            glyph:"ग",
            name: "ga"
        },
        {
            glyph:"घ",
            name: "gha"
        },
        {
            glyph:"ङ",
            name: "ṅa"
        },
        {
            glyph:"च",
            name: "cha"
        },
        {
            glyph:"छ",
            name: "chha"
        },
        {
            glyph:"ज",
            name: "ja"
        },
        {
            glyph:"झ",
            name: "jha"
        },
        {
            glyph:"ञ",
            name: "ña"
        },
        {
            glyph:"ट",
            name: "ṭa"
        },
        {
            glyph:"ठ",
            name: "ṭha"
        },
        {
            glyph:"ड",
            name: "ḍa"
        },
        {
            glyph:"ढ",
            name: "ḍha"
        },
        {
            glyph:"ण",
            name: "ṇa"
        },
        {
            glyph:"त",
            name: "ta"
        },
        {
            glyph:"थ",
            name: "tha"
        },
        {
            glyph:"द",
            name: "da"
        },
        {
            glyph:"ध",
            name: "dha"
        },
        {
            glyph:"न",
            name: "na"
        },
        {
            glyph:"प",
            name: "pa"
        },
        {
            glyph:"फ",
            name: "pha"
        },
        {
            glyph:"ब",
            name: "ba"
        },
        {
            glyph:"भ",
            name: "bha"
        },
        {
            glyph:"म",
            name: "ma"
        },
        {
            glyph:"य",
            name: "ya"
        },
        {
            glyph:"र",
            name: "ra"
        },
        {
            glyph:"ल",
            name: "la"
        },
        {
            glyph:"व",
            name: "va"
        },
        {
            glyph:"श",
            name: "śa"
        },
        {
            glyph:"ष",
            name: "ṣa"
        },
        {
            glyph:"स",
            name: "sa"
        },
        {
            glyph:"ह",
            name: "ha"
        },
        {
            glyph:"क्ष",
            name: "kṣa"
        },
        {
            glyph:"त्र",
            name: "tra"
        },
        {
            glyph:"ज्ञ",
            name: "jña"
        },
    ]

    
}

const Vowels = {
    sanskrit: "Svar",
    letters: [
        {
            glyph: "अ",
            name: "a"
        },
        {
            glyph: "आ",
            name: "ā"
        },
        {
            glyph: "इ",
            name: "i"
        },
        {
            glyph: "ई",
            name: "ī"
        },
        {
            glyph: "उ",
            name: "u"
        },
        {
            glyph: "ऊ",
            name: "ū"
        },
        {
            glyph: "ऋ",
            name: "ṛ"
        },
        {
            glyph: "लृ",
            name: "ḷṛ"
        },
        {
            glyph: "ए",
            name: "e"
        },
        {
            glyph: "ऐ",
            name: "ai"
        },
        {
            glyph: "ओ",
            name: "o"
        },
        {
            glyph: "औ",
            name: "au"
        },
    ]
}


const vowelSigns = {
    sanskrit: "Matra",
    signs: [
        {
            glyph: "ा",
            name: "ā"
        },
        {
            glyph: " ि",
            name: "i"
        },
        {
            glyph: " ी",
            name: "ī"
        },
        {
            glyph: " ु",
            name: "u"
        },
        {
            glyph: " ू",
            name: "ū"
        },
        {
            glyph: "ृ",
            name: "ṛ"
        },
        {
            glyph: " ॄ",
            name: "ṝ"
        },
        {
            glyph: " ॢ",
            name: "ḷṛ"
        },
        {
            glyph: "ृ",
            name: "ṛ"
        },
        {
            glyph: " े",
            name: "e"
        },
        {
            glyph: " ै",
            name: "ai"
        },
        {
            glyph: " ो",
            name: "o"
        },
        {
            glyph: " ौ",
            name: "au"
        },
    ]
}


// Anusvara and Visarga:
// ं (ṁ) ः (ḥ)

// Virama (Halant):
// ् (virama/halant, used to suppress inherent vowel sound)

// Numerals (Sankhyā):
// ० (0) १ (1) २ (2) ३ (3) ४ (4)
// ५ (5) ६ (6) ७ (7) ८ (8) ९ (9)

// Punctuation Marks and Symbols:
// । (Danda - Full Stop) ॥ (Double Danda - End of Sentence)
// ॰ (Abbreviation) ०० (Decimal Separator)