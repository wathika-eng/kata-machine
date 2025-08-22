// list must be sorted before
export default function bs_list(haystack: number[], needle: number): boolean {
    // lowest index
    let low = 0;
    // last element
    let high = haystack.length - 1;
    // keep searching till end
    while (low <= high) {
        // get the midpoint as an int
        let mid = Math.floor(low + (high - low) / 2);
        // index at mid point
        let v = haystack[mid];
        // if mid == index we are looking for, return early
        if (needle === v) {
            return true;
        } else if (v < needle) {
            // if value at mid is less than needle, we shift and scan the half right
            low = mid + 1;
        } else {
            // else scan half left, shift end
            high = mid - 1;
        }
    }
    return false;
}
