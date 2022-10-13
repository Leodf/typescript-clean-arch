"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoutesModule = void 0;
var common_1 = require("@nestjs/common");
var routes_service_1 = require("./routes.service");
var routes_controller_1 = require("./routes.controller");
var route_in_memory_repository_1 = require("../../../../../src/@core/infra/db/route-in-memory.repository");
var create_route_use_case_1 = require("../../../../../src/@core/application/create-route.use-case");
var list_all_routes_use_case_1 = require("../../../../../src/@core/application/list-all-routes.use-case");
var RoutesModule = /** @class */ (function () {
    function RoutesModule() {
    }
    RoutesModule = __decorate([
        (0, common_1.Module)({
            controllers: [routes_controller_1.RoutesController],
            providers: [
                routes_service_1.RoutesService,
                {
                    provide: route_in_memory_repository_1.RouteInMemoryRepository,
                    useClass: route_in_memory_repository_1.RouteInMemoryRepository
                },
                {
                    provide: create_route_use_case_1.CreateRouteUseCase,
                    useFactory: function (routeRepo) {
                        return new create_route_use_case_1.CreateRouteUseCase(routeRepo);
                    },
                    inject: [route_in_memory_repository_1.RouteInMemoryRepository]
                },
                {
                    provide: list_all_routes_use_case_1.ListAllRoutesUseCase,
                    useFactory: function (routeRepo) {
                        return new list_all_routes_use_case_1.ListAllRoutesUseCase(routeRepo);
                    },
                    inject: [route_in_memory_repository_1.RouteInMemoryRepository]
                },
            ]
        })
    ], RoutesModule);
    return RoutesModule;
}());
exports.RoutesModule = RoutesModule;
