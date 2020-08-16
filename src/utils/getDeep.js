/**
 * Get deep value from object
 *
 * @param {object} obj Object
 * @param {string} path path to object ket
 * @returns {string}
 */
export default function getDeep(obj, path) {
	return path.split('.').reduce((a, v) => a[v], obj);
}
