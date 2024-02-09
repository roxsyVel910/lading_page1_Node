import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', { title: 'home' }));

router.get('/contact', (req, res) => res.render('contact', { title: 'contact' }));

router.get('/about', (req, res) => res.render('about', { title: 'about' }));

export default router