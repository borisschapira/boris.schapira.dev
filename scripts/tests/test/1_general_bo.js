var baseUrl = require('../baseUrl')();
var config = require('../configuration');
var credentials = config.credentials;
var nm_config = config.browser;

require('mocha-generators').install();
var expect = require('chai').expect;
var Nightmare = require('nightmare');
var $ = require('cheerio');
var nightmare;

describe('Page d\'accueil', function() {
    describe('Généralités', function() {

        before(function() {
            nightmare = Nightmare(nm_config)
              .goto(baseUrl + '/');
        });

        after(function*() {
            yield nightmare.end();
        });

        it('le titre est bon : "Boris Schapira · Life is too short to be small"', function*() {
            var title = yield nightmare
        .title();
            expect(title).to.equal("Boris Schapira · Life is too short to be small");
        });
    });
});
