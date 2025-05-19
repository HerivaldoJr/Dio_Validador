// Testes para o identificador de bandeira de cartão
const assert = require('assert');
const { identifyCardFlag } = require('../src/js/card-validator');

describe('Identificador de Bandeira de Cartão', function() {
    it('Deve identificar Visa corretamente', function() {
        assert.equal(identifyCardFlag('4111111111111111'), 'visa');
        assert.equal(identifyCardFlag('4012888888881881'), 'visa');
    });
    
    it('Deve identificar MasterCard corretamente', function() {
        assert.equal(identifyCardFlag('5555555555554444'), 'mastercard');
        assert.equal(identifyCardFlag('5105105105105100'), 'mastercard');
    });
    
    it('Deve identificar American Express corretamente', function() {
        assert.equal(identifyCardFlag('378282246310005'), 'amex');
        assert.equal(identifyCardFlag('371449635398431'), 'amex');
    });
    
    it('Deve identificar Discover corretamente', function() {
        assert.equal(identifyCardFlag('6011111111111117'), 'discover');
        assert.equal(identifyCardFlag('6011000990139424'), 'discover');
    });
    
    it('Deve identificar Diners Club corretamente', function() {
        assert.equal(identifyCardFlag('30569309025904'), 'diners');
        assert.equal(identifyCardFlag('38520000023237'), 'diners');
    });
    
    it('Deve identificar JCB corretamente', function() {
        assert.equal(identifyCardFlag('3530111333300000'), 'jcb');
        assert.equal(identifyCardFlag('3566002020360505'), 'jcb');
    });
    
    it('Deve retornar null para números desconhecidos', function() {
        assert.equal(identifyCardFlag('1234567890123456'), null);
    });
});