import isNode from '@bemoje/is-node'

const args = isNode() ? process.argv.slice(2) : []

/**
 * Returns array of node-js commandline arguments
 * @returns {array<string>}
 */
export default function argv() {
	return args
}
