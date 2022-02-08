export interface PUPsResponse {
  cmd: string,
  path: string,
  pups: PUP[]
}

export interface PUP {
  DevId: number,
  ip: string,
  port: number
}

export interface PUPsTypesResponse {
  cmd: string,
  path: string,
  pupTypes: PUPsType[]
}

export interface PUPsType {
  DevId: number,
  TemperatureSensors: Array<{
      SensorAddress: number,
      TempSensorName: string
  }>
  TerminalsPsu: Array<{
      TerminalAddress: number[]
      TerminalName: string}> 
  TerminalsPwrOut: Array<{
      TerminalAddress: number[],
      TerminalName: string
  }>
  Type: string,
  Version: number
}

export interface PUPsDataType extends PUP {
  pupType?: PUPsType
}