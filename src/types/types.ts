export interface Habit {
    id: string
    title: string
    frequency: 'daily' | 'weekly'
    completedDates: string[]
    createdAt: string
}