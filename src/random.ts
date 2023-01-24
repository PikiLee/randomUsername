import { NameElements } from './types'

const languagues = new Set([
	'zh-Hans',
	'en'
])

const nameGenerators = new Map()

export async function getLocaledNameElements(language = 'zh-Hans') {
	if (!languagues.has(language)) {
		throw new Error(`Language ${language} is not supported.`)
	}

	return import(`../data/${language}.json`)
}

function createRandomGenerator<T>(elements: T[]) {
	const els = new Set(elements)
	return () => {
		const index = Math.floor(Math.random() * els.size)
		return [...els.values()][index]
	}
}

function CreateNameGenerator(localedNameElements: NameElements, language = 'zh-Hans') {
	const adjectiveGenerator = createRandomGenerator(localedNameElements.adjectives)
	const nounGenerator = createRandomGenerator(localedNameElements.nouns)
	if (language === 'en') {
		return () => {
			return `${adjectiveGenerator()} ${nounGenerator()}`
		}
	}

	return () => {
		return `${adjectiveGenerator()}的${nounGenerator()}`
	}
}

export async function random(language = 'zh-Hans') {
	if (nameGenerators.has(language)) {
		return nameGenerators.get(language)()
	} else {
		const localedNameElements = await getLocaledNameElements(language)
		const nameGenerator = CreateNameGenerator(localedNameElements, language)
		nameGenerators.set(language, nameGenerator)
		return nameGenerator()
	}
}