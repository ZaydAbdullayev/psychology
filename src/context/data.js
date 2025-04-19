import cover1 from "../assets/cover1.png";
import cover2 from "../assets/cover2.png";
import cover3 from "../assets/cover3.png";
import cover4 from "../assets/cover4.png";
import cover5 from "../assets/cover5.png";

export const rooms = [
    {
        id: "fear",
        title: "FEAR ROOM",
        subtitle: "Choose your biggest fear",
        cover: cover1,
    },
    {
        id: "time",
        title: "TIME ROOM",
        subtitle: "Complete the task in 30 seconds",
        cover: cover2,
    },
    {
        id: "memory",
        title: "MEMORY ROOM",
        subtitle: "Remember the objects",
        cover: cover3,
    },
    {
        id: "choice",
        title: "CHOICE ROOM",
        subtitle: "Examine a dilemma",
        cover: cover4,
    },
    {
        id: "reflection",
        title: "REFLECTION ROOM",
        subtitle: "Reflect on yourself",
        cover: cover5,
    },
]

export const questions = [
    {
        id: 1,
        question: "There’s a door in front of you. You don’t know what’s behind it. Will you open it?",
        answers: [
            "Yes, I want to know no matter what.",
            "No, sometimes not knowing is safer.",
            "I have to, there’s no other way.",
            "I'll wait… maybe it opens by itself."
        ],
        themes: ["Clarity", "Defense", "Chaos", "Melancholy"]
    },
    {
        id: 2,
        question: "When was the last time you truly felt understood?",
        answers: [
            "I can’t remember.",
            "There was a time, but it's gone.",
            "I still feel it now.",
            "Never."
        ],
        themes: ["Melancholy", "Defense", "Clarity", "Chaos"]
    },
    {
        id: 3,
        question: "Which face of your past still follows you?",
        answers: [
            "Guilt.",
            "Regret.",
            "Longing.",
            "Nothing… and that’s scary too."
        ],
        themes: ["Melancholy", "Chaos", "Clarity", "Defense"]
    },
    {
        id: 4,
        question: "When you’re alone, what thought haunts you most?",
        answers: [
            "No one really knows me.",
            "Everything feels meaningless.",
            "No matter how hard I try, it’s never enough.",
            "I’m not alone… but I like the feeling."
        ],
        themes: ["Chaos", "Melancholy", "Defense", "Clarity"]
    },
    {
        id: 5,
        question: "When you look in the mirror, are you satisfied with what you see?",
        answers: [
            "No, I see a stranger.",
            "Yes, but only on the surface.",
            "I want to change, but I don’t know how.",
            "I’m scared… I don’t know who I really am."
        ],
        themes: ["Defense", "Clarity", "Chaos", "Melancholy"]
    },
    {
        id: 6,
        question: "What silences you the most?",
        answers: [
            "Other people’s expectations.",
            "My own inner voice.",
            "Words from the past.",
            "Nothing… and that’s not silence at all."
        ],
        themes: ["Defense", "Chaos", "Melancholy", "Clarity"]
    },
    {
        id: 7,
        question: "Knowing that everything will eventually fade — how do you feel?",
        answers: [
            "I try to live fast.",
            "It fills me with emptiness.",
            "I try to make things meaningful.",
            "I accept it… but I’m not at peace."
        ],
        themes: ["Clarity", "Chaos", "Melancholy", "Defense"]
    },
    {
        id: 8,
        question: "Which fear shaped your character the most?",
        answers: [
            "Being abandoned.",
            "Being forgotten.",
            "Being worthless.",
            "Being who I truly am."
        ],
        themes: ["Defense", "Chaos", "Melancholy", "Clarity"]
    },
    {
        id: 9,
        question: "If you could never speak to anyone again, who would you miss the most?",
        answers: [
            "The one who never heard me.",
            "The one who hurt me the most.",
            "The one who truly loved me.",
            "The one who made me who I am."
        ],
        themes: ["Melancholy", "Chaos", "Clarity", "Defense"]
    },
    {
        id: 10,
        question: "When was the last time you couldn't answer the question: Who am I?",
        answers: [
            "Today.",
            "Yesterday.",
            "Always.",
            "Never… but maybe that’s scarier."
        ],
        themes: ["Chaos", "Melancholy", "Defense", "Clarity"]
    }
];

export const themes = {
    Chaos: {
        title: "🧩 Mental Reflection: Kaos",
        description:
            "Your thoughts are lost in a disordered forest. Your choices keep pulling you deeper. But within this loss, you seek meaning. Your mind is not a maze... perhaps it's a mirror of infinity.",
    },
    Melancholy: {
        title: "🕯️ Mental Reflection: Melancholy",
        description:
            "You walk in the fog of the past. Memories, regrets, and longings have become your compass. The weight of your soul slows you down but also deepens you. You are always within a 'what if'.",
    },
    Defense: {
        title: "🛡️ Mental Reflection: Defense",
        description:
            "You learned to protect yourself, but your walls also keep you trapped inside. As unspoken words and suppressed emotions accumulate, they grow heavier. You are the only one who hears the echoes of your silence.",
    },
    Clarity: {
        title: "🌗 Mental Reflection: Darkness Within the Light",
        description:
            "You know yourself, but the self you know is at peace with the darkness. You are among those who have learned to live with their shadow. You cling neither to good nor to evil, only to awareness. This makes you both dangerous and free.",
    },
};
