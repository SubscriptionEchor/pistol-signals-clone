import { TestimonialsHeader } from './testimonials-header';
import { TestimonialsScroll } from './testimonials-scroll';

export function Testimonials() {


  const testimonials = [
    {
      name: "Zainab Omar",
      role: "Crypto Analyst",
      avatar: "https://cdn.midjourney.com/050dc087-d3b6-4b19-b97b-3971796915b3/0_2.png",
      content: "I've used several platforms, but none come close to AI Technical Analyst. The accuracy and in-depth market analysis are simply outstanding."
    },
    {
      name: "Omar Abdullah",
      role: "Crypto Trader",
      avatar: "https://cdn.midjourney.com/78c57851-46b6-4711-90f7-300e04c17b50/0_2.png",
      content: "This platform has simplified trading with timely Telegram updates and spot-on signals. It's boosted my confidence and success rate — truly a game-changer."
    },
    {
      name: "Sarah Al Suwaidi",
      role: "Day Trader",
      avatar: "https://cdn.midjourney.com/bd1a9748-886e-45b1-a928-bb96cecae056/0_2.png",
      content: "As someone trading daily, the quick signal delivery is exactly what I needed. The quick signals make my trades more profitable, and the real-time updates keep me ahead in the market."
    },
    {
      name: "Fatima Al Suwaidi",
      role: "Entrepreneur",
      avatar: "https://cdn.midjourney.com/99cce77d-cba2-47d8-8721-f2de36a64a48/0_0.png",
      content: "I trade on the side, and AI Technical Analyst makes it incredibly simple. The real-time updates are invaluable for someone with a busy schedule."
    },
    {
      name: "Ahmed Khan",
      role: "Financial Analyst",
      avatar: "https://cdn.midjourney.com/7d3fff08-6661-4d23-a2c6-02cd95d884cd/0_3.png",
      content: "The team behind AI Technical Analyst clearly knows the market. This has completely transformed my trading approach. The AI-driven insights have significantly boosted my confidence in making trading decisions."
    },
    {
      name: "Alex Johnson",
      role: "Financial Consultant",
      avatar: "https://cdn.midjourney.com/80bd3024-cf26-4ad1-afc1-5a43377e8110/0_2.png",
      content: "I've recommended AI Technical Analyst to all my clients.The AI-driven technical analysis saves countless hours of research.and timely updates ensure I never miss a good opportunity. Highly reliable!"
    }
  ]
  const testimonials2 = [
    {
      name: "Khaled Al Rashid",
      role: "Investor",
      avatar: "https://cdn.midjourney.com/e458a951-ab19-416f-a2e7-983511216bd8/0_1.png",
      content: "The Telegram integration is flawless, and the signals are timely. I can trade on the go with precise, actionable signals delivered straight to my phone. I love their transparency and consistent performance. It is best tool for anyone serious about crypto trading."
    },
    {
      name: "Salem Al Nasser",
      role: "Long-Term Investor",
      avatar: "https://cdn.midjourney.com/3d2087e2-0bc1-43d4-9f90-e42b77d6476f/0_3.png",
      content: "As a long-term investor, AI Technical Analyst has been invaluable in enhancing my portfolio management. It helps me identify the best entry and exit points, and their insights are always spot-on. Highly recommend it!"
    },
    {
      name: "Rasha Ahmed",
      role: "Part-Time Trader",
      avatar: "https://cdn.midjourney.com/0db07b58-5240-44a9-80c1-fbb18ed53fbe/0_2.png",
      content: "I only trade occasionally, but the insights from AI Technical Analyst are incredibly useful. More like having a personal coach guiding me."
    },
    {
      name: "Tariq Al Mansoori",
      role: "Risk Manager",
      avatar: "https://cdn.midjourney.com/3189285c-ce32-47c9-bf74-0220d5fb7601/0_3.png",
      content: "The platform's focus on risk management is impressive. AI Technical Analyst ensures every trade is calculated, making it ideal for both beginners and experts."
    },
    {
      name: "Aisha Rahman",
      role: "Swing Trader",
      avatar: "https://cdn.midjourney.com/c14e7326-9292-4c72-ba00-26f601f4ae35/0_3.png",
      content: "Risk management tools here have helped me refine my strategy and avoid unnecessary losses. I've been able to consistently improve my returns thanks to AI Technical Analyst. Highly recommended!"
    },
    {
      name: "David Miller",
      role: "Trader",
      avatar: "https://cdn.midjourney.com/0df9c700-697a-4dc4-8569-2dec9eed0456/0_1.png",
      content: "I've been in trading for years, and this platform is one of the best I've come across. The AI tools are revolutionary. My profits have increased consistently since I joined. It has helped me stay ahead of the curve, even during market downturns."
    }
  ]

  // const testimonials = [
  //   {
  //     name: 'Samantha Blake',
  //     role: 'Crypto Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/c6c5b45c-47d9-47d6-afc7-cdca8670c1d3/0_2.png',
  //     content:
  //       "AI Technical Analyst has revolutionized my trading experience. The precision of their signals and the convenience of Telegram updates make this a must-have for any trader!",
  //   },
  //   {
  //     name: 'Ethan Clarke',
  //     role: 'Investor',
  //     avatar:
  //       'https://cdn.midjourney.com/33625ab5-ede6-43b5-8bcd-63612cd6d350/0_3.png',
  //     content:
  //       "Thanks to AI Technical Analyst, my portfolio has seen consistent growth. Their analysis is always on point, and I feel confident making trades based on their guidance.",
  //   },
  //   {
  //     name: 'Olivia Harper',
  //     role: 'Day Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/d18bc1dd-a6c2-4a8a-8c1d-e3243061c0e7/0_1.png',
  //     content:
  //       "The accuracy of AI Technical Analyst' market insights is incredible. Their alerts help me stay ahead of the game and make well-informed decisions on the go.",
  //   },
  //   {
  //     name: 'Liam Patel',
  //     role: 'Crypto Analyst',
  //     avatar:
  //       'https://cdn.midjourney.com/a4e54ad6-63c5-4ce1-be21-0da8b8cc82b8/0_0.png',
  //     content:
  //       "I’ve tried multiple platforms, but none come close to AI Technical Analyst. Their real-time notifications and in-depth reports are top-notch. Highly recommended!",
  //   },
  //   {
  //     name: 'Sophia Bennett',
  //     role: 'Investor',
  //     avatar:
  //       'https://cdn.midjourney.com/d116f578-6531-47c8-92c1-9d0d8f2d408c/0_0.png',
  //     content:
  //       "AI Technical Analyst stands out for its reliable and actionable signals. The integration with Telegram is a game-changer, allowing me to trade efficiently anywhere, anytime.",
  //   },
  //   {
  //     name: 'Jackson Torres',
  //     role: 'Crypto Enthusiast',
  //     avatar:
  //       'https://cdn.midjourney.com/3a9cc971-378a-42f6-a37c-4de56ca1d4b7/0_2.png',
  //     content:
  //       "I’ve been using AI Technical Analyst for months, and it’s been a fantastic experience. The multi-channel notifications ensure I never miss a trade opportunity.",
  //   },
  //   {
  //     name: 'Amelia Rivera',
  //     role: 'Day Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/b524bebf-3194-4e58-b8d8-0a7c1ef808ff/0_3.png',
  //     content:
  //       "AI Technical Analyst provides a perfect blend of simplicity and reliability. Their signals have significantly improved my trading performance and boosted my confidence.",
  //   },
  //   {
  //     name: 'Nathan Brooks',
  //     role: 'Investor',
  //     avatar:
  //       'https://cdn.midjourney.com/f8ddaad4-5682-4070-8861-dd3386ae0020/0_2.png',
  //     content:
  //       "What I love most about AI Technical Analyst is their transparency and consistency. Their Telegram alerts are always timely, and the results speak for themselves.",
  //   },
  //   {
  //     name: 'Emma Watson',
  //     role: 'Crypto Enthusiast',
  //     avatar:
  //       'https://cdn.midjourney.com/e5e8db8e-e246-4a24-adee-2b78f7b83a89/0_0.png',
  //     content:
  //       "The team behind AI Technical Analyst clearly knows the market inside out. Their strategies have helped me take my trading skills to the next level. Absolutely worth it!",
  //   },
  //   {
  //     name: 'Lucas Chen',
  //     role: 'Swing Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/48272c70-cde8-4c9a-8be3-39bf0c83e55f/0_1.png',
  //     content:
  //       "I can’t imagine trading without AI Technical Analyst. Their updates are timely, accurate, and incredibly easy to follow. It’s like having a personal trading assistant.",
  //   },
  // ];

  // const testimonials2 = [
  //   {
  //     name: 'Daniel Gray',
  //     role: 'Crypto Enthusiast',
  //     avatar:
  //       'https://cdn.midjourney.com/7eafeda5-81f8-47fa-b82f-159bd63dfa8a/0_3.png',
  //     content:
  //       "The Telegram updates from AI Technical Analyst are a lifesaver! I never miss a trade opportunity, and the alerts are always on point. A must-have for serious traders.",
  //   },
  //   {
  //     name: 'Sophia Turner',
  //     role: 'Investor',
  //     avatar:
  //       'https://cdn.midjourney.com/f72fd59c-cbab-4391-9f5b-cf007c9b4890/0_0.png',
  //     content:
  //       "Getting real-time signals directly on Telegram has been a game-changer for me. AI Technical Analyst makes trading so much easier and stress-free.",
  //   },
  //   {
  //     name: 'Michael Adams',
  //     role: 'Day Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/0364f377-14da-4da1-b416-96a17a6aa342/0_3.png',
  //     content:
  //       "I love how AI Technical Analyst integrates seamlessly with Telegram. The notifications are super accurate, and the guidance has helped me improve my portfolio significantly.",
  //   },
  //   {
  //     name: 'Isabella Martinez',
  //     role: 'Swing Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/a9abe9c3-290b-410d-acb1-a45305d8268b/0_3.png',
  //     content:
  //       "AI Technical Analyst is my go-to platform for crypto signals. Their Telegram service is fast and reliable, helping me stay on top of every market movement.",
  //   },
  //   {
  //     name: 'Alexander Lee',
  //     role: 'Investor',
  //     avatar:
  //       'https://cdn.midjourney.com/93552a45-364c-4564-9757-e346c6b65d59/0_1.png',
  //     content:
  //       "The Telegram notifications are always timely and accurate. AI Technical Analyst has helped me spot opportunities I would have otherwise missed. Highly recommended!",
  //   },
  //   {
  //     name: 'Charlotte Davies',
  //     role: 'Crypto Enthusiast',
  //     avatar:
  //       'https://cdn.midjourney.com/cac48b79-566f-4a7a-ab41-2d211da7e1b7/0_0.png',
  //     content:
  //       "Thanks to AI Technical Analyst’ Telegram updates, I’ve been able to trade confidently even in a volatile market. Their team really knows what they’re doing!",
  //   },
  //   {
  //     name: 'Benjamin Foster',
  //     role: 'Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/b55ebf17-c0c1-4414-8a98-05ac6a304e4e/0_2.png',
  //     content:
  //       "The insights provided by AI Technical Analyst through Telegram are unmatched. I’m able to take immediate action and make profitable trades consistently.",
  //   },
  //   {
  //     name: 'Grace Walker',
  //     role: 'Day Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/7eafeda5-81f8-47fa-b82f-159bd63dfa8a/0_3.png',
  //     content:
  //       "AI Technical Analyst’ Telegram integration is phenomenal. The updates are easy to follow, and the signals are always spot-on. I’ve never been more confident in my trades.",
  //   },
  //   {
  //     name: 'Liam Johnson',
  //     role: 'Investor, NextGen Crypto',
  //     avatar:
  //       'https://cdn.midjourney.com/eab27c8d-db20-45fd-916f-10128fc991f6/0_1.png',
  //     content:
  //       "I’ve been using AI Technical Analyst for months now, and their Telegram service is a standout feature. It’s fast, efficient, and helps me stay ahead of the market.",
  //   },
  //   {
  //     name: 'Emma Carter',
  //     role: 'Crypto Trader',
  //     avatar:
  //       'https://cdn.midjourney.com/f61bdeef-4764-4097-8e05-4d1b07194c3c/0_0.png',
  //     content:
  //       "AI Technical Analyst has made crypto trading simple and effective. Their Telegram updates are reliable and provide actionable insights at just the right time.",
  //   },
  // ];
  return (
    <section className="relative py-24 px-6 overflow-hidden" id="testimonials">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]"
        style={{ backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <TestimonialsHeader />
        <TestimonialsScroll data={testimonials} />
        <TestimonialsScroll data={testimonials2} />
      </div>
    </section>
  );
}
