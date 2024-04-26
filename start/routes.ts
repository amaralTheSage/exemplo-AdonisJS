/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/', [UsersController, 'index'])

router.get('/:id', [UsersController, 'show'])

router.post('/', [UsersController, 'store'])

router.patch('/:id', [UsersController, 'update'])

router.delete('/:id', [UsersController, 'destroy'])
