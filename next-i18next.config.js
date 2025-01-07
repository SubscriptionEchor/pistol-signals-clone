
const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es', 'fr'], // Add your supported languages
    },
    localePath: path.resolve('./public/locales'), // Set your locale path
};