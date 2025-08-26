import React from 'react';
import { ArrowLeft, CheckCircle, Star, Users, Zap, Clock, TrendingUp, MessageCircle, Target, BarChart3, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HareInteract: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center group cursor-pointer">
              <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                <img src="/HareWare.png" alt="Logo" className="w-10 h-10 shadow-lg shadow-[#022162]/20" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-[#1952fe] transition-colors duration-300">
                HareWare
              </span>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#022162]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#1952fe]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#022162]/10 backdrop-blur-sm rounded-full border border-[#022162]/20 mb-6">
                <span className="text-sm text-[#022162] font-medium">HareInteract - SOLUÇÕES EM RESPOSTA POR IA PARA NEGÓCIOS</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              IA para o
 seu negócio.
 Modernize a 
sua empresa!
              </h1>
              
              <p className="text-xl text-gray-400 mb-8">
              Menos tarefas manuais. Mais crescimento. Invista em Inteligência Artificial.

              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#022162] hover:bg-[#1952fe] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#022162]/20"
                >
                  Começar Agora
                  <Zap className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#como-funciona" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-[#022162] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5"
                >
                  Como Funciona
                  <Target className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img src="/HareInteract.png" alt="HareInteract" className="w-64 h-64 object-contain" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#022162]/20 to-[#1952fe]/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafios do Varejo */}
      <section className="py-20 bg-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
              O novo normal
 empresarial, o mundo
 com a Inteligência Artificial              </h2>
              <p className="text-lg text-gray-400 mb-8">
              No ritmo acelerado do mercado atual, empresas precisam de 
inteligência, automação e dados para se manterem competitivas. 
 A IA empresarial transforma esforço em estratégia — e decisões em 
resultados
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <p className="text-sm text-gray-400 mb-2">Notícias pelo MUNDO</p>
                <p className="text-white font-medium">
                "Empresas que adotam IA aumentam em até 40% sua eficiência 
                operacional.
                </p>
                <p className="text-sm text-gray-500 mt-2">McKinsey & Company, 2025</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Processos manuais</h3>
                  <p className="text-gray-400">Operações manuais atrasam decisões, desgastam a 
                  equipe e impedem o crescimento sustentável.</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Falta de dados em tempo real</h3>
                  <p className="text-gray-400"> Empresas que operam no escuro tomam decisões 
                  baseadas em achismos — e isso custa caro</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Atendimento sem eficiência</h3>
                  <p className="text-gray-400">Tempo de resposta alto, mensagens repetidas e pouca 
                  personalização afastam clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
            Como funciona: 
Inteligência Artificial
 no seu negócio
            </h2>
            
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Diagnóstico</h3>
              <p className="text-gray-400">Entendemos os processos, gargalos e oportunidades.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementação</h3>
              <p className="text-gray-400">Configuramos fluxos automatizados, integração com sistema e atendimento inteligente</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Execução</h3>
              <p className="text-gray-400">A IA assume funções operacionais e gera resultados em tempo real.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Acompanhamento</h3>
              <p className="text-gray-400">Painel com dados, insights e relatórios atualizados constantemente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
              INVISTA EM IA
              </h2>
              <h3 className="text-3xl font-bold text-white mb-8">
              Resultados visíveis 
              para o seu negócio
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2"> Mais vendas com automações inteligentes
                    </h4>
                    
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Redução de tarefas repetitivas</h4>
                    
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Decisões guiadas por dados</h4>
                   
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2"> Atendimento com padrão e personalização
                    </h4>
                   
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2"> Tempo para focar no que realmente importa.

                    </h4>
                   
                  </div>
                </div>


              </div>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 bg-[#022162] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Pacotes e valores</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Essencial</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 450/Mês</div>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  500 conversas por mês | Agendamento 
inteligente | Painel de administração | 
Relatórios personalizados
                </li>
                
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  *Custo de instalação - R$199
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Avançado</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 650/Mês</div>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  1000 conversas por mês | Agendamento 
inteligente | Painel de administração | 
Relatórios personalizados | Ferramentas 
de marketing automatizado
                </li>
                
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  *Custo de instalação - R$199
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Profissional</h3>
              <div className="text-3xl font-bold text-white mb-6">R$ 1000/Mês</div>
              <ul className="space-y-4">
              1.500 conversas por mês | Todos os 
recursos do plano Avançado | Respostas 
automáticas para mensagens de áudio | 
Personalização de fluxos por perfil de 
cliente | Suporte prioritário
            <br></br>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                  *Custo de instalação - R$199
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-white/80">*Pay-As-You-Go - Disponível | Consulte nosso comercial.</p>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-[#0A0A0A] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#022162]/10 backdrop-blur-sm rounded-full border border-[#022162]/20 mb-6">
                <span className="text-sm text-[#022162] font-medium">PARA TODOS QUE VALORIZAM O SEU NEGÓCIO</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">Para Quem é o Sistema?</h2>
              
              <ul className="space-y-4">
                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                 Negócios locais
                </li>
                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                  Redes de varejo regionais;
                </li>
                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                  Franquias e negócios com várias unidades;
                </li>
                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                  Lojas físicas e e-commerce;
                </li>

                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                  Profissionais liberais e consultórios
                </li>

                <li className="flex items-center text-white text-lg">
                  <div className="w-2 h-2 bg-[#022162] rounded-full mr-4"></div>
                  Qualquer negócio que queira escalar a comunicação sem perder o controle.
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <span className="text-sm text-white font-medium">INVISTA NA MELHORIA DA COMUNICAÇÃO DO SEU NEGÓCIO</span>
              </div>
              <img src="/HareInteract.png" alt="HareInteract" className="w-48 h-48 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-black/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#022162]/10 backdrop-blur-sm rounded-full border border-[#022162]/20 mb-6">
                <span className="text-sm text-[#022162] font-medium">HAREWARE - SOLUÇÕES EM IA PARA NEGÓCIOS</span>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-8">Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Contato</p>
                    <p className="text-xl font-bold text-white">Enzo Giordano</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">WhatsApp</p>
                    <p className="text-xl font-bold text-white">+55 19 99758-1672</p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-[#022162] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-xl font-bold text-white">contato@hareware.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img src="/HareInteract.png" alt="HareInteract" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HareInteract;
