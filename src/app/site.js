// site.js
export const siteConfig = {
  // Basic Information
  name: "Binance Girls Group",
  title: "Binance Girls Group DAO",
  description: "A DAO organization built on BSC, dedicated to AI agent development and applications.",
  slogan: "Building your ultimate AI girl group on BSC blockchain",

  // Contract Information
  contract: {
    ca: "0x37a2a225e6a3c237cb901b88728062fee9daf6ce",
  },

  // Token Information
  token: {
    symbol: "$BBG",
    requiredAmount: 1000000,  // OG required token amount
  },

  // Countdown Configuration
  countdown: {
    hours: 48,
    title: "OG Status Claim",
    description: "Time remaining to claim OG status"
  },

  // Team Information
  team: [
    {
      name: "He",
      role: "Founder of City Security Alliance",
      description: "Visionary founder leading the initiative in blockchain security and innovation.",
      image: "team-member-1.jpg"
    },
    {
      name: "Sisi",
      role: "Head of City Cultural District",
      description: "Leading cultural integration and community development initiatives.",
      image: "team-member-2.jpg"
    },
    {
      name: "Ella",
      role: "YZi Labs Lead",
      description: "Technical expert overseeing development and implementation.",
      image: "team-member-3.jpg"
    },
    {
      name: "Nicola",
      role: "YZi Labs Investment Director",
      description: "Managing strategic investments and partnerships.",
      image: "team-member-4.jpg"
    },
    {
      name: "Dana",
      role: "YZi Labs Investment Partner",
      description: "Driving investment strategies and portfolio management.",
      image: "team-member-5.jpg"
    }
  ],

  // Social Links
  social: {
    twitter: "#",
    telegram: "#",
    discord: "#"
  },

  // Additional Features
  features: {
    aiAssistants: {
      enabled: true,
      description: "Create and customize your own AI assistant"
    },
    dao: {
      enabled: true,
      description: "Participate in community governance"
    },
    rewards: {
      enabled: true,
      description: "Earn rewards through active participation"
    }
  }
};