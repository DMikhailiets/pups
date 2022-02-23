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

export interface telemetryItem {
  bitsDir: number,
  bitsIn: number,
  bitsOut: number,
  btnState: number,
  devId: number,
  devIdOrigin: number,
  ip: string,
  ledErrState: number,
  ledPwrState: number,
  port: number
  psuState: Array<{
    address: number,
    psuMode: number,
    psuStatus: number,
    value: number,
    wdtStatus: number
  }>
  pwrOutState: Array<{
    address: number,
    current: number,
    outPwrMode: number,
    outPwrStatus: number,
    voltage: number,
    wdtStatus: number
  }>
  tempSensor: Array< {
    address: number,
    tempSensorStatus: number,
    temperature: number
  }>
  voltageIn: number,
  voltagePsu: number,
  workTime: number
}

export interface PUPWithTelemetry extends PUP {
  telemetry: telemetryItem
}

export interface PUPsDataType extends PUPWithTelemetry {
  pupType?: PUPsType
}