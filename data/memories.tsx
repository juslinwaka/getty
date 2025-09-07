import React from "react";
import HeartBeat from "../components/HeartBeat";

export interface Memory {
  id: number;
  title: string;
  text: string;
  sketch: React.ReactNode; // React element allowed because this is .tsx
  options: { text: string; nextId: number }[];
}

// Stickman component
export const Stickman = ({ x = 50, y = 50 }: { x?: number; y?: number }) => (
  <svg width="100" height="100">
    <circle cx={x} cy={y - 20} r={10} stroke="black" strokeWidth={2} fill="none" />
    <line x1={x} y1={y - 10} x2={x} y2={y + 20} stroke="black" strokeWidth={2} />
    <line x1={x - 15} y1={y} x2={x + 15} y2={y} stroke="black" strokeWidth={2} />
    <line x1={x} y1={y + 20} x2={x - 15} y2={y + 40} stroke="black" strokeWidth={2} />
    <line x1={x} y1={y + 20} x2={x + 15} y2={y + 40} stroke="black" strokeWidth={2} />
  </svg>
);

export const Ball = () => (
  <svg width="50" height="50">
    <circle cx="25" cy="25" r="10" fill="orange" stroke="black" strokeWidth="2" />
  </svg>
);

export const Bucket = () => (
  <svg width="30" height="40">
    <rect x="5" y="5" width="20" height="30" stroke="black" strokeWidth={2} fill="lightblue" />
  </svg>
);

export const memories: Memory[] = [
  {
    id: 1,
    title: "Welcome",
    text: "Hi! Gertrude, welcome to the Hidden Lens Explore Game 😊",
    sketch: (
      <img 
        src='images/welokhamu.jpg'
        width={320}/>
    ),
    options: [{ text: "Start Game", nextId: 2 }],
  },
  {
    id: 2,
    title: "Walking Back from School",
    text: "It was all of sudden how our friendship started. I don't remember much, but the joy I had when walking back from school together. After a long day at school, and we laughed about silly things. You were an innocent girl, while on my side I felt safe being with you.",
    sketch: (
      <img 
        src='images/school.jpg'
        width={320}/>
    ),
    options: [{ text: "Next", nextId: 3 }],
  },
  {
    id: 3,
    title: "Playing Football",
    text: "I used to play soccer with some kids, it was funny. But you know what was funnier than the game, it's talking to you when you're there. I felt so happy, but I never know how, all I knew was it's just bcoz we are friends. But then one night I took a phone and searched about it. I realized I liked you. and you were my first love.",
    sketch: (
      <svg width="150" height="100">
        <Stickman x={50} />
        <Ball />
      </svg>
    ),
    options: [{ text: "Next", nextId: 4 }],
  },
  {
    id: 4,
    title: "At the Borehole",
    text: "At home I was excluded to fetching water, it wasn't really my work. But once I know you're there, it became my duty. I could come over while you're either doing laundry or fetching water. I never expected you could help me carry water home, even though it was an agreement if I remember well. You were with Amina, and I promised to help you back but I never did. I felt bad about it. But I was supposed to be home.",
    sketch: (
      <svg width="120" height="100">
        <Stickman x={40} />
        <Bucket />
        <Stickman x={80} />
        <Bucket />
      </svg>
    ),
    options: [{ text: "Next", nextId: 5 }],
  },
  {
    id: 5,
    title: "Giving a Letter to Elie",
    text: "If there was a blessing, meeting and being friend of your young brother Elie, I remember giving him my letters, feeling a bit nervous. At first i asked myself is this right? but then I thought, if I don't do it, I will regret it. So I gave him the letter, and I felt relieved. I was happy you were there. the letters had nothing serious but I was like what if it landed to her mother or brother (George). Well it was crazy but when I got your reply. I was really happy you couldn't imagine.",
    sketch: (
      <svg width="120" height="100">
        <Stickman x={40} />
        <rect x={50} y={45} width={15} height={10} fill="red" stroke="black" strokeWidth={1} />
        <Stickman x={80} />
      </svg>
    ),
    options: [{ text: "Next", nextId: 6 }],
  },
  {
    id: 6,
    title: "When leaving",
    text: "I was half happy-half sad when I heard you were leaving. I knew that was all I had with you. I was sad because I knew I would miss you, and I was happy because I knew you were going to a better place. I sat down and wrote that final letter, and I was like should I give it to you? but I thought no, I will just leave it here. I didn't know if you would read it or not, but I just wanted you to know how I felt. I was scared you would forget me. You were special to me. I came over to see you off, and I was happy to see you one last time. And it was nice talking to you that night. I came back home and say to myself it's time to forget about everything and focus on other things.",
    sketch: (
      <img 
        src='images/goodbye.jpg'
        width={220}/>
    ),
    options: [{ text: "Next", nextId: 7 }],
  },
  {
    id: 7,
    title: "Re-communication",
    text: "After some years, I saw you on Facebook. I was happy to see you again. We started talking again, and I was happy to hear from you. I felt like we never lost touch. But what I said to myself is, it's just temporary bcoz that what everyone do. After a while she will meet new people and will never talk again. But here we are now, I still remember everything. And I was surprised you still remember all the the joy we had a long time ago.",
    sketch: (
      <img 
        src='images/meeting.jpg'
        width={220}/>
    ),
    options: [{ text: "Next", nextId: 8 }],
  },
  {
  id: 8,
  title: "The Calls...",
  text: "When we make the calls, even when I'm supposed to be occupied but once it's you calling, I can't reject the call... even is I want to, and it's the only joy I do feel. When we joke, talk about silly things, life and many other things, I never want to hung-up. I remember when you call me on New Year at mignight just to wish me a happy new year. I feel blessed.",
  sketch: (
      <img 
        src='images/calls.jpg'
        width={320}/>
    ), // Use heartbeat animation
  options: [({ text: "Next", nextId: 9 })],
},
{
    id: 9,
    title: "Answering the question: how would I feel if you date someone else?",
    text: "To be honesty, after recalling all the moment we had and how special you are to me, I would be hurt. I would feel sad, and I would feel like I lost something special. But I would never say anything, because I know it's your life and you have the right to do whatever you want. I would just wish you the best. But deep down, I would be hurt. I wouldn't feel hurt bcoz you date someone else but why I couldn't tell you how I feel about you, it's regret of saying at least I should have tried. We share a lot memories, and I would always cherish them. You are special to me.",
    sketch: (
      <img 
        src='images/holdhand.jpg'
        width={220}/>
    ),
    options: [{ text: "Next", nextId: 10 }],
  },
  {
  id: 10,
  title: "Final Message",
  text: "When you said, you will never help me carry water again. I realized how much I would lose, not only the help but even someone I care and special to me. You’ve been on my mind for a long time. I like you, and I would be delighted to have you as my romantic partner. I don’t expect an answer; I just want you to know that you are special to me. No pressure and am not trying to offend you. I'm just being honest, so even if you date someone else. I won't regret not saying it and be happy for you.",
  sketch: (
      <img 
        src='images/love.jpg'
        width={320}/>
    ), // Use heartbeat animation
  options: [],
},
];
