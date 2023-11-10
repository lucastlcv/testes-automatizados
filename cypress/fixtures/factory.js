import { faker } from '@faker-js/faker'

class TestFactory {
    static generateRandomEmail() {
        return faker.internet.email();
    }
    static gerarRandomNomeFantasia() {
        return faker.commerce.productName()
    }
    static gerarRandomNome() {
        return faker.person.fullName()
    }
    static gerarRandomPrimeiroNome() {
        return faker.person.firstName()
    }
    static gerarRandomSobreNome() {
        return faker.person.lastName()
    }
    static gerarRandomAniversario() {
        return faker.date.birthdate()
    }
}
export default TestFactory;