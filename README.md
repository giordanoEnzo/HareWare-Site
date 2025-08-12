# HareWare - Formulário de Contato

## Funcionalidades do Formulário

## Como Usar

1. **Teste Local**: O formulário funciona perfeitamente em modo de desenvolvimento
2. **Integração com Backend**: Quando tiver um servidor, descomente as linhas marcadas no código

## Integração com Backend

### 1. Descomente a importação da API
```typescript
// Em src/App.tsx, linha 2
import { sendContactForm } from './config/api';
```

### 2. Descomente o código de envio real
```typescript
// Em src/App.tsx, função handleSubmit
const result = await sendContactForm(formData);
if (!result.success) {
  throw new Error(result.error);
}
```

### 3. Configure sua API
Edite o arquivo `src/config/api.ts`:
```typescript
export const API_CONFIG = {
  BASE_URL: 'https://sua-api.com/api', // Sua URL real
  // ... outras configurações
};
```

### 4. Estrutura da API Esperada

Seu backend deve aceitar requisições POST para `/contact` com:

**Request Body:**
```json
{
  "name": "Nome do Cliente",
  "email": "cliente@email.com",
  "company": "Nome da Empresa",
  "message": "Mensagem do cliente"
}
```

**Response de Sucesso:**
```json
{
  "success": true,
  "message": "Mensagem recebida com sucesso"
}
```

**Response de Erro:**
```json
{
  "success": false,
  "error": "Descrição do erro"
}
```

## Estrutura de Arquivos

```
src/
├── App.tsx              # Componente principal com formulário
├── config/
│   └── api.ts          # Configuração e funções de API
└── ...
```

## Personalização

### Cores
As cores principais estão definidas no Tailwind:
- Azul: `#022162`
- Verde-azulado: `#3B8388`
- Fundo escuro: `#0A0A0A`

### Validação
Para adicionar mais validações, edite a função `validateForm()` em `App.tsx`.

