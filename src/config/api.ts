// Configuração das APIs para o formulário de contato
export const API_CONFIG = {
  // URL base da sua API
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  
  // Endpoints
  ENDPOINTS: {
    CONTACT: '/contact',
    SUBSCRIBE: '/subscribe'
  },
  
  // Headers padrão
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  
  // Timeout das requisições (em ms)
  TIMEOUT: 10000
};

// Função para enviar dados do formulário de contato
export const sendContactForm = async (formData: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT}`, {
      method: 'POST',
      headers: API_CONFIG.DEFAULT_HEADERS,
      body: JSON.stringify(formData),
      signal: AbortSignal.timeout(API_CONFIG.TIMEOUT)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
};

// Função para validar email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar telefone (formato brasileiro)
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
  return phoneRegex.test(phone);
};
