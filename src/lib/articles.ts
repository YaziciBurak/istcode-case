'use server'

import fs from 'fs/promises'
import path from 'path'
import { Article } from '@/types/article'

export async function getArticles(): Promise<Article[]> {
    const filePath = path.join(process.cwd(), 'public/data/dummy.json')
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
}