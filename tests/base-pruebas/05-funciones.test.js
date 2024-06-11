import {getUser, getUsuarioActivo} from '../../src/base-pruebas/05-funciones';

describe('Pruebas 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(testUser);
    })
    test('getUsuarioActivo debe retornar un objeto con nombre', () => {

        const nombre = 'Jahir';

        const userActivo = getUsuarioActivo(nombre);

        expect(userActivo).toStrictEqual({
            uid: 'ABC567',
            username: nombre
        });

    })
})