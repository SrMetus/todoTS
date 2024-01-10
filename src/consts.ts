export const ALL_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
    [ALL_FILTERS.ALL]: {
        literal: 'All',
        href: `/?filter=${ALL_FILTERS.ALL}`
    },
    [ALL_FILTERS.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${ALL_FILTERS.ACTIVE}`
    },
    [ALL_FILTERS.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${ALL_FILTERS.COMPLETED}`
    }
} as const