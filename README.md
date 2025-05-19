# Identificador de Bandeira de Cartão de Crédito

![Demonstração](/docs/demo.gif)

Uma aplicação web que identifica a bandeira de cartões de crédito (Visa, MasterCard, etc.) com base no número do cartão.

## Funcionalidades

- Identifica automaticamente a bandeira do cartão enquanto o usuário digita
- Valida o formato do número do cartão
- Exibe visualmente a bandeira identificada
- Animação 3D do cartão quando a bandeira é identificada
- Suporte para as principais bandeiras:
  - Visa
  - MasterCard
  - American Express (Amex)
  - Discover
  - Diners Club
  - JCB

## Como Usar

1. Acesse a página [Dio_Validador]([https://seu-usuario.github.io/credit-card-flag-identifier/](https://github.com/HerivaldoJr/Dio_Validador/blob/main/index.html))
2. Digite o número do cartão no campo indicado
3. A bandeira será identificada automaticamente
4. Clique em "Identificar Bandeira" para confirmar

## Tecnologias Utilizadas

- HTML5
- CSS3 (com animações e transformações 3D)
- JavaScript puro (sem bibliotecas externas)
- GitHub Pages (para hospedagem)

## Padrões de Validação

Cada bandeira tem um padrão específico nos primeiros dígitos (BIN - Bank Identification Number):

| Bandeira    | Padrão Inicial               | Comprimento |
|-------------|------------------------------|-------------|
| Visa        | 4                            | 13, 16      |
| MasterCard  | 51-55                        | 16          |
| Amex        | 34, 37                       | 15          |
| Discover    | 6011, 644-649, 65            | 16          |
| Diners      | 300-305, 36, 38-39           | 14          |
| JCB         | 3528-3589                    | 16          |

## Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/incrivel`)
3. Commit suas mudanças (`git commit -am 'Adiciona algo incrível'`)
4. Push para a branch (`git push origin feature/incrivel`)
5. Abra um Pull Request

## Licença

MIT
