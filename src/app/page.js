'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { siteConfig } from './site';
import TeamAvatar from './components/TeamAvatar';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center mb-16">
      <div className="flex justify-center gap-4 mb-8">
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-pink-800/30 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-pink-300 text-sm mt-2 font-light tracking-widest">HOURS</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-pink-800/30 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-pink-300 text-sm mt-2 font-light tracking-widest">MINUTES</div>
        </div>
        <div className="text-7xl font-light self-center animate-pulse">:</div>
        <div className="bg-zinc-900/50 backdrop-blur px-8 py-6 rounded-lg border border-pink-800/30 animate-fade-in min-w-[160px]">
          <div className="text-7xl font-light mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-pink-300 text-sm mt-2 font-light tracking-widest">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

const WalletSubmission = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletAddress) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center mb-24">
      <div className="space-y-6 mb-12">
        <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg px-6 py-4 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-light tracking-wider text-pink-300 mb-4">Verify OG Status</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Hold minimum 10,000 $BBG tokens to be eligible
          </p>
        </div>

        <div className="bg-zinc-900/30 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="text-xl font-light tracking-wider text-pink-300 mb-4">About $BBG Token</h3>
          <p className="text-lg text-zinc-300 leading-relaxed">
            $BBG is the governance token of Binance Girls Group DAO. Each token represents one vote in the DAO,
            empowering holders to participate in important decisions and shape your ultimate AI girl group.
          </p>
        </div>

        <p className="text-lg text-zinc-300 leading-relaxed">
          Submit your wallet address to claim your OG status and unlock exclusive benefits:
          <span className="block mt-4 text-pink-300/90">
            • DAO Governance Rights (1 token = 1 vote)<br/>
            • Early Access to AI Agents<br/>
            • Exclusive Airdrops<br/>
            • Revenue Sharing
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Enter your wallet address"
            className="w-full px-6 py-4 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg text-white font-medium tracking-wider transition-all duration-300 hover:scale-105"
        >
          {isSubmitted ? 'Submitted Successfully!' : 'Submit Address'}
        </button>
      </form>
    </div>
  );
};

const TeamMember = ({ role, name, description }) => (
  <div className="bg-zinc-900/30 backdrop-blur rounded-lg p-6 border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 group">
    <div className="flex items-center gap-6">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-pink-500/30 group-hover:border-pink-500 transition-all duration-500">
        <TeamAvatar seed={name} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-light tracking-wider truncate">{name}</h3>
        <div className="text-pink-400 text-sm font-medium tracking-widest">{role}</div>
        <p className="text-zinc-400 text-sm leading-relaxed mt-2">{description}</p>
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-pink-900/20">
      {/* Header / Navigation */}
      <nav className="p-8 flex justify-between items-center">
        <div className="text-lg font-light tracking-widest border border-pink-800/50 px-4 py-2 rounded-lg">
          BBG
        </div>
        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-zinc-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-zinc-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.39.52-.46-.01-1.33-.26-1.98-.48-.8-.27-1.43-.42-1.37-.89.03-.25.38-.51 1.03-.78 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.88 5.17-1.89.11 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.13-.03.28z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-zinc-400 hover:text-pink-400 transition-colors duration-300 hover:scale-110 transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"/>
              </svg>
            </a>
          </div>
          <div className="text-lg font-light tracking-widest border border-pink-800/50 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></span>
            BBG VENTURES
          </div>
        </div>
      </nav>

      {/* Main Title */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-8xl font-light tracking-widest italic text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
             style={{
               fontFamily: "'Times New Roman', serif",
               letterSpacing: '0.2em',
               textShadow: '0 0 40px rgba(255,192,203,0.1)'
             }}>
          Binance Girls Group
        </div>
      </div>
      {/* Main Content */}
      <main className="container mx-auto px-4 relative">
        {/* Project Introduction */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-pink-800/50 rounded-2xl p-12 transform hover:scale-[1.02] transition-all duration-500">
            <h1 className="text-3xl font-light mb-6 tracking-[0.2em] bg-gradient-to-r from-pink-400 to-purple-200 bg-clip-text text-transparent">
              Binance Girls Group
            </h1>
            <p className="text-xl text-zinc-300 leading-relaxed tracking-wider mb-6">
              A DAO organization built on BSC, dedicated to AI agent development and applications.
            </p>
            <div className="text-lg text-pink-400/90 italic tracking-wide font-light mb-8">
              Building your ultimate AI girl group on BSC blockchain
            </div>

            <div className="flex items-center justify-center gap-4 bg-zinc-900/50 backdrop-blur-sm p-4 rounded-lg border border-pink-800/50">
              <div className="text-zinc-400 font-light">
                <span className="text-zinc-500">CA: </span>
                <span className="font-mono">{siteConfig.contract.ca}</span>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(siteConfig.contract.ca);
                }}
                className="px-4 py-2 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/30
                          rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy CA
              </button>
            </div>
          </div>
        </div>

        {/* OG Countdown Section */}
        <div className="text-center mb-8">
          <div className="text-2xl font-light tracking-wider text-pink-300 mb-4">OG Status Claim</div>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Hold 10,000 $BBG tokens to claim your OG status.
            Don't miss this exclusive opportunity to be part of our founding community.
          </p>
        </div>

        {/* Countdown Timer Component */}
        <CountdownTimer />

        {/* Wallet Submission Component */}
        <WalletSubmission />

        {/* Two Cards Section */}
        <div className="flex gap-24 max-w-7xl mx-auto mb-32">
          {/* Left Card */}
          <div className="flex-1 bg-zinc-900/50 backdrop-blur rounded-lg p-8 border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Sparkles className="w-12 h-12 text-pink-500" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Meet Your AI Girls.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Create and customize your own AI assistant from our talented pool of AI agents.
              Each with unique personalities and specialized skills to help you achieve your goals.
            </p>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Create Assistant
            </button>
          </div>

          {/* Right Card */}
          <div className="flex-1 bg-zinc-900/50 backdrop-blur rounded-lg p-8 border border-zinc-800 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2">
            <div className="mb-6">
              <Heart className="w-12 h-12 text-pink-400" />
            </div>
            <h2 className="text-4xl font-light mb-4 italic">Join Our Community.</h2>
            <p className="text-zinc-400 mb-8 text-lg leading-relaxed">
              Become part of our vibrant community where AI meets creativity.
              Shape the future of AI assistants and enjoy exclusive benefits.
            </p>
            <button className="border border-pink-600 hover:bg-pink-800 px-8 py-3 rounded-md transition-all duration-300 hover:scale-105">
              Join Now
            </button>
          </div>
        </div>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto pb-24">
          <h2 className="text-3xl font-light text-center mb-4 tracking-widest">Our Team</h2>
          <p className="text-zinc-400 text-center mb-12 tracking-wider">Meet the visionaries behind Binance Girls Group</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.team.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border border-pink-600 hover:bg-pink-800 px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 text-sm tracking-wider">
              View Full Team
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-zinc-600">
        <p className="text-sm">© 2025 Binance Girls Group. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;