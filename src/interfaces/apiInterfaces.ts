import { PUP } from './pupsInterfaces'

export interface PUPsResponse {
    cmd: "responsePups",
    path: "/PupServer",
    pups: Array<PUP>
}