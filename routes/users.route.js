import { Router } from 'express';
import userCotroller from '../controller/usersdata.controller.js';

const useRoute = Router();

useRoute.get('/', userCotroller)

export default useRoute;