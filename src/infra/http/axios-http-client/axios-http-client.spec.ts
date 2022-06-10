import { AxiosHttpClient } from "./axios-http-client";
import axios from "axios";
import { faker } from '@faker-js/faker'
import { HttpPostParams } from "@/data/protocols/http";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const mockPostRequest = (): HttpPostParams<any> => (
    {
        url: faker.internet.url(), 
        body: {
            username: faker.internet.userName(),
            password: faker.internet.password()
        }
    }
)

describe('AxiosHttpClient', () => {
    test('Should call Axios with correct valuesf', async () => {
        const request = mockPostRequest();
        const sut = makeSut();
        await sut.post(request);

        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    });
});