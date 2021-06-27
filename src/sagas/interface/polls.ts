export interface options {
    id: string,
    label: string,
}

export interface pollApiResponse {
    id: string,
    title: string,
    publishedDate: string,
    answer: {
        type: 'Single' | 'Multi',
        options: options[]
    },
    voteInfo?: {
        [key: string]: string;
    }
}