import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Fernando', () => {
        const nombre = 'Jahir';
        const message = getSaludo(nombre);

        expect(message).toBe(`Hola ${nombre}`);
    })
})