import { AuthenticationServiceBase, AuthenticationServiceMock, EventBusBase, EventBusMock, GraphQLServiceBase, GraphQLServiceMock, serviceContainer, ServiceTypes } from "web-modules-common";

serviceContainer.init([
    { service: EventBusMock, abstract: ServiceTypes.EventBusBase },
    { service: AuthenticationServiceMock, abstract: ServiceTypes.AuthenticationServiceBase },
    { service: GraphQLServiceMock, abstract: ServiceTypes.GraphQLServiceBase },
])
