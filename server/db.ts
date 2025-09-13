import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 9; // seconds
/* status
Question 1: Image Push 
Question 2: Done 
Question 3: Done 
Question 4: Done

Question 5: Done 
Question 6: Done
Question 7: Done
Question 8: Question Needed  

Question 9: Done
Question 10: Question Needed  
Question 11: Done 
Question 12: Question Needed 
*/
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,//1
        question: 'What sport is this',
        answer: 'Ice Hockey',
    },
    {
        points: 200,//2
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://www.google.com/imgres?q=indian%20flag&imgurl=https%3A%2F%2Fcdn.britannica.com%2F97%2F1597-050-008F30FA%2FFlag-India.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Ftopic%2Fflag-of-India&docid=NJDIXB5LEgTxgM&tbnid=LDAjM51x9-NkkM&vet=12ahUKEwipu5_CgNaPAxVlFFkFHXX0Fj4QM3oECBoQAA..i&w=1600&h=1067&hcb=2&ved=2ahUKEwipu5_CgNaPAxVlFFkFHXX0Fj4QM3oECBoQAA",
        answer: 'India',
    },
    {
        points: 300,//3
        question:
            'What is the most populous city in the US?',
            imgSrc: "https://www.google.com/imgres?q=nyc%20image%20sunset&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F521714583%2Fphoto%2Fnew-york-city-midtown-with-empire-state-building-at-sunset.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DpaLoZfZnaZSfaBK_DxLls_Ii0hD3r2PBKSlS6M1QxVU%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fnew-york-city-skyline-sunset&docid=dgcmQd33fwjzuM&tbnid=4Hc3TPSRZkBE6M&vet=12ahUKEwjlyPSnqdaPAxUlM1kFHVI4FMMQM3oECBgQAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjlyPSnqdaPAxUlM1kFHVI4FMMQM3oECBgQAA",
        answer: 'New York City',
    },
    {
        points: 400,//4
        question: 'What public space was Designed in 1858 by Frederick Law Olmsted?',
        answer: 'Central Park',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
                {
            points: 100,//5
            question:
                'What is this school called?',
            imgSrc: 'https://www.google.com/imgres?q=horace%20mann%20school%20nyc&imgurl=https%3A%2F%2Fd13b2ieg84qqce.cloudfront.net%2F8bb75281ba1f5c160a69dd4ada81feb2cb89a105.jpg&imgrefurl=https%3A%2F%2Fwww.niche.com%2Fk12%2Fhorace-mann-school-bronx-ny%2F&docid=-1fz0k_BudX_kM&tbnid=PlIGgLGhcan52M&vet=12ahUKEwjWh7ftgNaPAxVhD1kFHamFL34QM3oECBwQAA..i&w=1800&h=942&hcb=2&ved=2ahUKEwjWh7ftgNaPAxVhD1kFHamFL34QM3oECBwQAA',
            answer: 'Horacemann School',
        },
        {
            points: 200,//6
            question:
                'What are these people doing',
            imgSrc: 'https://www.google.com/imgres?q=debate%20images&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230130%2Fourmid%2Fpngtree-students-speech-debate-behind-the-podium-with-microphone-png-image_6575827.png&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fdebate-clipart&docid=WYZpRkBSLBJdgM&tbnid=8tw8ZKyUilLpfM&vet=12ahUKEwiu17SDhNaPAxXCEFkFHZlnM1YQM3oECCIQAA..i&w=360&h=360&hcb=2&ved=2ahUKEwiu17SDhNaPAxXCEFkFHZlnM1YQM3oECCIQAA',
            answer: 'Debating',
        },
        {
            points: 300,//7
            question: 'What sport includes the greats of Novak Dojokvic and Rafa Nadal?',
            answer: 'Tennis',
        },
        {
            points: 400,//8
            question:
                'This country is home contains part of the alps, and is located to the south of Germany.',
            answer: 'Switzerland',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,//9
        question:
            'What street in NYC is famous for being the finanical capital of the world?',
        answer: 'Wall Street',
    }
    {
        points: 200,//10
        question:
            'A very basic, but powerful state of being, it is the driver of people, and it is the feeling of being content + excited',
        answer: 'Happiness',
    }
    {
        points: 300,//11
        question:
            'What major university is based in Pennsylvania, with the colors of blue and red',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'University of Pennsylvania',
    }
    {
        points: 400,//12
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: "Aditya\'s Past',
        questions: pastQuestions
    },
    {
        title: 'Aditya\'s Present',
        questions: presentQuestions
    },
    {
        title: 'Aditya\'s Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}