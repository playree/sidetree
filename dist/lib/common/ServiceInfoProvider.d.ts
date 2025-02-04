import ServiceVersionModel from './models/ServiceVersionModel';
/**
 * Encapsulates the functionality to get the information about the service such as
 * version info.
 */
export default class ServiceInfoProvider {
    private static readonly packageJson;
    private serviceName;
    constructor(serviceName: string);
    /**
     * Gets the service version from the package.json file.
     */
    getServiceVersion(): ServiceVersionModel;
}
