import { faker } from "@faker-js/faker";
import { AuthenticationParams } from "../useCases";
import { AccountModel } from "../models";


export const mockAuthentication = () : AuthenticationParams => (
    {
        email: faker.internet.email(),
        password: faker.internet.password()
    }
)

export const mockAccountModel = (): AccountModel => ({
    accessToken: faker.datatype.uuid(),
});