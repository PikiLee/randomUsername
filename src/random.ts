import { Language, NameElements } from './types'
import data from './data'

const languagues = new Set<Language>([
	'zh-Hans',
	'en'
])

const separators = new Map<Language, string>([
	['zh-Hans', '的'],
	['en', ' ']
])

const nameGenerators = new Map()

export function getLocaledNameElements(language: Language = 'zh-Hans') {
	if (!languagues.has(language)) {
		throw new Error(`Language ${language} is not supported.`)
	}

	return data[language]
}

function createRandomGenerator<T>(elements: T[]) {
	const els = new Set(elements)
	return () => {
		const index = Math.floor(Math.random() * els.size)
		return [...els.values()][index]
	}
}

function CreateNameGenerator(localedNameElements: NameElements, language: Language = 'zh-Hans') {
	const adjectiveGenerator = createRandomGenerator(localedNameElements.adjectives)
	const nounGenerator = createRandomGenerator(localedNameElements.nouns)
	if (language === 'en') {
		return () => {
			return `${adjectiveGenerator()} ${nounGenerator()}`
		}
	}

	return () => {
		return `${adjectiveGenerator()}${separators.get(language)}${nounGenerator()}`
	}
}

export function random(language: Language = 'zh-Hans') {
	if (nameGenerators.has(language)) {
		return nameGenerators.get(language)()
	} else {
		const localedNameElements = getLocaledNameElements(language)
		const nameGenerator = CreateNameGenerator(localedNameElements, language)
		nameGenerators.set(language, nameGenerator)
		return nameGenerator()
	}
}