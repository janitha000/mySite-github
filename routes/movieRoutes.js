const express = require('express')
const router = express.Router();
const { checkJwt } = require('../middleware/auth0Middleware');
const jwtAuthz = require('express-jwt-authz')



const movieController = require('../controllers/movieController')

router.get('/', (req, res, next) => {
    movieController.geMovieList(req, res, next)
})

router.get('/:id', checkJwt, (req, res, next) => {
    movieController.getMovieById(req, res, next)
})

router.get('/updates', (req, res, next) => {
    movieController.getMovieUpdates(req, res, next)
})

router.get('/movie/poster', (req, res, next) => {
    movieController.getMoviePoster(req, res, next)
})

router.post('/keyPhrases/:id', (req, res, next) => {
    movieController.getMovieKeyPhrases(req, res, next)
})

router.get('/:id/omdb/:name', (req, res, next) => {
    movieController.getOMDBMovieByName(req, res, next)
})

module.exports = router;

