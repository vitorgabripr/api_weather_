import { Router } from 'express';
import weatherRoutes from './src/routes'; // Importa rotas de previsão do tempo

const router = Router();

// Usar as rotas de previsão do tempo
router.use('/weather', weatherRoutes);

// Outras rotas específicas podem ser adicionadas aqui
router.get('/', (req, res) => {
    res.json({ message: 'Bem-vindo à API principal!' });
});

export default router;