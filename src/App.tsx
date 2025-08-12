import React, { useState } from 'react';
import { Menu, X, ArrowRight, Package, Zap, Users, Mail, Phone, MapPin, Send, ChevronRight, Star, Shield, Cpu, CheckCircle, AlertCircle, Instagram } from 'lucide-react';
// import { sendContactForm } from './config/api'; // Descomente quando tiver um backend

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulando envio para um servidor (remova quando tiver backend)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // DESCOMENTE ESTAS LINHAS QUANDO TIVER UM BACKEND REAL:
      // const result = await sendContactForm(formData);
      // if (!result.success) {
      //   throw new Error(result.error);
      // }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setErrors({});

      // Reset do status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro ao enviar formulário:', error);

      // Reset do status após 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Header */}
      <header className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              {/*logo */}
              <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                <img src="/public/hareWare.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
              </div>

              {/* Letreiro */}
              <img
                src="/public/letreiro.png"
                alt="Letreiro"
                className="h-10 max-w-[150px] object-contain" // ajuste a altura como quiser
              />


            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#produtos" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
                Nossos Produtos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#022162] to-[#3B8388] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#demanda" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
                Produtos Sob Demanda
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#022162] to-[#3B8388] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contato" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#022162] to-[#3B8388] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a href="#contato" className="bg-gradient-to-r from-[#022162] to-[#3B8388] text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#022162]/25 transition-all duration-300 hover:scale-105 font-medium">
                Fale Conosco
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {
          isMenuOpen && (
            <div className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-top duration-300">
              <div className="px-4 py-6 space-y-4">
                <a href="#produtos" className="block text-gray-400 hover:text-white transition-colors">Nossos Produtos</a>
                <a href="#demanda" className="block text-gray-400 hover:text-white transition-colors">Produtos Sob Demanda</a>
                <a href="#contato" className="block text-gray-400 hover:text-white transition-colors">Contato</a>
                <a href="#contato" className="block bg-gradient-to-r from-[#022162] to-[#3B8388] text-white px-6 py-3 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  Fale Conosco
                </a>
              </div>
            </div>
          )
        }
      </header >

      {/* Hero Section */}
      < section className="relative bg-[#0A0A0A] text-white py-20 lg:py-32 overflow-hidden" >
        {/* Animated Background */}
        < div className="absolute inset-0" >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#022162]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B8388]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#022162]/10 to-[#3B8388]/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
              <Star className="w-4 h-4 text-[#3B8388] mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm text-gray-300">Inovação com AI</span>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-1000">
              HareWare
              <br />
              <span className="bg-gradient-to-r from-[#3B8388] to-[#082125] bg-clip-text text-transparent">Acelere sua Empresa</span>
              <br />
              <span className="bg-gradient-to-r from-[#3B8388] to-[#082125] bg-clip-text text-transparent">com poder da IA </span>

            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Oferecemos soluções tecnológicas que trabalham em conjunto da Inteligência Artificial personalizados para otimizar os processos do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              <a href="#produtos" className="group bg-white text-[#022162] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                Conheça Nossos Produtos
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#contato" className="group border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </section >

      {/* Nossos Produtos */}
      < section id="produtos" className="py-20 bg-[#0A0A0A] relative" >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#022162]/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#022162]/10 backdrop-blur-sm rounded-full border border-[#022162]/20 mb-6">
              <span className="text-sm text-[#3B8388] font-medium">PRODUTOS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nossos Produtos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conheça as soluções que a HareWare desenvolveu para transformar o seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Produto 1 */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#3B8388]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#022162]/20 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#022162] to-[#3B8388] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#022162]/20">
                <img src="/dist/HareInteract.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B8388] transition-colors duration-300">HareInteract</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Inteligência Artificial integrada ao WhatsApp para automatizar diversas funções, desde funil de vendas até o papel de uma secretária virtual.
              </p>
              <a href="#contato" className="text-[#3B8388] font-semibold hover:text-white transition-colors duration-300 flex items-center group/link">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Produto 2 */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#3B8388]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#082125]/20 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#082125] to-[#3B8388] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#082125]/20">
                <img src="/dist/HareBlast.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B8388] transition-colors duration-300">HareBlast</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Sistema de disparo de promoções no WhatsApp com IA que gera textos de copy e imagens promocionais para suas campanhas.
              </p>
              <a href="#contato" className="text-[#3B8388] font-semibold hover:text-white transition-colors duration-300 flex items-center group/link">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Produto 3 */}
            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#3B8388]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B8388]/20 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B8388] to-[#022162] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#3B8388]/20">
                <img src="/dist/HareWare.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B8388] transition-colors duration-300">HareTable</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Sistema de Gestão de restaurantes, otimizando o fluxo de pedidos, mesas e atendimento.
              </p>
              <a href="#contato" className="text-[#3B8388] font-semibold hover:text-white transition-colors duration-300 flex items-center group/link">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#3B8388]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B8388]/20 cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B8388] to-[#022162] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#3B8388]/20">
                <img src="/dist/HareWare.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B8388] transition-colors duration-300">HareInsight</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                Consultoria estratégica para empresas que desejam otimizar seus processos e utilizar a tecnologia de IA a seu favor.
              </p>
              <a href="#contato" className="text-[#3B8388] font-semibold hover:text-white transition-colors duration-300 flex items-center group/link">
                Saiba mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section >




      {/* Produtos Sob Demanda */}
      < section id="demanda" className="py-20 bg-[#0A0A0A] relative overflow-hidden" >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#3B8388]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#022162]/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#3B8388]/10 backdrop-blur-sm rounded-full border border-[#3B8388]/20 mb-6">
                <span className="text-sm text-[#3B8388] font-medium">SOB DEMANDA</span>
              </div>
              <h2 className="text-4xl lg:text-4xl font-bold text-white mb-6">Desenvolvimento Sob Demanda</h2>
              <p className="text-xl text-gray-400 mb-8">
                Sua empresa tem uma necessidade específica? Nossa equipe de especialistas pode criar uma solução tecnológica personalizada, desde landing pages até sistemas completos.


              </p>

              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#3B8388] to-[#082125] rounded-full flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3B8388] transition-colors duration-300">Análise de Requisitos</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Estudamos profundamente suas necessidades para criar a solução ideal</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#3B8388] to-[#082125] rounded-full flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3B8388] transition-colors duration-300">Prototipagem Rápida</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Desenvolvemos protótipos funcionais para validação antes da produção</p>
                  </div>
                </div>

                <div className="flex items-start group cursor-pointer">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#3B8388] to-[#082125] rounded-full flex items-center justify-center mt-1 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3B8388] transition-colors duration-300">Produção Escalável</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Do protótipo à produção em massa, acompanhamos todo o processo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#022162] to-[#3B8388] p-8 rounded-2xl text-white border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-500 shadow-2xl shadow-[#022162]/20">
                <h3 className="text-2xl font-bold mb-8">Processo de Desenvolvimento</h3>
                <div className="space-y-4">
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Consulta Inicial</span>
                  </div>
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Análise Técnica</span>
                  </div>
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Desenvolvimento</span>
                  </div>
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Testes e Validação</span>
                  </div>
                  <div className="flex items-center group cursor-pointer">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">Entrega Final</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </section >




      {/* Formulário de Contato */}
      < section id="contato" className="py-20 bg-[#0A0A0A] relative" >
        <div className="absolute inset-0 bg-gradient-to-t from-[#022162]/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#022162]/10 backdrop-blur-sm rounded-full border border-[#022162]/20 mb-6">
              <span className="text-sm text-[#3B8388] font-medium">CONTATO</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Entre em Contato</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Fale com nossa equipe e descubra como a HareWare pode otimizar os processos da sua empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Fale Conosco</h3>

              <div className="space-y-6">
                <div className="flex items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#022162] to-[#3B8388] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#022162]/20">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#3B8388] transition-colors duration-300">Email</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">contato@hareware.com.br</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5519999344528?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#082125] to-[#3B8388] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#082125]/20">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[#3B8388] transition-colors duration-300">
                        WhatsApp
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        +55 (19) 99934-4528
                      </p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/hareware.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#082125] to-[#3B8388] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#082125]/20">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[#3B8388] transition-colors duration-300">
                        Instagram
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        @hareware.ai
                      </p>
                    </div>
                  </a>
                </div>


                <div className="flex items-center group cursor-pointer">
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-[#3B8388] transition-colors duration-300">
                      Localização
                    </h4>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      R. Lourenço Dias, 640 - Centro, Araras - SP, 13601-180 | Sala 06
                    </p>

                    <a
                      href="https://www.google.com/maps/place/R.+Louren%C3%A7o+Dias,+640+-+Centro,+Araras+-+SP,+13601-180/@-22.358807,-47.3914549,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8773da2e3fb59:0xc6ee16c1f9d2d64b!8m2!3d-22.358812!4d-47.38888!16s%2Fg%2F11svq_whym?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 underline"
                    >

                    </a>

                    {/* Mapa logo abaixo */}
                    <div className="mt-2 rounded-lg overflow-hidden">
                      <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.555128211768!2d-47.3914549!3d-22.358807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8773da2e3fb59%3A0xc6ee16c1f9d2d64b!2sR.%20Louren%C3%A7o%20Dias%2C%20640%20-%20Centro%2C%20Araras%20-%20SP%2C%2013601-180!5e0!3m2!1spt-BR!2sbr!4v1691520000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#3B8388]/30 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#3B8388] transition-all duration-300 resize-none ${errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-[#3B8388] hover:border-white/40'
                      }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#3B8388] transition-all duration-300 resize-none ${errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-[#3B8388] hover:border-white/40'
                      }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#3B8388] focus:border-[#3B8388] transition-all duration-300 hover:border-white/40 resize-none"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-[#3B8388] transition-all duration-300 resize-none ${errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/20 focus:border-[#3B8388] hover:border-white/40'
                      }`}
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group ${isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#022162] to-[#3B8388] hover:shadow-lg hover:shadow-[#022162]/25 hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-center mt-4 p-4 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-center mt-4 p-4 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-red-400" />
                    Ocorreu um erro ao enviar a mensagem. Tente novamente.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-[#0A0A0A] border-t border-white/10 text-white py-12" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br [#022162] to-[#3B8388] rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#022162]/20">
                  <img src="/dist/HareWare.png" alt="Logo" className="w-10 h-10 rounded-xl shadow-lg shadow-[#022162]/20" />
                </div>

                {/* Letreiro */}
                <img
                  src="/dist/letreiro.png"
                  alt="Letreiro"
                  className="h-10 max-w-[150px] object-contain" // ajuste a altura como quiser
                />
              </div>
              <p className="text-gray-400 mb-4 hover:text-gray-300 transition-colors duration-300">
                Nossa missão é otimizar os processos da sua empresa de modo que a roda gire mais rápido do que a velocidade de uma lebre. Combinamos tecnologia de ponta com um profundo entendimento de negócios para entregar soluções que realmente geram resultados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Produtos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#produtos" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">HareInteract</a></li>
                <li><a href="#produtos" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">HareBlast</a></li>
                <li><a href="#produtos" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">HareTable</a></li>
                <li><a href="#produtos" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">HareInsight</a></li>



              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#demanda" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">Produtos Sob Demanda</a></li>
                <li><a href="#contato" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">Contato</a></li>
                <li><a href="#" className="hover:text-[#3B8388] transition-colors duration-300 hover:translate-x-1 inline-block">Sobre Nós</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-white/10 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Hareware Soluções tecnológicas - Araras/SP. Todos os direitos reservados.
            </p>

          </div>
        </div>
      </footer >
    </div>
  );
}

export default App;