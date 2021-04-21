# Blabladet

Blabladet er en en web-applikasjon som scraper [norges største nettaviser ](https://www.medienorge.uib.no/statistikk/medium/ikt/395) i real-time og lar brukeren gjette hvilke nettavisen som _eier_ artikkelen.

<img alt="Blabladet" src="showcase_blabladet.gif" width="600" height="400" />

## LIVE DEMO?

- Dessverre så er hobby-serveren til Heroku for treg og ustabil til å kjøre Puppeteer på en god måte. For den vågale: https://blabladet.herokuapp.com/

## Kjør Lokalt

```sh
$ git clone https://github.com/Ojself/blabladet2.git
$ npm install

# OR you can install manually the server and client packages
$ (cd server && npm install)
$ (cd client && npm install)


$ npm run dev:server
# Run the server on http://localhost:5000/

$ npm run dev:client
# Run the client on http://localhost:3000/
```

Utfordringer:

- Cookie popups blokkerer for screenshots
- Screenshot venter ikke på at img-tags loader
- Puppeteer på Heroku er for tregt på hobby-dynoer
