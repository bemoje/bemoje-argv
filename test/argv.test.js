import argv from '../src/argv'

describe('argv', () => {
	test('works', () => {
		expect(typeof argv).toBe('function')
	})
})
