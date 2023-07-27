export interface StateApi {
    data: string | null | object | []
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null | object 
}