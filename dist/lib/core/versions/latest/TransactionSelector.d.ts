import ITransactionSelector from '../../interfaces/ITransactionSelector';
import ITransactionStore from '../../interfaces/ITransactionStore';
import TransactionModel from '../../../common/models/TransactionModel';
/**
 * rate limits how many operations is valid per block
 */
export default class TransactionSelector implements ITransactionSelector {
    private transactionStore;
    private maxNumberOfOperationsPerBlock;
    private maxNumberOfTransactionsPerBlock;
    constructor(transactionStore: ITransactionStore);
    private static getTransactionPriorityQueue;
    /**
     * Returns an array of transactions that should be processed. Ranked by highest fee paid per transaction and up to the
     * max number of operations per block
     * @param transactions The transactions that should be ranked and considered to process
     */
    selectQualifiedTransactions(transactions: TransactionModel[]): Promise<TransactionModel[]>;
    private static validateTransactions;
    private static enqueueFirstTransactionFromEachWriter;
    private getNumberOfOperationsAndTransactionsAlreadyInTransactionTime;
    /**
     * Given transactions within a block, return the ones that should be processed.
     */
    private static getHighestFeeTransactionsFromCurrentTransactionTime;
}
