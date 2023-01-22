import { test, expect, describe } from 'vitest'
import { getLocaledNameElements, random } from '../random.js'

test('getLocaledNameElements', async () => { 
	const result = await getLocaledNameElements()
	expect(result).toHaveProperty('adjectives')
	expect(result).toHaveProperty('nouns')
})

describe('random', () => {
	test('zh-Hans', async () => { 
		const result = await random()
		expect(result).toBeTypeOf('string')
		expect(result.length).toBeGreaterThan(0)
	})

	test('en', async () => { 
		const result = await random('en')
		expect(result).toBeTypeOf('string')
		expect(result.length).toBeGreaterThan(0)
	})
})