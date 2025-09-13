import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 9; // seconds
/* status
Question 1: Done, SELF IMAGE
Question 2: Done, IMAGE 
Question 3: Done, IMAGE 
Question 4: Done

Question 5: Done, IMAGE
Question 6: Done, IMAGE
Question 7: Done, IMAGE
Question 8: Done

Question 9: Done
Question 10: Done, IMAGE
Question 11: Done, IMAGE
Question 12: Question Needed 
*/
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,//1
        question: 'What sport is this',
        imgSrc: 'Rangers.jpeg',
        answer: 'Ice Hockey',
    },
    {
        points: 200,//2
        question:
            'Which country\'s flag is this?',
        imgSrc: "https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg",
        answer: 'India',
    },
    {
        points: 300,//3
        question:
            'What is the most populous city in the US?',
            imgSrc: "https://media.istockphoto.com/id/521714583/photo/new-york-city-midtown-with-empire-state-building-at-sunset.jpg?s=612x612&w=0&k=20&c=paLoZfZnaZSfaBK_DxLls_Ii0hD3r2PBKSlS6M1QxVU=",
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
            imgSrc: 'https://d13b2ieg84qqce.cloudfront.net/8bb75281ba1f5c160a69dd4ada81feb2cb89a105.jpg',
            answer: 'Horace Mann School',
        },
        {
            points: 200,//6
            question:
                'What are these people doing',
            imgSrc: 'https://png.pngtree.com/png-clipart/20230130/ourmid/pngtree-students-speech-debate-behind-the-podium-with-microphone-png-image_6575827.png',
            answer: 'Debating',
        },
        {
            points: 300,//7
            question: 'What sport includes the greats of Novak Dojokvic and Rafa Nadal?',
            imgSrc: 'https://images.prismic.io/fft-rg-commun-news/fd31483d-e6c3-4563-b517-7972821ebdcc_20220601_RG_NG1_1110_web+Rafael+Nadal+Novak+Djokovic.jpg?auto=compress,format&w=1000&h=800',
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
    },
    {
        points: 200,//10
        question:
            'A very basic, but powerful state of being, it is the driver of people, and it is the feeling of being content + excited',
        answer: 'Happiness',
    },
    {
        points: 300,//11
        question:
            'What is the name of the business school of a major university is based in Pennsylvania, with the colors of blue and red (The --- School), include "The" and "School"',
        answer: 'The Wharton School',
    },
    {
        points: 400,//12
        question:
            'The capital city of a country that is a close alley of the US, and is known for once ruling most of the world',
        imgSrc:
            "https://media.istockphoto.com/id/2157424313/photo/panoramic-aerial-view-of-tower-bridge-and-the-city-of-london-at-twilight.jpg?s=612x612&w=0&k=20&c=PgtGeL8UQV0qKSSx91I3ETQMEQ9_gegfNmi3hVi2ZLw=",
        answer: 'London',
    }
]);


const categories = [
    {
        title: 'Aditya\'s Past',
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