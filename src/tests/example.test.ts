import { test, expect } from 'vitest'
import { getLocaledNameElements, random } from '../random.js'

test('getLocaledNameElements', async () => { 
	const result = await getLocaledNameElements()
	expect(result).toHaveProperty('adjectives')
	expect(result).toHaveProperty('nouns')
})

test('random', async () => { 
	const result = await random()
	expect(result).toBeTypeOf('string')
	expect(result.length).toBeGreaterThan(0)
})