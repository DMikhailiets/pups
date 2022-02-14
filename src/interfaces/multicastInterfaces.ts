export interface MulticastResponse {
  cmd: string,
  path: string,
  pupMulticast: Multicast[]
}

export interface Multicast {
  devIdOrigin: number,
  ip: string,
  lastUpdate: string,
  mac: string,
  name: string,
  port: number,
  type: string
}
