import { NameElements } from './types'

const languagues = new Set([
	'zh-Hans'
])

const generators = new Map()

export async function getLocaledNameElements(language = 'zh-Hans') {
	if (!languagues.has(language)) {
		throw new Error(`Language ${language} is not supported.`)
	}

	return import(`../data/${language}.json`)
}

function randomElement<T>(elements: T[]) {
	const els = new Set(elements)
	return () => {
		const index = Math.floor(Math.random() * els.size)
		return [...els.values()][index]
	}
}

function randomName(localedNameElements: NameElements, language = 'zh-Hans') {
	const randomAdjective = randomElement(localedNameElements.adjectives)
	const randomNouns = randomElement(localedNameElements.nouns)
	return () => {
		return `${randomAdjective()}的${randomNouns()}`
	}
}

export async function random(language = 'zh-Hans') {
	if (generators.has(language)) {
		return generators.get(language)()
	} else {
		const localedNameElements = await getLocaledNameElements(language)
		const random = randomName(localedNameElements)
		generators.set(language, random)
		return random()
	}
}