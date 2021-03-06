/*
 * The MIT License
 *
 * Copyright 2017 Francisco Ballina<francisco@itsescarcega.edu.mx>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var express = require('express');
var router = express.Router();
var path = require('path');

var usuarios = require('./api/usuarios');
var productos = require('./api/productos');

router.get('/', function (req, res) {
    res.redirect(path.join(__dirname, 'public', 'index.html'));
});

router.get('/api/usuarios', usuarios.getAll);
router.get('/api/usuarios/:id', usuarios.get);
router.post('/api/usuarios', usuarios.create);
router.put('/api/usuarios', usuarios.edit);
router.delete('/api/usuarios/:id', usuarios.destroy);

router.get('/api/productos', productos.getAll);
router.get('/api/productos/:id', productos.get);
router.post('/api/productos', productos.create);
router.put('/api/productos', productos.edit);
router.delete('/api/productos/:id', productos.destroy);


module.exports = router;
