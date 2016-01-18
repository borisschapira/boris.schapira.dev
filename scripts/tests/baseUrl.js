/**
 * Module de calcul de l'URL de base
 * des tests
 */

function computeBaseUrl() {
    var baseUrl;

    switch (process.env.BASE_URL) {
        case 'prod':
            baseUrl = 'https://borisschapira.comme';
            break;
        default:
            baseUrl = 'http://localhost:4000';
    }

    console.log('Url de base : ' + baseUrl);
    return baseUrl;
}

module.exports = computeBaseUrl;
