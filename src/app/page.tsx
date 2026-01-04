"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, ShieldCheck, Globe, Zap, ArrowRight, Bell } from 'lucide-react';

export default function SMGroupPremiumApp() {
  return (
    <div className="min-h-screen bg-sm-sky text-sm-slate font-sans selection:bg-sm-gold selection:text-white">
      {/* 고정 상단바 */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-white/20 z-[100] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-sm-navy p-2 rounded-lg shadow-lg">
              <div className="text-white font-black text-xl leading-none">SM</div>
            </div>
            <span className="text-xl font-black tracking-tight text-sm-navy uppercase">SM Group Portal</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-bold text-sm text-slate-500">
            <a href="#" className="hover:text-sm-navy transition-colors">계열사 현황</a>
            <a href="#" className="hover:text-sm-navy transition-colors">지속가능경영</a>
            <a href="#" className="hover:text-sm-navy transition-colors">IR 센터</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-sm-navy transition-colors"><Bell size={20}/></button>
            <button className="bg-sm-navy text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-xl transition-all active:scale-95">임직원 인증 로그인</button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* 히어로 섹션 */}
        <div className="relative overflow-hidden bg-sm-navy rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl mb-12">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05]">
                Innovation for <br/> <span className="text-sm-gold">Greater Future</span>
              </h1>
              <p className="text-blue-100/70 text-lg lg:text-xl max-w-xl mb-10 font-medium">
                SM그룹은 앞선 기술력과 도전 정신으로 <br/> 인류의 더 나은 내일을 만들어갑니다.
              </p>
              <button className="group bg-white text-sm-navy px-8 py-4 rounded-2xl font-black flex items-center gap-3 hover:bg-sm-gold hover:text-white transition-all">
                포털 시작하기 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          {/* 장식용 그래픽 요소 */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-sm-gold/20 rounded-full blur-[80px]" />
        </div>

        {/* 대시보드 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "계열사 통합 지표", value: "98.2%", icon: <Globe />, color: "bg-blue-500" },
            { label: "실시간 보안 상태", value: "Secure", icon: <ShieldCheck />, color: "bg-emerald-500" },
            { label: "현재 가동 프로젝트", value: "124 건", icon: <Zap />, color: "bg-amber-500" },
            { label: "스마트 워크 보드", value: "Active", icon: <LayoutDashboard />, color: "bg-indigo-500" }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
            >
              <div className={`w-12 h-12 ${card.color} text-white rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                {card.icon}
              </div>
              <p className="text-slate-400 text-sm font-bold mb-1">{card.label}</p>
              <p className="text-2xl font-black text-sm-navy">{card.value}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">© 2026 SM GROUP. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm font-bold text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-sm-navy">Security</a>
            <a href="#" className="hover:text-sm-navy">Privacy</a>
            <a href="#" className="hover:text-sm-navy">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
