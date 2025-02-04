import FetchResult from '../common/models/FetchResult';
import ICas from './interfaces/ICas';
/**
 * A download manager class that performs multiple downloads at the same time.
 */
export default class DownloadManager {
    maxConcurrentDownloads: number;
    private cas;
    private pendingDownloads;
    private activeDownloads;
    private completedDownloads;
    /**
     * Constructs the download manager.
     * @param cas The Content Addressable Store to use for fetching the actual content.
     */
    constructor(maxConcurrentDownloads: number, cas: ICas);
    /**
     * Starts pending downloads if maximum concurrent download count is not reached,
     * and resolve downloads that are completed, then invokes this same method again,
     * thus this method must only be invoked once externally as initialization.
     */
    start(): void;
    /**
     * Downloads the content of the given content hash.
     * @param contentHash Hash of the content to be downloaded.
     */
    download(contentHash: string, maxSizeInBytes: number): Promise<FetchResult>;
    /**
     * The internal download method that gets called by the main download manager monitoring loop when download lanes are available to download content.
     * NOTE: This method MUST NEVER throw (more accurately: ALWAYS set downloadInfo.completed = true),
     * else it will LEAK the available download lanes and in turn hang the Observer.
     * @param downloadInfo Data structure containing `completed` flag and `fetchResult`,
     *                     used to signal to the main download manager monitoring loop when the requested download is completed.
     */
    private downloadAsync;
}
