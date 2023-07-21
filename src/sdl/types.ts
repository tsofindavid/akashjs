
export type v2Manifest = v2Group[];

export type v3Manifest = v3Group[];

export type v3Group = {
    name: string,
    services: v3ManifestService[],
}

export type v2Group = {
    Name: string,
    Services: v2ManifestService[],
}

export type v2ManifestService = {
    Name: string,
    Image: string,
    Command: string[] | null,
    Args: string[] | null,
    Env: string[] | null,
    Resources: ResourceUnits,
    Count: number
    Expose: v2ServiceExpose[],
    params?: ServiceParams,
}

export type v3ManifestService = {
    name: string,
    image: string,
    command: string[] | null,
    args: string[] | null,
    env: string[] | null,
    resources: ResourceUnits,
    count: number
    expose: v3ServiceExpose[],
    params: ServiceParams | null,
}

export type v2ServiceExposeHttpOptions = {
    MaxBodySize: number,
    ReadTimeout: number,
    SendTimeout: number,
    NextTries: number,
    NextTimeout: number,
    NextCases: string[],
}

export type v3ServiceExposeHttpOptions = {
    maxBodySize: number,
    readTimeout: number,
    sendTimeout: number,
    nextTries: number,
    nextTimeout: number,
    nextCases: string[],
}

export type ResourceUnits = {

}

export type v2ServiceExpose = {
    Port: number,
    ExternalPort: number,
    Proto: string,
    Service: any,
    Global: boolean,
    Hosts: any,
    HTTPOptions: v2ServiceExposeHttpOptions,
    IP: string,
    EndpointSequenceNumber: number,
}

export type v3ServiceExpose = {
    port: number,
    externalPort: number,
    proto: string,
    service: any,
    global: boolean,
    hosts: any,
    httpOptions: v3ServiceExposeHttpOptions,
    ip: string,
    endpointSequenceNumber: number,
}

export type ServiceParams = {

}

export type v2Sdl = {
    services: Record<string, v2Service>,
    profiles: v2profiles,
    deployment: Record<string, v2Deployment>,
    endpoints: Record<string, v2Endpoint>,
}

export type v2Endpoint = {
    kind: string,
}

export type v2ExposeTo = {
    service?: string,
    global?: boolean,
    http_options: v2HTTPOptions,
    ip: string,
}

export type v2HTTPOptions = {
    max_body_size: number,
    read_timeout: number,
    send_timeout: number,
    next_tries: number,
    next_timeout: number,
    next_cases: string[],
}

export type v2Accept = {
    items?: string[],
}

export type v2Expose = {
    port: number,
    as: number,
    proto?: string,
    to?: v2ExposeTo[],
    accept: v2Accept,
    http_options: v2HTTPOptions,
}

export type v2Dependency = {
    service: string,
}

export type v2ServiceStorageParams = {
    mount: string,
    readOnly: boolean,
}

export type v2ServiceParams = {
    storage?: Record<string, v2ServiceStorageParams>,
}

export type v2Service = {
    image: string,
    command: string[] | null,
    args: string[] | null,
    env: string[] | null,
    expose: v2Expose[],
    dependencies?: v2Dependency[],
    params?: v2ServiceParams,
}

export type v2ServiceDeployment = {
    profile: string,
    count: number,
}

export type v2Deployment = Record<string, v2ServiceDeployment>

export type v2CPUAttributes = Attributes

export type v2ResourceCPU = {
    units: number | string,
    attributes?: v2CPUAttributes,
}

export type v2ResourceMemory = {
    size: string;
    attributes?: Attributes,
}

export type v3GPUAttributes = {
    vendor: {
        [vendor: string]: Array<{ model: string }>
    }
}

export type v3ResourceGPU = {
    units: number | string,
    attributes?: v3GPUAttributes,
}

export type v2StorageAttributes = Attributes;

export type v2ResourceStorage = {
    name: string,
    size: string,
    attributes: v2StorageAttributes,
}

export type v2ResourceStorageArray = v2ResourceStorage[];

export type v2ComputeResources = {
    cpu: v2ResourceCPU,
    memory: v2ResourceMemory,
    storage: v2ResourceStorageArray | v2ResourceStorage,
    gpu?: v3ResourceGPU,
}

export type v2ProfileCompute = {
    resources: v2ComputeResources,
}

export type v2PlacementAttributes = Attributes

export type v2Coin = {
    denom: string,
    value: number,
    amount: number,
}

export type v2PlacementPricing = Record<string, v2Coin>

export type SignedBy = {
    allOf: string[],
    anyOf: string[],
}

export type v2ProfilePlacement = {
    attributes: v2PlacementAttributes,
    signedBy: SignedBy,
    pricing: v2PlacementPricing,
}

export type v2profiles = {
    compute: Record<string, v2ProfileCompute>,
    placement: Record<string, v2ProfilePlacement>,
}

export type Attribute = {
    key: string,
    value: string,
}

export type Attributes = Attribute[];