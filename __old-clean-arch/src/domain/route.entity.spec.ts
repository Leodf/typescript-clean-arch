import { LatLng, Route, RouteProps } from "./route.entity"

describe('Route Tests', () => {
    test('constructor', () => {
        let routeProps: RouteProps = {
            title: 'minha rota teste',
            startPosition: { lat: 0, lgn: 1},
            endPosition: { lat: 2, lgn: 3},
        }
        let route = new Route(routeProps)
        expect(route.props).toStrictEqual({
            ...routeProps, 
            points: []
        })

        routeProps = {
            title: 'minha rota teste',
            startPosition: { lat: 0, lgn: 1},
            endPosition: { lat: 2, lgn: 3},
            points: [
                { lat: 10, lgn: 11},
            ]
        }

        route = new Route(routeProps)
        expect(route.id).toBeDefined()
        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                { lat: 10, lgn: 11}
            ]
        })
    })
    test('updateTitle method', () => {
        let routeProps: RouteProps = {
            title: 'minha rota teste',
            startPosition: { lat: 0, lgn: 1},
            endPosition: { lat: 2, lgn: 3},
        }
        let route = new Route(routeProps)
        route.updateTitle('title updated')
        expect(route.title).toBe('title updated')
    })
    test('updatePosition method', () => {
        let routeProps: RouteProps = {
            title: 'minha rota teste',
            startPosition: { lat: 0, lgn: 1},
            endPosition: { lat: 2, lgn: 3},
        }
        let route = new Route(routeProps)
        const startPosition: LatLng = {lat: 10, lgn: 20}
        const endPosition: LatLng = {lat: 30, lgn: 40}
        route.updatePosition(startPosition, endPosition)
        expect(route.startPosition).toBe(startPosition)
        expect(route.endPosition).toBe(endPosition)
    })
    test('updatePoints method', () => {
        let routeProps: RouteProps = {
            title: 'minha rota teste',
            startPosition: { lat: 0, lgn: 1},
            endPosition: { lat: 2, lgn: 3},
        }
        let route = new Route(routeProps)
        const points: LatLng[] = [
            {lat: 10, lgn: 20},
            {lat: 30, lgn: 40}
        ]
        route.updatePoints(points)
        expect(route.points).toHaveLength(2)
        expect(route.points).toStrictEqual(points)
    })

})