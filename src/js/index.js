document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    const validateBtn = document.getElementById('validateBtn');
    const resultDiv = document.getElementById('result');
    const cardPreview = document.getElementById('cardPreview');
    const cardFlag = document.getElementById('cardFlag');
    
    // Mapeamento de bandeiras e seus padrões
    const cardFlags = {
        visa: {
            pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
            length: [13, 16],
            cvvLength: 3
        },
        mastercard: {
            pattern: /^5[1-5][0-9]{14}$/,
            length: 16,
            cvvLength: 3
        },
        amex: {
            pattern: /^3[47][0-9]{13}$/,
            length: 15,
            cvvLength: 4
        },
        discover: {
            pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            length: 16,
            cvvLength: 3
        },
        diners: {
            pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            length: 14,
            cvvLength: 3
        },
        jcb: {
            pattern: /^(?:2131|1800|35\d{3})\d{11}$/,
            length: [15, 16],
            cvvLength: 3
        }
    };
    
    // Formatador do número do cartão
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formatted = value.replace(/(\d{4})/g, '$1 ').trim();
        e.target.value = formatted;
        
        // Atualiza o preview do cartão
        document.querySelector('.card-number').textContent = formatted || '#### #### #### ####';
    });
    
    // Validador
    validateBtn.addEventListener('click', function() {
        const cardNumber = cardNumberInput.value.replace(/\s+/g, '');
        
        if (!cardNumber) {
            showResult('Por favor, digite o número do cartão.', 'error');
            return;
        }
        
        if (!/^[0-9]{13,16}$/.test(cardNumber)) {
            showResult('Número de cartão inválido. Deve conter entre 13 e 16 dígitos.', 'error');
            return;
        }
        
        const flag = identifyCardFlag(cardNumber);
        
        if (flag) {
            showResult(`Bandeira identificada: ${flag.toUpperCase()}`, 'success');
            cardFlag.className = 'card-flag ' + flag;
            cardPreview.style.transform = 'rotateY(180deg)';
            setTimeout(() => {
                cardPreview.style.transform = 'rotateY(0deg)';
            }, 1000);
        } else {
            showResult('Bandeira não identificada. Verifique o número do cartão.', 'warning');
            cardFlag.className = 'card-flag';
        }
    });
    
    // Função para identificar a bandeira
    function identifyCardFlag(cardNumber) {
        for (const flag in cardFlags) {
            if (cardFlags[flag].pattern.test(cardNumber)) {
                return flag;
            }
        }
        return null;
    }
    
    // Função para mostrar resultados
    function showResult(message, type) {
        resultDiv.textContent = message;
        resultDiv.className = 'result ' + type;
    }
    
    // Validação em tempo real
    cardNumberInput.addEventListener('keyup', function() {
        const cardNumber = this.value.replace(/\s+/g, '');
        if (cardNumber.length >= 6) { // Primeiros 6 dígitos são suficientes para identificar
            const flag = identifyCardFlag(cardNumber);
            if (flag) {
                cardFlag.className = 'card-flag ' + flag;
            } else {
                cardFlag.className = 'card-flag';
            }
        } else {
            cardFlag.className = 'card-flag';
        }
    });
});