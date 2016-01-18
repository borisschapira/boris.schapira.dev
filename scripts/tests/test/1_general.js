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
            var title = yield nightmare.title();
            expect(title).to.equal("Boris Schapira · Life is too short to be small");
        });
    });

    describe('Liens', function() {

        before(function() {
            nightmare = Nightmare(nm_config)
              .goto(baseUrl + '/');
        });

        after(function*() {
            yield nightmare.end();
        });

        it('il y a bien quatre liens dans la bare latérale', function*() {
            var title = yield nightmare
            .evaluate(function() {
                return $('a.sidebar-nav-item').length;
            });
            expect(title).to.equal(4);
        });

        it('le lien actif est bien le premier', function*() {
            var isFirst = yield nightmare
            .evaluate(function() {
                return $('a.sidebar-nav-item.active')[0].innerHTML === $('a.sidebar-nav-item')[0].innerHTML;
            });
            expect(isFirst).to.be.true;
        });

        it('le lien "Papa" est en troisième position et renvoie bien vers l\'url "/papa/"', function*() {
            var urlPapaLink = yield nightmare
            .evaluate(function() {
                var $link = $('a.sidebar-nav-item')[2];
                if ($link.innerHTML === "Papa") {
                    return $($link).attr('href');
                }
                return null;
            });
            expect(urlPapaLink).to.be.equal('/papa/');
        });
    });
});
