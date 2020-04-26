import isNode from '@bemoje/is-node';

const args = isNode() ? process.argv.slice(2) : [];

/**
 * Returns array of node-js commandline arguments
 * @returns {array<string>}
 */
function argv() {
	return args
}

export default argv;
