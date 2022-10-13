import { Route } from '../../../domain/route.entity'
import { DataSource } from 'typeorm'
import { RouteSchema } from './route.schema'

describe('RouteSchema Test', () => {
    test('create', async () => {
        const dataSource = new DataSource({
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            logging: false,
            entities: [RouteSchema],
        })
        await dataSource.initialize()
        const route = Route.create({
            title: 'minha rota',
            startPosition: { lat: 1, lgn: 2 },
            endPosition: { lat: 3, lgn: 4 },
            points: [{ lat: 5, lgn: 6 }],
        })
        const routeRepo = dataSource.getRepository(Route)
        await routeRepo.save(route)
        console.log(await routeRepo.findOneBy({ id: route.id }))
    })
})
