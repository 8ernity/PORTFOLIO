"use client";

import React, { useState } from 'react';
import { Github, Instagram, Linkedin, Loader2, Check, ChevronRight } from "lucide-react";

type Platform = 'linkedin' | 'instagram' | 'github';
type ConnectionStatus = 'disconnected' | 'connecting' | 'connected';

export const SocialConnectButtons = () => {
  const [connectionStatus, setConnectionStatus] = useState<Record<Platform, ConnectionStatus>>({
    linkedin: 'disconnected',
    instagram: 'disconnected',
    github: 'disconnected'
  });

  const handleConnect = (platform: Platform) => {
    if (connectionStatus[platform] !== 'disconnected') return;
    
    setConnectionStatus(prev => ({...prev, [platform]: 'connecting'}));
    
    // Simulate connection process
    setTimeout(() => {
      setConnectionStatus(prev => ({...prev, [platform]: 'connected'}));
      
      // Redirect after a brief moment of showing "Connected!"
      setTimeout(() => {
        const links: Record<Platform, string> = {
          linkedin: "https://in.linkedin.com/in/arpan-biswas-9a327b322",
          instagram: "https://www.instagram.com/the_8ernity",
          github: "https://github.com/8ernity"
        };
        window.open(links[platform], '_blank', 'noopener,noreferrer');
        
        setTimeout(() => {
            setConnectionStatus(prev => ({...prev, [platform]: 'disconnected'}));
        }, 1000);
      }, 800);
    }, 1200);
  };

  const getButtonClass = (platform: Platform) => {
    const baseClass = "group relative p-4 rounded-2xl backdrop-blur-xl border-2 shadow-2xl hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out overflow-hidden w-full ";
    
    const statusClass = connectionStatus[platform] === 'connected' 
      ? 'bg-gradient-to-br from-[#0a1a0f] to-[#040e07] border-green-500/60 hover:border-green-400/60 cursor-default ' 
      : connectionStatus[platform] === 'connecting' 
        ? 'opacity-80 cursor-wait ' 
        : '';
    
    const platformClass = {
      linkedin: 'bg-gradient-to-br from-[#06142a] via-[#030a16] to-black border-blue-500/30 hover:border-blue-400/60 hover:shadow-blue-500/20 ',
      instagram: 'bg-gradient-to-br from-[#2a0618] via-[#16030c] to-black border-pink-500/30 hover:border-pink-400/60 hover:shadow-pink-500/20 ',
      github: 'bg-gradient-to-br from-[#0a1a0f] via-[#040e07] to-black border-green-500/30 hover:border-green-400/60 hover:shadow-green-500/20 '
    }[platform];
    
    return baseClass + (statusClass || platformClass);
  };

  const getStatusText = (platform: Platform) => {
    if (connectionStatus[platform] === 'connecting') return 'Connecting...';
    if (connectionStatus[platform] === 'connected') return 'Connected!';
    return `Join ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
  };

  const getSubText = (platform: Platform) => {
    if (connectionStatus[platform] === 'connecting') return 'Please wait a moment';
    if (connectionStatus[platform] === 'connected') return 'Redirecting now...';
    return 'Join our community';
  };

  const getIconColor = (platform: Platform) => {
    if (connectionStatus[platform] === 'connected') return 'text-green-400 group-hover:text-green-300';
    return {
      linkedin: 'text-blue-400 group-hover:text-blue-300',
      instagram: 'text-pink-400 group-hover:text-pink-300',
      github: 'text-green-400 group-hover:text-green-300'
    }[platform];
  };

  const getIconBg = (platform: Platform) => {
    if (connectionStatus[platform] === 'connected') return 'from-green-500/30 to-green-600/10 group-hover:from-green-400/40 group-hover:to-green-500/20';
    return {
      linkedin: 'from-blue-500/30 to-blue-600/10 group-hover:from-blue-400/40 group-hover:to-blue-500/20',
      instagram: 'from-pink-500/30 to-pink-600/10 group-hover:from-pink-400/40 group-hover:to-pink-500/20',
      github: 'from-green-500/30 to-green-600/10 group-hover:from-green-400/40 group-hover:to-green-500/20'
    }[platform];
  };

  const getTextColor = (platform: Platform) => {
    if (connectionStatus[platform] === 'connected') return 'text-green-400 group-hover:text-green-300';
    return {
      linkedin: 'text-blue-400 group-hover:text-blue-300',
      instagram: 'text-pink-400 group-hover:text-pink-300',
      github: 'text-green-400 group-hover:text-green-300'
    }[platform];
  };

  const getSubTextColor = (platform: Platform) => {
    if (connectionStatus[platform] === 'connected') return 'text-green-300/60 group-hover:text-green-200/80';
    return {
      linkedin: 'text-blue-300/60 group-hover:text-blue-200/80',
      instagram: 'text-pink-300/60 group-hover:text-pink-200/80',
      github: 'text-green-300/60 group-hover:text-green-200/80'
    }[platform];
  };

  const renderIcon = (platform: Platform) => {
    const className = `w-7 h-7 transition-all duration-300 group-hover:scale-110 drop-shadow-lg ${getIconColor(platform)}`;
    switch(platform) {
      case 'linkedin': return <Linkedin className={className} />;
      case 'instagram': return <Instagram className={className} />;
      case 'github': return <Github className={className} />;
    }
  };

  return (
    <div className="w-full relative z-20 font-sans pb-16 pt-8 px-4 sm:px-8">
      
      <div className="text-center mb-10">
        <h2 className="font-bold text-[40px] font-serif">
          <span className="text-white">Connect </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            With Me
          </span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto justify-center">
        
        {(['linkedin', 'instagram', 'github'] as Platform[]).map((platform) => (
          <div key={platform} className="flex-1 max-w-sm mx-auto w-full">
            <button
              onClick={() => handleConnect(platform)}
              disabled={connectionStatus[platform] !== 'disconnected'}
              className={getButtonClass(platform)}
            >
              {/* Hover sweep effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out`} />
              
              <div className="relative z-10 flex items-center gap-4">
                {/* Icon container */}
                <div className={`p-3 rounded-lg bg-gradient-to-br backdrop-blur-sm transition-all duration-300 ${getIconBg(platform)}`}>
                  {connectionStatus[platform] === 'connecting' ? (
                    <div className="w-7 h-7 flex items-center justify-center">
                      <Loader2 className={`w-6 h-6 animate-spin ${getIconColor(platform)}`} />
                    </div>
                  ) : connectionStatus[platform] === 'connected' ? (
                    <Check className={`w-7 h-7 transition-all duration-300 group-hover:scale-110 drop-shadow-lg ${getIconColor(platform)}`} />
                  ) : (
                    renderIcon(platform)
                  )}
                </div>
                
                {/* Text content */}
                <div className="flex-1 text-left">
                  <p className={`font-bold text-lg transition-colors duration-300 drop-shadow-sm ${getTextColor(platform)}`}>
                    {getStatusText(platform)}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${getSubTextColor(platform)}`}>
                    {getSubText(platform)}
                  </p>
                </div>
                
                {/* Right Arrow */}
                <div className={`transition-all duration-300 ${
                  connectionStatus[platform] !== 'disconnected' ? 'opacity-0' : 'opacity-40 group-hover:opacity-100 group-hover:translate-x-1'
                }`}>
                  <ChevronRight className={`w-5 h-5 ${connectionStatus[platform] === 'connected' ? 'text-green-400' : getIconColor(platform)}`} />
                </div>
              </div>
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
};
