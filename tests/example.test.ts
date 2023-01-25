import { test, expect, describe } from 'vitest'
import { getLocaledNameElements, random } from '../src/random.js'

test('getLocaledNameElements', () => { 
	const result = getLocaledNameElements()
	expect(result).toHaveProperty('adjectives')
	expect(result).toHaveProperty('nouns')
})

describe('random', () => {
	test('zh-Hans', () => { 
		const result = random()
		expect(result).toBeTypeOf('string')
		expect(result.length).toBeGreaterThan(0)
	})

	test('en', () => { 
		const result = random('en')
		expect(result).toBeTypeOf('string')
		expect(result.length).toBeGreaterThan(0)
	})
})