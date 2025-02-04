/**
 * Class containing methods that operates against an array.
 */
export default class ArrayMethods {
    /**
     * Checks to see if there are duplicates in the given array.
     */
    static hasDuplicates<T>(array: Array<T>): boolean;
    /**
     * Checks that entries in array 2 is not in array 1.
     */
    static areMutuallyExclusive<T>(array1: Array<T>, array2: Array<T>): boolean;
}
