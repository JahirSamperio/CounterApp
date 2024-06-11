import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas del archivo 06-deses-obj', () => {
    test('Retornar el objeto correcto de usContext', () => {
        const clave = '123ASC';
        const edad = 45;

        const claveEdad = {
            clave,
            edad
        }

        const contexto = usContext (claveEdad);

        expect(contexto).toStrictEqual({
                nombreClave: clave,
                anios: edad,
                latlng: {
                    lat: 14.1232,
                    lng: -12.3232
                }
        })
    })
})