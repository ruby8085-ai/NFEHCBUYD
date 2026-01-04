"use client";
import { motion } from "framer-motion";
import { Shield, BarChart3, Users, ArrowRight } from "lucide-react";

export default function SMGroupApp() {
  return (
    <div className="min-h-screen bg-sm-light font-sans text-slate-900">
      {/* GNB */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sm-navy rounded-lg flex items-center justify-center text-white font-bold text-xl">SM</div>
            <span className="text-xl font-black text-sm-navy tracking-tight">SM GROUP</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#" className="hover:text-sm-navy transition">그룹소개</a>
            <a href="#" className="hover:text-sm-navy transition">핵심사업</a>
            <a href="#" className="hover:text-sm-navy transition">지속가능경영</a>
          </div>
          <button className="bg-sm-navy text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 hover:scale-105 transition">
            Portals Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-sm rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">2026 Visionary Platform</span>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1]">
                미래를 향한 <br/><span className="text-sm-gold italic">혁신적 가치</span>의 중심
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed opacity-80">
                SM그룹의 디지털 전환을 이끄는 통합 비즈니스 플랫폼입니다. <br/>
                지능형 관리 시스템을 통해 스마트한 업무 환경을 경험하세요.
              </p>
              <div className="flex gap-4">
                <button className="bg-sm-gold text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-yellow-600 transition">
                  업무 시작하기 <ArrowRight size={20}/>
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: <Shield className="text-sm-gold"/>, title: "강력한 보안", desc: "그룹 전용 차세대 보안 프로토콜 적용" },
              { icon: <BarChart3 className="text-sm-navy"/>, title: "데이터 분석", desc: "실시간 계열사 지표 시각화 대시보드" },
              { icon: <Users className="text-sm-accent"/>, title: "협업 툴", desc: "임직원 간 매끄러운 커뮤니케이션 환경" }
            ].map((item, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
